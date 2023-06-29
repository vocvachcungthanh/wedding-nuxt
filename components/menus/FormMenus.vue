<template>
  <a-form
    :form="form"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 24 }"
    @submit="handleSubmit"
  >
    <a-form-item label="Tên menu">
      <a-input
        v-decorator="[
          'name',
          {
            rules: [
              { required: true, message: 'Tên menu không được bỏ trống!' },
            ],
          },
        ]"
        :v-model="menus.name"
        placeholder="Nhập tên menu..."
      />
    </a-form-item>

    <a-form-item label="Link">
      <a-input
        v-decorator="[
          'link',
          {
            rules: [
              { required: true, message: 'Link menu không được bỏ trống!' },
            ],
          },
        ]"
        :v-model="menus.link"
        placeholder="Nhập link menu..."
      />
    </a-form-item>

    <a-form-item>
      <a-radio-group
        v-decorator="[
          'status',
          {
            initialValue: menus.status,
          },
        ]"
        name="radioGroup"
        @change="handleStatus"
      >
        <a-radio :value="1"> Hiển thị </a-radio>
        <a-radio :value="0"> Ẩn</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 24 }">
      <a-button type="primary" html-type="submit"> Thêm menu </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { MwHandle } from '~/libraries/helpers/notification'

export default {
  name: 'FormMenu',

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),

      menus: {
        name: '',
        link: '',
        status: 1,
      },
    }
  },

  methods: {
    handleStatus(e) {
      const filedStatus = e.target.value

      this.menus.status = filedStatus
    },

    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.menus = values

          this.$store
            .dispatch('ACT_MENUS_CREATE', this.menus)
            .then((response) => {
              MwHandle.handleSuccess({
                context: response,
              })
            })
            .catch((error) => {
              MwHandle.handleError({
                context: error,
              })
            })
        }
      })
    },
  },
}
</script>
