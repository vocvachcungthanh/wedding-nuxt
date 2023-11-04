<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <div v-if="!isLoading" class="count-down">
        <HeaderCountDown :date-time="dateTime" />
        <ItemCountDown :date="getDate" />
      </div>

      <CountDownSkeleton v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderCountDown from './HeaderCountDown.vue'
import ItemCountDown from './ItemCountDown.vue'
import CountDownSkeleton from './CountDownSkeleton.vue'

export default {
  name: 'CountDown',

  components: {
    HeaderCountDown,
    ItemCountDown,
    CountDownSkeleton,
  },

  data() {
    return {
      date: new Date('2023-12-02'),
      isLoading: false,
    }
  },

  computed: {
    getDate() {
      return this.dateTime.date || '2023-12-02'
    },

    ...mapGetters({
      dateTime: 'GET_COUNT_DOWN',
    }),
  },

  async created() {
    this.isLoading = true
    await this.$store.dispatch('ACT_GET_COUNT_DOWN')
    this.isLoading = false
  },
}
</script>
