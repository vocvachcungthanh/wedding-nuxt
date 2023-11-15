<template>
  <FormLoveStroy
    :result="result"
    @submit="handleSubmit"
    @result="handleResult"
  />
</template>

<script>
import FormLoveStroy from "./FormLoveStroy.vue";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "LoveStory",

  components: { FormLoveStroy },

  data() {
    return {
      result: false,
    };
  },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.update(params);
      } else {
        this.create(params);
      }
    },

    async create(params) {
      await this.$store
        .dispatch("ACT_CREATE_LOVE_STORY", params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });

          this.result = true;
        })
        .catch((error) => {
          this.result = false;
          MwHandle.handleError({
            context: error,
          });
        });
    },

    async update(params) {
      await this.$store
        .dispatch("ACT_UPDATE_LOVE_STORY", params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });

          this.result = true;
        })
        .catch((error) => {
          this.result = false;
          MwHandle.handleError({
            context: error,
          });
        });
    },

    handleResult(e) {
      this.result = e;
    },
  },
};
</script>
