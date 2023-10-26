<template>
  <button class="btn btn__edit" @click="handleEdit">
    <a-icon type="edit" />
    Sửa
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
      this.setFromLoveStory(this.dataItem)
      this.setVisible(true)
    },

    ...mapActions({
      setVisible: 'ACT_SET_VISIBLE',
      setFromLoveStory: 'ACT_GET_DATA_FROM',
    }),
  },
}
</script>
