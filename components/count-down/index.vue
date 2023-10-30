<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <div class="count-down">
        <HeaderCountDown :date-time="date" />
        <ItemCountDown :date="date" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderCountDown from './HeaderCountDown.vue'
import ItemCountDown from './ItemCountDown.vue'

export default {
  name: 'CountDown',

  components: {
    HeaderCountDown,
    ItemCountDown,
  },

  data() {
    return {
      date: new Date('2023-12-03'),
    }
  },

  computed: {
    ...mapGetters({
      dateTime: 'GET_COUNT_DOWN',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_COUNT_DOWN')

    if (this.dateTime.date) {
      this.date = new Date(this.dateTime.date)
    }
  },
}
</script>
