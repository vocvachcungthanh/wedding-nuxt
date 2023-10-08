<template>
  <section id="wedding" class="wedding__event">
    <div class="container">
      <HeaderEvent :info="events.info" />

      <div class="wedding__event--content">
        <ItemEvent
          v-for="item in events.data"
          :key="item.id"
          :data-item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import HeaderEvent from './HeaderEvent.vue'
import ItemEvent from './ItemEvent.vue'

export default {
  name: 'WeddingEvent',

  components: {
    HeaderEvent,
    ItemEvent,
  },

  computed: {
    ...mapGetters({
      events: 'GET_LIST_EVENTS',
    }),
  },

  async created() {
    await this.actEvent()
  },

  methods: {
    ...mapActions({
      actEvent: 'ACT_GET_LIST_EVENTS',
    }),
  },
}
</script>
