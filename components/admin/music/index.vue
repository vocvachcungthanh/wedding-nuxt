<template>
  <a-row :gutter="10">
    <template v-if="music.length > 0">
      <a-col v-for="item in music" :key="item.id" class="a__col" :span="12">
        <div class="music__group">
          <ThumbnaiMusic
            :data-item="item"
            :play="item.play"
            @click.native="() => handlePlay(item)"
          />

          <div class="music__content" @click="() => hanldeEdit(item)">
            <h3 class="music__title">{{ item.name }}</h3>
            <p class="music__singer">{{ item.singer }}</p>
          </div>
          <div class="music__desc">
            <p>
              {{ item.desc }}
            </p>
          </div>

          <DeleteMusic :data-item="item" />
        </div>
      </a-col>

      <AudioMp3 :link="link" :play="play" @stopPlay="stopPlay" />
    </template>

    <infinite-loading v-if="isLoading" @infinite="loadingSlider">
      <div slot="spinner"><a-spin /></div>
    </infinite-loading>
  </a-row>
</template>

<script>
import { mapGetters } from 'vuex'

import DeleteMusic from './DeleteMusic.vue'
import ThumbnaiMusic from './ThumbnaiMusic.vue'
import Audio from '~/components/common/Audio.vue'

import '~/assets/scss/components/admin/CM_Music.scss'

export default {
  name: 'MusicGroup',

  components: {
    AudioMp3: Audio,
    DeleteMusic,
    ThumbnaiMusic,
  },

  data() {
    return {
      page: 1,
      isLoading: true,
      play: false,
      link: '',
    }
  },

  computed: {
    ...mapGetters({
      music: 'GET_MUSICS',
    }),
  },

  methods: {
    async loadingSlider($state) {
      await this.$store
        .dispatch('ACT_GET_MUSIC_ADMIN', {
          page: this.page,
        })
        .then((response) => {
          if (response.current_page < response.last_page) {
            this.page++
            $state.loaded()
          } else {
            $state.complete()
            this.isLoading = false
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },

    hanldeEdit(item) {
      this.$emit('update', item)
    },

    handlePlay(dataItem) {
      this.play = !dataItem.play
      this.link = dataItem.link

      this.music.forEach((item) => {
        if (item.id === dataItem.id) {
          item.play = !dataItem.play
        } else {
          item.play = false
        }
      })
    },

    stopPlay(e) {
      this.play = e

      this.music.forEach((item) => {
        item.play = false
      })
    },
  },
}
</script>
