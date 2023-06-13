<template>
  <div class="audio" @click="handleAudio">
    <audio ref="audio" controls>
      <source src="horse.ogg" type="audio/ogg" />
      <source
        src="https://cdn.biihappy.com/ziiweb/wedding-musics/BeautifulInWhite-ShaneFilan-524801.mp3"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<script>
import '~/assets/scss/components/CM_Mp3.scss'

export default {
  name: 'MP3',

  methods: {
    handleAudio() {
      this.$refs.audio.play()
    },
  },
}
</script>
