<template>
  <div class="reset-password-form" :style="formStyle">
    <div class="form-container">
      <div class="header">
        <p class="title">Set New Password</p>
        <p class="subtitle">Must be at least 8 characters</p>
      </div>

      <form @submit.prevent="handlePasswordReset">
        <div class="form-group">
          <label for="password" class="txtColor">Password</label>
          <input
            :type="showPassword ? 'text':'password'"
            id="password"
            v-model="password"
            required
            placeholder="Enter new password"
          />
          <span
            class="toggle-password"
            @click="togglePasswordVisibility"
            style="text-align: center"
          >
            <img
              :src="showPassword ? eyeOpen : eyeClose"
              alt="Toggle Password"
              width="24"
              height="24"
            />
          </span>
        </div>

        <div class="form-group">
          <label for="confirmPassword" class="txtColor">Confirm Password</label>
          <input
            :type="showConfirmPassword ? 'text':'password'"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Confirm new password"
          />
          <span
            class="toggle-password"
            @click="toggleConfirmPasswordVisibility"
            style="text-align: center"
          >
            <img
              :src="showConfirmPassword ? eyeOpen : eyeClose"
              alt="Toggle Password"
              width="24"
              height="24"
            />
          </span>
        </div>

        <button type="submit" class="reset-btn" style="margin-top: 16px">CONFIRM</button>
      </form>

      <p class="back-to-login">
        Back to <span @click="goBackToLogin" class="login-link">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
import eyeOpen from '@/assets/icons/eye-open.svg'
import eyeClose from '@/assets/icons/eye-close.svg'

export default {
  name: 'ResetPassword',
  data() {
    return {
      password: '',
      confirmPassword: '',
      isMobile: false,
      eyeOpen,
      eyeClose,
      showPassword: false,
      showConfirmPassword: false,
    }
  },
  computed: {
    formStyle() {
      return {
        width: this.isMobile ? '450px' : '614px',
        height: this.isMobile ? 'auto' : '610px',
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    handlePasswordReset() {
      if (this.password === this.confirmPassword) {
        console.log('Password reset successfully!')
        this.$router.push('/')
      } else {
        console.error('Passwords do not match')
        alert('Passwords do not match')
      }
    },
    goBackToLogin() {
      this.$router.push('/auth')
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768
    },
  },
  mounted() {
    this.updateScreenSize()
    window.addEventListener('resize', this.updateScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize)
  },
}
</script>

<style scoped lang="scss">
.reset-password-form {
  border-radius: 5px;
  background-color: white;
  font-family: 'Calson', 'sans-serif';
  padding-bottom: 96px;

  .form-container {
    margin: 96px 40px;
    text-align: center;
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-32%) translateX(-40px);
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;

    .title {
      font-size: 18px;
      color: var(--dark-text-color);
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 12px;
      color: var(--dark-text-color);
    }
  }

  .form-group {
    margin-bottom: 16px;
    position: relative;

    label {
      font-size: 13px;
      color: var(--dark-text-color);
      display: block;
      margin-bottom: 16px;
      text-align: start;
    }

    input {
      width: 100%;
      height: 48px;
      padding: 8px;
      color: var(--dark-text-color);
      background-color: white;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  .reset-btn {
    width: 100%;
    padding: 10px;
    background-color: var(--dark-text-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    height: 48px;
    cursor: pointer;
    margin-bottom: 32px;
  }

  .back-to-login {
    font-size: 13px;
    color: var(--dark-text-color);

    .login-link {
      text-decoration: underline;
      margin-left: 4px;
      cursor: pointer;
      color: var(--dark-text-color);
    }
  }

  input::placeholder {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
