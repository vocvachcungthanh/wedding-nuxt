<template>
  <style lang="scss">
    .guestbook::after {
      background-image: url('{{ bg }}');
    }
  </style>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: String,
    },
  },
}
</script>
