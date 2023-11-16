<!-- eslint-disable vue/no-v-html -->
<template>
  <a-col
    :xs="{ span: 24 }"
    :md="{ span: 12 }"
    :lg="{ span: 12 }"
    :xl="{ span: 8 }"
    :xxl="{ span: 6 }"
  >
    <a-card hoverable class="love-story">
      <div class="love-story__avatar">
        <a-tooltip :title="getTitleTooltip">
          <img :class="getClassImage" :src="dataItem.avatar" />
        </a-tooltip>
      </div>

      <div class="love-story__meta">
        <h3 class="love-story__meta--title">
          {{ dataItem.title }}
        </h3>

        <time class="love-story__meta--time"
          ><a-icon type="history" />
          <span class="time--text">
            {{ dataItem.date }}
          </span>
        </time>
        <div class="love-story__meta--desc" v-html="dataItem.desc"></div>
      </div>
      <div class="love-story__footer">
        <EditLoveStory :data-item="dataItem" />
        <DeleteLoveStory
          :data-item="{
            id: dataItem.id,
            google_id: dataItem.google_id,
            source_id: dataItem.source_id,
          }"
        />
      </div>
    </a-card>
  </a-col>
</template>

<script>
import DeleteLoveStory from "./DeleteLoveStory.vue";
import EditLoveStory from "./EditLoveStory.vue";

export default {
  components: { EditLoveStory, DeleteLoveStory },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  computed: {
    getClassImage() {
      return `love-story__avatar--img ${
        this.dataItem.status === 0 ? "hidden__img" : ""
      }`;
    },

    getTitleTooltip() {
      return this.dataItem.status === 0
        ? "Câu chuyện này đã ẩn khỏi trang hiển thị"
        : "";
    },
  },
};
</script>
