<script>
export default {
  name: "AddressState",
  props: {
    active: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getCircleClass() {
      return (step) => ({
        circle: true,
        active: step <= this.active,
        inactive: step > this.active,
      });
    },
    getTitleClass() {
      return (step) => ({
        title: true,
        active: step <= this.active,
        inactive: step > this.active,
      });
    },
    getLineClass() {
      return (step) => ({
        line: true,
        active: step < this.active,
        inactive: step >= this.active,
      });
    },
  },
};
</script>

<template>
  <div style="display: flex; align-items: center; margin-right: 20px">
    <!-- Circle 1 -->
    <div class="outerCircle">
      <div :class="getCircleClass(1)">
        <p class="step">1</p>
      </div>
      <p :class="getTitleClass(1)">Shipping Address</p>
    </div>
    <!-- Line 1 -->
    <div :class="getLineClass(1)"></div>
    <!-- Circle 2 -->
    <div class="outerCircle">
      <div :class="getCircleClass(2)">
        <p class="step">2</p>
      </div>
      <p :class="getTitleClass(2)">Review & Pay</p>
    </div>
    <!-- Line 2 -->
    <div :class="getLineClass(2)"></div>
    <!-- Circle 3 -->
    <div class="outerCircle last">
      <div :class="getCircleClass(3)">
        <p class="step">3</p>
      </div>
      <p :class="getTitleClass(3)">Confirmation</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  margin-top: 17px;
  font-family: Caslon, serif;
  font-size: 18px;
  font-weight: 400;
}

.title {
  font-family: Caslon, serif;
  font-weight: 400;
  font-size: 13px;
  margin-top: 24px;

  &.active {
    color: var(--dark-text-color);
  }

  &.inactive {
    color: #666;
  }
}

.line {
  width: 170px;
  height: 2px;
  margin-bottom: 50px;
  margin-left: -20px;
  margin-right: -15px;
  background-color: #ccc;
  @media (max-width: 1000px) {
    margin-bottom: 70px;
  }
  &.active {
    background-color: var(--dark-text-color);
  }

  &.inactive {
    background-color: #999999;
  }
}

.outerCircle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  &.last{
    margin-bottom: 0;
    @media (max-width: 1000px) {
      margin-bottom: 16px;
    }
  }
}

.circle {
  width: 56px;
  height: 56px;
  background-color: white;
  border: 2px solid var(--dark-text-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  z-index: 10;

  &.active {
    color:  var(--dark-text-color);
    border-color:  var(--dark-text-color);
  }

  &.inactive {
    color: #999999;
    border-color: #999999;
  }
}
</style>
