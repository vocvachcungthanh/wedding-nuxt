<template>
  <section class="page">
    <SliderBanner
      :name-brides="nameBrides"
      :name-grooms="nameGrooms"
      :time-wedding="TimeWedding"
    />
    <WeddingCountDown :time-wedding="TimeWedding" />
    <Couple />
    <WeddingEvent />
    <Album />
    <Guestbook />
    <Mp3 />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import SliderBanner from '~/components/SliderBanner.vue'
import WeddingCountDown from '~/components/WeddingCountDown.vue'
import Couple from '~/components/couples/Couple.vue'
import WeddingEvent from '~/components/WeddingEvent.vue'
import Album from '~/components/Album.vue'
import Guestbook from '~/components/Guestbook.vue'
import Mp3 from '~/components/Mp3.vue'

export default {
  name: 'IndexPage',

  components: {
    SliderBanner,
    WeddingCountDown,
    Couple,
    WeddingEvent,
    Album,
    Guestbook,
    Mp3,
  },

  layout(context) {
    return context.isMobile ? 'LayoutMobile' : 'default'
  },

  computed: {
    TimeWedding() {
      return this.getListSettings.time_wedding
    },

    nameGrooms() {
      return this.getListSettings.grooms_name
    },

    nameBrides() {
      return this.getListSettings.brides_name
    },

    ...mapGetters({
      getListSettings: 'GET_LIST_SETTINGS',
    }),
  },

  created() {
    this.actGetSettings()
  },

  methods: {
    ...mapActions({
      actGetSettings: 'ACT_GET_SETTINGS',
    }),
  },
}
</script>
