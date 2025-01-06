<template>
  <section class="appointment">
    <div :class="['container row', { 'is-inner': $device.isMobile }]">
      <div class="appointment-poster col-md-6">
        <img
          v-inview:class="['in-view']"
          class="x o-cover"
          :src="page.acf.featured_image.url"
          alt=""
          data-up
        />
      </div>
      <div
        v-inview:class="['in-view']"
        class="appointment-content col-md-6"
        data-up
      >
        <h1 class="appointment-content__title small">EVENTS</h1>
        
        <div class="appointment-event" v-for="(item, i) in page.acf.events" :key="i">
          <h5 class="event-title">{{ item.event_title }}</h5>
          <p class="medium">
            <b>{{ item.start_date }}</b> <b :v-if="item.end_date"> - {{ item.end_date }}</b>
            <br/><br/>
            {{ item.street_address }}<br/>
            {{ item.city_state }}<br/>
            <a :v-if="item.website_link" :href="item.website_link" target="_blank">{{ item.website_link }}</a>
          </p>
          <div class="product-content__inquire"><a :href="'mailto:studio@honornyc.com?subject='+item.event_title" class=""><button><p>Inquire</p></button></a></div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import index from './index.vue'
export default {
  components: { index },
  async asyncData({ $http, params }) {
    try {
      const page = await $http.$post(`/api/page/events`)
      return {
        page,
      }
    } catch (e) {
      console.log('e is', e)
    }
  },
  data() {
    return {
     
    }
  },
  head() {
    return {
      title: `HONOR | Events`,
    }
  },
}
</script>

<style lang="scss" scoped>
.appointment {
  padding-top: var(--c-padding-top);
  padding-bottom: 5%;

  &-content {
    &__title {
      padding-bottom: 2.5%;
    }
  }

  &-poster {
    padding-right: 4%;
    @include media('<desktop') {
      display: none;
    }

    img {
      position: sticky;
      top: 130px;
      height: 100vh;
      object-position: 50% 0%;
    }
  }
  &-event {
    margin-top: 50px;
  }
}
.event-title{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}
button {
  margin-top: 25px;
  border: 1px solid var(--c-white);
  background: var(--c-black);
  color: var(--c-white);
  padding: 7px 25px;
  -webkit-appearance: none;
  border-radius: 0;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  cursor: pointer;
  &:hover {
    background: var(--c-white);
    color: var(--c-black);
  }
}
</style>
