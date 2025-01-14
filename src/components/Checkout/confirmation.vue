<script setup lang="ts">
import competedIcon from '@/static/images/checkout/tick.svg';

//fetch userInfo from localstorage and parse ready to use it is a object
const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
</script>

<template>
  <div class="confirmation-container">
    <img style="margin-bottom: 40px" :src="competedIcon" alt="competed icon" width="88px" height="88px" />
    <p style="font-size:24px;margin-bottom: 24px">Thank you for your order!</p>
    <p>The confirmation email has sent to Johndoe@gmail.com</p>
  </div>
</template>

<style scoped lang="scss">
.confirmation-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 96px;
  font-family: 'Calson', 'sans-serif';
}
</style>
