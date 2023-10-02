<template>
  <a-col :md="{ span: 12 }" :lg="{ spa: 12 }" :xxl="{ span: 12 }">
    <a-card title="Thông tin cô dâu" :head-style="customHeadStyle">
      <FormCouple :items="brides" @submit="handleSubmit" />
    </a-card>
  </a-col>
</template>

<script>
import { mapActions } from 'vuex'

import { FormCouple } from './index.js'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'BrideCouple',

  components: {
    FormCouple,
  },

  props: {
    brides: {
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
      const data = { ...params, status: 1 }

      if (data.id) {
        this.update(data)
      } else {
        this.create(data)
      }
    },

    async create(params) {
      await this.actCreate(params)
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

    async update(params) {
      await this.actUpdate(params)
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

    ...mapActions({
      actCreate: 'ACT_CREATE_COUPLE',
      actUpdate: 'ACT_UPDATE_COUPLE',
    }),
  },
}
</script>
