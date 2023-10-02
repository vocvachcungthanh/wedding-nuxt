<template>
  <div class="music__view">
    <img class="music__view--src" :src="view" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    view: {
      type: String,
      default: String,
    },

    name: {
      type: String,
      default: String,
    },
  },
}
</script>
