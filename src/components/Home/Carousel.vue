<template>
  <div style="position: relative; overflow: hidden">
    <div class="carousel-container">
      <p
        style="
          font-family: 'zuume', 'sans-serif';
          font-size: 30px;
          position: absolute;
          bottom: 100px;
          left: 20px;
          z-index: 20;
          color: white;
        "
      >
        View Shop
      </p>
      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        <div class="carousel" :style="carouselStyle">
          <!-- Loop carousel items -->
          <div class="slide" v-for="(data, index) in page" :key="index">
            <div class="carousel-item">
              <CarouselItem :key="index" :title="data.title" :image="data.image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="position: absolute; top: 50%; width: 100%; pointer-events: none;">
      <button v-if="showLeft" class="btn left" @click="prevSlide" style="pointer-events: all; ">
        <img :src="arrowC" width="19.2px" height="19.2px" style="transform: scaleX(-1);" />
      </button>
      <button class="btn right" @click="nextSlide" style="pointer-events: all;">
        <img :src="arrowC" width="19.2px" height="19.2px" />
      </button>
    </div>
  </div>
</template>

<script>
import arrow from '../../static/images/shopBy/arrow.svg';
import arrowC from '../../static/images/productDetails/arrowC.svg';
import CarouselItem from './CarouselItem.vue';

export default {
  name: "CarouselComponent",
  components: {
    CarouselItem,
  },
  data() {
    // make sure pages is set and total items is set
    return {
      currentSlide: 0,
      page: [
        {
          id: 1,
          title: "Electronics",
          image: "https://via.placeholder.com/324x485?text=Electronics",
        },
        {
          id: 2,
          title: "Fashion",
          image: "https://via.placeholder.com/324x485?text=Fashion",
        },
        {
          id: 3,
          title: "Home Decor",
          image: "https://via.placeholder.com/324x485?text=Home+Decor",
        },
        {
          id: 4,
          title: "Toys",
          image: "https://via.placeholder.com/324x485?text=Toys",
        },
        {
          id: 5,
          title: "Books",
          image: "https://via.placeholder.com/324x485?text=Books",
        },
        {
          id: 6,
          title: "Electronics",
          image: "https://via.placeholder.com/324x485?text=Electronics",
        },
        {
          id: 7,
          title: "Fashion",
          image: "https://via.placeholder.com/324x485?text=Fashion",
        },
        {
          id: 8,
          title: "Home Decor",
          image: "https://via.placeholder.com/324x485?text=Home+Decor",
        },
        {
          id: 9,
          title: "Toys",
          image: "https://via.placeholder.com/324x485?text=Toys",
        },
        {
          id: 10,
          title: "Books",
          image: "https://via.placeholder.com/324x485?text=Books",
        },
      ],
      itemWidth: 443,
      totalItems: 10,
      arrow,
      arrowC
    };
  },
  computed: {
    showLeft() {
      return this.currentSlide > 0; // Show left button only if not on the first slide
    },
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentSlide * this.itemWidth}px)`,
        transition: 'transform 0.3s ease',
      };
    },
  },
  methods: {
    async asyncData() {
      try {
        const page = await this.$http.$post(`/api/lookbooks`);
        this.page = page;
        this.totalItems = page.length;
        console.log("done",page)
      } catch (e) {
        console.log("error")
        console.error('Error fetching data:', e);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalItems;

    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalItems) % this.totalItems;
    },
  },
  mounted() {
    this.asyncData();
  }
};
</script>

<style scoped >
.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  background: var(--dark-text-color);
  outline: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn.right {
  right: 10px;
}

.btn.left {
  left: 10px;
}

.carousel-container {
  margin-top: 32px;
  position: relative;
  max-width: 100%;
  height: 639px;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  overflow-y: visible;

}

.carousel {
  display: flex;
  transition: transform 0.3s ease;
}

.slide {
  flex: 0 0 auto;
  width: 435px;
  text-align: center;
  margin-right:8px;
}

button {
  padding: 0;
  border: none;
  background: none;
}

button img {
  display: block;
}
</style>
