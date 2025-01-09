<script>
import arrow from '../../static/images/productDetails/arrow.svg'
export default {
  name: 'ImgCarousel',
  data(){
    return {
      arrow
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    next: {
      type: Function,
      required: true
    },
    prev: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Image -->
    <img :src="img" class="carousel-img" />

    <!-- Navigation Buttons -->
    <button class="btn left" @click="prev">
      <img :src="arrow" width="19.2px" height="19.2px" style="transform: scaleX(-1);"/>
    </button>
    <button class="btn right" @click="next">
      <img :src="arrow" width="19.2px" height="19.2px"/>
    </button>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
}

.carousel-img {
  width: 547px;
  height: 831px;
  object-fit: cover;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  background: white;
  outline: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  img {
    z-index: 100; /* Ensure the arrow is above other elements */
  }
}
</style>

