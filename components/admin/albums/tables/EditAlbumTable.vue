<template>
  <button class="btn btn__view" @click="handleEdit">
    <a-tag color="orange"><a-icon type="edit" /> Sửa</a-tag>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    handleEdit() {
      this.setDataItem(this.dataItem)

      this.$router.push({
        name: 'admin-albums-update',
      })
    },

    ...mapActions({
      setDataItem: 'ACT_DATA_ITEMS_ALBUM',
    }),
  },
}
</script>
