<script setup lang="ts">
// @ts-ignore
import State from '@/components/Checkout/State.vue'
import ProductView from '@/components/Cart/Product.vue'
import { computed, onMounted, ref, watch } from 'vue'
// @ts-ignore
import CartItem from '@/components/Cart/Item.vue'
import ShippingAddress from '@/components/Checkout/ShippingAddress.vue'
import Payments from '@/components/Checkout/Payments.vue'
import Confirmation from '@/components/Checkout/confirmation.vue'
import type { CardDetails } from '@/components/Checkout/types.ts'

const stateIndex = ref(3)
const subtotal = ref(100)
const discount = ref(0)
const shippingCost = ref(50)
const total = computed(() => subtotal.value + shippingCost.value - discount.value)
const btnFormText = ['CONTINUE TO CHECKOUT', 'PLACE ORDER', 'CONTINUE SHOPPING']

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 1000
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

watch(isMobile, (newValue) => {
  console.log('isMobile changed:', newValue)
})

const cardDetails = ref<CardDetails>({
  name: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardType: 'mastercard',
})
const submitOrder = () => {
  if (stateIndex.value == 1) {
    alert('Please enter all your details first and save it')
    return
  }
  if (stateIndex.value == 2) {
    if (
      !cardDetails.value.name ||
      !cardDetails.value.cardNumber ||
      !cardDetails.value.expiryDate ||
      !cardDetails.value.cvv ||
      !cardDetails.value.cardType
    ) {
      alert('Please fill in all the payment details')
      return
    }
    stateIndex.value = 3
    return
  }
  console.log(cardDetails.value)
}

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
const shippingAddressDone = () => {
  stateIndex.value = 2
}
</script>

<template>
  <div class="container">
    <div :style="{ transform: isMobile ? 'scale(0.7)' : '' }">
      <State :active="stateIndex" />
    </div>
    <div v-if="stateIndex <= 2" class="holder">
      <div class="partOne" :style="{ transform: isMobile ? 'scale(0.5) translateY(-1000px)' : '' }">
        <div style="padding-bottom: 100px">
          <div v-if="stateIndex == 2">
            <Payments :card-details="cardDetails" />
          </div>
          <div style="margin-top: 48px">
            <ShippingAddress @done="shippingAddressDone" />
          </div>
        </div>
      </div>
      <div
        class="partTwo"
        :style="{ transform: isMobile ? 'scale(0.55) translateY(-2000px)' : '' }"
      >
        <ProductView :data="generalProductData" :show-options="false" :qty="1" />
        <div style="height: 1px; background-color: #333333; margin-top: 24px" />
        <div style="margin-top: 32px">
          <p style="font-size: 16px">Discount Code</p>
          <div style="display: flex; gap: 8px; margin-top: 24px">
            <input
              type="email"
              id="email"
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
            <button class="btnA" @click="submitOrder">{{ btnFormText[stateIndex - 1] }}</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="stateIndex == 3">
      <Confirmation />
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

@media (max-width: 1000px) {
  .container {
    overflow: hidden;
  }
}

.holder {
  display: flex;
  margin-top: 96px;
  justify-content: center;
  gap: 119px;
}

@media (max-width: 1000px) {
  .holder {
    flex-direction: column;
    gap: 0;
    padding-bottom: 100px;
    overflow: hidden;
  }
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

@media (max-width: 1000px) {
  .partTwo {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
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
  font-family: 'Calson', 'sans-serif';
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
