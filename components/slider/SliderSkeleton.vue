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
            <LoadingSkeleton :style-name="styleName" />
            <span class="icon__heart">
              <font-awesome-icon icon="fa-solid fa-heart-pulse" />
            </span>
            <small>
              <LoadingSkeleton :style-name="styleName" />
            </small>
          </h2>

          <span class="date">
            <LoadingSkeleton :style-name="styleDate" />
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

  data() {
    return {
      styleName: {
        width: '100px',
        height: '10px',
        borderRadius: '999px',
        margin: 'auto',
        border: '1px solid',
      },

      styleDate: {
        width: '50px',
        height: '10px',
        margin: 'auto',
        borderRadius: '999px',
        border: '1px solid',
      },
    }
  },
}
</script>
