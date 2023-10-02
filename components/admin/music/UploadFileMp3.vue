<template>
  <a-form-item>
    <label class="music__file">
      <input ref="fileMusic" type="file" @change="handChange" />

      <div class="music__file--icon">
        <img src="~/static/mp3.png" alt="" />
        {{ title }}
      </div>
    </label>
  </a-form-item>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'

export default {
  props: {
    result: {
      type: Boolean,
      default: Boolean,
    },
  },

  data() {
    return {
      title: 'Tải file mp3 ...',
      loading: false,
    }
  },

  watch: {
    result(prNew) {
      if (prNew) {
        this.$refs.fileMusic.value = ''
        this.title = 'Tải file mp3 ...'
      }
    },
  },

  methods: {
    handChange(event) {
      const file = event.target.files[0]

      this.title = file.name

      this.handleFile(file)
    },

    async handleFile(file) {
      // eslint-disable-next-line prefer-const
      let formData = new FormData()

      formData.append('file', file)

      formData.append('mp3', true)

      this.$nuxt.$loading.start()

      await this.$store
        .dispatch('ACT_UPLOAD_FILES', formData)
        .then((res) => {
          this.$emit('fileMp3', res)
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })

      this.$nuxt.$loading.finish()
    },
  },
}
</script>
