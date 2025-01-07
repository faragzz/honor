<script lang="ts">
import { defineComponent } from 'vue';
import Search from '@/assets/icons/search.svg';
import User from '@/assets/icons/user.svg';
import Heart from '@/assets/icons/heart.svg';
import Cart from '@/assets/icons/bag.svg';

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      Search,
      User,
      Heart,
      Cart,
    };
  },
});
</script>

<template>
  <div style="height: 138px; background-color: #0B0B0B; display: flex; flex-direction: column; position: relative;">
    <!-- Icons Section -->
    <div style="display: flex; flex-direction: row; gap: 16px; padding-top: 24px; padding-bottom: 24px; margin-left: auto; margin-right: 120px;">
      <img :src="Search" alt="Search" width="24px" height="24px" />
      <img :src="User" alt="User" width="24px" height="24px" />
      <img :src="Heart" alt="Heart" width="24px" height="24px" />
      <img :src="Cart" alt="Cart" width="24px" height="24px" />
    </div>

    <!-- Text Section -->
    <div style="display: flex; flex-direction: row; justify-content: center; gap: 16px; color: white; padding-left: 120px; padding-right: 120px;">
      <div style="display: flex; flex-direction: row; gap: 32px;">
        <p>SHOP</p>
        <p>BRIDAL</p>
        <p>BESPOKE</p>
        <p>BY APPOINTMENT</p>
      </div>
      <p style="padding-right: 204px;padding-left: 188px">Honor</p>
      <div style="display: flex; flex-direction: row; gap: 32px;">
        <p>SHOP</p>
        <p>BRIDAL</p>
        <p>BESPOKE</p>
        <p>BY APPOINTMENT</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Optional additional styling if needed */
</style>
