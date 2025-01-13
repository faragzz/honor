<script setup lang="ts">
import State from '@/components/Checkout/State.vue'
import ProductView from '@/components/Cart/Product.vue'
import { computed, ref } from 'vue'
import CartItem from '@/components/Cart/Item.vue'
import ShippingAddress from '@/components/Checkout/ShippingAddress.vue'
import type { UserInfo } from '@/components/Checkout/types.ts'

const stateIndex = ref(1)
const subtotal = ref(100)
const discount = ref(0)
const shippingCost = ref(50)

const userInfo = ref<UserInfo>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
})

const total = computed(() => subtotal.value + shippingCost.value - discount.value)
const generalProductData = {
  img: 'https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg',
  trending: true,
  title: 'Dress1',
  description:
    'Ruffle gown in glitter tulle over floating heart fil coupe with silk faille heart pocket cape',
  price: 390,
  color: '#FFF',
  size: 'UK2',
  colorName: 'Cream',
}
</script>

<template>
  <div class="container">
    <State :active="stateIndex" />
    <div class="holder">
      <div class="partOne">
        <ShippingAddress :userData="userInfo" />
      </div>
      <div class="partTwo">
        <ProductView :data="generalProductData" :show-options="false" qty="1" />
        <div style="height: 1px; background-color: #333333; margin-top: 24px" />
        <div style="margin-top: 32px">
          <p style="font-size: 16px">Discount Code</p>
          <div style="display: flex; gap: 8px; margin-top: 24px">
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Add your discount code"
              style="width: 404px; height: 48px"
            />
            <div class="btn">Apply</div>
          </div>
        </div>
        <div style="height: 1px; background-color: #333333; margin-top: 24px" />
        <div class="costSection">
          <p class="title">Order Summary</p>
          <div style="margin-top: 32px">
            <div style="display: flex; flex-direction: column; gap: 24px">
              <CartItem title="Subtotal" :price="subtotal" />
              <CartItem title="Discount" :price="discount" />
              <CartItem title="Shipment cost" :price="shippingCost" />
            </div>
            <div style="height: 1px; background-color: #333; margin-top: 24px" />
            <CartItem :title="'Total'" :price="total" />
            <button @click="goToCheckOut" class="btnA">CONTINUE TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 88px;
  font-family: 'Calson', 'sans-serif';
}

.holder {
  display: flex;
  margin-top: 96px;
  justify-content: center;
  gap: 119px;
}

.partOne {
  width: 656px;
  //background-color: #0D0D0D;
  height: auto;
  color: var(--dark-text-color);
}

.partTwo {
  width: 545px;
  //background-color: #0D0D0D;
  height: auto;
}

input {
  color: var(--dark-text-color);
  padding-left: 24px;
  background-color: #ffffff;
  border: 1px solid #454343;
  border-radius: 4px;
  font-size: 16px;
  height: 48px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--dark-text-color);
  color: white;
  width: 134px;
  height: 52px;
  border-radius: 2px;
}

.title {
  font-size: 16px;
  font-family: Caslon, serif;
  color: var(--dark-text-color);
}

.btnA {
  background-color: var(--dark-text-color);
  width: 100%;
  height: 48px;
  margin-top: 32px;
  color: white;
  cursor: pointer;
}

.costSection {
  font-size: 14px;
}
</style>
