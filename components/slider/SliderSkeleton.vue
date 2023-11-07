<template>
  <div>
    <div class="slide__item">
      <div class="ration">
        <LoadingSkeleton class="ration__link" />
      </div>
    </div>

    <div class="slide__content">
      <div class="container">
        <div class="slider__header">
          <h2 class="slide__title font__dancing tex-center">
            <LoadingSkeleton class-name="skeleton-slider__name" />
            <span class="icon__heart">
              <font-awesome-icon icon="fa-solid fa-heart-pulse" />
            </span>
            <small>
              <LoadingSkeleton class-name="skeleton-slider__name" />
            </small>
          </h2>

          <span class="date">
            <LoadingSkeleton class-name="skeleton-slider__date" />
          </span>
        </div>
      </div>
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
.skeleton-slider {
  &__name,
  &__date {
    height: 10px;
    margin: auto;
    border-radius: 999px;
    border: 1px solid;
  }

  &__name {
    width: 100%;
  }

  &__date {
    width: 50px;
  }
}
</style>
