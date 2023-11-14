<template>
  <a-card title="Phù rể" :head-style="customHeadStyle">
    <FormVue :items="groomesmen" @submit="handleSubmit" />
  </a-card>
</template>

<script>
import { mapActions } from "vuex";

import FormVue from "./Form.vue";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "GroomesMen",

  components: {
    FormVue,
  },

  props: {
    groomesmen: {
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
      actCreate: "ACT_CREATE_BRIDESMAIDS_GROOMSMEN",
      actUpdate: "ACT_UPDATE_BRIDESMAIDS_GROOMSMEN",
    }),
  },
};
</script>
