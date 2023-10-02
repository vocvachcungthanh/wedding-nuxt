<template>
  <div class="audio__group">
    <div class="audio__thumbnail">
      <img :src="dataItem.thumbnail" :alt="dataItem.name" />
      <span v-if="play" class="audo__playing">
        <img src="~/assets/images/icon-playing.gif" alt="" />
      </span>
    </div>
    <div class="audio__content">
      <h3 class="audio__title">
        {{ dataItem.name }}
      </h3>
      <p class="audio__singer">
        {{ dataItem.singer }}
      </p>
    </div>
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
}
</script>
