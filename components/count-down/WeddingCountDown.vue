<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <div class="count-down">
        <HeaderCountDown :date-time="dateTime" />
        <template v-if="date">
          <count-down :end="date"></count-down>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

import HeaderCountDown from './HeaderCountDown.vue'

export default {
  components: {
    HeaderCountDown,
  },

  data() {
    return {
      date: null,
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
      const formattedDate = moment(this.dateTime.date).format('MM-DD-YYYY')

      this.date = formattedDate.replace(/ /g, '').replace(/-/g, ',')
    }
  },
}
</script>
