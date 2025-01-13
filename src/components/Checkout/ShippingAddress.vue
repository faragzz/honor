<script setup lang="ts">
import PersonalInfo from './PersonalInfo.vue'
import { reactive, ref, watch } from 'vue'
import type { UserInfo } from './types.ts'

const openUserInfo = ref(true)

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
</script>

<template>
  <div v-if="openUserInfo" style="margin-bottom: 48px">
    <PersonalInfo :data="userData" @userInfoSaved="closeUserInfo" />
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
