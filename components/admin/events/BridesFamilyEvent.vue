<template>
  <a-card title="Thông tin lễ cưới nhà gái" :head-style="customHeadStyle">
    <FormEvent :items="brides" @submit="handleSubmit" />
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

import { FormEvent } from "./index.js";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "BridesFamilyEvent",

  components: {
    FormEvent,
  },

  props: {
    brides: {
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

  methods: {
    handleSubmit(params) {
      const data = { ...params, key: "bride" };

      if (data.id) {
        this.update(data);
      } else {
        this.create(data);
      }
    },

    async create(params) {
      await this.actCreate(params)
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

    async update(params) {
      await this.actUpdate(params)
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

    ...mapActions({
      actCreate: "ACT_CREATE_EVENT",
      actUpdate: "ACT_UPDATE_EVENT",
    }),
  },
};
</script>
