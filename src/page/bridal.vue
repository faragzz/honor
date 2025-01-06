<template>
  <section class="category">
    <BridalItems :page="page" />
  </section>
</template>

<script>
export default {
  async asyncData({ $http }) {
    try {
      const page = await $http.$post(`/api/page/bridal`)
      return {
        page,
      }
    } catch (e) {
      console.log('e is', e)
    }
  },
  head() {
    return {
      title: `HONOR | ${this.page.title.rendered}`,
    }
  },
}
</script>

<style lang="scss" scoped>
.category {
  padding-top: var(--c-padding-top);
  min-height: 87vh;
  @include media('<desktop') {
    min-height: auto;
  }
}
</style>
