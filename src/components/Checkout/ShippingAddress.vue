<script setup lang="ts">
import PersonalInfo from './PersonalInfo.vue'
import { reactive, ref } from 'vue'
import type { UserInfo, ShippingAddressFormData } from './types.ts'
import editIcon from '@/static/images/cart/edit.svg'
import binIcon from '@/static/images/cart/bin.svg'

const openUserInfo = ref(true)
const shippingSaved = ref(false)

const emit = defineEmits(['done'])
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
  postalCode: '',
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
    shippingSaved.value = true
    console.log('shippinSaved', shippingSaved.value)
    emit('done')
    console.log('Shipping information saved successfully!')
  } else {
    console.error('Please fill out all the required fields.')
  }
}
const removeShoppingData = () => {
  localStorage.removeItem('shippingData')
  shippingSaved.value = false;
  Object.assign(shippingAddressData, {
    country: '',
    city: '',
    region: '',
    streetNumber: '',
    houseNumber: '',
    postalCode: '',
  });
}
const editShoppingData = () => {
  shippingSaved.value=false;
}

</script>

<template>
  <div v-if="openUserInfo" style="margin-bottom: 48px">
    <PersonalInfo :data="userData" @userInfoSaved="closeUserInfo" />
  </div>
  <div class="title" style="margin-bottom: 32px">Shipping Address</div>
  <div v-if="!shippingSaved">
    <div class="container">
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
  <div
    v-else
    style="
      width: 656px;
      height: 176px;
      border-radius: 2px;
      border: 1px solid #333333;
      font-family: 'Calson', 'sans-serif';
    "
  >
    <div style="margin: 24px; width: 564px; height: 125px">
      <p style="font-size: 14px; margin-bottom: 8px">Ship to</p>
      <div style="position: relative; display: flex; width: 100%">
        <div style="font-size: 12px; line-height: 5px">
          <p>{{ userData.firstName + ' ' + userData.lastName }}</p>
          <p>{{ shippingAddressData.streetNumber + ' ' + shippingAddressData.houseNumber }}</p>
          <p>{{ shippingAddressData.city + ', ' + shippingAddressData.region }}</p>
          <p>{{ shippingAddressData.country }}</p>
          <p>{{ shippingAddressData.postalCode }}</p>
        </div>
        <div style="position: absolute; display: flex; gap: 8px; bottom: 0; right: -70px; width: 243px; height: 18px; font-size: 12px; align-items: center;">
          <div style="display: flex; gap: 8px; align-items: center;cursor: pointer"@click="editShoppingData">
            <img :src="editIcon" alt="edit" style="width: 16px; height: 16px;">
            <p style="margin-bottom: 8px">Change Address</p>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;cursor: pointer" @click="removeShoppingData">
            <img :src="binIcon" alt="edit" style="width: 16px; height: 16px;">
            <p style="margin-bottom: 8px">Remove Address</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="shippingSaved" style="background-color: #333333; height: 1px;width: 100%; margin-top: 68px"/>
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
