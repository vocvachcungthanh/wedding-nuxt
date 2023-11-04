<template>
  <div class="gallery__item">
    <LoadingSkeleton
      class-name="gallery__img"
      :style-name="{ height: '470px' }"
    />
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
