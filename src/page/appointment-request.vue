<template>
  <section class="appointment">
    <div :class="['container row', { 'is-inner': $device.isMobile }]">
      <div class="appointment-poster col-md-6">
        <img
          v-inview:class="['in-view']"
          class="x o-cover"
          :src="page.acf.featured_image.url"
          alt=""
          data-up
        />
      </div>
      <div
        v-inview:class="['in-view']"
        class="appointment-content col-md-6"
        data-up
      >
        <h1 class="appointment-content__title small">Appointment Request</h1>
        <p class="medium">
          At the heart of HONOR is an unwavering commitment to the use of
          extraordinary fabrics, intricate detailing and exquisite
          craftsmanship.<br /><br />
          We invite you to schedule your private appointment at our atelier
          located in New York City’s SoHo district located at 270 Lafayette St
          Suite 1102, New York, NY 10012.
        </p>
        <div v-if="success" class="appointment-success">
          <p class="medium">
            Your message has been sent. <br />
            We will get back to you as soon as possible. <br />
            Thank you.
          </p>
        </div>
        <div v-if="!success" class="appointment-form">
          <div class="row">
            <div class="appointment-form__col f fc">
              <label for="first_name">
                <p class="ttu tiny">First Name*</p>
              </label>
              <input ref="first_name" type="text" @click="clearError" />
            </div>
            <div class="appointment-form__col f fc">
              <label for="last_name">
                <p class="ttu tiny">Last Name*</p>
              </label>
              <input ref="last_name" type="text" @click="clearError" />
            </div>
          </div>
          <div class="row">
            <div class="appointment-form__col f fc">
              <label for="email">
                <p class="ttu tiny">Email*</p>
              </label>
              <input ref="email" type="email" @click="clearError" />
            </div>
            <div class="appointment-form__col f fc">
              <label for="telephone">
                <p class="ttu tiny">Telephone</p>
              </label>
              <input ref="telephone" type="text" />
            </div>
          </div>
          <div class="row">
            <div class="appointment-form__col f fc vdp-datepicker">
              <label for="date_of_event">
                <p class="ttu tiny">Date of Wedding or Event</p>
              </label>
              <date-picker
                ref="date_of_event"
                :disabled-dates="disableDates"
              ></date-picker>
            </div>
            <div class="appointment-form__col f fc">
              <label for="zip_code">
                <p class="ttu tiny">Zip Code</p>
              </label>
              <input ref="zipcode" type="text" />
            </div>
          </div>
          <div class="row">
            <div class="appointment-form__full x f fc">
              <label for="contact_method">
                <p class="ttu tiny">How do you prefer to be contacted?*</p>
              </label>
              <select ref="contact_method" name="contact_method">
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="appointment-form__full x f fc">
              <label for="message">
                <p class="ttu tiny">Message</p>
              </label>
              <textarea ref="message" type="text" rows="10" />
            </div>
          </div>
          <div
            v-if="
              firstNameError || lastNameError || emailError || emailValidError
            "
            class="appointment-errors"
          >
            <p v-if="firstNameError">First Name Missing</p>
            <p v-if="lastNameError">Last Name Missing</p>
            <p v-if="emailError">Email Missing</p>
            <p v-if="emailValidError">
              Email is not valid, please enter a valid email
            </p>
          </div>
          <div class="">
            <input type="checkbox" id="inquiries" ref="inquiries" value="Bike">
            <label for="inquiries"> For all other inquiries, including press and sample requests, check here.</label>
          </div>
          <br/>
          <button @click="validateForm">
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import index from './index.vue'
export default {
  components: { index },
  async asyncData({ $http, params }) {
    try {
      const page = await $http.$post(`/api/page/appointment-request`)
      return {
        page,
      }
    } catch (e) {
      console.log('e is', e)
    }
  },
  data() {
    return {
      disableDates: {
        to: new Date(),
      },
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      emailValidError: false,
      success: false,
    }
  },
  head() {
    return {
      title: `HONOR | By Appointment`,
    }
  },
  methods: {
    customFormatter() {
      return new Date(2016, 9, 16)
    },
    validateForm() {
      if (!this.$refs.first_name.value) {
        this.firstNameError = true
      }

      if (!this.$refs.last_name.value) {
        this.lastNameError = true
      }

      if (!this.$refs.email.value) {
        this.emailError = true
      }

      if (this.$refs.email.value) {
        const valid = this.validateEmail(this.$refs.email.value)
        if (!valid) {
          this.emailValidError = true
        }
      }

      if (
        !this.firstNameError &&
        !this.lastNameError &&
        !this.emailError &&
        !this.emailValidError
      ) {
        this.submitForm()
      }
    },
    async submitForm() {
      const firstName = this.$refs.first_name.value
      const lastName = this.$refs.last_name.value
      const email = this.$refs.email.value
      const telephone = this.$refs.telephone.value
      const zipCode = this.$refs.zipcode.value
      const contactMethod =
        this.$refs.contact_method.options[
          this.$refs.contact_method.selectedIndex
        ].value
      const message = this.$refs.message.value
      const inquiries = this.$refs.inquiries.value

      let dateOfEvent = ''

      if (this.$refs.date_of_event.selectedDate) {
        const date = new Date(this.$refs.date_of_event.selectedDate)
        const formatted = date.toISOString().slice(0, 10)
        // eslint-disable-next-line no-unused-vars
        dateOfEvent = formatted
      }

      const page = await this.$http.$post(
        `/api/email?first_name=${firstName}&last_name=${lastName}&email=${email}&telephone=${telephone}&date_of_event=${dateOfEvent}&zip_code=${zipCode}&contact_method=${contactMethod}&message=${message}&inquiries=${inquiries}`
      )

      console.log('Email response is ---', page)

      if (page) {
        this.success = true
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    clearError() {
      this.firstNameError = false
      this.lastNameError = false
      this.emailError = false
      this.emailValidError = false
    },
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.appointment {
  padding-top: var(--c-padding-top);
  padding-bottom: 5%;

  &-content {
    &__title {
      padding-bottom: 2.5%;
    }
  }

  &-poster {
    padding-right: 4%;
    @include media('<desktop') {
      display: none;
    }

    img {
      position: sticky;
      top: 130px;
      height: 100vh;
      object-position: 50% 0%;
    }
  }

  &-form {
    padding-top: 9.5%;

    .row {
      padding-bottom: 20px;
      justify-content: space-between;
      @include media('<desktop') {
        padding-bottom: 0;
      }
    }

    &__col {
      width: 48%;
      @include media('<desktop') {
        width: 100%;
        padding-bottom: 20px;
      }
    }

    &__full {
      @include media('<desktop') {
        padding-bottom: 20px;
      }
    }

    label {
      padding-bottom: 10px;
      letter-spacing: 1.2px;
    }

    input,
    textarea,
    select,
    button {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.267);
      padding: 10px;
      border-radius: 0;
      -webkit-appearance: none;
      transition: all 0.5s ease-out;
      color: var(--c-white);
      font-size: 16px;

      &:focus {
        outline: 0;
        border: 1px solid white;
      }
    }
    input[type="checkbox"]:checked::after {
      content: '✓';
      position: absolute;
      left: 0;
      right: 0;
      top: 4px;
      }
    input[type="checkbox"] {
    position: relative;
    text-align: center;
    vertical-align: middle;
    margin: 0;
    }

    button {
      width: 100%;
      background: var(--c-white);
      color: var(--c-black);
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background: #c1c1c1;
      }
      margin-top: 15px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 60px #fafafa inset !important;
      background-color: #fafafa !important;
      background-clip: content-box !important;
    }
  }

  &-success {
    padding-top: 50px;
    font-size: 17px;
  }

  &-errors {
    color: #ff8080;
    padding-bottom: 10px;
    p {
      padding-bottom: 5px;
    }
  }
}
</style>
