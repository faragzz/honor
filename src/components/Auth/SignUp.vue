<template>
  <div class="signup-form" :style="formStyle">
    <div style="margin-top: 51px; margin-bottom: 51px; margin-left: 40px; margin-right: 40px">
      <p style="display: flex; justify-content: center; font-size: 18px; margin-bottom: 48px">
        Sign Up
      </p>
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="form-group">
          <label class="txtColor" for="email">Email Address</label>
          <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
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
          <label class="txtColor" for="dob">Date of Birth (optional)</label>
          <input type="date" id="dob" v-model="dob" required />
          <p class="txtColor" style="margin-top: -16px">
            By registering, your account will be subject to Terms & Conditions and Privacy policy
          </p>
        </div>

        <!-- Submit Button -->
        <button type="submit" style="font-size: 12px; height: 48px; margin-top: 2px">
          SIGN UP
        </button>
      </form>

      <!-- Error Message -->
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

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
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: '',
      errorMessage: '',
      showPassword: false,
      eyeOpen,
      eyeClose,
      isMobile: false, // Variable to track screen size
    }
  },
  computed: {
    // Dynamically bind styles based on the screen size
    formStyle() {
      return {
        width: this.isMobile ? '500px' : '614px', // Set width based on isMobile
        height: this.isMobile ? 'auto' : '910px', // Adjust height if needed
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword // Toggle password visibility
    },
    handleSubmit() {
      // Reset error message
      this.errorMessage = ''

      // Basic validation
      if (!this.firstName || !this.lastName || !this.email || !this.password || !this.dob) {
        this.errorMessage = 'Please fill in all fields'
        return
      }

      // Simulate a signup process
      console.log('Signing up with:', {
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        dob: this.dob,
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
  margin: 0 auto;
  border-radius: 5px;
  background-color: #000;
  padding: 20px;

  .txtColor {
    color: #e6e6e6;
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
      color: white;
      background-color: black;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
      height: 48px;
    }
    select {
      width: 100%;
      padding: 8px;
      color: white;
      background-color: black;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  .password-container {
    position: relative;

    input {
      padding-right: 40px;
    }

    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-70%);
      cursor: pointer;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 17px;
    cursor: pointer;
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
