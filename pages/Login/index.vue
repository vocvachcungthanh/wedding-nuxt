<template>
  <section class="section__login">
    <div class="container">
      <div class="login">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <h1 class="login__title">Đăng nhập trang quản trị</h1>
          <a-alert v-if="message" :message="message" type="error" show-icon />
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [
                    { required: true, message: requiredLogin('Tài khoản') },
                  ],
                },
              ]"
              placeholder="Tài khoản"
            >
              <a-icon slot="prefix" type="user" class="a__icon" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: requiredLogin('Mật khẩu') },
                  ],
                },
              ]"
              type="password"
              placeholder="Mật khẩu"
            >
              <a-icon slot="prefix" type="lock" class="a__icon" />
            </a-input>
          </a-form-item>
          <a-form-item class="m__0">
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              Nhớ mật khẩu
            </a-checkbox>
            <a class="login-form-forgot" href=""> Quên mật khẩu </a>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Đăng nhập
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </section>
</template>

<script>
import { requiredMessage } from '~/constant/index.js'

import '~/assets/scss/pages/PG_Login.scss'

export default {
  layout() {
    return 'LayoutLogin'
  },

  data() {
    return {
      username: '',
      password: '',
      message: false,
    }
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$nuxt.$loading.start()
          this.$store
            .dispatch('ACT_AUTH_LOGIN', values)
            .then((res) => {})
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log(error)
              this.message = error
            })

          this.$nuxt.$loading.finish()
        }
      })
    },

    requiredLogin(name) {
      return requiredMessage(name)
    },
  },
}
</script>

<style lang="scss"></style>
