<template>
  <a-popconfirm
    :title="messAccuracy"
    ok-text="Có"
    cancel-text="Không"
    @confirm="handleDelete"
  >
    <a-icon slot="icon" type="question-circle-o" />
    <VueButton class-name="btn__delete" title="Click vào đễ xóa slider">
      <a-icon type="delete" /> Xóa
    </VueButton>
  </a-popconfirm>
</template>

<script>
import VueButton from '~/components/common/VueButton.vue'
import { MESS_ACCURACY, MESS_DELETE_SUCCESS } from '~/libraries/constant'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    VueButton,
  },

  props: {
    sliderId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      visible: true,
    }
  },

  computed: {
    messAccuracy() {
      return MESS_ACCURACY
    },
  },

  methods: {
    async handleDelete(e) {
      const fieldDelete = e.isTrusted

      // eslint-disable-next-line no-useless-return
      if (!fieldDelete) return
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('ACT_DELETE_SLIDER', this.sliderId)
        .then((res) => {
          if (res.status === 'ok') {
            MwHandle.handleSuccess({ context: MESS_DELETE_SUCCESS('sliders') })
          }
        })
        .catch((error) => {
          MwHandle.handleError({ context: error.message })
        })

      this.$nuxt.$loading.finish()
    },
  },
}
</script>
