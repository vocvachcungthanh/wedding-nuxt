<template>
  <a-popconfirm
    title="Bạn có muốn xóa"
    ok-text="Có"
    cancel-text="Không"
    @confirm="(e) => onHeader(e)"
  >
    <slot></slot>
  </a-popconfirm>
</template>

<script>
export default {
  methods: {
    onHeader(e) {
      this.$emit("onHeader", e);
    },
  },
};
</script>
