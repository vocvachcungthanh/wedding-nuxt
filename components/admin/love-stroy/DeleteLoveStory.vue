<template>
  <a-popconfirm
    :title="messAccuracy"
    ok-text="Có"
    cancel-text="Không"
    @confirm="handleDelete"
  >
    <button class="btn btn__delete">
      <a-icon type="delete" />
      Xóa
    </button>
  </a-popconfirm>
</template>

<script>
import { MESS_ACCURACY } from '~/libraries/constant'
import { MwHandle } from '~/libraries/helpers'

export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    messAccuracy() {
      return MESS_ACCURACY
    },
  },

  methods: {
    async handleDelete() {
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('ACT_DELETE_LOVE_STORY', this.dataItem)
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
