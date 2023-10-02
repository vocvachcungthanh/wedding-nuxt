<template>
  <a-popconfirm
    title="Bạn có muốn xóa"
    ok-text="Có"
    cancel-text="Không"
    @confirm="handleDelete"
  >
    <div class="music__action"><a-icon type="delete" /> Xóa</div>
  </a-popconfirm>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'

export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    async handleDelete() {
      this.$nuxt.$loading.start()
      const params = {
        id: this.dataItem.id,
        google_id: this.dataItem.google_id,
        source_id: this.dataItem.source_id,
      }
      await this.$store
        .dispatch('ACT_DELETE_MUSIC', params)
        .then((res) => {
          MwHandle.handleSuccess({ context: res })
        })
        .catch((error) => {
          MwHandle.handleError({ context: error })
        })
      this.$nuxt.$loading.finish()
    },
  },
}
</script>
