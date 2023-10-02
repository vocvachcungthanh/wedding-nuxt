<template>
  <div class="page-event">
    <a-card title="Sự kiện cưới">
      <a-row :gutter="30">
        <a-col :span="16">
          <a-row :gutter="30">
            <GroomsFramily :grooms="events.Grooms" />
            <BridesFramily :brides="events.Brides" />
          </a-row>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { BridesFramily, GroomsFramily } from '~/components/admin/events'

export default {
  components: {
    BridesFramily,
    GroomsFramily,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {}
  },

  head() {
    return {
      title: 'Sự kiện cưới',
    }
  },

  computed: {
    ...mapGetters({
      events: 'GET_EVENTS',
    }),
  },

  async created() {
    await this.getEvents()
  },

  methods: {
    ...mapActions({
      getEvents: 'ACT_GET_EVENTS',
    }),
  },
}
</script>
