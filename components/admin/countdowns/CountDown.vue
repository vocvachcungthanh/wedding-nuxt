<template>
  <FormCountDown :items="countdown" @submit="handleSubmit" />
</template>

<script>
import { mapGetters } from 'vuex'

import FormCountDown from './FormCountDown.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    FormCountDown,
  },

  computed: {
    ...mapGetters({
      countdown: 'GET_COUNT_DOWN',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_LIST_COUNT_DOWN')
  },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.update(params)
      } else {
        this.create(params)
      }
    },

    async create(params) {
      await this.$store
        .dispatch('ACT_CREATE_COUNT_DOWN', params)
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
      await this.$store
        .dispatch('ACT_UPDATE_COUNT_DOWN', params)
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
