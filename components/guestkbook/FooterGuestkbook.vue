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
import { mapGetters } from 'vuex'

import ItemGuestkbook from './ItemGuestkbook.vue'

export default {
  components: {
    ItemGuestkbook,
  },

  computed: {
    ...mapGetters({
      data: 'GET_GUESTKBOOKS',
    }),
  },
}
</script>
