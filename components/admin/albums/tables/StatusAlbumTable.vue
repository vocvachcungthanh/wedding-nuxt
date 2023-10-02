<template>
  <button class="btn btn__view" @click="handleStatus(dataItem)">
    <a-tag v-if="dataItem.status === '1'" class="success">
      <a-icon type="eye" /> Hiển thị
    </a-tag>
    <a-tag v-else color="orange"> <a-icon type="eye-invisible" /> Ẩn </a-tag>
  </button>
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
    async handleStatus(dataItem) {
      await this.$store
        .dispatch('ACT_STATUS_ALBUM_ADMIN', {
          status: dataItem.status === '1' ? '0' : '1',
          id: dataItem.id,
        })
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        // eslint-disable-next-line no-console
        .catch((error) => MwHandle.handleError({ context: error }))
    },
  },
}
</script>

<style lang="scss">
.success {
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  color: #fff;
}
</style>
