<template>
  <div class="header-count-down">
    <h2 class="title">
      {{ dateTime.title }}
    </h2>

    <div class="page-w">
      <h3>
        {{ date }}
      </h3>
      <LineHeart />

      <p class="info">
        {{ dateTime.desc }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import LineHeart from '~/components/common/Line.vue'

export default {
  components: {
    LineHeart,
  },

  props: {
    dateTime: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    date() {
      return moment(this.dateTime.date).format('DD-MM-YYYY')
    },
  },
}
</script>
