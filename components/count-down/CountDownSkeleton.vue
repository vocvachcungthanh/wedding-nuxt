<template>
  <div class="count-dow">
    <div class="header-count-down">
      <h2 class="title">
        <LoadingSkeleton :style-name="styleTitle" />
      </h2>

      <div class="page-w">
        <h3>
          <LoadingSkeleton :style-name="styleDate" />
        </h3>
        <LineHeart />

        <p class="info">
          <LoadingSkeleton :style-name="styleInfo" />
        </p>
      </div>
    </div>

    <div class="count-down__skeleton">
      <LoadingSkeleton class-name="count-down__skeleton-item" />
      <LoadingSkeleton class-name="count-down__skeleton-item" />
      <LoadingSkeleton class-name="count-down__skeleton-item" />
      <LoadingSkeleton class-name="count-down__skeleton-item" />
    </div>
  </div>
</template>

<script>
import LoadingSkeleton from '~/components/common/LoadingSkeleton.vue'

export default {
  components: {
    LoadingSkeleton,
  },

  data() {
    return {
      styleTitle: {
        width: '300px',
        height: '30px',
        borderRadius: '999px',
        margin: 'auto',
        border: '1px solid #ccc',
      },

      styleDate: {
        width: '200px',

        height: '25px',
        borderRadius: '999px',
        margin: 'auto',
        border: '1px solid #ccc',
      },

      styleInfo: {
        width: '500px',
        height: '10px',
        borderRadius: '999px',
        margin: '10px auto',
        border: '1px solid #ccc',
      },
    }
  },
}
</script>

<style lang="scss">
.header-count-down {
  .title {
    &::before {
      display: none;
    }
  }
}

.count-down__skeleton {
  display: flex;
  justify-content: center;
  gap: 10px;

  &-item {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
}
</style>
