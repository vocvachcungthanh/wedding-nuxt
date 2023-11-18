<!-- eslint-disable vue/valid-v-slot -->
<template>
  <UpdateMain>
    <UpdateAlbum />
  </UpdateMain>
</template>

<script>
import UpdateMain from "./UpdateMain.vue";
import { MwHandle } from "~/libraries/helpers";
import UpdateAlbum from "~/components/admin/albums/UpdateAlbum.vue";

export default {
  name: "IndexAlbums",

  components: {
    UpdateAlbum,
    UpdateMain,
  },

  layout() {
    return "LayoutAdmin";
  },

  validate(context) {
    if (/^\d+$/.test(context.params.id)) {
      return true;
    } else {
      context.redirect({
        name: "admin-albums",
      });
    }
  },

  head() {
    return {
      title: "Sửa sliders",
    };
  },

  async created() {
    const id = this.$route.params.id;

    await this.$store
      .dispatch("ACT_DATA_ITEMS_ALBUM", id)
      .then()
      .catch((error) => {
        this.$router.push({ name: "admin-albums" });
        MwHandle.handleWarning({ context: error });
      });
  },
};
</script>
