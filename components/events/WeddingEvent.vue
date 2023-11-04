<template>
  <section id="wedding" class="wedding__event">
    <div v-if="!isLoading" class="container">
      <HeaderEvent :info="events.info" />

      <div class="wedding__event--content">
        <ItemEvent
          v-for="item in events.data"
          :key="item.id"
          :data-item="item"
        />
      </div>
    </div>
    <EventSkeleton v-if="isLoading" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import HeaderEvent from './HeaderEvent.vue'
import ItemEvent from './ItemEvent.vue'
import EventSkeleton from './EventSkeleton.vue'

export default {
  name: 'WeddingEvent',

  components: {
    HeaderEvent,
    ItemEvent,
    EventSkeleton,
  },

  data() {
    return {
      isLoading: false,
    }
  },

  computed: {
    ...mapGetters({
      events: 'GET_LIST_EVENTS',
    }),
  },

  async created() {
    this.isLoading = true
    await this.actEvent()
    this.isLoading = false
  },

  methods: {
    ...mapActions({
      actEvent: 'ACT_GET_LIST_EVENTS',
    }),
  },
}
</script>
