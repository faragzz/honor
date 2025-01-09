<template>
  <router-link style="text-decoration: none;color:var(--dark-text-color)":to="`/product-details/${item.title.replace(/ /g, '-')}`" class="category-item">
    <img :src="item.image" alt="Item Image" class="item-image"/>
    <div v-if="showFav">
    <div class="toggle-icons">
        <img
          v-if="!isFav"
          :src="fav"
          alt="Favorite Icon"
          style="width: 32px; height: 32px;"
          class="toggle-icon"
          @click="toggleFav"
        />
        <img
          v-if="isFav"
          :src="heart"
          alt="Heart Icon"
          style="width: 32px; height: 32px;"
          class="toggle-icon"
          @click="toggleFav"
        />
      </div>

    </div>
    <div class="info">
      <p class="title">{{item.title}}</p>
      <p class="subtitle">{{item.description}}</p>
      <p class="price">$ {{item.price}}</p>
      <p class="subtitle" v-if="item.trending">TRENDING NOW</p>
    </div>
  </router-link>
</template>

<script lang="js">
import fav from '../../static/images/category/fav.svg'
import heart from '../../static/images/category/heart.svg'
import product from '../Cart/Product.vue'

export default {
  computed: {
    product() {
      return product
    }
  },
  props: {
    // Define the type for the CategoryItem prop
    item: {
      type: Object,
      required: true,
      default: () => ({
        image: '',
        title: '',
        description: '',
        price: 0,
        trending: false,
      }),
    },
    showFav: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  data() {
    return {
      fav,
      heart,
      isFav: false,  // Track the favorite toggle state
    };
  },
  methods: {
    toggleFav() {
      this.isFav = !this.isFav; // Toggle the favorite icon
    },
  },
}
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 16px;
}
.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 13px;
}
.subtitle {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 10px;
  margin-top: 8px;
}
.price {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 14px;
  margin-top: 4px;
}
.category-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 603px;
}

.item-image {
  max-width: 324px;
  height: 498px;
}

.item-title {
  font-size: 18px;
  font-weight: bold;
  margin: 12px 0;
}

.item-description {
  font-size: 14px;
  color: #555;
  margin: 8px 0;
}

.item-price {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.item-trending {
  margin-top: 10px;
  color: #ff5722;
  font-weight: bold;
  font-size: 14px;
}

/* Styles for the toggle icons */
.toggle-icons {
  position: absolute;
  top: 16px;
  right: 15px;
  display: flex;
  gap: 8px;
}

.toggle-icon {
  cursor: pointer;
}
</style>
