<template>
  <BgForm :items="computedItemBg" @submit="handleSubmit" />
</template>

<script>
import { mapGetters } from "vuex";

import { MwHandle } from "~/libraries/helpers";
import { BgForm } from "~/components/common/forms";

export default {
  components: {
    BgForm,
  },

  props: {
    itemBg: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      customHeadStyle: {
        textAlign: "center",
        textTransform: "uppercase",
      },
    };
  },

  computed: {
    ...mapGetters({
      computedItemBg: "GET_GUESTKBOOK_BG",
    }),
  },

  methods: {
    handleSubmit(params) {
      const data = { ...params, key: "guestkbook" };
      if (data.id) {
        this.update(data);
      } else {
        this.create(data);
      }
    },

    async update(params) {
      await this.$store
        .dispatch("ACT_UPDATE_BG", params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          });
        });
    },

    async create(params) {
      await this.$store
        .dispatch("ACT_CREATE_BG", params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          });
        });
    },
  },
};
</script>
