<template>
  <a-popconfirm
    :title="messAccuracy"
    ok-text="Có"
    cancel-text="Không"
    @confirm="handleDelete"
  >
    <a-button type="danger">Xóa </a-button>
  </a-popconfirm>
</template>

<script>
import { MESS_ACCURACY } from '~/libraries/constant'
import { MwHandle } from '~/libraries/helpers'

export default {
  props: {
    id: {
      type: Number,
      default: Number,
    },
  },

  computed: {
    messAccuracy() {
      return MESS_ACCURACY
    },
  },

  methods: {
    async handleDelete() {
      const ID = this.id

      if (ID > 0) {
        await this.$store
          .dispatch('ACT_MENU_DELETE', ID)
          .then((res) => {
            MwHandle.handleSuccess({ context: res })
          })
          .catch((error) => {
            MwHandle.handleDelete({ context: error })
          })
      }
    },
  },
}
</script>
