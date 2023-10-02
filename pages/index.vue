<template>
  <section class="page">
    <SliderBanner />
    <WeddingCountDown />
    <Couple />
    <WeddingEvent />
    <Album />
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
  WeddingEvent,
  Guestbook,
  Music,
} from '~/components'

export default {
  name: 'HomePage',

  components: {
    SliderBanner,
    WeddingCountDown,
    Couple,
    WeddingEvent,
    Guestbook,
    Album,
    Music,
  },

  layout(context) {
    return context.isMobile ? 'LayoutMobile' : 'default'
  },
}
</script>
