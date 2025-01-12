<template>
  <div
    class="container"
    :style="{
      marginTop: isMobile ? '10px' : '96px',
      flexDirection: isMobile ? 'row' : 'column'
    }"
  >
    <img
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :src="item"
      alt="image"
      @click="selectImg(index)"
      :style="imgIndex === index ? { border: '2px solid #000' } : {}"
    />
  </div>
</template>

<script>
export default {
  name: 'ListImages',
  props: {
    imgIndex: {
      type: Number,
      required: true
    },
    selectImg: {
      type: Function,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 8px;
}

.item {
  width: 102px;
  height: 121px;
  border-radius: 2px;
  cursor: pointer;
  background-size: cover; /* Fill the box and maintain aspect ratio */
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
</style>
