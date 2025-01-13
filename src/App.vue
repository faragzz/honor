<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/footer.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

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

// Get the current route
const route = useRoute()

const contentBackgroundColor = computed(() => {
  return route.path === '/' ? '#0D0D0D' : '#fff'
})
</script>

<template>
  <div class="layout">
    <!-- header -->
    <Header :is-mobile="isMobile" />
    <div class="content" :style="{ backgroundColor: contentBackgroundColor }">
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

.content {
  flex: 1;
  overflow-y: auto;
}
</style>
