<template>
  <div class="wedding__event--header">
    <h3 class="wedding__event--title font__dancing">Sự Kiện Cưới</h3>
    <p class="wedding__event--info">
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: String,
    },
  },
}
</script>
