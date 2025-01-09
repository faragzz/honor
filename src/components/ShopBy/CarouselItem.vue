<template>
  <router-link :to="`/category/${product.parent_name.replace(/ /g, '-')}`" class="product-image-link">
    <div class="product-image-container">
      <div class="image-wrapper">
        <img
          :src="product.image"
          alt="Product Image"
          class="product-image"
        />
      </div>
      <div class="container">
        <h3 class="title">{{ product.parent_name }}</h3>
        <p class="showMore">Shop More</p>
      </div>
    </div>
  </router-link >
</template>

<script lang="ts">
export default {
  name: 'ProductImageComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* Remove default link styles */
.product-image-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.product-image-container {
  width: 324px;
  height: 570px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.image-wrapper {
  width: 324px;
  height: 485px;
  overflow: hidden;
  position: relative;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover .product-image {
  transform: scale(1.05);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
}

.title {
  font-size: 13px;
  font-family: Caslon, serif;
}

.showMore {
  font-size: 11px;
  font-family: Caslon, serif;
  text-decoration: underline;
  color: var(--dark-text-color);
}
</style>
