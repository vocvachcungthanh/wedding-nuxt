<template>
  <FormLoveStroy :items="{}" @submit="handleSubmit" />
</template>

<script>
import FormLoveStroy from './FormLoveStroy.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'LoveStory',

  components: { FormLoveStroy },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.update()
      } else {
        this.create()
      }
    },

    async create(params) {
      await this.$store
        .dispatch('ACT_CREATE_LOVE_STORY', params)
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
        .dispatch('ACT_UPDATE_LOVE_STORY', params)
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
  },
}
</script>
