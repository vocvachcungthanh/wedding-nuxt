<template>
  <section id="album" class="album">
    <div class="container">
      <div class="album__header">
        <h2 class="album__title font__dancing">Album Hình Cưới</h2>
      </div>
      <div class="album__module">
        <div class="album__gallery">
          <div
            v-for="(group, index) in groups"
            :key="index"
            class="album__group"
          >
            <div v-for="item in group" :key="item.album_id" class="album__item">
              <img :src="item.album_image" alt="" class="album__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import '~/assets/scss/components/CM_Album.scss'

export default {
  name: 'AlbumGallery',

  computed: {
    groups() {
      const groupSize = 6
      const totalGroups = Math.ceil(this.getListAlbums.length / groupSize)
      const groups = []

      for (let i = 0; i < totalGroups; i++) {
        const start = i * groupSize
        const end = start + groupSize
        const group = this.getListAlbums.slice(start, end)
        groups.push(group)
      }

      return groups
    },

    ...mapGetters({
      getListAlbums: 'GET_LIST_ALBUMS',
    }),
  },

  created() {
    this.actGetAlbums()
  },

  methods: {
    ...mapActions({
      actGetAlbums: 'ACT_GET_ALBUMS',
    }),
  },
}
</script>
