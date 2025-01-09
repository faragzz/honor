<script>
export default {
  name: 'generalDetails',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="container">
    <p style="margin-right: auto;">{{ data.trending ? 'TRENDING NOW' : '' }}</p>
    <p class="title">{{ data.Dress1}}</p>
    <p class="description">{{data.description}}</p>
    <p class="price">$ {{data.price}}</p>
    <div class="color-section">
      <p class="color title">Color:</p>
      <div
        :style="{
        backgroundColor: data.color,
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        marginLeft: '8px',
        marginRight: '8px',
        marginTop: '8px',
        border: '1px solid #333',
      }"
      />
      <p class="color name">{{data.colorName}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  margin-bottom: 24px;
  box-sizing: border-box;
}

.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22.14px;
  margin-top: 16px;
  text-align: left;
  margin-right: auto;
}

.description {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-top: 16px;
  text-align: left;
  margin-right: auto;
}

.price {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 29.52px;
  margin-top: 32px;
  text-align: left;
  margin-right: auto;
}

.color-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-right: auto;
}

.color {
  font-family: Caslon, serif;
  font-weight: 400;
  &.title {
    font-size: 16px;
    line-height: 19.68px;
    text-align: left;
  }
  &.name {
    font-size: 14px;
    text-align: left;
    margin-top: 14px;
  }
}
</style>
