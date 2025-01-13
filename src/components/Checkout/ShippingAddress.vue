<script setup lang="ts">
import PersonalInfo from './PersonalInfo.vue'
import { reactive, ref, watch } from 'vue'
import type { UserInfo, ShippingAddressFormData } from './types.ts'

const openUserInfo = ref(true)
const shippingSaved = ref(false)

const userData = reactive<UserInfo>({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
})

const savedData = localStorage.getItem('userInfo')
if (savedData) {
  Object.assign(userData, JSON.parse(savedData))
}

const closeUserInfo = () => {
  openUserInfo.value = false
}

const shippingAddressData = reactive<ShippingAddressFormData>({
  country: '',
  city: '',
  region: '',
  streetNumber: '',
  houseNumber: '',
})

const savedShippingData = localStorage.getItem('shippingData')
if (savedShippingData) {
  Object.assign(shippingAddressData, JSON.parse(savedShippingData))
}

const saveShippingInfo = () => {
  if (
    shippingAddressData.country &&
    shippingAddressData.city &&
    shippingAddressData.region &&
    shippingAddressData.streetNumber &&
    shippingAddressData.houseNumber &&
    shippingAddressData.postalCode
  ) {
    localStorage.setItem('shippingData', JSON.stringify(shippingAddressData))
    shippingSaved.value = false
    //add emit here
    console.log('Shipping information saved successfully!')
  } else {
    console.error('Please fill out all the required fields.')
  }
}
</script>

<template>
  <div v-if="openUserInfo" style="margin-bottom: 48px">
    <PersonalInfo :data="userData" @userInfoSaved="closeUserInfo" />
  </div>
  <div v-if="!shippingSaved">
    <div class="container">
      <div class="title" style="margin-bottom: 32px">Shipping Address</div>
      <div style="display: flex; flex-direction: column; gap: 32px">
        <!-- Country -->
        <div style="display: flex; flex-direction: column; gap: 16px">
          <label>Select shipping country</label>
          <input
            type="text"
            v-model="shippingAddressData.country"
            required
            placeholder="Select shipping country"
            style="width: 625px; height: 48px"
          />
        </div>
        <!-- City and Region -->
        <div style="display: flex; gap: 8px; position: relative; height: 76px; margin-bottom: 16px">
          <div
            style="position: absolute; left: 0; display: flex; flex-direction: column; gap: 16px"
          >
            <label>City</label>
            <input
              type="text"
              v-model="shippingAddressData.city"
              required
              placeholder="City"
              style="width: 290px; height: 48px"
            />
          </div>
          <div
            style="position: absolute; right: 0; display: flex; flex-direction: column; gap: 16px"
          >
            <label>Region</label>
            <input
              type="text"
              v-model="shippingAddressData.region"
              required
              placeholder="Region"
              style="width: 290px; height: 48px"
            />
          </div>
        </div>
        <!-- Street Number -->
        <div style="display: flex; flex-direction: column; gap: 16px">
          <label>Street Number</label>
          <input
            type="text"
            v-model="shippingAddressData.streetNumber"
            required
            placeholder="Enter your street number"
            style="width: 625px; height: 48px"
          />
        </div>
        <!-- House Number -->
        <div style="display: flex; flex-direction: column; gap: 16px">
          <label>House Number</label>
          <input
            type="text"
            v-model="shippingAddressData.houseNumber"
            required
            placeholder="Enter your house number"
            style="width: 625px; height: 48px"
          />
        </div>
        <!-- Postal Code -->
        <div style="display: flex; flex-direction: column; gap: 16px">
          <label>Postal Code</label>
          <input
            type="text"
            v-model="shippingAddressData.postalCode"
            required
            placeholder="Enter your postal code"
            style="width: 625px; height: 48px"
          />
        </div>
      </div>
      <!-- Save Button -->
      <div style="width: 100%; position: relative">
        <div style="position: absolute; right: 0; top: 5px" class="btn" @click="saveShippingInfo">
          Save
        </div>
      </div>
      <div style="height: 1px; background-color: #333; margin-top: 62px; margin-bottom: 62px" />
    </div>
  </div>
  <div v-else>
    <p>Shipping information is saved!</p>
  </div>
</template>


<style scoped lang="scss">
.container {
  font-family: 'Calson', 'sans-serif';
  color: var(--dark-text-color);
  font-size: 14px;
  min-height: 604px;
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

.title {
  font-size: 16px;
  font-weight: 500;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;
  font-size: 18px;
  text-underline-offset: 1px;
  text-decoration: underline;
}
</style>
