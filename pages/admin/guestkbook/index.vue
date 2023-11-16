<template>
  <div class="page_guestkbook">
    <a-card title="Lời chúc">
      <a-row :gutter="[15, 15]">
        <a-col
          :md="{ span: 12 }"
          :lg="{ span: 15 }"
          :xl="{ span: 15 }"
          :xxl="{ span: 17 }"
        >
          <a-row :gutter="[15, 15]">
            <CommentGuestkbook />
          </a-row>
        </a-col>
        <a-col
          :md="{ span: 12 }"
          :lg="{ span: 9 }"
          :xl="{ span: 9 }"
          :xxl="{ span: 7 }"
        >
          <BackgroundGuestkbook />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import {
  CommentGuestkbook,
  BackgroundGuestkbook,
} from "~/components/admin/guestkbooks";

export default {
  name: "PageQuesTkbook",
  components: {
    CommentGuestkbook,
    BackgroundGuestkbook,
  },

  layout() {
    return "LayoutAdmin";
  },

  data() {
    return {
      result: false,
      items: {},
    };
  },

  head() {
    return {
      title: "Lới chúc",
    };
  },

  async created() {
    await this.$store.dispatch("ACT_SET_KEY_MENU", 8);
  },

  methods: {},
};
</script>
