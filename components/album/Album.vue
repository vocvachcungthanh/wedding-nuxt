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
            @click.native="() => handleShow(item)"
          />
        </div>
        <ShowImage
          v-if="isShow"
          :data-item="dataItem"
          @toggleShow="handleClone"
        />
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
import ShowImage from './ShowImage.vue'

export default {
  name: 'AlbumGallery',

  components: {
    HeaderAlbum,
    ItemsAlbum,
    ShowImage,
  },

  data() {
    return {
      initPage: {
        limit: 2,
        page: 1,
      },

      isLoading: true,
      isShow: false,
      dataItem: {},
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

    handleShow(dataItem) {
      this.dataItem = dataItem
      document.body.classList.add('overflow-hidden')
      this.isShow = !this.isShow
    },

    handleClone(e) {
      this.isShow = e
      document.body.classList.remove('overflow-hidden')
    },
  },
}
</script>
