<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div class="page_album">
    <a-row type="flex" justify="center">
      <a-col :span="10">
        <a-card title="Quản lý Album" class="col">
          <a-button slot="extra" type="primary">
            <nuxt-link :to="{ name: 'admin-albums' }">
              <a-icon type="unordered-list" /> danh sách slider
            </nuxt-link>
          </a-button>
          <UpdateAlbum />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import UpdateAlbum from '~/components/admin/albums/UpdateAlbum.vue'

export default {
  name: 'IndexAlbums',

  components: {
    UpdateAlbum,
  },

  layout() {
    return 'LayoutAdmin'
  },

  head() {
    return {
      title: 'Thêm album ảnh',
    }
  },
}
</script>
