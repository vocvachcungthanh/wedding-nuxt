<template>
  <div class="container">
    <div class="couple-content">
      <h2 class="couple__title font__dancing">
        <LoadingSkeleton class-name="title__text" />
      </h2>
      <div class="couple__box">
        <div class="couple__item">
          <div class="couple__desc">
            <div class="couple__desc--content">
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
            </div>

            <div class="couple__link">
              <LoadingSkeleton class-name="link__f" />
              <LoadingSkeleton class-name="link__f" />
            </div>
          </div>
          <div class="couple__avatar">
            <LoadingSkeleton class="avatar__img" />
          </div>
        </div>
        <span class="icon__couple">
          <font-awesome-icon icon="fa-solid fa-heart-pulse" />
        </span>
        <div class="couple__item">
          <div class="couple__desc">
            <div class="couple__desc--content">
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
              <LoadingSkeleton class-name="desc__text" />
            </div>

            <div class="couple__link">
              <LoadingSkeleton class-name="link__f" />
              <LoadingSkeleton class-name="link__f" />
            </div>
          </div>
          <div class="couple__avatar">
            <LoadingSkeleton class="avatar__img" />
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
.couple .couple-content .couple__box {
  column-gap: 2rem;
}

.title__text {
  width: 300px;
  display: inline-flex;
  height: 20px;
  border-radius: 999px;
  border: 1px solid #ccc;
}

.desc__text {
  width: 300px;
  height: 20px;
  margin: 10px 0;
  border-radius: 999px;
  border: 1px solid #ccc;
}

.avatar__img {
  width: 230px;
  height: 230px;
  border-radius: 100%;
}

.link__f {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid #ccc;
}
</style>
