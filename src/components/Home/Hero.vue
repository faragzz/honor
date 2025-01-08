<template>
  <section class="hero">
    <div class="hero-slider y">
      <!-- <div class="hero-slider__progress">
        <span />
      </div> -->
      <div class="swiper-container y">
        <div class="swiper-wrapper rel y">
          <div class="hero-slider__poster swiper-slide abs top left x y">
            <img
              class="x y o-cover"
              src="https://images.squarespace-cdn.com/content/v1/51379cace4b06d40ae8b40f0/1579588201902-CZ2X3Q8EHAFDSFSSWK0B/CopyrightRBrennecke-0404.jpg?format=2500w"
              alt=""
            />
          </div>
          <div class="hero-slider__poster swiper-slide abs top left x y">
            <img
              class="x y o-cover"
              src="https://images.squarespace-cdn.com/content/v1/51379cace4b06d40ae8b40f0/1579588141874-7U07PRPA6TQ352QHXISA/CopyrightRBrennecke-0344.jpg?format=2500w"
              alt=""
            />
          </div>
          <div class="hero-slider__poster swiper-slide abs top left x y">
            <img
              class="x y o-cover"
              src="https://images.squarespace-cdn.com/content/v1/51379cace4b06d40ae8b40f0/1579587112462-NWLDXL2HH6ISNUNDXNBR/CopyrightRBrennecke-0768.jpg?format=2500w"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Autoplay])

export default {
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      loopedSlides: 3,
      slidesPerView: 'auto',
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      virtualTranslate: true,
      autoplay: {
        waitForTransition: false,
        delay: 10000,
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
.hero {
  height: 100vh;
  background: var(--c-black);

  &-slider {
    &__progress {
      position: absolute;
      bottom: 200px;
      width: 100px;
      height: 5px;
      background: var(--c-white);
      z-index: 2;
    }

    &__poster {
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
