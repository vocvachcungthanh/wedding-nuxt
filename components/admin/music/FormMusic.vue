<template>
  <div id="components-form-event">
    <div class="form__box">
      <a-form :form="form" @submit="handleSubmit">
        <ViewMusic v-if="link_src" :view="link_src" :name="dataItem.name" />
        <UploadFileMp3 :result="result" @fileMp3="handleMp3" />
        <a-form-item>
          <a-input
            v-decorator="[
              'thumbnail',
              {
                initialValue: dataItem.thumbnail,
                rules: [
                  {
                    required: true,
                    message: 'Link ảnh đại diện',
                  },

                  {
                    validator: validateImageURL,
                  },
                ],
              },
            ]"
            placeholder="Link ảnh đại diện cho bài hát... "
            @change="handleChange"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'name',
              {
                initialValue: dataItem.name,
                rules: [
                  {
                    required: true,
                    message: 'Tên bài hát!',
                  },
                ],
              },
            ]"
            placeholder="Nhập tên bài hát... "
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'singer',
              {
                initialValue: dataItem.singer,
                rules: [
                  {
                    required: true,
                    message: 'Tên ca sĩ',
                  },
                ],
              },
            ]"
            placeholder="Nhập tên ca sĩ... "
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'link',
              {
                initialValue: dataItem.link,
                rules: [
                  {
                    required: true,
                    message: 'Link mp3!',
                  },
                ],
              },
            ]"
            placeholder="Nhập link mp3... "
          />
        </a-form-item>
        <a-form-item>
          <a-textarea
            v-decorator="[
              'desc',
              {
                initialValue: dataItem.desc,
                rules: [{ required: true, message: 'Nhập mô tả về bài hát !' }],
              },
            ]"
            placeholder="Nhập mô tả về bài hát ..."
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
        </a-form-item>

        <a-form-item class="hidden">
          <a-input
            v-decorator="[
              'id',
              {
                initialValue: dataItem.id,
              },
            ]"
          />
        </a-form-item>
        <a-form-item class="hidden">
          <a-input
            v-decorator="[
              'status',
              {
                initialValue: dataItem.status || 1,
              },
            ]"
          />
        </a-form-item>
        <a-form-item class="hidden">
          <a-input
            v-decorator="[
              'source_id',
              {
                initialValue: dataItem.source_id,
              },
            ]"
          />
        </a-form-item>
        <a-form-item class="hidden">
          <a-input
            v-decorator="[
              'google_id',
              {
                initialValue: dataItem.google_id,
              },
            ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit" class="w-full">
          Cập nhật
        </a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
import UploadFileMp3 from './UploadFileMp3.vue'
import ViewMusic from './ViewMusic.vue'
import { keyGoogle } from '~/libraries/helpers'

const intiState = {
  thumbnail: '',
  name: '',
  singer: '',
  link: null,
  desc: '',
  source_id: 1,
  status: 1,
  google_id: '',
}

export default {
  name: 'FormMusic',
  components: { ViewMusic, UploadFileMp3 },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },

    result: {
      type: Boolean,
      default: Boolean,
    },
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, intiState),
      loading: false,
      initialDate: null,
      link_src: '',
    }
  },

  watch: {
    dataItem() {
      this.link_src = this.dataItem.thumbnail
    },

    result(prResult) {
      if (prResult) {
        this.link_src = ''
        this.form.resetFields()
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

    handleChange(e) {
      this.link_src = e.target.value
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

    handleMp3(e) {
      this.form.setFieldsValue({
        link: e,
        google_id: keyGoogle(e),
        source_id: 2,
      })
    },
  },
}
</script>
