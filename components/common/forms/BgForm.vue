<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item>
      <PreviewAlbumForm
        :image="viewImage"
        :loading="loading"
        @file="handleFile"
      />
    </a-form-item>

    <a-form-item>
      <a-input
        v-decorator="[
          'bg',
          {
            initialValue: items.bg,
            rules: [{ required: true, message: 'Nhập link !' }],
          },
        ]"
        placeholder="Nhập link hình nền ..."
        @change="handleChange"
      />
    </a-form-item>

    <a-form-item class="hidden">
      <a-input
        v-decorator="[
          'google_id',
          {
            initialValue: items.google_id,
          },
        ]"
        @change="handleChange"
      />
    </a-form-item>
    <a-form-item class="hidden">
      <a-input
        v-decorator="[
          'id',
          {
            initialValue: items.id,
          },
        ]"
        @change="handleChange"
      />
    </a-form-item>
    <a-form-item class="hidden">
      <a-input
        v-decorator="[
          'source_id',
          {
            initialValue: items.source_id,
          },
        ]"
        @change="handleChange"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" class="w-full">
        Cập nhật
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { PreviewAlbumForm } from '~/components/common/forms/index.js'
import { MwHandle, keyGoogle } from '~/libraries/helpers'

const intiState = {
  bg: '',
  google_id: '',
  source_id: 1,
}

export default {
  components: {
    PreviewAlbumForm,
  },

  props: {
    items: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, intiState),
      linkImage: '',
      loading: false,
    }
  },

  computed: {
    viewImage() {
      return this.linkImage || this.items.bg
    },
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('submit', values)
        }
      })
    },

    async handleFile(file) {
      this.loading = true

      // eslint-disable-next-line prefer-const
      let formData = new FormData()

      formData.append('file', file)

      formData.append('google_id', this.items.google_id)

      await this.$store
        .dispatch('ACT_UPLOAD_FILES', formData)
        .then((res) => {
          this.linkImage = res
          this.form.setFieldsValue({
            bg: res,
            source_id: 2,
            google_id: keyGoogle(res),
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })

      this.loading = false
    },

    handleChange(e) {
      const filedName = e.target.id

      const googleId = this.items.google_id

      if (filedName === 'bg') {
        if (googleId) {
          this.handleDeleteImage(googleId)
        }
        this.linkImage = e.target.value
        this.form.setFieldsValue({
          source_id: 1,
          google_id: '',
        })
      }
    },

    async handleDeleteImage(googleId) {
      this.loading = true

      await this.$store
        .dispatch('ACT_DELETE_IMAGE', googleId)
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

      this.loading = false
    },
  },
}
</script>
