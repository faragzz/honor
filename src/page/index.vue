<template>
  <div>
    <HomeVideo />
    <HomeFeatured
      v-for="(item, i) in page.acf.features"
      :key="i"
      :post="item"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasToken: false,
      isLoginMode: true,
      otp:false
    };
  },

  async asyncData({ $http }) {
    // Fetch your page data
    const page = await $http.$post(`/api/page/home`);
    return { page };
  },

  mounted() {
    // this.hasToken = !!localStorage.getItem('token');
    this.hasToken = false;
  },

  methods: {
    toggleAuthMode() {
      this.isLoginMode = !this.isLoginMode; // Toggle between login and signup modes
    },
  },
};
</script>

<style scoped>
.auth-login-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 900;
}
</style>
