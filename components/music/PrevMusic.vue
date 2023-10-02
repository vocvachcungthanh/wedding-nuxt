<template>
  <a-tooltip placement="top" overlay-class-name="audio__tooltip">
    <template v-if="dataItem.name" slot="title">
      <InfoMusic :data-item="dataItem" />
    </template>
    <div :class="classAudido">
      <a-icon type="step-backward" />
    </div>
  </a-tooltip>
</template>

<script>
import InfoMusic from './InfoMusic.vue'

export default {
  components: { InfoMusic },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    classAudido() {
      return this.dataItem.name
        ? 'audio-prev audio-item'
        : 'audio-prev audio-item disabled'
    },
  },
}
</script>
