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
        <button class="btn btn__edit">
          <a-icon type="edit" />
          Sửa
        </button>
        <button class="btn btn__delete">
          <a-icon type="delete" />
          Xóa
        </button>
      </div>
    </a-card>
  </a-col>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },
}
</script>
