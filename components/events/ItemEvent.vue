<template>
  <div class="wedding__event--product">
    <h3 class="wedding__event-title">
      {{ dataItem.title }}
    </h3>

    <div class="wedding__event--avatar">
      <img :src="dataItem.image" alt="" />
    </div>

    <div class="wedding__event--time">
      {{ dataItem.time_date }}
    </div>
    <p class="wedding__event--desc">
      {{ dataItem.address }}
    </p>
    <a
      :href="dataItem.map"
      target="_blank"
      class="link__map"
      title="click đễ xem địa chỉ trển google map"
    >
      Xem bản đồ
    </a>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  head() {
    const metaImage = this.dataItem.image

    return {
      meta: [
        {
          property: 'og:image',
          content: metaImage,
        },

        {
          property: 'og:image:url',
          content: metaImage,
        },

        {
          property: 'og:image:secure_url',
          content: metaImage,
        },

        {
          property: 'twitter:image:src',
          content: metaImage,
        },

        {
          itemprop: 'image',
          content: metaImage,
        },
        // Thêm các thẻ meta khác nếu cần
      ],
    }
  },
}
</script>
