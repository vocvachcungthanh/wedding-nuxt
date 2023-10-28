<!-- eslint-disable vue/no-v-html -->
<template>
  <a-col :md="{ span: 12 }" :lg="{ spa: 12 }" :xxl="{ span: 8 }">
    <a-card hoverable class="love-story">
      <template #cover>
        <img alt="example" :src="dataItem.avatar" />
      </template>

      <div class="love-story__meta">
        <h3 class="love-story__title">
          {{ dataItem.title }}
        </h3>

        <time class="love-story__time"
          ><a-icon type="history" /> {{ dataItem.date }}
        </time>
        <div class="love-story__desc" v-html="dataItem.desc"></div>
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
import DeleteLoveStory from './DeleteLoveStory.vue'
import EditLoveStory from './EditLoveStory.vue'

export default {
  components: { EditLoveStory, DeleteLoveStory },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>
