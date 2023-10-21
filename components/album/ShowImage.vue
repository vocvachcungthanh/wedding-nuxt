<template>
  <div class="album__show">
    <div class="ant-modal-mask" @click="handleClone"></div>
    <div class="module">
      <img :src="dataItem.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    handleClone() {
      this.$emit('toggleShow', false)
    },
  },
}
</script>
