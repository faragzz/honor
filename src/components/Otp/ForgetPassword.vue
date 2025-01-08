<template>
  <div class="forgot-password-form" :style="formStyle">
    <div class="form-container">
      <div class="header">
        <p class="title">Forgot Password</p>
        <p class="subtitle">No worries, we’ll send you reset instructions</p>
      </div>

      <form @submit.prevent="handleReset">
        <div class="form-group">
          <label class="txtColor" for="email">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="*****@gmail.com"
          />
        </div>
        <button type="submit" class="reset-btn">RESET PASSWORD</button>
      </form>

      <p class="back-to-login">
        Back to <span @click="goBackToLogin" class="login-link">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      isMobile: false,
    };
  },
  computed: {
    formStyle() {
      return {
        width: this.isMobile ? '450px' : '614px',
        height: this.isMobile ? 'auto' : '514px',
      };
    }
  },
  methods: {
    handleReset() {
      localStorage.setItem('userEmail', this.email);
      this.$router.push('/otp/code');
    },
    goBackToLogin() {
      this.$router.push('/auth');
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  }
};
</script>

<style scoped lang="scss">
.forgot-password-form {
  border-radius: 5px;
  background-color: white;
  padding-bottom: 96px;

  .form-container {
    margin: 96px 40px;
    text-align: center;
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
    margin-bottom: 40px;

    label {
      font-size: 13px;
      color: var(--dark-text-color);
      display: block;
      margin-bottom: 16px;
      text-align:start;
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
    background-color: var(--dark-text-color);;
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
    color: var(--dark-text-color);;

    .login-link {
      text-decoration: underline;
      margin-left: 4px;
      cursor: pointer;
      color: var(--dark-text-color);;
    }
  }
  input::placeholder {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
