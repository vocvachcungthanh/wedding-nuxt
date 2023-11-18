<template>
  <button class="btn btn__view" @click="handleEdit">
    <a-tag color="orange"><a-icon type="edit" /> Sửa</a-tag>
  </button>
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
    handleEdit() {
      this.$router.push({
        name: "admin-albums-update-id",
        params: {
          id: this.dataItem.id,
        },
      });
    },
  },
};
</script>
