<template>
  <a-card title="Hình nền" :head-style="customHeadStyle">
    <BgForm :items="itemBg" @submit="handleSubmit" />
  </a-card>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'
import { BgForm } from '~/components/common/forms'

export default {
  components: {
    BgForm,
  },

  props: {
    itemBg: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      customHeadStyle: {
        textAlign: 'center',
        textTransform: 'uppercase',
      },
    }
  },

  methods: {
    handleSubmit(params) {
      const data = { ...params, key: 'couple' }
      if (data.id) {
        this.update(data)
      } else {
        this.create(data)
      }
    },

    async update(params) {
      await this.$store
        .dispatch('ACT_UPDATE_BG', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    async create(params) {
      // eslint-disable-next-line no-console
      console.log(params)
      await this.$store
        .dispatch('ACT_CREATE_BG', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },
  },
}
</script>
