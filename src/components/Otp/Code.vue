<template>
  <div class="forgot-password-form" :style="formStyle">
    <div class="form-container">
      <div class="header">
        <p class="title">Password Reset</p>
        <p class="subtitle ">We sent a code to {{ userEmail }}</p>
      </div>

      <form @submit.prevent="handleReset">
        <div class="otp-group">
          <input
            v-for="(otp, index) in otpCode"
            :key="index"
            type="text"
            maxlength="1"
            v-model="otpCode[index]"
            @input="focusNext(index)"
            class="otp-input"
            :placeholder="placeholderSymbol"
            ref="otpInput"
          />
        </div>
        <p class="resend-code textColor" style="text-decoration: underline;">Resend Code</p>
        <button type="submit" class="reset-btn textColor">PASSWORD RESET</button>
      </form>

      <p class="back-to-login">
        Back to <span @click="goBackToLogin" class="login-link ">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      otpCode: Array(6).fill(""),
      placeholderSymbol: "-",
      userEmail: null,
      isMobile: false,
    };
  },
  computed:{
    formStyle() {
      return {
        width: this.isMobile ? '450px' : '614px',
        height: this.isMobile ? 'auto' : '548px',
      };
    },
  },
  created() {
    if (typeof window !== "undefined") {
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        this.userEmail = userEmail;
      }
    }
  },
  methods: {
    handleReset() {
      const otp = this.otpCode.join("");
      console.log("Entered OTP:", otp);
      this.$router.push("/otp/set-password");
    },
    goBackToLogin() {
      this.$router.push("/auth");
    },
    focusNext(index) {
      if (this.otpCode[index] !== "" && index < this.otpCode.length - 1) {
        this.$refs.otpInput[index + 1]?.focus();
      }
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
.textColor {
  color: #E6E6E6;
}
.forgot-password-form {
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  font-family: 'Calson', 'sans-serif';


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

  .otp-group {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 32px;
  }

  .otp-input {
    width: 64px;
    height: 64px;
    text-align: center;
    font-size: 18px;
    color: var(--dark-text-color);;
    background-color: white;
    border: 1px solid #454343;
    border-radius: 4px;
  }

  .resend-code {
    font-size: 13px;
    color: var(--dark-text-color);;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .reset-btn {
    width: 100%;
    padding: 10px;
    background-color: var(--dark-text-color);;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 32px;
    height: 48px;

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
}

@media (max-width: 768px) {
  .otp-group {
    gap: 8px;
  }

  .otp-input {
    width: 48px !important;
    height: 48px !important;
  }
}
</style>

