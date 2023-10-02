<template>
  <div class="table__avatar">
    <img :src="dataItem.image" :alt="dataItem.title" />
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>
