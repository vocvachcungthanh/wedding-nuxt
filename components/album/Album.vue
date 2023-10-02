<template>
  <section id="album" class="album">
    <div class="container">
      <HeaderAlbum />
      <div class="album__module">
        <div class="gallery">
          <ItemsAlbum
            v-for="item in albumGallerys"
            :key="item.id"
            :data-item="item"
          />
        </div>

        <infinite-loading v-if="isLoading" @infinite="loadingAlbum">
          <div slot="spinner"><a-spin /></div>
        </infinite-loading>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderAlbum from './HeaderAlbum.vue'
import ItemsAlbum from './ItemsAlbum.vue'

import '~/assets/scss/components/CM_Album.scss'

export default {
  name: 'AlbumGallery',

  components: {
    HeaderAlbum,
    ItemsAlbum,
  },

  data() {
    return {
      initPage: {
        limit: 2,
        page: 1,
      },

      isLoading: true,
    }
  },

  computed: {
    ...mapGetters({
      albumGallerys: 'GET_LIST_ALBUMS',
    }),
  },

  methods: {
    loadingAlbum($state) {
      this.$store
        .dispatch('ACT_GET_ALBUMS', this.initPage)
        .then((response) => {
          if (response.current_page < response.last_page) {
            this.initPage.page++

            $state.loaded()
          } else {
            $state.complete()
            this.isLoading = false
          }
        })
        .catch((_error) => {
          this.isLoading = false
        })
    },
  },
}
</script>
