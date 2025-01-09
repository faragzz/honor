<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-toggle">
      <p style="margin-right: 24px">{{ selectedOption || "Recommended" }}</p>
      <div class="icon-container">
        <img
          :style="{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }"
          :src="arrow"
          width="24px"
          height="24px"
        />
      </div>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import arrow from '../../static/images/category/arrow.svg'
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      options: ["New In", "Price High to Low", "Price Low to High"],
      arrow
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 10;
}
.dropdown-toggle {
  position: relative;
  padding: 8px 16px;
  width: 188px;
  height: 56px;
  background-color: white;
  color: var(--dark-text-color);
  border: 1px solid #E6E6E6;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  font-family: Calson, serif;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dropdown-toggle p {
  margin: 0;
}
.icon-container {
  position: absolute;
  right: 16px; /* Adjust this value as needed */
  top: 50%;
  transform: translateY(-50%);
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  color: black;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
}
.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
