<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="page_album">
    <a-card title="Quản lý Album">
      <a-button slot="extra" type="primary" @click="handleCreate">
        <a-icon type="folder-add" /> Thêm album
      </a-button>
      <TableAlbum />
    </a-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TableAlbum from '~/components/admin/albums/TableAlbum.vue'

export default {
  name: 'IndexAlbums',

  components: {
    TableAlbum,
  },

  layout() {
    return 'LayoutAdmin'
  },

  head() {
    return {
      title: 'Danh sách album',
    }
  },

  methods: {
    handleCreate() {
      this.setDataItemsAlbum({})

      this.$router.push({
        name: 'admin-albums-update',
      })
    },

    ...mapActions({
      setDataItemsAlbum: 'ACT_DATA_ITEMS_ALBUM',
    }),
  },
}
</script>
