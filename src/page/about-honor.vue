<template>
  <section class="about">
    <div class="container is-inner">
      <div v-if="page" class="about-content">
        <div class="about-content__quote tc">
          <h2 v-inview:class="['in-view']" class="medium" data-up>
            {{ page.acf.quote }}
          </h2>
        </div>
        <div
          v-inview:class="['in-view']"
          class="about-content__designer row"
          data-up
        >
          <div class="col-md-6 col-xs-12">
            <div
              class="about-content__designer--desc wysiwyg"
              v-html="page.acf.content"
            />
          </div>
          <div class="col-md-6 col-xs-12">
            <img class="x o-contain" :src="page.acf.owner_photo.url" alt="" />
            <p class="tiny text-right">Photo by Wolfgang Wesener</p>
          </div>
        </div>
        <div class="about-content__gallery row">
          <div
            v-for="(item, i) in page.acf.gallery"
            :key="i"
            class="about-content__gallery--box col-md-4"
          >
            <img class="x o-cover" :src="item.image.url" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $http, params }) {
    try {
      const page = await $http.$post(`/api/page/about-honor`)
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
.about {
  .text-right{
    text-align: right;
  }
  padding-top: var(--c-padding-top);

  &-content {
    &__quote {
      width: 60%;
      margin: 0 auto;
      padding: 0 0 5%;

      @include media('<desktop') {
        width: 90%;
      }
    }

    &__designer {
      padding: 2% 0 1%;

      &--desc {
        padding: 0 10% 5% 0;
        @include media('<desktop') {
          padding: 0 10% 5% 0;
        }
      }
    }

    &__gallery {
      height: 35vw;
      
      @include media('<tablet') {
        height: auto;
      }

      &--box {
        
        padding: 4px;

        &:nth-of-type(1),
        &:nth-of-type(2) {
          @include media('<tablet') {
            display: none;
          }
        }
        &:nth-of-type(3) {
          @include media('<tablet') {
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
