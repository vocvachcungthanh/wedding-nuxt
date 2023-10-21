<template>
  <div class="gallery__box">
    <div class="gallery__content">
      <h3 class="gallery__title">
        {{ title }}
      </h3>
      <div class="gallery__desc">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: String,
    },

    desc: {
      type: String,
      default: String,
    },

    link: {
      type: String,
      default: String,
    },
  },
}
</script>
