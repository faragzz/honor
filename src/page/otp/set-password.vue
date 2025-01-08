<template>
  <div class="relative-container">
    <div class="absolute-child"></div>
    <img :src="authBackground" class="background-image" style="height: 100%;" />
    <!-- Centered component -->
    <div class="centered-component" >
      <OtpSetNewPassword/>
    </div>
  </div>
</template>

<script>
import authBackground from '../../static/images/authBackground.png';
import OtpSetNewPassword from '../../components/Otp/SetNewPassword.vue';

export default {
  components:{
    OtpSetNewPassword
  },
  data() {
    return {
      hasToken: false,
      isLoginMode: true,
      otp: false,
      isAuth: true,
      authBackground,
    };
  },
  methods: {
    toggleAuthMode() {
      this.isLoginMode = !this.isLoginMode;
    },
    openOtp() {
      this.hasToken = true;
      this.isLoginMode = false;
      this.otp = true;
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.relative-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.absolute-child {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.79);
  z-index: 1;
}

.background-image {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.centered-component {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
