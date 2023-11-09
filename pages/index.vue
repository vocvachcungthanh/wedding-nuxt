<template>
  <section class="page">
    <SliderBanner />
    <WeddingCountDown />
    <Couple />
    <LoveStory />
    <WeddingEvent />
    <Album />
    <Guestbook />
    <Music />
  </section>
</template>

<script>
import { mapState } from "vuex";

import {
  SliderBanner,
  Album,
  WeddingCountDown,
  Couple,
  LoveStory,
  WeddingEvent,
  Guestbook,
  Music,
} from "~/components";

export default {
  name: "HomePage",

  components: {
    SliderBanner,
    WeddingCountDown,
    Couple,
    LoveStory,
    WeddingEvent,
    Guestbook,
    Album,
    Music,
  },

  layout(context) {
    return context.isMobile ? "LayoutMobile" : "default";
  },

  head() {
    return {
      meta: this.metas,
    };
  },

  computed: {
    ...mapState({
      metas: (state) => state.meta,
    }),
  },
};
</script>
