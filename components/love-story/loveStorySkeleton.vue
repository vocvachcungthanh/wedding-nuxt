<template>
  <div class="container">
    <div class="love__story--header">
      <h2 class="love__story--title font__dancing">
        <LoadingSkeleton class-name="skeletion-love__title" />
      </h2>
      <p class="love__stroy--info">
        <LoadingSkeleton class-name="skeletion-love__info" />
        <LoadingSkeleton class-name="skeletion-love__info" />
      </p>
    </div>
    <div class="love__story--content">
      <div class="love__group">
        <div
          v-for="(_item, index) in [1, 2, 4]"
          :key="index"
          class="love__group--item"
        >
          <div class="love__group--context">
            <div class="love__group--header font__dancing">
              <h3 class="love__group--title">
                <LoadingSkeleton class-name="skeletion-love__group--title" />
              </h3>
              <time class="love__time">
                <LoadingSkeleton class-name="skeletion-love__time" />
              </time>
            </div>
            <div class="love__group--desc">
              <LoadingSkeleton
                v-for="(_, index2) in [1, 2, 3, 4, 5, 6]"
                :key="index2"
                class-name="skeletion-love__text"
              />
            </div>
          </div>
          <div class="love__group--avatar">
            <LoadingSkeleton class-name="love__image" />
          </div>
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
.skeletion-love {
  &__title,
  &__group--title {
    max-width: 200px;
    margin: auto;
    padding: 5px 10px;
    border-radius: 9999px;
    border: 1px solid #ccc;
  }

  &__info {
    margin-top: 10px;
    padding: 3px 5px;
    border-radius: 999px;
    border: 1px solid #ccc;
  }

  &__time {
    margin-bottom: 5px;
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid #ccc;
    max-width: 50px;
    margin-left: auto;
  }

  &__text {
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .love__image {
    max-width: 400px;
    width: 100%;
    max-height: 400px;

    height: 100%;
  }
}

@media (max-width: 500px) {
  .love__story--content .love__group--item .love__group--avatar .love__image {
    min-height: 400px;
  }
}
</style>
