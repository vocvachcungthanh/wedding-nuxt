<template>
  <a :href="link" class="gallery__box" :title="title">
    <div class="gallery__content">
      <h3 class="gallery__title">
        {{ title }}
      </h3>
      <div class="gallery__desc">
        {{ desc }}
      </div>
    </div>
  </a>
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
