<template>
  <section v-if="sliders.length > 0" class="sidebar-banner">
    <a-carousel autoplay="{10000}" effect="fade">
      <template v-for="(slider, index) in sliders">
        <div :key="index" class="slide__item">
          <div class="ration">
            <img class="ration__link" :src="slider.image" :alt="slider.title" />
          </div>
        </div>
      </template>
    </a-carousel>

    <ContentSlider :title="getTitle" :date="date.date" />
    <AffterSlider />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ContentSlider from './ContentSlider.vue'
import AffterSlider from './AffterSlider.vue'

export default {
  name: 'SiderBanner',

  components: {
    ContentSlider,
    AffterSlider,
  },

  computed: {
    getTitle() {
      return this.sliders[0].title || 'Hữu Thành - Thủy Tiên'
    },

    ...mapGetters({
      sliders: 'GET_LIST_SLIDERS',
      date: 'GET_COUNT_DOWN',
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
