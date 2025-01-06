<template>
  <v-layout>
    <AppNavigation />
    <Header />
    <v-main>
      <slot></slot>
    </v-main>
    <AppFooter />
  </v-layout>
</template>

<script>
import Header from "@/components/Layouts/partial/AppHeader.vue";
import AppFooter from "@/components/Layouts/partial/AppFooter.vue";
import AppNavigation from "@/components/Layouts/partial/AppNavigations.vue";
export default {
  name: "AppLayout",
  data() {
    return {};
  },
  components: {
    Header,
    AppNavigation,
    AppFooter,
  },
};
</script>

<style lang="scss">
.v-main {
  padding-top: 150px !important;
}
</style>
