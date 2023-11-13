<template>
  <div class="page__bridesmaids-groomsmen">
    <BridesmaidsGroomsmen />
  </div>
</template>

<script>
import BridesmaidsGroomsmen from "~/components/admin/bridesmaids-groomsmen";
export default {
  components: {
    BridesmaidsGroomsmen,
  },

  layout() {
    return "LayoutAdmin";
  },
};
</script>
