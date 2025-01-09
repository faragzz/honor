<template>
  <section class="category">
    <div class="imgContainer">
      <img :src="header" style="width: 100%; height: 426px; object-fit: cover;" />
      <p style="position: absolute; left: 60px; font-family: 'zuume', 'sans-serif'; color: white; font-size: 36px">Discover Your Dream Bridal Gown</p>
    </div>
    <div>
      <!-- top section -->
      <div style="display: flex; align-items: center; justify-content: center;">
        <div class="topSection">
          <p style="font-size: 16px;font-weight: 400;  font-family: Caslon,serif; ">{{totolResults}} Results</p>
          <CategoryDropDown @dropdown-toggle="handleDropdownToggle" />
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Navigation Column -->
      <div class="nav-column">
        <CategoryDropDownSelector title="CATEGORY" :options="cat" @dropdown-toggle="handleDropdownToggle"/>
        <CategoryDropDownSelector title="COLOR"  :is-color="true" :color-list="color" :options="color" @dropdown-toggle="handleDropdownToggle" />
        <CategoryDropDownSelector title="PRICE"  :options="price"  @dropdown-toggle="handleDropdownToggle"/>
        <CategoryDropDownSelector title="SIZE"  :options="size" @dropdown-toggle="handleDropdownToggle"/>
      </div>

      <!-- Grid Column -->
      <div class="grid-column">
        <div class="grid">
          <!-- Loop through data array to render each item in the grid -->
          <div class="grid-item" v-for="(item, index) in items" :key="index">
            <CategoryItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <div class="divider"/>
      <div class="pagination">
        <button><div style="display: flex; gap:1px">
          <img  style="transform: translateY(17px) scaleX(-1);" :src="arrow" width="24px" height="24px"/>
          <p class="navTxt">Previous</p>
        </div></button>
        <p class="navTxt">Page {{page+"/"+noPages}}</p>
        <button><div style="display: flex; gap:1px">
          <p class="navTxt">Next</p>
          <img style="transform: translateY(17px)" :src="arrow" width="24px" height="24px"/>
        </div></button>
      </div>
    </div>
  </section>
</template>

<script>
import header from '@/static/images/category/header.png';
import arrow from '@/static/images/category/arrow.svg';
import { generateFakeCategories } from '@/mock/generateFakeCategories'
const page = 1;
const noPages = 30;
const totolResults = 1583;
const cat =["All", "Bridal Dresses","Bridal Dresses","Bridal Dresses","Bridal Dresses","Bridal Dresses"]
const colorList = ["", "#000", "#0F0", "#964B00", "#F5F5DC", "#000", "#0F0", "#964B00", "#FFF"];
const color = ["All", "Black", "Green", "Brown", "Cream", "Black", "Green", "Brown", "White"];
import CategoryDropDown from '@/components/Category/DropDown.vue';
import CategoryDropDownSelector from '@/components/Category/DropDownSelector.vue';
import CategoryItem from '@/components/Category/Item.vue';

const price = ["All","Under $250","$250 - $500","$500 - $1000","$1000 - $1500","$1500 $2000","$1000 - $1500","$1500 $2000"]
const size = ["All","UK 2","UK 4","UK 6","UK 8","UK 12","UK 14","UK 15"]
export default {
  components:{
    CategoryDropDownSelector,
    CategoryDropDown,
    CategoryItem
  },
  name: 'CategoryPage',
  data() {
    return {
      header,
      arrow,
      page,
      noPages,
      totolResults,
      items: generateFakeCategories(10),
      anyDropdownOpen: false,  // Track whether any dropdown is open
      cat,
      color,
      price,
      size,
      colorList
    };
  },
  methods: {
    handleDropdownToggle(isOpen) {
      this.anyDropdownOpen = isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

/* Navigation column */
.nav-column {
  width: 332px;
  height: auto;
  background-color: var(--c-black);
  margin-right: 4px;
}

/* Grid column */
.grid-column {
  width: 988px;
  height: auto;
}

/* Grid styling */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid-item {
  background-color: var(--c-black);
  width: 324px;
  height: 630px;
  text-align: center;
  border: 1px solid var(--c-black);
  margin-bottom: 8px;
  margin-right: 4px;
  margin-left: 4px;
}
.imgContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 88px;
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  height: 24px;
  width: 1320px;
  margin-bottom: 88px;
}
.reverse {
  transform: scaleX(-1);
}
.navTxt {
  font-size: 18px;
  font-family: Caslon,serif;
  font-weight: 400;
  color: var(--dark-text-color);
}
.divider {
  height: 1px;
  background-color: #333;
  width: 1320px;
  margin-top: 48px;
}
.topSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  height: 66px;
  margin-bottom: 32px;
}
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
button img {
  display: block;
}
</style>
