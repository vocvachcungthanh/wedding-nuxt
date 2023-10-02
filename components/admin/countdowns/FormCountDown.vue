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
        />
      </a-form-item>
      <a-form-item>
        <a-date-picker
          v-decorator="[
            'date',

            {
              initialValue: items.date,
              rules: [
                {
                  required: true,
                  message: 'Chọn ngày cưới ...',
                },
              ],
            },
          ]"
          placeholder="Chọn ngày cưới"
          :size="size"
          format="DD-MM-YYYY"
          class="picker-cus"
        />
      </a-form-item>
      <a-form-item>
        <a-textarea
          v-decorator="[
            'desc',
            {
              initialValue: items.desc,
              rules: [{ required: true, message: 'Nhập mô tả !' }],
            },
          ]"
          placeholder="Nhập mô tả ..."
          :auto-size="{ minRows: 4 }"
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
import moment from 'moment'

import './scss/FormCountDow.scss'

const intiState = {
  title: '',
  date: null,
  desc: '',
}

export default {
  name: 'FormEvent',

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
      size: 'default',
      initialDate: null,
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          const formattedDate = moment(values.date).format('YYYY-MM-DD')
          // eslint-disable-next-line no-console
          console.log(formattedDate)
          this.$emit('submit', {
            ...values,
            date: formattedDate,
          })
        }
      })
    },
  },
}
</script>
