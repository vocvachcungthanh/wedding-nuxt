<template>
  <div>
    <FromUpload
      :result="result"
      :items="items"
      @submit="handleSubmit"
      @result="handleResult"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import { MwHandle } from "~/libraries/helpers";
import FromUpload from "~/components/common/FromUpload.vue";

export default {
  components: {
    FromUpload,
  },

  data() {
    return {
      result: false,
    };
  },

  computed: {
    ...mapState({
      items: (state) => state.storeAlbums.dataItem,
    }),
  },

  methods: {
    handleSubmit(params) {
      if (params.id) {
        this.update(params);
      } else {
        this.create(params);
      }
    },

    handleResult(e) {
      this.result = e;
    },

    async create(params) {
      await this.$store
        .dispatch("ACT_CREATE_ALBUM", params)
        .then((res) => {
          MwHandle.handleSuccess({
            context: res,
          });

          this.result = true;
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          });

          this.result = false;
        });
    },

    async update(params) {
      await this.$store
        .dispatch("ACT_UPDATE_ALBUMS", params)
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
  },
};
</script>
