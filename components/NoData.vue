<template>
  <a-empty class="no__data" :description="getNoData" />
</template>

<script>
import { MESS_NO_DATA } from '~/libraries/constant'

export default {
  computed: {
    getNoData: () => MESS_NO_DATA,
  },
}
</script>
