<script>
import fav from '../../static/images/cart/fav.svg'
import bin from '../../static/images/cart/bin.svg'

export default {
  data() {
    return {
      fav,
      bin,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <img :src="data.img" width="103px" height="136px" />
    <div style="margin-left: 16px">
      <p class="title">{{ data.title }}</p>
      <p class="txt">{{ data.description }}}</p>
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
            marginBottom: '4px',
            border: '1px solid #333',
          }"
        />
        <p class="color name">{{ data.colorName }}</p>
        <div style="display: flex; gap: 16px; margin-left: 8px">
          <p class="txt">Size: {{ data.size }}</p>
          <p class="txt">Qty: {{ qty }}</p>
        </div>
      </div>
      <p class="price">$ {{ data.price }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 16px;
  font-family: Caslon, serif;
  line-height: 19.68px;
}
.txt {
  font-size: 12px;
  font-family: Caslon, serif;
  line-height: 18px;
}
.price{
  font-size: 18px;
  font-family: Caslon, serif;
  line-height: 22.14px;
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
    margin-bottom: 14px;
  }
}
.icon{
  margin-top: -2px;
}

</style>
