<template>
  <VueButton
    class-name="btn__logout"
    title="Đăng xuất"
    placement="left"
    @click.native="handleLogout"
  >
    <a-icon type="logout" />
  </VueButton>
</template>

<script>
import { mapActions } from 'vuex'

import { MwHandle } from '~/libraries/helpers'
import VueButton from '~/components/common/VueButton.vue'

export default {
  name: 'LogoutAdmin',

  components: {
    VueButton,
  },

  methods: {
    async handleLogout() {
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('ACT_AUTH_LOGOUT')
        .then((res) => {
          this.$router.push('/')

          MwHandle.handleSuccess({
            context: res,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
      this.$nuxt.$loading.finish()
    },

    ...mapActions({
      logout: 'ACT_AUTH_LOGOUT',
    }),
  },
}
</script>
