<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/footer.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 1000
}

onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<template>
  <div class="">
    <!-- header -->
    <Header :is-mobile="isMobile" />
    <!--    <router-view />-->

    <Footer :is-mobile="isMobile" />
  </div>
</template>
