<template>
  <div class="page_guestkbook">
    <a-card title="Lời chúc">
      <CommentGuestkbook />
    </a-card>
  </div>
</template>

<script>
import { CommentGuestkbook } from '~/components/admin/guestkbooks'

export default {
  name: 'PageQuesTkbook',
  components: {
    CommentGuestkbook,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      result: false,
      items: {},
    }
  },

  head() {
    return {
      title: 'Lới chúc',
    }
  },

  methods: {},
}
</script>
