<template>
  <a-row :gutter="30">
    <a-col :md="{ span: 14 }" :lg="{ spa: 8 }" :xxl="{ span: 8 }">
      <Bridesmaids />
    </a-col>
    <a-col :md="{ span: 24 }" :lg="{ spa: 8 }" :xxl="{ span: 8 }">
      <Groomesmen />
    </a-col>
  </a-row>
</template>

<script>
import Bridesmaids from "./Bridesmaids.vue";
import Groomesmen from "./Groomesmen.vue";

export default {
  name: "CmBridesmaids",

  components: {
    Bridesmaids,
    Groomesmen,
  },
};
</script>
