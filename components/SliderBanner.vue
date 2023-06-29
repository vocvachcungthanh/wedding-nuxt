<template>
  <section v-if="sliders.length > 0" class="sidebar-banner">
    <VueSlickCarousel :autoplay="true" :arrows="false" :dots="true">
      <template v-for="slider in sliders">
        <div :key="slider.slider_id" class="slide__item">
          <div class="ration">
            <img class="ration__link" :src="slider.slider_img" alt="" />
          </div>
        </div>
      </template>
    </VueSlickCarousel>

    <div class="slide__content">
      <div class="container">
        <div class="text-center">
          <h2 class="slide__title font__dancing">
            <small> {{ NameGrooms }} </small>
            <span class="icon__heart">
              <font-awesome-icon icon="fa-solid fa-heart-pulse" />
            </span>
            <small> {{ NameBrides }} </small>
          </h2>

          <span class="date"> {{ dateTime }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import VueSlickCarousel from 'vue-slick-carousel'

import '~/assets/scss/components/CM_SliderBanner.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
  },

  props: {
    // eslint-disable-next-line vue/prop-name-casing
    NameGrooms: {
      type: String,
      default: String,
    },

    // eslint-disable-next-line vue/prop-name-casing
    NameBrides: {
      type: String,
      default: String,
    },

    // eslint-disable-next-line vue/prop-name-casing
    TimeWedding: {
      type: String,
      default: String,
    },
  },

  computed: {
    dateTime() {
      return this.TimeWedding.replaceAll(',', '/')
    },
    ...mapGetters({
      sliders: 'GET_SLIDER_PUBLIC',
    }),
  },

  created: function () {
    this.actGetSlider()
  },

  methods: {
    ...mapActions({
      actGetSlider: 'ACT_GET_SLIDERS',
    }),
  },
}
</script>
