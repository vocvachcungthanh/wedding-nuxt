<template>
  <div class="group__footer">
    <div v-if="data.length > 0" class="guestkbook__box">
      <ItemGuestkbook
        v-for="item in data"
        :key="item.id"
        :name="item.name"
        :desc="item.desc"
      />
    </div>
  </div>
</template>

<script>
import ItemGuestkbook from './ItemGuestkbook.vue'

export default {
  components: {
    ItemGuestkbook,
  },

  props: {
    data: {
      type: Array,
      default: Array,
    },
  },
}
</script>
