<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
      <div style="display: flex; flex-direction: column; align-items: start; justify-content: center; margin-left: 25px; gap: 16px; margin-bottom: 19.5px; margin-top: 19.5px">
        <p class="title" style="margin-right: 24px">{{ title }}</p>
        <p class="subtitle" style="margin-right: 24px">{{ selectedOption || "All" }}</p>
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
    <ul v-if="isOpen" class="dropdown-menu">
      <p class="unSelect" @click="unselectAll">Unselect All</p>
      <li
        v-for="(option, index) in options"
        :key="option"
        class="dropdown-item"
      >
        <div style="display: flex; align-items: center;">
          <input
            type="checkbox"
            v-model="selectedOptions"
            :value="option"
            style="width: 24px; height: 24px;"
            @click.stop="selectOption(option)"
          />
          <!-- Color Circle, but skip the first element (index 0) -->
          <span v-if="isColor && colorList && colorList[index] && index !== 0"
                :style="{
        backgroundColor: colorList[index],
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        marginLeft: '8px',
        marginRight: '8px',
        border: '1px solid #333'
      }" />

          <span class="txt">{{ option }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import arrow from '../../static/images/category/arrow.svg';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    options:{
      type: Array,
      required: true,
    },
    isColor:{
      type:Boolean,
      required:false,
      default:false
    },
    colorList:{
      type:Array,
      required:false,
      default: null
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      selectedOptions: [],
      arrow,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.$emit('dropdown-toggle', this.isOpen);
    },
    selectOption(option) {
      // If the option is already selected, unselect it
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions = this.selectedOptions.filter(item => item !== option);
      } else {
        // If it's not selected, make sure only one is selected
        this.selectedOptions = [option];
      }

      // Update the selectedOption to display the selected option
      this.selectedOption = this.selectedOptions.length ? this.selectedOptions[0] : null;
    },
    unselectAll() {
      this.selectedOptions = [];
      this.selectedOption = null;
    },
  },
};
</script>

<style scoped>
.unSelect {
  color: var(--dark-text-color);
  font-size: 12px;
  font-family: Caslon, serif;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 8px;
  margin-left: 18px;
}

.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 16px;
}
.subtitle {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 14px;
}
.txt {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 13px;
}
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 10;
  border-top: 1px solid #333;
}

.dropdown-toggle {
  padding: 8px;
  width: 322px;
  height: 92px;
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
}

.dropdown-toggle p {
  margin: 0;
}

.icon-container {
  position: absolute;
  right: 24px;
  top: 34px;
  transform: translateY(-50%);
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  align-content: start;
  justify-content: flex-start;
  background-color: white;
  color: var(--dark-text-color);
  list-style: none;
  padding: 8px;
  width: 100%;
  max-height: 307px;
  overflow-y: auto;
  border-radius: 4px;
  z-index: 20;
  position: relative;
}

.dropdown-menu li {
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-item input {
  margin-right: 8px;
  width: 20px;
  height: 20px;
}

.dropdown-item span {
  font-size: 14px;
  color: var(--dark-text-color);
}


/* Scrollbar styles */
.dropdown-menu::-webkit-scrollbar {
  width: 8px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: #333;
  border-radius: 4px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
  border: 2px solid #333;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

input[type="checkbox"]{
  accent-color:  black;
}

</style>
