<template>
  <div class="bridesmaids-groomsmen__item">
    <div class="bridesmaids-groomsmen__header">
      <div class="bridesmaids-groomsmen__header--title">
        {{ dataItem.title }}
      </div>
    </div>
    <div class="bridesmaids-groomsmen__avatar">
      <h3 class="bridesmaids-groomsmen__name">{{ dataItem.name }}</h3>
      <img :src="dataItem.avatar" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DataItem",

  props: {
    // eslint-disable-next-line vue/require-default-prop
    dataItem: {
      type: Object,
      defaut: Object,
    },
  },
};
</script>
