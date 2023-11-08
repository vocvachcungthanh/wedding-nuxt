<template>
  <section class="page__admin">
    <a-row :gutter="[15, 15]">
      <a-col
        v-for="_item in dashboard"
        :key="_item.key"
        class="dashboard"
        :xxl="{ span: 6 }"
        :xl="{ span: 8 }"
        :lg="{ span: 12 }"
        :md="{ span: 12 }"
      >
        <nuxt-link class="dashboard__box" :to="_item.link">
          <div class="dashboard__box--icon">
            <a-icon :type="_item.icon" />
          </div>
          <div class="dashboard__box--content">
            <h3 class="dashboard__box--title">{{ _item.name }}</h3>
            <div class="dashboard__box--total">Tổng {{ _item.total }}</div>
          </div>
        </nuxt-link>
      </a-col>
    </a-row>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageAdmin',

  layout() {
    return 'LayoutAdmin'
  },

  computed: {
    ...mapGetters({
      dashboard: 'GET_DASHBOARDS',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_DASHBOARDS')
    await this.$store.dispatch('ACT_SET_KEY_MENU', 0)
  },

  methods: {
    handleKey(key) {},
  },
}
</script>
