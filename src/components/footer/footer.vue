<script setup lang="ts">
defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
})
</script>
<template>
  <footer
    :style="{
      display: 'flex',
      height: isMobile ? '350px' : '80px',
      backgroundColor: '#0B0B0B',
      fontFamily: 'Calson, sans-serif',
      fontSize: '10px',
      color: 'white',
    }"
  >
    <div
      v-if="!isMobile"
      style="
        display: flex;
        width: 100%;
        position: relative;
        margin-right: 120px;
        margin-left: 120px;
        margin-top: 34.5px;
      "
    >
      <div style="display: flex; flex-direction: row; gap: 16px; position: absolute; left: 0">
        <p style="color: #666666">@2024HONORNYC</p>
        <p>TERMS OF USE</p>
        <p>PRIVACY POLICY</p>
        <p>CONTACT</p>
      </div>

      <div style="display: flex; flex-direction: row; gap: 16px; position: absolute; right: 0">
        <p>STOCKISTS</p>
        <p>SUBSCRIBE</p>
        <p>INSTAGRAM</p>
      </div>
    </div>
    <div
      v-if="isMobile"
      style="
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;
        margin-right: 40px;
        margin-left: 40px;
        margin-top: 34.5px;
      "
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2px;
          width: 100%;
        "
      >
        <p style="color: #666666">@2024HONORNYC</p>
        <p>TERMS OF USE</p>
        <p>PRIVACY POLICY</p>
        <p>CONTACT</p>
        <p>STOCKISTS</p>
        <p>SUBSCRIBE</p>
        <p>INSTAGRAM</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
