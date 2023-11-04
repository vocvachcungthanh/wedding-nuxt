<template>
  <li class="menu__list">
    <LoadingSkeleton
      class-name="menu__link"
      :style-name="{ height: '20px', width: '100px', margin: '10px 5px' }"
    />
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
