<template>
  <section class="shop">
    <div class="container">
      <div class="shop__list">
        <div class="shop__inner">
          <ElementProductCard
            v-for="(item, index) in products"
            :key="index"
            :product="item"
            cta="Order"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['product/collections']
    },
  },
}
</script>

<style lang="scss" scoped>
.shop {
  padding-top: 100px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__inner {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
