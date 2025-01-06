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
        <h1 class="appointment-content__title small">STOCKISTS</h1>
        <div
          class="stockists-list"
          v-html="page.acf.stockists"
        >
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
      const page = await $http.$post(`/api/page/stockist`)
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
.stockists-list{
  margin-top: 25px;
}
</style>
