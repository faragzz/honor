<script>
export default {
  name: 'SizeList',
  props: {
    list: {
      type: Array,
      required: true
    },
    selected: {
      type: Number,
      required: true
    },
    selectSize: {
      type: Function,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <p class="title" style="margin-bottom: 16px">Size:</p>
    <div class="grid">
      <div
        class="grid-item"
        @click="selectSize(index)"
        :style="selected === index ? { border: '1px solid #0B0B0B' } : { border: '1px solid #E6E6E6' }"
        v-for="(item, index) in list"
        :key="index"
      >
        <p class="title">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.68px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-black);
  width: 140px;
  height: 52px;
  border-radius: 2px;
}
.grid-item .title {
  margin-top: 18px;
}
</style>
