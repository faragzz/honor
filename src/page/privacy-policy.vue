<template>
  <div class="policy">
    <div class="container is-inner">
      <div class="wysiwyg small-text" v-html="page.content.rendered"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $http, params }) {
    try {
      const page = await $http.$post(`/api/page/privacy-policy`)
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
.policy {
  padding-top: 150px;
  @include media('<tablet') {
    padding-top: 100px;
  }
}
</style>
