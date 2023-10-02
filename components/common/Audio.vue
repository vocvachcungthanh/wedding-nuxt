<template>
  <audio ref="audio" class="audio_cm" controls>
    <source :src="link" type="audio/mpeg" />
  </audio>
</template>

<script>
export default {
  name: 'AudioCommon',

  props: {
    link: {
      type: String,
      default: String,
    },

    play: {
      type: Boolean,
      default: Boolean,
    },
  },

  watch: {
    play() {
      if (this.play) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },

    link(newLink) {
      this.$refs.audio.src = newLink
      this.$refs.audio.load()
      this.$refs.audio.play()
      this.$refs.audio.addEventListener('ended', () => {
        this.$emit('stopPlay', false)
      })
    },
  },

  methods: {},
}
</script>

<style lang="scss">
.audio_cm {
  display: none;
}
</style>
