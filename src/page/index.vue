<script setup>
import { ref, onMounted } from 'vue'
import homeImage from '../static/images/home.svg'
import categoryImages from '../static/images/footerShopby.png'
import arrowDown from '../static/images/arrow-down.svg'
import Carousel from '../components/Home/Carousel.vue';

</script>

<template>
  <div class="container">
    <div style="position: relative; margin-top: 16px">
      <img :src="homeImage" style="width: 100%; display: block" />
      <div class="text-container">
        <div style="display: flex; flex-direction: column; align-items: center">
          <p style="font-family: 'Calson', 'sans-serif'; font-size: 10px; color: white">
            Scroll to explore
          </p>
          <img :src="arrowDown" width="24px" height="24px" />
        </div>
      </div>
    </div>
    <!--Carousel-->
    <div>
      <Carousel />
    </div>
    <div style="position: relative; margin-top: 32px; width: 100%">
      <img :src="categoryImages" alt="Category Image" style="width: 100%" />
      <p
        style="
          font-family: 'zuume', 'sans-serif';
          font-size: 30px;
          position: absolute;
          bottom: 10px;
          left: 20px;
          color: white;
        "
      >
        View Bridal
      </p>
    </div>
    <div style="position: relative; margin-top: 32px; width: 100%">
      <img :src="categoryImages" alt="Category Image" style="width: 100%" />
      <p
        style="
          font-family: 'zuume', 'sans-serif';
          font-size: 30px;
          position: absolute;
          bottom: 10px;
          left: 20px;
          color: white;
        "
      >
        View SPOKE
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: auto;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 16px;
  background-color: var(--dark-text-color);
}

.text-container {
  position: absolute;
  bottom: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}

/* Adjust for mobile screens */
@media (max-width: 768px) {
  .text-container {
    bottom: 10px;
  }
}

@media (max-width: 1000px) {
  .container {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
