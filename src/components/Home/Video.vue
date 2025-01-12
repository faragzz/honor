<template>
  <section class="featured">
    <div class="featured-scroll abs bottom z2">
      <div v-inview:class="['in-view']" data-up class="dib">
        <p class="db ttu">scroll to explore</p>
        <IconsCaret />
      </div>
    </div>
    <div class="featured-poster rel x y">
      <video :src="homeVideo" muted autoplay loop playsinline></video>
    </div>
  </section>
</template>

<script>
import IconsCaret from '../Icons/Caret.vue'
import homeVideo from '@/static/home-202311.mp4'

export default {
  props: {
    img: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      IconsCaret,
      homeVideo,
    }
  },
}
</script>

<style lang="scss" scoped>
.featured {
  height: 100vh;

  //@include media('<desktop') {
  //  height: 70vh;
  //}

  &-poster {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: #0000002b;
      top: 0;
    }
  }

  &-scroll {
    display: block;
    text-align: center;
    width: 100%;
    bottom: 50px;
    //@include media('<tablet') {
    //  display: none;
    //}

    p {
      padding-bottom: 10px;
      opacity: 0.5;
    }

    svg {
      height: 10px;
      width: auto;
    }
  }

  video {
    width: 100%;
    height: 100%;
    background-size: cover;
    object-fit: cover;
  }
}
</style>
