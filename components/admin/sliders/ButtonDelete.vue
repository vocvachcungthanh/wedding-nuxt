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
import { MESS_ACCURACY } from '~/libraries/constant'
import { MwHandle } from '~/libraries/helpers'

export default {
  components: {
    VueButton,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
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

      const params = {
        id: this.dataItem.id,
        google_id: this.dataItem.google_id,
        source_id: this.dataItem.source_id,
      }

      if (!fieldDelete) return
      this.$nuxt.$loading.start()
      await this.$store
        .dispatch('ACT_DELETE_SLIDER', params)
        .then((res) => {
          if (res.status === 'ok') {
            MwHandle.handleSuccess({ context: res })
          }
        })
        .catch((error) => {
          MwHandle.handleError({ context: error })
        })

      this.$nuxt.$loading.finish()
    },
  },
}
</script>
