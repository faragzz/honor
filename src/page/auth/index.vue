<template>
  <div class="relative-container">
    <div class="absolute-child"></div>
    <img :src="authBackground" class="background-image" style="height: 100%; " />
    <!-- Centered component -->
    <div class="centered-component">
      <component :is="isLoginMode ? 'AuthLogin' : 'SignUp'" @switch-to="toggleAuthMode" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import authBackground from '../../assets/auth/authBackground.png';
import AuthLogin from '../../components/Auth/Login.vue';
import SignUp from '../../components/Auth/SignUp.vue';

export default {
  components: {
    AuthLogin,
    SignUp,
  },
  setup() {
    // Reactive state
    const hasToken = ref(false);
    const isLoginMode = ref(true);
    const otp = ref(false);
    const isAuth = ref(true);
    const authBackgroundImage = authBackground;

    // Methods
    const toggleAuthMode = () => {
      isLoginMode.value = !isLoginMode.value;
    };

    const openOtp = () => {
      hasToken.value = true;
      isLoginMode.value = false;
      otp.value = true;
    };

    return {
      hasToken,
      isLoginMode,
      otp,
      isAuth,
      authBackground: authBackgroundImage,
      toggleAuthMode,
      openOtp,
    };
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
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
  margin-top: 200px;
  z-index: 2;
  display: flex;
  align-items: center;
}
</style>
