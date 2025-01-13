<script lang="ts">
import fav from '../../static/images/cart/fav.svg'
import bin from '../../static/images/cart/bin.svg'

export default {
  name: 'Products',
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
    showOptions: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>

<template>
  <div>
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        marginTop: showOptions ? '32px' : '0',
      }"
    >
      <img :src="data.img" width="103px" height="155px"/>
      <div style="margin-left: 16px">
        <p class="title">{{ data.title }}</p>
        <p class="txt">{{ data.description }}</p>
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
              border: '1px solid grey',
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
    <div v-if="showOptions" style="display: flex; gap: 16px; margin-top: 21px">
      <div style="display: flex; gap: 8px">
        <img class="icon" :src="bin" width="16px" height="16px" style="margin-top: 12px" />
        <p class="txt">Remove from cart</p>
      </div>
      <div style="display: flex; gap: 8px">
        <img class="icon" :src="fav" width="16px" height="16px" style="margin-top: 12px" />
        <p class="txt">Add to wishlist</p>
      </div>
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

.price {
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

.icon {
  margin-top: -2px;
}
</style>
