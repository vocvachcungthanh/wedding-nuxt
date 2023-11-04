<template>
  <div class="container">
    <div class="wedding__event--header">
      <h3 class="wedding__event--title font__dancing">
        <LoadingSkeleton class-name="skeleton__event--title" />
      </h3>
      <p class="wedding__event--info">
        <LoadingSkeleton class-name="skeleton__event--info" />
        <LoadingSkeleton class-name="skeleton__event--info" />
      </p>
    </div>

    <div class="wedding__event--content">
      <div
        v-for="(_, index) in [1, 2]"
        :key="index"
        class="wedding__event--product"
      >
        <h3 class="wedding__event-title">
          <LoadingSkeleton class-name="skeleton__event--title" />
        </h3>

        <div class="wedding__event--avatar">
          <LoadingSkeleton class-name="skeleton__event--image" />
        </div>

        <div class="wedding__event--time">
          <LoadingSkeleton class-name="skeleton__event--time" />
        </div>
        <p class="wedding__event--desc">
          <LoadingSkeleton class-name="skeleton__event--address" />
        </p>
        <span class="link__map">
          <LoadingSkeleton class-name="skeleton__event--map" />
        </span>
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
.link__map {
  position: relative;
  width: 100px;
  height: 35px;
}
.skeleton__event {
  &--title,
  &--info,
  &--image,
  &--time,
  &--address,
  &--map {
    border-radius: 999px;
    border: 1px solid #ccc;
    padding: 3px 10px;
  }

  &--title {
    max-width: 300px;
    margin: auto;
    height: 15px;
  }

  &--info {
    margin-top: 10px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  &--image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    bottom: 0;
    border-radius: 15px;
  }

  &--map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
