<template>
  <div slot="content">
    <a-form-item>
      <a-textarea
        v-model="message"
        :rows="2"
        placeholder="Gửi lời cảm ơn ..."
      />
    </a-form-item>
    <a-form-item>
      <a-button
        html-type="submit"
        :loading="isLoading"
        type="primary"
        size="small"
        @click="handleSubmit"
      >
        Gửi
      </a-button>
    </a-form-item>
  </div>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'

export default {
  data() {
    return {
      isLoading: false,
      message: '',
    }
  },

  methods: {
    async handleSubmit() {
      this.isLoading = true

      await this.$store
        .dispatch('ACT_REPLY_GUESTKBOOK', {
          name: 'Nguyễn Đăng Tân',
          email: 'vocvachcungthanh@gmail.com',
          message: this.message,
        })
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

      this.isLoading = false
    },
  },
}
</script>
