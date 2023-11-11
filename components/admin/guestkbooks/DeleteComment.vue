<template>
  <ConfirmDelete @onHeader="handleDelete">
    <a-button type="danger" class="btn__delete" size="small"> Xóa </a-button>
  </ConfirmDelete>
</template>

<script>
import ConfirmDelete from "~/components/common/ConfirmDelete.vue";
import { MwHandle } from "~/libraries/helpers";

export default {
  components: {
    ConfirmDelete,
  },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  methods: {
    async handleDelete() {
      this.$nuxt.$loading.start();
      await this.$store
        .dispatch("ACT_COMMENT_DELETE", this.dataItem.id)
        .then((res) => {
          MwHandle.handleSuccess({ context: res });
        })
        .catch((error) => {
          MwHandle.handleError({ context: error });
        });

      this.$nuxt.$loading.finish();
    },
  },
};
</script>
