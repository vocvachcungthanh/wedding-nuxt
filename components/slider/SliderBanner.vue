<template>
  <section class="sidebar-banner">
    <template v-if="sliders.length > 0">
      <a-carousel autoplay effect="fade" :autoplay-speed="10000">
        <div v-for="slider in sliders" :key="slider.id" class="slide__item">
          <div class="ration">
            <img class="ration__link" :src="slider.image" :alt="slider.title" />
          </div>
        </div>
      </a-carousel>

      <ContentSlider :title="getTitle" :date="date.date" />
      <AffterSlider />
    </template>

    <SliderSkeleton v-if="isLoading" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ContentSlider from "./ContentSlider.vue";
import AffterSlider from "./AffterSlider.vue";
import SliderSkeleton from "./SliderSkeleton.vue";

export default {
  name: "SiderBanner",

  components: {
    ContentSlider,
    AffterSlider,
    SliderSkeleton,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    getTitle() {
      return this.sliders[0].title || "Hữu Thành - Thủy Tiên";
    },

    ...mapGetters({
      sliders: "GET_LIST_SLIDERS",
      date: "GET_COUNT_DOWN",
    }),
  },

  async created() {
    this.isLoading = true;
    await this.actGetSlider();
    this.isLoading = false;
  },

  methods: {
    ...mapActions({
      actGetSlider: "ACT_GET_SLIDERS",
    }),
  },
};
</script>
