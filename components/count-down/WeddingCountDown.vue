<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <div class="count-down">
        <HeaderCountDown :date-time="dateTime" />
        <template v-if="date">
          <no-ssr>
            <count-down
              class="count__down--cunstome"
              :deadline="date"
            ></count-down>
          </no-ssr>
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
      defaultLabels: {
        days: 'Ngày',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
      },
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
