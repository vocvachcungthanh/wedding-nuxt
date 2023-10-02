<template>
  <a-tooltip placement="top" overlay-class-name="audio__tooltip">
    <template v-if="dataItem.name" slot="title">
      <InfoMusic :data-item="dataItem" :play="play" />
    </template>
    <div class="audio-play audio-item">
      <a-icon v-if="play" type="pause-circle" />
      <a-icon v-else type="play-circle" />
    </div>
  </a-tooltip>
</template>

<script>
import InfoMusic from './InfoMusic.vue'

export default {
  components: { InfoMusic },

  props: {
    play: {
      type: Boolean,
      default: Boolean,
    },
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>
