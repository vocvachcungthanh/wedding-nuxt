<template>
  <div class="guestkbook__item">
    <h3 class="ceo__title">{{ name }}</h3>

    <p class="ceo__info">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: String,
    },

    desc: {
      type: String,
      default: String,
    },
  },
}
</script>
