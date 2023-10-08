<template>
  <section v-if="sliders.length > 0" class="sidebar-banner">
    <a-carousel autoplay>
      <template v-for="(slider, index) in sliders">
        <div :key="index" class="slide__item">
          <div class="ration">
            <img class="ration__link" :src="slider.image" :alt="slider.title" />
          </div>
        </div>
      </template>
    </a-carousel>

    <ContentSlider />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ContentSlider from './ContentSlider.vue'

export default {
  name: 'SiderBanner',

  components: {
    // VueSlickCarousel,
    ContentSlider,
  },

  computed: {
    ...mapGetters({
      sliders: 'GET_LIST_SLIDERS',
    }),
  },

  async created() {
    await this.actGetSlider()
  },

  methods: {
    ...mapActions({
      actGetSlider: 'ACT_GET_SLIDERS',
    }),
  },
}
</script>
