<template>
  <VueButton
    class-name="btn__status"
    title="Click vào để đổi trạng thái slider"
    @click.native="handleUpdateSlider"
  >
    <template v-if="status === 1"> <a-icon type="unlock" /> Hiển thị </template>

    <template v-else> <a-icon type="lock" /> Ẩn </template>
  </VueButton>
</template>

<script>
import { MwHandle } from '~/libraries/helpers'
import VueButton from '~/components/common/VueButton.vue'

export default {
  name: 'ButtonStatus',

  components: {
    VueButton,
  },

  props: {
    status: {
      type: Number,
      default: 0,
    },

    sliderId: {
      type: Number,
      default: null,
    },
  },

  methods: {
    handleUpdateSlider() {
      this.$store
        .dispatch('ACT_UPDATE_SLIDER', {
          id: this.sliderId,
          status: this.status === 1 ? 0 : 1,
        })
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          })
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    },
  },
}
</script>
