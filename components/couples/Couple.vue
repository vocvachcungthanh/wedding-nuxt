<template>
  <div id="couple" class="couple" :style="bgCouples">
    <div class="container">
      <div class="couple-content">
        <HeaderCouple />
        <div class="couple__box">
          <CoupleItem
            :name="grooms.name"
            :avatar="grooms.avatar"
            :desc="grooms.desc"
            :facebook="grooms.facebook"
            :instagram="grooms.instagram"
          />
          <span class="icon__couple">
            <font-awesome-icon icon="fa-solid fa-heart-pulse" />
          </span>
          <CoupleItem
            :name="brides.name"
            :avatar="brides.avatar"
            :desc="brides.desc"
            :facebook="brides.facebook"
            :instagram="brides.instagram"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import HeaderCouple from './HeaderCouple.vue'
import CoupleItem from './CoupleItem.vue'

export default {
  name: 'CoupleGroup',

  components: {
    CoupleItem,
    HeaderCouple,
  },

  computed: {
    grooms() {
      return this.getCouples.Grooms || {}
    },

    brides() {
      return this.getCouples.Brides || {}
    },

    bgCouples() {
      return `background-image:url(${this.getCouples.BgCouple.bg})`
    },

    ...mapGetters({
      getCouples: 'GET_COUPLES',
    }),
  },

  async created() {
    await this.actGetCouples()
  },

  methods: {
    ...mapActions({
      actGetCouples: 'ACT_GET_LIST_COUPLES',
    }),
  },
}
</script>
