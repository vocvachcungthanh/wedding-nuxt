<template>
  <div id="couple" class="couple" :style="bgCouples">
    <div v-if="!isLoadding" class="container">
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

    <CoupleSkeleton v-if="isLoadding" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import HeaderCouple from './HeaderCouple.vue'
import CoupleItem from './CoupleItem.vue'
import CoupleSkeleton from './CoupleSkeleton.vue'

export default {
  name: 'CoupleGroup',

  components: {
    CoupleItem,
    HeaderCouple,
    CoupleSkeleton,
  },

  data() {
    return {
      isLoadding: false,
    }
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
    this.isLoadding = true
    await this.actGetCouples()
    this.isLoadding = false
  },

  methods: {
    ...mapActions({
      actGetCouples: 'ACT_GET_LIST_COUPLES',
    }),
  },
}
</script>
