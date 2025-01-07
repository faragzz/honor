<template>
  <div class="login-form" :style="formStyle">
    <div style="margin-bottom: 96px; margin-left: 40px; margin-right: 40px;">
      <p style="display: flex; justify-content: center; font-size: 18px; margin-bottom: 48px">Login</p>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="txtColor" for="email" style="font-size: 14px; line-height: 16px">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="*****@gmail.com"
            style="margin-bottom: 32px;"
          />
        </div>
        <div class="form-group">
          <label class="txtColor" for="password" style="font-size: 14px;line-height: 16px;height: 16px">Password</label>
          <div class="password-container" >
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
              placeholder="Enter your password"
            />
            <span class="toggle-password" @click="togglePasswordVisibility" style="text-align: center">
              <img :src="showPassword ? eyeOpen : eyeClose" alt="Toggle Password" width="24" height="24" />
            </span>
          </div>
        </div>
        <p style="display: flex; justify-content: end; align-content: center; font-size: 14px; margin-bottom: 21px; margin-top:23px; cursor: pointer;  color: #CCC" @click="gotoOtp">Forget your Password!</p>
        <button type="submit" style="font-size: 12px; height: 48px">LOGIN</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <p class="txtColor" style="display: flex; justify-content: center; padding-top: 32px; font-size: 13px">Don't have an account?
        <span style="padding-left: 4px; text-decoration: underline; cursor: pointer; " @click="switchToSignUp">Sign up</span>
      </p>
    </div>
  </div>
</template>

<script>
import eyeOpen from "../../assets/icons/eye-open.svg"
import eyeClose from "../../assets/icons/eye-close.svg"

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      showPassword: false,
      eyeOpen,
      eyeClose,
      isMobile: false, // Variable to track screen size
    };
  },
  computed: {
    // Dynamically bind styles based on the screen size
    formStyle() {
      return {
        width: this.isMobile ? '450px' : '614px', // Set width based on isMobile
        height: this.isMobile ? 'auto' : '634px', // Adjust height if needed
      };
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      // Reset error message
      this.errorMessage = '';

      // Basic validation
      if (!this.email || !this.password) {
        this.errorMessage = 'Please fill in all fields';
        return;
      }

      // Simulate a login process
      console.log('Logging in with:', { email: this.email, password: this.password });
    },
    switchToSignUp() {
      this.$emit('switch-to'); // Emit an event to switch to sign-up
    },
    gotoOtp(){
      this.$router.push('/otp');
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Update the mobile flag
    }
  },
  mounted() {
    // Initialize the screen size on component mount
    this.updateScreenSize();

    // Add event listener to watch screen size changes
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.updateScreenSize);
  }
};
</script>

<style scoped lang="scss">
.login-form {
  margin-top: 30px;
  border-radius: 5px;
  background-color: #000;
  h2 {
    text-align: center;
  }
  .txtColor {
    color: #E6E6E6;
  }

  .form-group {
    label {
      display: block;
      margin-bottom: 16px;
    }

    input {
      width: 100%;
      padding: 8px;
      color: white;
      background-color: black;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
      height: 48px;
    }
  }

  .password-container {
    position: relative;


    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
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
