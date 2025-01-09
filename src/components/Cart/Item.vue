<script>
export default {
  props:{
    title:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    }
  }
}
</script>

<template>
  <div class="cart">
    <p class="txt">{{title}}</p>
    <p class="txt">$ {{price}}</p>
  </div>
</template>

<style scoped lang="scss">
.txt {
  font-size: 14px;
  font-family: Caslon, serif;
}
.cart{
  display: flex;
  justify-content: space-between;
  width: 435px;
  height: 20px;
}
</style>
