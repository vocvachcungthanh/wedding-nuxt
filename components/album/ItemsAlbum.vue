<template>
  <div
    class="gallery__item"
    @mousemove="isShow = true"
    @mouseleave="isShow = false"
  >
    <img :src="dataItem.image" :alt="dataItem.title" class="gallery__img" />
    <Transition name="fade">
      <BoxAlbum
        v-show="isShow"
        :title="dataItem.title"
        :desc="dataItem.desc"
        :link="dataItem.url"
        @click.native="handleModal"
      />
    </Transition>
  </div>
</template>

<script>
import BoxAlbum from "./BoxAlbum.vue";

export default {
  components: { BoxAlbum },

  props: {
    dataItem: {
      type: Object,
      default: Object,
    },
  },

  data() {
    return {
      isShow: false,
      visible: false,
    };
  },

  created() {
    const metaImage = this.dataItem?.image;

    const meta = [
      {
        property: "og:image",
        content: metaImage,
      },

      {
        property: "og:image:url",
        content: metaImage,
      },

      {
        property: "og:image:secure_url",
        content: metaImage,
      },

      {
        property: "twitter:image:src",
        content: metaImage,
      },

      {
        itemprop: "image",
        content: metaImage,
      },
      // Thêm các thẻ meta khác nếu cần
    ];

    this.$store.dispatch("ACT_SET_META", meta);
  },

  methods: {
    handleModal() {
      this.visible = true;
    },

    hideModal() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s all;
  background: radial-gradient(circle at center, transparent, #00000053);
}
</style>
