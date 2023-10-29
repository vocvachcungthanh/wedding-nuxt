<template>
  <div class="page_guestkbook">
    <a-card title="Lời chúc">
      <a-row :gutter="30">
        <a-col :span="17">
          <CommentGuestkbook />
        </a-col>
        <a-col :span="7">
          <BackgroundGuestkbook />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import {
  CommentGuestkbook,
  BackgroundGuestkbook,
} from '~/components/admin/guestkbooks'

export default {
  name: 'PageQuesTkbook',
  components: {
    CommentGuestkbook,
    BackgroundGuestkbook,
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

  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', 8)
  },

  methods: {},
}
</script>
