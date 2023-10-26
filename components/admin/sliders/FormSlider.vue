<template>
  <div class="create__slider">
    <Drawer :title="title">
      <FromUpload
        :result="result"
        :items="dataItem"
        @submit="handleSubmit"
        @result="handleResult"
      />
    </Drawer>
  </div>
</template>

<script>
import Drawer from '~/components/common/Drawer.vue'
import { MwHandle } from '~/libraries/helpers'
import FromUpload from '~/components/common/FromUpload.vue'

export default {
  components: {
    FromUpload,
    Drawer,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      result: false,
      title: 'Thêm mới slider',
    }
  },

  watch: {
    dataItem() {
      if (this.dataItem.id) {
        this.title = 'Sửa slider'
      } else {
        this.title = 'Thêm mới slider'
      }
    },
  },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.upload(params)
      } else {
        this.create(params)
      }
    },

    async create(params) {
      await this.$store
        .dispatch('ACT_CREATE_SLIDERS', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })

          this.result = true
        })
        .catch((error) => {
          this.result = false
          MwHandle.handleError({
            context: error,
          })
        })
    },

    async upload(params) {
      await this.$store
        .dispatch('ACT_UPDATE_ALL', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })

          this.result = true
        })
        .catch((error) => {
          this.result = false
          MwHandle.handleError({
            context: error,
          })
        })
    },

    handleResult(e) {
      this.result = e
    },
  },
}
</script>
