<template>
  <div class="bridesmaids-groomsmen__item">
    <div class="bridesmaids-groomsmen__header">
      <div class="bridesmaids-groomsmen__header--title">
        <LoadingSkeleton
          class-name="skeleton-bridesmaids-groomsmen__header--title"
        />
      </div>
    </div>
    <div class="bridesmaids-groomsmen__avatar">
      <h3 class="bridesmaids-groomsmen__name">
        <LoadingSkeleton class-name="skeleton-bridesmaids-groomsmen__name" />
      </h3>
      <LoadingSkeleton class-name="skeleton-bridesmaids-groomsmen__image" />
    </div>
  </div>
</template>

<script>
import LoadingSkeleton from "~/components/common/LoadingSkeleton.vue";

export default {
  components: {
    LoadingSkeleton,
  },
};
</script>

<style lang="scss">
.skeleton-bridesmaids-groomsmen {
  &__header--title,
  &__name {
    padding: 15px 50px;
    border-radius: 999px;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
