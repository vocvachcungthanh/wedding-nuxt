<template>
  <div class="create__slider">
    <FromUpload
      :result="result"
      :items="dataItem"
      @submit="handleSubmit"
      @result="handleResult"
    />
  </div>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'
import FromUpload from '~/components/common/FromUpload.vue'

export default {
  components: {
    FromUpload,
  },

  props: {
    visible: {
      type: Boolean,
      default: Boolean,
    },

    dataItem: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      result: false,
    }
  },

  watch: {
    visible() {
      if (this.visible === false) {
        this.result = true
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
