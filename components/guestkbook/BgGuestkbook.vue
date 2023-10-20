<template>
  <style lang="scss">
    .guestbook::after {
      background-image: url('{{ bg }}');
    }
  </style>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      bg: 'GET_GUESTKBOOK_BG',
    }),
  },
}
</script>
