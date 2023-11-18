<!-- eslint-disable vue/valid-v-slot -->
<template>
  <UpdateMain>
    <UpdateAlbum />
  </UpdateMain>
</template>

<script>
import UpdateMain from "./UpdateMain.vue";
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

  head() {
    return {
      title: "Thêm album ảnh",
    };
  },
};
</script>
