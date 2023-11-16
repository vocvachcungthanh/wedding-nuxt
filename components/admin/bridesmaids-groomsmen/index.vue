<template>
  <a-row :gutter="[30, 30]">
    <a-col
      :md="{ span: 24 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 7 }"
    >
      <Bridesmaids :bridesmaids="data.Bridesmaids" />
    </a-col>
    <a-col
      :md="{ span: 24 }"
      :lg="{ span: 12 }"
      :xl="{ span: 12 }"
      :xxl="{ span: 7 }"
    >
      <Groomesmen :groomesmen="data.Groomsmen" />
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from "vuex";
import Bridesmaids from "./Bridesmaids.vue";
import Groomesmen from "./Groomesmen.vue";

export default {
  name: "CmBridesmaids",

  components: {
    Bridesmaids,
    Groomesmen,
  },

  computed: {
    ...mapGetters({
      data: "GET_BRIDESMAIDS_GROOMSMEN",
    }),
  },

  async created() {
    await this.$store.dispatch("ACT_GET_ALL_BRIDESMAIDS_GROOMSMEN");
  },
};
</script>
