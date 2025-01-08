<template>
  <div style=" overflow: hidden;">
    <!-- Header Section -->
    <div style="position:relative; display: flex; overflow: hidden;">
      <img :src="headerImg" alt="header image" :style="formStyle" class="imgObFit" />
      <p style="position: absolute; top:50% ;" class="txtImg">Your Fairy Tale Dress Awaits</p>
    </div>

    <!-- Body Section -->
    <div style="display: flex; flex-direction: column;">
      <div class="carouselStyle">
        <ShopByCarousel />
      </div>
      <div v-show="!isMobile" style="display: flex; flex-direction: column; gap:150px">
        <ShopByBestSeller />
        <ShopByImgList />
      </div>
      <div  v-show="isMobile" style="display: flex;flex-direction: column; justify-content: center; align-items: center;">
        <p class="title" style="margin-bottom: 8px; margin-top: 12px">BEST SELLER DRESSES</p>
        <Flicking :options="{  align: 'center' }" @move-end="onMoveEnd">
          <div class="panel"> <img :src="im1" style="width:433px; height:607px;"/></div>
          <div class="panel"> <img :src="im2" style="width:433px; height:607px;"/></div>
          <div class="panel"><img :src="im3" style="width:433px; height:607px;"/></div>
          <div class="panel"> <img :src="im4" style="width:433px; height:607px;"/></div>
          <div class="panel"><img :src="im5" style="width:433px; height:607px;"/></div>
        </Flicking>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <img :src="footerImg" alt="footer image" class="footerImg" />
      <div style="position: absolute; top:50%">
        <div class="relative" style=" width:1320px; height:376px">
          <p class="txtFooterTitle">BRIDAL DRESSES AWAITS YOU</p>
          <p class="txtFooterSub">Shop More</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking-inline.css";

import im1 from '../../static/images/shopBy/dress1.png'
import im2 from '../../static/images/shopBy/dress2.png'
import im3 from '../../static/images/shopBy/Look-09 1.png'
import im4 from '../../static/images/shopBy/Look-09 2.png'
import im5 from '../../static/images/shopBy/Look-09 3.png'
import headerImg from '../../static/images/authBackground.png';
import footerImg from '../../static/images/footerShopby.png';

import ShopByCarousel from '../../components/shopBy/Carousel.vue';
import ShopByBestSeller from '../../components/shopBy/BestSeller.vue';
import ShopByImgList from '../../components/shopBy/ImgList.vue';
export default {
  name: 'shop-by',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Flicking,
    ShopByBestSeller,
    ShopByImgList,
    ShopByCarousel
  },
  data() {
    return {
      headerImg,
      footerImg,
      windowWidth: 0,
      im1,
      im2,
      im3,
      im4,
      im5
    };
  },
  computed: {
    formStyle() {
      return {
        width: this.isMobile ? '1320px' : '100%',
        height: this.isMobile ? '200px' : '435px',
      };
    },
    isMobile() {
      return this.windowWidth <= 900;
    }
  },
  methods: {
    handleResize() {
      if (typeof window !== 'undefined') {
        this.windowWidth = window.innerWidth;
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
      window.addEventListener('resize', this.handleResize);
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  }
};
</script>

<style scoped lang="scss">
.title{
  font-size: 14px;
  font-family: Caslon,serif;
  font-weight: 400;
}

.footer {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 88px;
  margin-bottom: 88px;
  color: white;
  font-family: 'zuume', 'sans-serif';
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
}

.footerImg {
  width: 1320px;
  height: auto;
}

.txtImg {
  position: absolute;
  left: 60px;
  font-size: 36px;
  font-weight: bold;
  font-family: 'zuume', 'sans-serif';
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    left: -80px;
    font-size: 24px;
    width: 100vw;
    white-space: nowrap;
    display: block;
  }
}


.txtFooterTitle {
  position: absolute;
  left: 60px;
  top: 20%;
  font-size: 36px;
  font-weight: bold;
  //font-family: Honor2, serif;
  font-family: 'zuume', 'sans-serif';

  @media (max-width: 768px) {
    left: 20px;
    font-size: 24px;
    top: 30%;
  }
}

.txtFooterSub {
  position: absolute;
  left: 60px;
  top: 40%;
  font-size: 12px;
  font-family: Caslon, serif;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 20px;
    font-size: 10px;
  }
}

.carouselStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  margin-left: 60px;
}

.imgObFit {
  object-fit: cover;
  object-position: center 0%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .carouselStyle {
    margin-left:0;
  }

  .txtImg, .txtFooterTitle, .txtFooterSub {
    font-size: 16px;
  }

  .footer {
    margin-top: 40px;
  }

  .footerImg {
    width: 100%;
    height: auto;
  }
}
</style>
