<template>
  <section id="congratulation" class="guestbook">
    <div class="container">
      <div class="guestbook_group">
        <a-form :form="form" class="guestbook__form" @submit="handleSubmit">
          <HeaderGuestkbook />
          <a-form-item class="group">
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Nhập tên của bạn !',
                    },
                  ],
                },
              ]"
              type="text"
              class="input"
              placeholder="Tên của bạn *"
            />
          </a-form-item>
          <a-form-item class="group">
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    {
                      type: 'email',
                      message: 'Email không hợp lệ !',
                    },
                    {
                      required: true,
                      message: 'Nhập  email !',
                    },
                  ],
                },
              ]"
              class="input"
              placeholder="E-mail"
            />
          </a-form-item>
          <a-form-item class="group">
            <a-textarea
              v-decorator="[
                'desc',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Nhập lới chúc của ban !',
                    },
                  ],
                },
              ]"
              rows="3"
              class="textarea"
              placeholder="Nhập lời chúc của bạn *"
            ></a-textarea>
          </a-form-item>

          <div class="group text-center">
            <button class="btn_save" html-type="submit">Gửi lời chúc</button>
          </div>

          <FooterGuestkbook />
        </a-form>
      </div>
    </div>
  </section>
</template>

<script>
import FooterGuestkbook from './FooterGuestkbook.vue'
import HeaderGuestkbook from './HeaderGuestkbook.vue'
import { MwHandle } from '~/libraries/helpers'

import '~/assets/scss/components/CM_Guestbook.scss'

const initiateState = {
  name: '',
  email: '',
  desc: '',
}

export default {
  name: 'QuestBook',

  components: {
    FooterGuestkbook,
    HeaderGuestkbook,
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, initiateState),
      loading: false,
      linkImage: '',
    }
  },

  methods: {
    // eslint-disable-next-line require-await
    async handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields(async (err, values) => {
        if (!err) {
          await this.$store
            .dispatch('ACT_CREATE_GUESTKBOOK', values)
            .then((res) => {
              MwHandle.handleSuccess({
                context: res,
              })

              this.form.setFieldsValue({
                name: '',
                email: '',
                desc: '',
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
