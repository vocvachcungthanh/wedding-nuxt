<template>
  <div>
    <a-drawer
      :title="title"
      :visible="visible"
      :width="500"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <slot></slot>
    </a-drawer>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'DrawerCommon',

  props: {
    title: {
      type: String,
      default: 'Thêm mới',
    },
  },

  computed: {
    ...mapState({
      visible: (state) => state.visible,
    }),
  },

  methods: {
    onClose() {
      this.setVisible(false)
    },

    ...mapActions({
      setVisible: 'ACT_SET_VISIBLE',
    }),
  },
}
</script>
