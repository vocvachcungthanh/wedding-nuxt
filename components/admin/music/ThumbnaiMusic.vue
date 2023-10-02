<template>
  <div :class="classMusic">
    <img class="music__img" :src="dataItem.thumbnail" :alt="dataItem.name" />
    <span v-if="play" class="music__play">
      <img src="~/assets/images/icon-playing.gif" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },

    play: {
      type: Boolean,
      default: Boolean,
    },
  },

  computed: {
    classMusic() {
      return `music__thumbnai ${this.play ? 'music__thumbnai--action' : ''}`
    },
  },
}
</script>
