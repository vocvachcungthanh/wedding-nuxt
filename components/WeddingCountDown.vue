<template>
  <div class="container">
    <div class="wedding-getting font__dancing">
      <h2 class="title">
        {{ items.title }}
      </h2>

      <div class="page-w">
        <h3>
          {{ dateTime }}
        </h3>
        <LineHeart />

        <p class="info">
          {{ items.info }}
        </p>
      </div>

      <div class="count-down">
        <count-down :deadline="items.countDown"></count-down>
      </div>
    </div>
  </div>
</template>

<script>
import LineHeart from '~/components/common/Line.vue'

import '~/assets/scss/components/CM_WeddingCountDown.scss'

export default {
  components: {
    LineHeart,
  },

  props: {
    // eslint-disable-next-line vue/prop-name-casing
    TimeWedding: {
      type: String,
      default: '12,03,2023',
    },
  },

  computed: {
    items() {
      return {
        title: 'Chúng ta sẽ làm đám cưới',
        info: 'Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm hạnh phúc!',
        countDown: this.TimeWedding,
      }
    },

    dateTime() {
      return this.TimeWedding.replaceAll(',', '-')
    },
  },
}
</script>
