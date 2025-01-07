<script setup lang="ts">
import Search from '@/assets/icons/search.svg'
import User from '@/assets/icons/user.svg'
import Heart from '@/assets/icons/heart.svg'
import Cart from '@/assets/icons/bag.svg'
import Logo from '@/assets/honor.svg'
import Menu from '@/assets/icons/menu.svg'
import Close from '@/assets/icons/close.svg'

import { ref } from 'vue'

const menuOpened = ref(false)
const toggleMenu = () => {
  menuOpened.value = !menuOpened.value
}
defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div
    v-if="!isMobile"
    style="
      height: 138px;
      background-color: #0b0b0b;
      display: flex;
      flex-direction: column;
      position: relative;
      font-family: 'Calson', 'sans-serif';
      font-size: 12px;
    "
  >
    <!-- Icons Section -->
    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 16px;
        padding-top: 24px;
        padding-bottom: 24px;
        margin-left: auto;
        margin-right: 120px;
      "
    >
      <img :src="Search" alt="Search" width="24px" height="24px" />
      <img :src="User" alt="User" width="24px" height="24px" />
      <img :src="Heart" alt="Heart" width="24px" height="24px" />
      <img :src="Cart" alt="Cart" width="24px" height="24px" />
    </div>

    <!-- Text Section -->
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        color: white;
        margin-left: 120px;
        margin-right: 120px;
        position: relative;
      "
    >
      <div style="display: flex; flex-direction: row; gap: 32px; position: absolute; left: 0">
        <RouterLink class="header__nav__link" to="/shop">SHOP</RouterLink>
        <RouterLink class="header__nav__link" to="/Bridal">BRIDAL</RouterLink>
        <RouterLink class="header__nav__link" to="/Bespoke">BESPOKE</RouterLink>
        <RouterLink class="header__nav__link" to="/by-appointment">BY APPOINTMENT</RouterLink>
      </div>
      <router-link class="header__nav__link" to="/">
        <img :src="Logo" alt="Logo" width="114px" height="52px" style="transform: translateY(-15px)" />
      </router-link>
      <div style="display: flex; flex-direction: row; gap: 32px; position: absolute; right: 0">
        <RouterLink class="header__nav__link" to="/about-us">ABOUT US</RouterLink>
        <RouterLink class="header__nav__link" to="/our-world">OUR WORLD</RouterLink>
        <RouterLink class="header__nav__link" to="/films">FILMS</RouterLink>
        <RouterLink class="header__nav__link" to="/archive">ARCHIVE</RouterLink>
      </div>
    </div>
  </div>
  <div v-if="isMobile" style="height: 80px; background-color: #0b0b0b; position: relative">
    <img
      :src="Logo"
      alt="Logo"
      width="112px"
      height="52px"
      style="position: absolute; left: 24px; top: 16px"
    />
    <img
      :src="menuOpened ? Close : Menu"
      @click="toggleMenu"
      alt="Menu"
      width="25px"
      height="25px"
      style="position: absolute; right: 30px; top: 30px"
    />
    <div
      v-if="menuOpened"
      style="
        position: absolute;
        z-index: 10;
        top: 80px;
        padding-top: 20px;
        width: 356px;
        height: 619px;
        background-color: #0b0b0b;
        font-family: 'Calson', 'sans-serif';
        font-size: 12px;
        color: white;
      "
    >
      <div style="display: flex; flex-direction: column; gap: 48px; margin-left: 24px">
        <div style="display: flex; flex-direction: column; gap:18px">
          <RouterLink class="header__nav__link" to="/shop">SHOP</RouterLink>
          <RouterLink class="header__nav__link" to="/Bridal">BRIDAL</RouterLink>
          <RouterLink class="header__nav__link" to="/Bespoke">BESPOKE</RouterLink>
        </div>
        <div style="display: flex; flex-direction: column; gap:18px">
          <RouterLink class="header__nav__link" to="/account">ACCOUNT</RouterLink>
          <RouterLink class="header__nav__link" to="/by-appointment">BY APPOINTMENT</RouterLink>
        </div>
        <div style="display: flex; flex-direction: column; gap:18px">
          <RouterLink class="header__nav__link" to="/about-us">ABOUT US</RouterLink>
          <RouterLink class="header__nav__link" to="/our-world">OUR WORLD</RouterLink>
          <RouterLink class="header__nav__link" to="/films">FILMS</RouterLink>
          <RouterLink class="header__nav__link" to="/archive">ARCHIVE</RouterLink>
          <RouterLink class="header__nav__link" to="/stockists">STOCKISTS</RouterLink>
          <p>INSTAGRAM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__nav__link {
  text-decoration: none;
  color: white;
}
</style>
