<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/footer.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 1000
}

onMounted(() => {
  checkIfMobile ()
  window.addEventListener('resize', checkIfMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfMobile)
})
</script>

<template>
  <div class="layout">
    <!-- header -->
    <Header :is-mobile="isMobile" />
    <div class="content">
      <router-view />
      <Footer :is-mobile="isMobile" />
    </div>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Content area allows scrolling if content is large */
.content {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}
</style>
