<template>
  <a-card title="Phù dâu" :head-style="customHeadStyle">
    <FormVue :items="bridesmaids" @submit="handleSubmit" />
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

import FormVue from "./Form.vue";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "BrideCouple",

  components: { FormVue },

  props: {
    bridesmaids: {
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
      const data = { ...params, status: 1 };

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
      actCreate: "ACT_CREATE_BRIDESMAIDS_GROOMSMEN",
      actUpdate: "ACT_UPDATE_BRIDESMAIDS_GROOMSMEN",
    }),
  },
};
</script>
