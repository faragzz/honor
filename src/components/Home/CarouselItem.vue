<script setup lang="ts">
defineProps({
  title: String,
  image: String,
})
</script>

<template>
  <div style="position: relative; height: 540px; width: 435px">
    <img :src="image" class="item" />
    <p class="title">{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">
.item {
  height: 540px;
  width: 435px;
}

.item:hover {
  transform: translateY(-30px);
}

.title {
  position: absolute;
  font-family: 'Calson', 'sans-serif';
  font-size: 13px;
  color: white;
  bottom: -18px;
  left: 2px;
  z-index: -10;
}
</style>
