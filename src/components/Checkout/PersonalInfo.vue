<script setup lang="ts">
import type { UserInfo } from '@/components/Checkout/types.ts'
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<UserInfo>,
    required: true,
  },
})
const emit = defineEmits<{
  (event: 'userInfoSaved'): void
}>()

const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^[0-9]{9,14}$/
  return regex.test(phoneNumber)
}
const saveUserInfo = () => {
  const { data } = props
  if (
    data.firstName &&
    data.lastName &&
    data.email &&
    data.phoneNumber &&
    validatePhoneNumber(data.phoneNumber) &&
    validateEmail(data.email)
  ) {
    localStorage.setItem('userInfo', JSON.stringify(data))
    emit('userInfoSaved')
    console.log('done')
  }
}
</script>

<template>
  <div class="container">
    <div class="title" style="margin-bottom: 32px">Personal Information</div>
    <div style="display: flex; flex-direction: column; gap: 32px">
      <div style="display: flex; flex-direction: column; gap: 16px">
        <label>First Name</label>
        <input
          type="text"
          v-model="data.firstName"
          required
          placeholder="Enter your first name"
          style="width: 625px; height: 48px"
        />
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <label>Last Name</label>
        <input
          type="text"
          v-model="data.lastName"
          required
          placeholder="Enter your last name"
          style="width: 625px; height: 48px"
        />
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <label>Email Address</label>
        <input
          type="email"
          v-model="data.email"
          @input="validateEmail(data.email)"
          required
          placeholder="Enter your email address"
          style="width: 625px; height: 48px"
        />
        <span v-if="!validateEmail(data.email)" style="color: red; font-size: 12px">
          Please enter a valid email address.
        </span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px">
        <label>Phone Number</label>
        <input
          type="tel"
          v-model="data.phoneNumber"
          @input="validatePhoneNumber(data.phoneNumber)"
          required
          placeholder="Enter your phone number"
          style="width: 625px; height: 48px"
        />
        <span v-if="!validatePhoneNumber(data.phoneNumber)" style="color: red; font-size: 12px">
          Please enter a valid phone number not less than 9.
        </span>
      </div>
    </div>
    <div style="width: 100%; position: relative">
      <div style="position: absolute; right: 0; top: 5px" class="btn" @click="saveUserInfo">
        Save
      </div>
    </div>
    <div style="height: 1px; background-color: #333; margin-top: 62px" />
  </div>
</template>

<style scoped lang="scss">
.container {
  font-family: 'Calson', 'sans-serif';
  color: var(--dark-text-color);
  font-size: 14px;
  height: 468px;
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
