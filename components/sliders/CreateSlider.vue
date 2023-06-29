<template>
  <div class="create__slider">
    <div v-if="data.slider_img" class="view__img">
      <img :src="data.slider_img" alt="" />
    </div>
    <a-form
      :form="form"
      :label-col="{ span: 24 }"
      :wrapper-col="{ span: 24 }"
      @submit="handleSubmit"
    >
      <a-form-item label="Link ảnh">
        <a-input
          v-decorator="[
            'link_img',
            {
              rules: [{ required: true, message: 'Nhập link ảnh!' }],
              initialValue: data.slider_img,
            },
          ]"
          :default-value="data.slider_img"
          placeholder="Nhập link ảnh"
          @change="hanChangeImage"
        />
      </a-form-item>
      <a-form-item label="Link">
        <a-input
          v-decorator="[
            'link',
            {
              initialValue: data.slider_link,
            },
          ]"
          placeholder="link"
        />
      </a-form-item>
      <a-form-item>
        <a-radio-group
          v-decorator="[
            'status',
            {
              initialValue: data.slider_status,
            },
          ]"
          name="radioGroup"
          @change="onChange"
        >
          <a-radio :value="1"> Hiển thị </a-radio>
          <a-radio :value="0"> Ẩn</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 24 }">
        <a-button type="primary" html-type="submit"> Cập nhật</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'

export default {
  props: {
    dataItem: {
      type: Object,

      default: Object,
    },

    visible: {
      type: Boolean,
      default: Boolean,
    },
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),

      data: {
        slider_status: 1,
      },
    }
  },

  watch: {
    visible() {
      if (this.visible === false) {
        this.form.resetFields()
        this.data = {
          slider_status: 1,
        }
      }
    },

    dataItem() {
      this.data = { ...this.dataItem }
    },
  },

  created() {
    this.data = { ...this.dataItem }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const params = {
            ...values,
          }

          if (this.data.slider_id) {
            this.editSlider(params)
          } else {
            this.createSlider(params)
          }
        }
      })
    },

    createSlider(params) {
      this.$store
        .dispatch('ACT_CREATE_SLIDERS', params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
          this.viewImage = ''
          this.data = {
            slider_status: 1,
          }
          this.form.resetFields()
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    editSlider(params) {
      this.$store
        .dispatch('ACT_EDIT_SLIDER', {
          ...params,
          id: this.data.slider_id,
        })
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
          this.viewImage = ''
          this.form.resetFields()
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    onChange(e) {
      this.status = e.target.value
    },

    hanChangeImage(e) {
      this.data.slider_img = e.target.value
    },
  },
}
</script>

<style lang="scss">
.create__slider {
  max-width: 500px;
  width: 100%;

  .view__img {
    max-height: 300px;
    overflow: hidden;
    margin-bottom: 2rem;

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>
