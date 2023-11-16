<template>
  <div class="page_music">
    <a-card title="Quản lý nhạc">
      <a-row :gutter="30">
        <a-col
          :md="{ span: 24, order: 2 }"
          :lg="{ span: 12, order: 1 }"
          :xl="12"
          :xxl="6"
          :order="2"
        >
          <FormMusic
            :result="result"
            :data-item="items"
            @submit="handleSubmit"
          />
        </a-col>
        <a-col
          :md="{ span: 24, order: 1 }"
          :lg="{ span: 12, order: 2 }"
          :xl="12"
          :xxl="18"
        >
          <MusicGroup @update="handleUpdate" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import MusicGroup from "~/components/admin/music";
import FormMusic from "~/components/admin/music/FormMusic.vue";
import { MwHandle } from "~/libraries/helpers";

export default {
  name: "PageMusic",

  components: {
    MusicGroup,
    FormMusic,
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
      title: "Nhạc",
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
        .dispatch("ACT_CREATE_MUSIC", params)
        .then((res) => {
          this.result = true;

          MwHandle.handleSuccess({
            context: res,
          });
        })
        .catch((error) => {
          this.result = false;

          MwHandle.handleError({
            context: error,
          });
        });

      await this.$store.dispatch("ACT_SET_KEY_MENU", 7);
    },

    async update(params) {
      await this.$store
        .dispatch("ACT_UPDATE_MUSIC", params)
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

    handleUpdate(item) {
      this.items = item;
    },
  },
};
</script>
