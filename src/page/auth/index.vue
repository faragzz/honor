<template>
  <div class="relative-container" :style="isLoginMode ? { overflowY: 'hidden' }:{}">
    <div class="absolute-child"></div>
    <img :src="authBackground" class="background-image" />
    <!-- Centered component -->
    <div class="scrollable-container">
      <component :is="isLoginMode ? 'AuthLogin' : 'SignUp'" @switch-to="toggleAuthMode" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import authBackground from "../../assets/auth/authBackground.png";
import AuthLogin from "../../components/Auth/Login.vue";
import SignUp from "../../components/Auth/SignUp.vue";

export default {
  components: {
    AuthLogin,
    SignUp,
  },
  setup() {
    const isLoginMode = ref(true);
    const authBackgroundImage = authBackground;

    const toggleAuthMode = () => {
      isLoginMode.value = !isLoginMode.value;
    };

    return {
      isLoginMode,
      authBackground: authBackgroundImage,
      toggleAuthMode,
    };
  },
};
</script>

<style scoped>
.relative-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.absolute-child {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140vh;
  background-color: rgba(0, 0, 0, 0.79);
  z-index: 1;
}

.background-image {
  width: 100%;
  height: 140vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.scrollable-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  overflow-x: auto;
}

.centered-component {
  width: 100%;
  max-width: 450px;
  margin: auto;
}
</style>
