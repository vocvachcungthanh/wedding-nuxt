<template>
  <a-card title="Thông tin chú rể" :head-style="customHeadStyle">
    <FormCouple :items="grooms" @submit="handleSubmit" />
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

import { FormCouple } from "./index.js";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "GroomCouple",

  components: {
    FormCouple,
  },

  props: {
    grooms: {
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
      const data = { ...params, status: 2 };

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
      actCreate: "ACT_CREATE_COUPLE",
      actUpdate: "ACT_UPDATE_COUPLE",
    }),
  },
};
</script>
