<template>
  <div class="count-dow">
    <div class="header-count-down">
      <h2 class="title">
        <LoadingSkeleton class-name="skeleton-count-down__title" />
      </h2>

      <div class="page-w">
        <h3>
          <LoadingSkeleton class-name="skeleton-count-down__date" />
        </h3>
        <LineHeart />

        <p class="info">
          <LoadingSkeleton class-name="skeleton-count-down__info" />
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

.skeleton-count-down {
  &__title,
  &__date,
  &__info {
    border-radius: 999px;
    margin: auto;
    border: 1px solid #ccc;
  }

  &__title {
    width: 300px;
    height: 30px;
  }

  &__date {
    width: 200px;
    height: 25px;
  }

  &__info {
    width: 500px;
    height: 10px;
  }
}
</style>
