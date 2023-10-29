<template>
  <div class="page-couples">
    <a-card title="Cặp đôi">
      <a-row :gutter="30">
        <a-col :md="{ span: 12 }" :lg="{ span: 16 }" :xxl="{ span: 12 }">
          <a-row :gutter="30">
            <GroomCouple :grooms="couples.Grooms" />
            <BrideCouple :brides="couples.Brides" />
          </a-row>
        </a-col>
        <a-col :md="{ span: 12 }" :lg="{ span: 8 }" :xxl="{ span: 12 }">
          <BgCouple :item-bg="couples.BgCouple"
        /></a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { GroomCouple, BrideCouple, BgCouple } from '~/components/admin/couples'

export default {
  components: { GroomCouple, BrideCouple, BgCouple },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {}
  },

  head() {
    return {
      title: 'Cặp đôi',
    }
  },

  computed: {
    ...mapGetters({
      couples: 'GET_COUPLES',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', 2)
    await this.getCouples()
  },

  methods: {
    ...mapActions({
      getCouples: 'ACT_GET_COUPLES',
    }),
  },
}
</script>
