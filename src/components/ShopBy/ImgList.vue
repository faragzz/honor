<script>
import im1 from '../../static/images/shopBy/Look-09 1.png'
import im2 from '../../static/images/shopBy/Look-09 2.png'
import im3 from '../../static/images/shopBy/Look-09 3.png'
export default {
  name: 'ImgList',
  data(){
    return {
      im1,
      im2,
      im3
    }
  }
}
</script>

<template>
  <div class="container">
    <div>
      <img :src="im1" style="width:433px; height:607px;"/>
      <div style="margin-top: 16px">
        <p class="title">Bridal</p>
        <p class="showMore" style="margin-top: 8px">Shop More</p>
      </div>
    </div>
    <div>
      <img :src="im3" style="width:433px; height:607px;"/>
      <div style="margin-top: 16px">
        <p class="title">Bridal</p>
        <p class="showMore" style="margin-top: 8px">Shop More</p>
      </div>
    </div>
    <div>
      <img :src="im2" style="width:433px; height:607px;"/>
      <div style="margin-top: 16px">
        <p class="title">Bridal</p>
        <p class="showMore" style="margin-top: 8px">Shop More</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap:8px;
  width: 100%;
  height: 659px;
  justify-content: center;
}
.title{
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
