<template>
  <div class="signup-form" :style="formStyle">
    <div style="margin: 51px 40px;">
      <p style="display: flex; justify-content: center; font-size: 18px; margin-bottom: 48px;color:#0D0D0D">
        RESGISTER
      </p>
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="form-group">
          <label class="txtColor" for="email">Email Address</label>
          <input type="email" id="email" v-model="email" required placeholder="*****@gmail.com" />
        </div>

        <!-- Password Input -->
        <div class="form-group">
          <label class="txtColor" for="password">Password</label>
          <div class="password-container">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
              placeholder="Enter your password"
            />
            <span class="toggle-password" @click="togglePasswordVisibility">
              <img
                :src="showPassword ? eyeOpen : eyeClose"
                alt="Toggle Password"
                width="24"
                height="24"
              />
            </span>
          </div>
          <label v-show="showPasswordError" style="transform: translateY(-15px)">Your password must be 8 characters or more and contain both an uppercase letter and a number</label>
        </div>

        <!-- Name Inputs -->

        <div class="form-group">
          <label style="margin-bottom: 16px" class="txtColor" for="password">First Name</label>
          <div class="form-group" style="flex: 1">
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              required
              placeholder="Enter your first name"
              style="margin-bottom: 12px; height: 46px; width: 100%"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="txtColor" for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            required
            placeholder="Enter your last name"
            style="margin-bottom: 32px"
          />
        </div>

        <!-- Date of Birth -->
        <div class="form-group">
          <label class="txtColor" for="date">Date of Birth (optional)</label>
          <input type="date" id="date" v-model="date" required />
          <p class="txtColor" style="margin-top: -16px">
            By registering, your account will be subject to Terms & Conditions and Privacy policy
          </p>
        </div>

        <!-- Submit Button -->
        <button type="submit" >
          SIGN UP
        </button>
      </form>


      <!-- Toggle to Login -->
      <p
        class="txtColor"
        style="
          display: flex;
          justify-content: center;
          padding-top: 32px;
          margin-bottom: 51px;
          font-size: 13px;
        "
      >
        Already have an account?
        <span
          style="padding-left: 4px; text-decoration: underline; cursor: pointer"
          class="txtColor"
          @click="switchToLogin"
          >Sign In</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import eyeOpen from '../../assets/icons/eye-open.svg'
import eyeClose from '../../assets/icons/eye-close.svg'

export default {
  name: 'Signup',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      date: '',
      showPassword: false,
      eyeOpen,
      eyeClose,
      isMobile: false, // Variable to track screen size
      showPasswordError: false,
    }
  },
  computed: {
    // Dynamically bind styles based on the screen size
    formStyle() {
      return {
        width: this.isMobile ? '500px' : '614px', // Set width based on isMobile
        height: this.isMobile ? 'auto' : '1000px', // Adjust height if needed
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword // Toggle password visibility
    },
    handleSubmit() {
      // Reset error message

      // Basic validation
      if (!this.firstName || !this.lastName || !this.email || !this.password || !this.date) {
        return
      }
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(this.password)) {
        this.showPasswordError=true;
        return;
      }
      else this.showPasswordError=false;

      // Simulate a signup process
      console.log('Signing up with:', {
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        date: this.date,
      })
    },
    switchToLogin() {
      this.$emit('switch-to') // Emit an event to switch to login
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768 // Update the mobile flag
    },
  },
  mounted() {
    // Initialize the screen size on component mount
    this.updateScreenSize()

    // Add event listener to watch screen size changes
    window.addEventListener('resize', this.updateScreenSize)
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.updateScreenSize)
  },
}
</script>

<style scoped lang="scss">
.signup-form {
  margin-top: 30px;
  border-radius: 5px;
  background-color: white;
  padding-bottom: 84px;
  font-family: 'Calson', 'sans-serif';
  font-size: 13px;
  display: flex;
  justify-content: center;
  .txtColor {
    color: black;
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 16px;
      font-size: 13px;
    }

    input {
      margin-bottom: 32px;
      width: 100%;
      padding: 8px;
      color: #0D0D0D;
      background-color: white;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
      height: 48px;
    }
    select {
      width: 100%;
      padding: 8px;
      color: #0D0D0D;
      background-color: white;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  .password-container {
    position: relative;
    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-70%);
      cursor: pointer;
    }
  }

  button {
    width: 104%;
    height: 48px;
    padding: 10px;
    margin-top: 2px;
    background-color: #0D0D0D;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    font-family: 'Calson', 'sans-serif';
  }

  .error {
    color: red;
    margin-top: 10px;
    text-align: center;
  }

  input::placeholder {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
