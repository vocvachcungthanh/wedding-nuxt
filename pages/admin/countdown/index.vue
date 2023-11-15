<template>
  <div class="count-dow">
    <a-row>
      <a-col :lg="{ span: 12 }" :xl="{ span: 9 }" :xxl="{ span: 6 }">
        <a-card
          title="Ngày chung ta về chung một nhà"
          :head-style="customHeadStyle"
        >
          <CountDown />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { CountDown } from "~/components/admin/countdowns";

export default {
  components: { CountDown },

  layout() {
    return "LayoutAdmin";
  },

  data() {
    return {
      customHeadStyle: {
        textAlign: "center",
        textTransform: "uppercase",
      },
    };
  },

  head() {
    return {
      title: "Về một nhà",
    };
  },

  async created() {
    await this.$store.dispatch("ACT_SET_KEY_MENU", 6);
  },
};
</script>
