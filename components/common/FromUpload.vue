<template>
  <div id="components-form-demo">
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
          v-decorator="['title', { initialValue: items.title }]"
          placeholder="Tiêu đề"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'image',
            {
              initialValue: items.image,
              rules: [
                { required: true, message: 'Nhập link ảnh!' },
                {
                  validator: validateImageURL,
                },
              ],
            },
          ]"
          placeholder="Nhập link ảnh"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'url',
            {
              initialValue: items.url,
              rules: [{ required: true, message: 'Nhập link ' }],
            },
          ]"
          placeholder="Link"
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-textarea
          v-decorator="[
            'desc',
            {
              initialValue: items.desc,
            },
          ]"
          placeholder="Mô tả về bức ảnh..."
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
            'status',
            {
              initialValue: items.status,
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
          {{ nameSubmit }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { PreviewAlbumForm } from './forms/index.js'
import { MwHandle, keyGoogle } from '~/libraries/helpers'

import './scss/FromUpload.scss'

const intiState = {
  image: '',
  title: '',
  url: '',
  desc: '',
  source_id: 1,
  status: 1,
  google_id: '',
}
export default {
  components: {
    PreviewAlbumForm,
  },

  props: {
    result: {
      type: Boolean,
      default: Boolean,
    },

    items: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, intiState),
      loading: false,

      linkImage: '',
    }
  },

  computed: {
    nameSubmit() {
      return this.items.id ? 'Cập nhật' : 'Thêm mới'
    },

    viewImage() {
      return this.linkImage || this.items.image
    },
  },

  watch: {
    result() {
      if (this.result) {
        this.linkImage = ''
        this.form.resetFields()

        this.$emit('result', false)
      }
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
            image: res,
            title: file.name,
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

      if (filedName === 'image') {
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

    validateImageURL(rule, value, callback) {
      if (!value) {
        callback(new Error('Link ảnh đại diện không được để trống'))
      } else {
        const img = new Image()
        img.onload = () => {
          // Hình ảnh hợp lệ
          callback()
        }
        img.onerror = () => {
          // Hình ảnh không hợp lệ
          callback(new Error('Link ảnh đại diện không hợp lệ'))
        }
        img.src = value
      }
    },
  },
}
</script>
