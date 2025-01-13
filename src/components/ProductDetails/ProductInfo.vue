<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <div class="title-container">
        <p class="title">{{ title }}</p>
      </div>
      <div class="icon-container">
        <img
          :style="{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }"
          :src="arrow"
          width="24px"
          height="24px"
        />
      </div>
    </button>
    <div style="width: 603px; border-top: 1px solid #e6e6e6; margin-bottom: 16px" />
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="(info, index) in infos" :key="index" class="dropdown-item">
        <div v-if="showBullets" class="bullet-container"></div>
        <span>{{ info }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import arrow from '../../static/images/category/arrow.svg'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    infos: {
      type: Array,
      required: true,
    },
    showBullets: {
      type: Boolean,
      required: false,
      default: true,
    },
    opened: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isOpen: this.opened,
      arrow,
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 16px;
}

.dropdown {
  position: relative;
  width: 608px;
  font-family: 'Calson', 'sans-serif';
}

.dropdown-toggle {
  padding: 8px;
  width: 608px;
  height: 56px;
  background-color: white;
  color: var(--dark-text-color);
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  font-family: Caslon, serif;
  display: flex;
  align-items: center;
  justify-content: start;
  border: none;
  position: relative;
}

.icon-container {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--dark-text-color);
  list-style: none;
  padding: 8px;
  width: 100%;
  height: auto;
  z-index: 20;
}

.dropdown-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
}

.bullet-container {
  background-color: var(--dark-text-color);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 8px;
  margin-bottom: 6px;
}
</style>
