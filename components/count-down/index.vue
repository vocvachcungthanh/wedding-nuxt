<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <div class="count-down">
        <HeaderCountDown :date-time="dateTime" />
        <ItemCountDown :date="getDate" />
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
    getDate() {
      return new Date(this.dateTime.date) || new Date(this.date)
    },

    ...mapGetters({
      dateTime: 'GET_COUNT_DOWN',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_COUNT_DOWN')
  },
}
</script>
