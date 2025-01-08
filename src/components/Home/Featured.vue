<template>
  <section class="featured">
    <n-link :to="`${post.link.post_name}`" class="big">
      <div class="featured-poster x y oh">
        <div class="featured-poster__title">
          <h2>{{ post.title }}</h2>
          <!-- <p class="medium">View Collections</p> -->
        </div>
        <!-- <img class="x y o-cover" :src="post.image.url" alt="" /> -->
        <div ref="container" class="swiper-container y">
          <div class="swiper-wrapper rel y">
            <div
              v-for="(item, i) in post.gallery"
              :key="i"
              class="featured-poster__slide swiper-slide abs top left x y"
            >
              <img class="x y o-cover" :src="item.url" alt="" />
            </div>
          </div>
        </div>
      </div>
    </n-link>
  </section>
</template>

<script>
import { Swiper, Autoplay } from 'swiper'
// import 'swiper/swiper-bundle.min.css'

Swiper.use([Autoplay])

export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper(this.$refs.container, {
      loop: true,
      loopedSlides: 3,
      slidesPerView: 'auto',
      virtualTranslate: true,
      autoplay: {
        waitForTransition: false,
        delay: 8000,
      },
    })
    swiper.on('slideChangeTransitionStart', () => {
      setTimeout(() => {
        swiper.animating = false
      }, 0)
    })
  },
}
</script>

<style lang="scss" scoped>
.featured {
  height: 82vh;
  margin: 10px 0;

  //@include media('<desktop') {
  //  height: 55vw;
  //}
  //
  //@include media('<tablet') {
  //  height: 80vw;
  //}

  &-poster {
    position: relative;

    &__title {
      position: absolute;
      bottom: 25px;
      left: 30px;
      z-index: 5;

      p {
        font-size: 13px;
      }
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: #00000059;
      position: absolute;
      z-index: 3;
      top: 0;
    }

    &__slide {
      position: absolute !important;
      opacity: 0;
      transform: scale3d(1.05, 1.05, 1.05);
      transition: transform 3s ease-in-out, opacity 4s ease-in-out;

      &.swiper-slide-active {
        opacity: 1;
        transform: none;
      }
      img {
        object-position: 50% 50%;
        -webkit-transform: translateZ(0);
      }
    }
  }
}
</style>
