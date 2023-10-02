<template>
  <div id="components-form-event">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'title',
            {
              initialValue: items.title,
              rules: [
                {
                  required: true,
                  message: 'Nhập tiêu đề !',
                },
              ],
            },
          ]"
          placeholder="Nhập tiêu đề ... "
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <PreviewAlbumForm
          :image="viewImage"
          :loading="loading"
          class-view="view__event"
          @file="handleFile"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="[
            'image',
            {
              initialValue: items.image,
              rules: [{ required: true, message: 'Nhập link ảnh!' }],
            },
          ]"
          placeholder="Nhập link ảnh ..."
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'map',
            {
              initialValue: items.map,
              rules: [{ required: true, message: 'Nhập vị trí google map !' }],
            },
          ]"
          placeholder="Nhập link google map ..."
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'time_date',
            {
              initialValue: items.time_date,
              rules: [
                { required: true, message: 'Nhập thời gian tổ chức hôn lễ !' },
              ],
            },
          ]"
          placeholder="Thời gian tổ chức hôn lễ ..."
          @change="handleChange"
        />
      </a-form-item>
      <a-form-item>
        <a-textarea
          v-decorator="[
            'address',
            {
              initialValue: items.address,
              rules: [
                { required: true, message: 'Nhập địa chỉ tổ chức hôn lễ !' },
              ],
            },
          ]"
          placeholder="Địa chỉ tổ chức hôn lễ ..."
          :auto-size="{ minRows: 4 }"
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
  </div>
</template>

<script>
import { PreviewAlbumForm } from '~/components/common/forms/index.js'
import { MwHandle, keyGoogle } from '~/libraries/helpers'

const intiState = {
  image: '',
  title: '',
  time_date: '',
  address: '',
  map: '',
  google_id: '',
  source_id: 1,
}

export default {
  name: 'FormEvent',

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
      loading: false,
      linkImage: '',
    }
  },

  computed: {
    viewImage() {
      return this.linkImage || this.items.image
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
  },
}
</script>

<style lang="scss">
.view__custome {
  min-height: 340px;
  max-height: 340px;
}
</style>
