<template>
  <div class="gallery__item">
    <LoadingSkeleton class-name="gallery__img skeleton__item--gallery" />
  </div>
</template>

<script>
import LoadingSkeleton from '~/components/common/LoadingSkeleton.vue'

export default {
  components: {
    LoadingSkeleton,
  },
}
</script>

<style lang="scss">
.skeleton__item--gallery {
  height: 470px;
}
</style>
