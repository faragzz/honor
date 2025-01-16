<script setup lang="ts">
import mastercard from '@/static/images/checkout/mastercard.svg'
import paypal from '@/static/images/checkout/paypal.svg'
import radioActive from '@/static/images/checkout/radio-active.svg'
import radioDisabled from '@/static/images/checkout/radio-not-active.svg'
import { type PropType, ref } from 'vue'
import type { CardDetails } from '@/components/Checkout/types.ts'

const activeRadio = ref(0) // 0 for Mastercard, 1 for PayPal

const props = defineProps({
  cardDetails: {
    type: Object as PropType<CardDetails>,
    required: true,
  },
})
const validateCardNumber = (event: Event) => {
  const input = event.target as HTMLInputElement;
  // Remove any non-numeric characters
  props.cardDetails.cardNumber = input.value.replace(/\D/g, '');
}
</script>

<template>
  <div class="containerPayment">
    <p style="font-size: 18px; line-height: 22.14px; margin-bottom: 32px">Select Payment Method</p>

    <!-- Mastercard Option -->
    <div class="boxWrap">
      <div class="innerBoxWrap">
        <div style="display: flex; gap: 16px; align-items: center">
          <img
            :src="activeRadio === 0 ? radioActive : radioDisabled"
            alt="radio"
            @click="() => { activeRadio = 0; cardDetails.cardType = 'mastercard'; }"
          />
          <p style="font-family: 'Calson', 'sans-serif'; margin-bottom: 10px">Credit Card</p>
        </div>
        <img :src="mastercard" alt="mastercard" />
      </div>
    </div>

    <!-- Mastercard Details -->
    <div v-if="activeRadio === 0" style="width: 100%; height: 224px">
      <div style="margin: 24px 38px">
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box">
          <input
            v-model="cardDetails.name"
            type="text"
            required
            placeholder="Name on Card"
            style="width: 100%; height: 48px; box-sizing: border-box"
          />
          <input
            v-model="cardDetails.cardNumber"
            type="text"
            placeholder="Card number"
            pattern="\d{16}"
          inputmode="numeric"
          maxlength="16"
          style="width: 100%; height: 48px; box-sizing: border-box"
          />
          <div style="display: flex; width: 100%; gap: 16px; box-sizing: border-box">
            <input
              v-model="cardDetails.expiryDate"
              type="text"
              required
              placeholder="Expiration Date (MM/YY)"
              pattern="\d{2}/\d{2}"
            inputmode="numeric"
            maxlength="5"
            style="width: 50%; height: 48px; box-sizing: border-box"
            />
            <input
              v-model="cardDetails.cvv"
              type="text"
              required
              placeholder="CVV"
              pattern="\d{3}"
            inputmode="numeric"
            maxlength="3"
            style="width: 50%; height: 48px; box-sizing: border-box"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- PayPal Option -->
    <div class="boxWrap" style="margin-top: 32px">
      <div class="innerBoxWrap">
        <div style="display: flex; gap: 16px; align-items: center">
          <img
            :src="activeRadio === 1 ? radioActive : radioDisabled"
            alt="radio"
            @click="() => { activeRadio = 1; cardDetails.cardType = 'paypal'; }"
          />
          <p style="font-family: 'Calson', 'sans-serif'; margin-bottom: 10px">Paypal</p>
        </div>
        <img :src="paypal" alt="paypal" />
      </div>
    </div>

    <!-- PayPal Details -->
    <div v-if="activeRadio" style="width: 100%; height: 224px">
      <div style="margin: 24px 38px">
        <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; box-sizing: border-box">
          <input
            v-model="cardDetails.name"
            type="text"
            required
            placeholder="Name on Card"
            style="width: 100%; height: 48px; box-sizing: border-box"
          />
          <input
            v-model="cardDetails.cardNumber"
            type="number"
            placeholder="Card number"
            pattern="\d{16}"
          inputmode="numeric"
          maxlength="16"
          style="width: 100%; height: 48px; box-sizing: border-box"
          />
          <div style="display: flex; width: 100%; gap: 16px; box-sizing: border-box">
            <input
              v-model="cardDetails.expiryDate"
              type="text"
              required
              placeholder="Expiration Date (MM/YY)"
              pattern="\d{2}/\d{2}"
            inputmode="numeric"
            maxlength="5"
            style="width: 50%; height: 48px; box-sizing: border-box"
            />
            <input
              v-model="cardDetails.cvv"
              type="number"
              required
              placeholder="CVV"
              pattern="\d{3}"
            maxlength="3"
            style="width: 50%; height: 48px; box-sizing: border-box"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.containerPayment {
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: auto;
  font-family: 'Calson', 'sans-serif';
  color: var(--dark-text-color);
}

.boxWrap {
  width: 100%;
  height: 56px;
  border: 1px solid #333333;
  border-radius: 2px;
}

.innerBoxWrap {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
}

input {
  font-family: 'Calson', 'sans-serif';
  color: var(--dark-text-color);
  padding-left: 24px;
  background-color: #ffffff;
  border: 1px solid #454343;
  border-radius: 4px;
  font-size: 16px;
  height: 48px;
}
</style>
