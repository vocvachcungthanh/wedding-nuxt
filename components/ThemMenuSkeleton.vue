<template>
  <li class="menu__list">
    <LoadingSkeleton class-name="menu__link skeleton-menu__link" />
  </li>
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
.skeleton-menu__link {
  width: 100px;
  margin: 10px 5px;
  height: 20px;
}
</style>
