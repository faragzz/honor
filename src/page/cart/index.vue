<script>
import CartProduct from '@/components/Cart/Product.vue';
import CartItem from '@/components/Cart/Item.vue';
const generalProductData = {
  img:'https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg',
  trending:true,
  title:"Dress1",
  description:"Ruffle gown in glitter tulle over floating heart fil coupe with silk faille heart pocket cape",
  price:390,
  color:"#FFF",
  size:'UK2',
  colorName:"Cream"
};

export default {
  name: 'index.vue',
  components:{
    CartProduct,
    CartItem,
  },
  data(){
    return {
      subtotal:390,
      total:390,
      generalProductData,
      windowWidth: 0
    }
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
    handleResize() {
      if (typeof window !== 'undefined') {
        this.windowWidth = window.innerWidth;
      }
    },
    goToCheckOut(){
      this.$router.push(`/checkout`);
    }
  }
}
</script>

<template>
  <div style="height: 90%">
     <div v-show="!isMobile" class="container">
       <div class="partOne">
         <p class="title">CART</p>
         <div style="height: 1px; background-color: #333; margin-top: 16px; margin-bottom: 10px"/>
         <div class="products">
           <div v-for="(item, index) in Array(3).fill(0)" :key="index">
             <CartProduct :data="generalProductData" :qty="1"/>
             <div style="height: 1px; background-color: #333; margin-top: 40px"/>
           </div>
         </div>
       </div>
       <div class="partTwo">
         <p class="title">Order Summary</p>
         <div style="margin-top: 32px">
           <CartItem :title="'Subtotal'" :price="subtotal" />
           <div style="height: 1px; background-color: #333; margin-top: 24px; margin-bottom: 40px"/>
           <CartItem :title="'Total'" :price="total" />
           <button @click="goToCheckOut" class="btn">CONTINUE TO CHECKOUT</button>
         </div>
       </div>
     </div>
    <div v-show="isMobile" class="mobile-container">
      <div style="transform: scale(0.9)">
        <p class="title">CART</p>
        <div style="height: 1px; background-color: #333; margin-top: 16px; margin-bottom: 24px"/>
        <div class="products">
          <div v-for="(item, index) in Array(3).fill(0)" :key="index">
            <CartProduct :data="generalProductData" :qty="1"/>
            <div style="height: 1px; background-color: #333; margin-top: 40px"/>
          </div>
        </div>
      </div>
      <div style="transform: scale(0.8);margin-top: -20px">
        <p class="title">Order Summary</p>
        <div style="margin-top: 32px">
          <CartItem :title="'Subtotal'" :price="subtotal" />
          <div style="height: 1px; background-color: #333; margin-top: 24px; margin-bottom: 40px"/>
          <CartItem :title="'Total'" :price="total" />
          <button @click="goToCheckOut" class="btn">CONTINUE TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 2px;
  padding-left: 2px;
  margin-top: 10px;
}
.container{
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 521px;
  gap: 118px;
}
.partOne{
  width: 767px;
  height: 521px;
}
.partTwo{
  width: 435px;
  height: 246px;
}
.products{
  height: 600px;
  overflow-y: auto;
}
.title {
  font-size: 16px;
  font-family: Caslon, serif;
  color: var(--dark-text-color);
}
.btn {
  background-color: var(--dark-text-color);
  width: 435px;
  height: 48px;
  margin-top: 32px;
  color: white;
  cursor: pointer;
}
.products::-webkit-scrollbar {
  width: 4px;
}

.products::-webkit-scrollbar-track {
  background: transparent;
}

.products::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
  border: 2px solid transparent;
}

.products::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.products::-webkit-scrollbar-button {
  display: none;
}

</style>
