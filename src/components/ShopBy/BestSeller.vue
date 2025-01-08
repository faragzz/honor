<script>
import im1 from '../../static/images/shopBy/dress1.png'
import im2 from '../../static/images/shopBy/dress2.png'
export default {
  name: 'ImgList',
  data(){
    return {
      im1,
      im2,
    }
  }
}
</script>

<template>
  <div class="container">
<!--    fix -->
    <div style="display: flex; justify-content: center; gap:8px;">
      <img :src="im1" style="width:433px; height:607px;"/>
      <img :src="im2" style="width:433px; height:607px;"/>
    </div>
    <div style="margin-left:48px">
      <p class="title" style="margin-bottom: 8px">BEST SELLER DRESSES</p>
      <p class="subtitle" style="margin-bottom: 16px">Your friary tale dress awaits </p>
      <p class="showMore">Shop More</p>
    </div>

  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap:8px;
  width: 100%;
  transform: translateX(-90px);
  margin-top: 88px;
  height: 659px;
  justify-content: center;
  align-items: center;
}
.title{
  font-size: 18px;
  font-family: Caslon,serif;
  font-weight: 400;
}
.subtitle{
  font-size: 13px;
  font-family: Caslon,serif;
}
.showMore{
  font-size: 12px;
  font-family: Caslon,serif;
  text-decoration: underline;
  color: var(--dark-text-color);
}
</style>
