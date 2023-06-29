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
export default {
  name: 'DrawerCommon',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: 'Thêm mới',
    },
  },

  methods: {
    onClose() {
      this.$emit('visibleEvent', false)
    },
  },
}
</script>
