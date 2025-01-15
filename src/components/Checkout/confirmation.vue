<script setup lang="ts">
import competedIcon from '@/static/images/checkout/tick.svg'
import type { UserInfo } from '@/components/Checkout/types.ts'
import ProductView from '@/components/Cart/Product.vue'
// @ts-ignore
import CartItem from '@/components/Cart/Item.vue'
import { computed, onMounted, ref, watch } from 'vue'

// Fetch userInfo from localStorage and parse it as an object
const userInfo: UserInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
const shoppingData: UserInfo = JSON.parse(localStorage.getItem('shippingData') || '{}')
const CardDetails: UserInfo = JSON.parse(localStorage.getItem('cardDetails') || '{}')

const subtotal = ref(100)
const discount = ref(0)
const shippingCost = ref(50)
const total = computed(() => subtotal.value + shippingCost.value - discount.value)

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768 // Adjusted for mobile breakpoint
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

watch(isMobile, (newValue) => {
  console.log('isMobile changed:', newValue)
})

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
  <div>
    <div class="confirmation-container" :style="{ transform: isMobile ? 'scale(0.8)' : '' }">
      <img
        style="margin-bottom: 40px"
        :src="competedIcon"
        alt="competed icon"
        width="88px"
        height="88px"
      />
      <p class="thank-you-text">Thank you for your order!</p>
      <p class="email-text">The confirmation email has been sent to {{ userInfo.email }}</p>
    </div>

    <div class="order-details">
      <div>
        <p class="section-title">Transaction Date</p>
        <p class="section-content">Thursday, November 17, 2024 (GMT+7)</p>
        <div class="divider" />
      </div>
      <div>
        <p class="section-title">Payment Method</p>
        <p class="section-content">Mastercard ending with 2564</p>
        <div class="divider" />
      </div>
      <div>
        <p class="section-title">Order Tracking</p>
        <p class="section-content">Status: Checking order</p>
        <p class="track-order">TRACK ORDER</p>
        <div class="divider" />
      </div>
    </div>

    <div class="order-summary">
      <p class="section-title">Order</p>
      <div :style="{ transform: isMobile ? 'scale(0.85) translateX(-35px)' : '', }">
        <ProductView :data="generalProductData" :show-options="false" :qty="1" />
      </div>
      <div class="divider-large" />
    </div>

    <div class="summary-section" :style="{ transform: isMobile ? 'scale(0.85) translateX(-20px)' : '', }">
      <div class="summary-items">
        <CartItem title="Subtotal" :price="subtotal" />
        <CartItem title="Discount" :price="discount" />
        <CartItem title="Shipment cost" :price="shippingCost" />
      </div>
      <div class="divider" />
      <CartItem :title="'Total'" :price="total" />
    </div>

    <button class="btnA">CONTINUE SHOPPING</button>
  </div>
</template>

<style scoped lang="scss">
.confirmation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 96px 0 64px;
  font-family: 'Calson', 'sans-serif';
  color: var(--dark-text-color);
}

.thank-you-text {
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
}

.email-text {
  font-size: 16px;
  text-align: center;
}

.order-details,
.order-summary,
.summary-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 822px;
  margin: 0 auto 24px;
}

.section-title {
  font-size: 16px;
  margin-bottom: 24px;
}

.section-content {
  font-size: 14px;
  margin-bottom: 32px;
}

.track-order {
  font-size: 12px;
  text-decoration: underline;
  margin-bottom: 32px;
}

.divider,
.divider-large {
  width: 100%;
  height: 1px;
  background-color: #0d0d0d;
}

.divider-large {
  margin: 24px 0 32px;
}

.summary-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.btnA {
  font-family: 'Calson', 'sans-serif';
  background-color: var(--dark-text-color);
  width: 100%;
  height: 48px;
  margin: 32px 0 85px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .confirmation-container {
    margin-top: 48px;
    margin-bottom: 32px;
  }

  .order-details,
  .order-summary,
  .summary-section {
    gap: 16px;
    width: 100%;
    padding: 0 16px;
  }

  .thank-you-text {
    font-size: 20px;
  }

  .email-text,
  .section-title,
  .section-content {
    font-size: 14px;
  }

  .btnA {
    margin-bottom: 48px;
  }
}
</style>
