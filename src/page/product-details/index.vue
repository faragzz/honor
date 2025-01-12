<template>
  <div class="container">
    <div v-show="!isMobile" class="productDetailSection">
      <div class="productDetailOne">
        <div class="imgsContainer">
          <ProductDetailsListImages :imgIndex="imgIndex" :list="imgList" :selectImg="selectImg"/>
          <ProductDetailsImgCarousel :img="imgList[imgIndex]" :next="nextImg" :prev="prevImg"/>
        </div>
      </div>
      <!-- Product details -->
      <div class="productDetailTwo">
        <ProductDetailsGeneralDetails :data="generalProductData" />
        <div class="size-category">
          <ProductDetailsSizeList :selected="selected" :select-size="selectSize" :list="sizeList" />
        </div>
        <div class="btns-section">
          <button class="btns add-to-cart">ADD TO CART</button>
          <button class="btns add-to-wishlist">ADD TO WISHLIST</button>
        </div>
        <div class="faq">
          <ProductDetailsProductInfo :title="'Details & Care'" :infos="detailsAndCare" />
          <ProductDetailsProductInfo :title="'Size & Fit'" :infos="sizeAndFit" />
          <ProductDetailsProductInfo :title="'Delivery & Return'" :show-bullets="false" :infos="deliveryAndReturn" />
        </div>
      </div>
    </div>
    <div v-show="isMobile" style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%; overflow: hidden;">
      <div style="display: flex; flex-direction: column; transform: scale(0.55); transform-origin: center center; justify-content: center; align-items: center;">
        <ProductDetailsImgCarousel :img="imgList[imgIndex]" :next="nextImg" :prev="prevImg"/>
        <ProductDetailsListImages :imgIndex="imgIndex" :list="imgList" :selectImg="selectImg" :is-mobile="isMobile" />
      </div>
      <div style="display: flex; flex-direction: column; transform: scale(0.57); transform-origin: center center; justify-content: center; align-items: center; margin-top: -300px">
        <ProductDetailsGeneralDetails :data="generalProductData" />
        <div class="size-category">
          <ProductDetailsSizeList :selected="selected" :select-size="selectSize" :list="sizeList" />
        </div>
        <div class="btns-section">
          <button class="btns add-to-cart">ADD TO CART</button>
          <button class="btns add-to-wishlist">ADD TO WISHLIST</button>
        </div>
        <div class="faq">
          <ProductDetailsProductInfo :title="'Details & Care'" :infos="detailsAndCare" />
          <ProductDetailsProductInfo :title="'Size & Fit'" :infos="sizeAndFit" />
          <ProductDetailsProductInfo :title="'Delivery & Return'" :show-bullets="false" :infos="deliveryAndReturn" />
        </div>
      </div>
    </div>
    <div v-show="isMobile" style="margin-top: -250px">
      <p class="mayLikeTitle">YOU MAY ALSO LIKE</p>
      <div v-for="(item, index) in items" :key="index" class="grid-item">
        <CategoryItem :item="item" :show-fav="false" />
      </div>
    </div>
    <div v-show="!isMobile" class="itemsFooter">
      <p class="mayLikeTitle">YOU MAY ALSO LIKE</p>
      <div class="grid-column">
        <div class="grid">
          <div v-for="(item, index) in items" :key="index" class="grid-item">
            <CategoryItem :item="item" :show-fav="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { generateFakeCategories } from '@/mock/generateFakeCategories.ts'
import ProductDetailsProductInfo from '../../components/ProductDetails/ProductInfo.vue'
import ProductDetailsGeneralDetails from '../../components/ProductDetails/GeneralDetails.vue'
import ProductDetailsSizeList from '../../components/ProductDetails/SizeList.vue'
import ProductDetailsListImages from '../../components/ProductDetails/ListImages.vue'
import ProductDetailsImgCarousel from '../../components/ProductDetails/ImgCarousel.vue'
import CategoryItem from '@/components/Category/Item.vue'

const detailsAndCare = ["Material is Lightweight and sheer tulle","Store the dress in a cool, dry place, away from direct sunlight to prevent discoloration.","Dry clean","Made in NYC"];
const sizeAndFit = ["Fits true to size, take your normal size","Take the next size down if you wish to achieve a closer fit","Model is 177cm/ 5'10\" and is wearing a UK 8"];
const deliveryAndReturn = ["Try items in the comfort of your own home. If they're not quite right, you've got 28 days to request an exchange or return and send them back to us."];
const sizeList = ["UK2","UK4","UK5","UK6","UK7","UK8","UK9","UK10"];

const generalProductData = {
  trending:true,
  Dress1:"Dress1",
  description:"Ruffle gown in glitter tulle over floating heart fil coupe with silk faille heart pocket cape",
  price:390,
  color:"#FFF",
  colorName:"Cream"
};

const imgList = ['https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg','https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg','https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg','https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg','https://honornyc.com/wp-content/uploads/2020/05/H_PS14_WebRes_Look_16.jpg'];

export default {
  components: {
    ProductDetailsProductInfo,
    ProductDetailsGeneralDetails,
    ProductDetailsSizeList,
    ProductDetailsImgCarousel,
    ProductDetailsListImages,
    CategoryItem
  },
  data() {
    return {
      items: generateFakeCategories(4),
      deliveryAndReturn,
      sizeAndFit,
      detailsAndCare,
      sizeList,
      generalProductData,
      selected: 0,
      imgIndex: 0,
      imgList,
      windowWidth: 0
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 900;
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
  },
  methods: {
    selectSize(id) {
      this.selected = id;
    },
    selectImg(id) {
      this.imgIndex = id;
    },
    nextImg() {
      this.imgIndex = (this.imgIndex + 1) % this.imgList.length;
    },
    prevImg() {
      this.imgIndex = (this.imgIndex - 1 + this.imgList.length) % this.imgList.length;
    },
    handleResize() {
      if (typeof window !== 'undefined') {
        this.windowWidth = window.innerWidth;
      }
    }
  }
};

</script>

<style scoped lang="scss">
@media (max-width: 768px) {
  .element-to-scale {
    transform: scale(0.4);
  }
}

.itemsFooter {
  display: flex;
  flex-direction: column;
  width: 1320px;
  height: auto;
  margin-top: 200px;
}

.mayLikeTitle {
  font-size: 18px;
  font-family: Caslon, serif;
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 120px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 88px;
  width: 100%;
}
@media (max-width: 768px) {
  .container {
    margin-top: -40px;
  }
}

.mayAlsoLike {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 88px;
  margin-top: 40px;
}

.grid-column {
  width: 988px;
  height: auto;
  margin-bottom: 88px;
}

/* Grid styling */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.grid-item {
  background-color: var(--c-black);
  width: 324px;
  height: 604px;
  text-align: center;
  border: 1px solid var(--c-black);
  margin-bottom: 8px;
  margin-right: 4px;
  margin-left: 4px;
}

.productDetailSection {
  position: relative;
  width: 1320px;
  height: 1007px;
  display: flex;
  gap: 56px;
}

.productDetailOne {
  position: relative;
  width: 656px;
  height: 1007px;
}

.productDetailTwo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 608px;
  transform:translateY(-15px);
}

.btns {
  width: 608px;
  height: 48px;
  border-radius: 2px;
  color: white;
  font-size: 12px;
  font-family: 'Calson', 'sans-serif';
  &.add-to-cart {
    background-color: var(--dark-text-color);
    color: white;
  }

  &.add-to-wishlist {
    background-color: white;
    border: 1px solid var(--dark-text-color);
    color:var(--dark-text-color);
  }
}

.btns-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 608px;
  margin-bottom: 40px;
}

.size-category {
  margin-bottom: 32px;
}

.buyDetails {
  display: flex;
}

.imgsContainer {
  display: flex;
  gap: 8px;
}
</style>
