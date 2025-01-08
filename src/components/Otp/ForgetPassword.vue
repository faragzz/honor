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
  margin: 0 auto;
  border-radius: 5px;
  background-color: #000;

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
      color: #E6E6E6;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 12px;
      color: #E6E6E6;
    }
  }

  .form-group {
    margin-bottom: 40px;

    label {
      font-size: 13px;
      color: #E6E6E6;
      display: block;
      margin-bottom: 16px;
      text-align:start;
    }

    input {
      width: 100%;
      height: 48px;
      padding: 8px;
      color: #fff;
      background-color: #000;
      border: 1px solid #454343;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  .reset-btn {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    height: 48px;
    cursor: pointer;
    margin-bottom: 32px;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  .back-to-login {
    font-size: 13px;
    color: #E6E6E6;

    .login-link {
      text-decoration: underline;
      margin-left: 4px;
      cursor: pointer;
      color: white;
    }
  }
  input::placeholder {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
