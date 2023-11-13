<template>
  <section class="page">
    <SliderBanner />
    <WeddingCountDown />
    <Couple />
    <LoveStory />
    <WeddingEvent />
    <Album />
    <BridesmaidsGroomsmen />
    <Guestbook />
    <Music />
  </section>
</template>

<script>
import {
  SliderBanner,
  Album,
  WeddingCountDown,
  Couple,
  LoveStory,
  WeddingEvent,
  Guestbook,
  Music,
  BridesmaidsGroomsmen,
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
    BridesmaidsGroomsmen,
  },

  layout(context) {
    return context.isMobile ? "LayoutMobile" : "default";
  },
};
</script>
