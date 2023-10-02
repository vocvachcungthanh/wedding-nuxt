<template>
  <a-popconfirm
    title="Bạn có muốn xóa"
    ok-text="Có"
    cancel-text="Không"
    @confirm="() => handleDelete(dataItem)"
  >
    <a-tag color="#f50" class="ant-tag__delete"
      ><a-icon type="delete" /> Xóa
    </a-tag>
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
    async handleDelete(dataItem) {
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('ACT_ALBUM_DELETE', {
          id: dataItem.id,
          google_id: dataItem.google_id,
          source_id: dataItem.source_id,
        })
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
