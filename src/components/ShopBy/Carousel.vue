<template>
  <div style="position: relative">
    <p class="title">SHOP OUR CATEGORIES</p>
    <div class="carousel-container">
      <!-- Carousel Container -->
      <div class="carousel-wrapper">
        <div class="carousel" :style="carouselStyle">
          <!-- Loop carousel items -->
          <div class="slide" v-for="(data, index) in page" :key="index">
            <CarouselItem :product="data" />
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-controls">
      <button @click="prevSlide" ><img :src="arrow" width="24px" height="24px" style="transform: scaleX(-1);"></button>
      <button @click="nextSlide"><img :src="arrow" width="24px" height="24px"></button>
    </div>
  </div>
</template>

<script>
import arrow from '../../static/images/shopBy/arrow.svg';
import CarouselItem from './CarouselItem.vue';

export default {
  name: "CarouselComponent",
  components: {
    CarouselItem,
  },
  data() {
    return {
      currentSlide: 0,
      page: [
        {
          id: 1,
          parent_name: "Electronics",
          image: "https://via.placeholder.com/324x485?text=Electronics",
        },
        {
          id: 2,
          parent_name: "Fashion",
          image: "https://via.placeholder.com/324x485?text=Fashion",
        },
        {
          id: 3,
          parent_name: "Home Decor",
          image: "https://via.placeholder.com/324x485?text=Home+Decor",
        },
        {
          id: 4,
          parent_name: "Toys",
          image: "https://via.placeholder.com/324x485?text=Toys",
        },
        {
          id: 5,
          parent_name: "Books",
          image: "https://via.placeholder.com/324x485?text=Books",
        },
        {
          id: 6,
          parent_name: "Electronics",
          image: "https://via.placeholder.com/324x485?text=Electronics",
        },
        {
          id: 7,
          parent_name: "Fashion",
          image: "https://via.placeholder.com/324x485?text=Fashion",
        },
        {
          id: 8,
          parent_name: "Home Decor",
          image: "https://via.placeholder.com/324x485?text=Home+Decor",
        },
        {
          id: 9,
          parent_name: "Toys",
          image: "https://via.placeholder.com/324x485?text=Toys",
        },
        {
          id: 10,
          parent_name: "Books",
          image: "https://via.placeholder.com/324x485?text=Books",
        },
      ],
      itemWidth: 332,
      totalItems: 10,
      arrow
    };
  },
  computed: {
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

<style scoped>
.carousel-container {
  margin-top: 32px;
  position: relative;
  max-width: 100%;
  height: 639px;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease;
}
.title{
  font-size: 18px;
  font-family: Caslon,serif;
  margin-bottom: 32px;
  font-weight: 400;
  margin-top: 88px;
}
.slide {
  flex: 0 0 auto;
  width: 300px;
  text-align: center;
  margin-right: 32px;
}

.carousel-controls {
  position: absolute;
  bottom:50px;
  right: 140px;
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    right:20px;
  }
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
