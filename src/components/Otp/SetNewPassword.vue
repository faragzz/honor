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
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter new password"
          />
        </div>

        <div class="form-group" >
          <label for="confirmPassword" class="txtColor">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Confirm new password"
          />
        </div>

        <button type="submit" class="reset-btn"  style="margin-top: 16px" >CONFIRM</button>
      </form>

      <p class="back-to-login">
        Back to <span @click="goBackToLogin" class="login-link">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      isMobile: false,
    };
  },
  computed: {
    formStyle() {
      return {
        width: this.isMobile ? '450px' : '614px',
        height: this.isMobile ? 'auto' : '610px',
      };
    },
  },
  methods: {
    handlePasswordReset() {
      if (this.password === this.confirmPassword) {
        console.log("Password reset successfully!");
        this.$router.push('/');
      } else {
        console.error("Passwords do not match");
        alert("Passwords do not match");
      }
    },
    goBackToLogin() {
      this.$router.push('/auth');
    },
    updateScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
};
</script>

<style scoped lang="scss">
.reset-password-form {
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
    margin-bottom: 16px;

    label {
      font-size: 13px;
      color: #E6E6E6;
      display: block;
      margin-bottom: 16px;
      text-align: start;
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
