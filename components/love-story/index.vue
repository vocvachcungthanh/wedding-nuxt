<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="love-story" class="love__story">
    <div v-if="!isLoadding" class="container">
      <div class="love__story--header">
        <h2 class="love__story--title font__dancing">Câu chuyện tình yêu</h2>
        <p class="love__stroy--info">
          Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả
          một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
        </p>
      </div>
      <div class="love__story--content">
        <div class="love__group">
          <div
            v-for="item in loveStory"
            :key="item.id"
            class="love__group--item"
          >
            <div class="love__group--context">
              <div class="love__group--header font__dancing">
                <h3 class="love__group--title">
                  {{ item.title }}
                </h3>
                <time class="love__time"> {{ item.date }} </time>
              </div>
              <div class="love__group--desc" v-html="item.desc"></div>
            </div>
            <div class="love__group--avatar">
              <img class="love__image" :src="item.avatar" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoveStorySkeleton v-if="isLoadding" />
  </section>
</template>

<script>
import LoveStorySkeleton from "./loveStorySkeleton.vue";

export default {
  name: "LoveStory",
  components: { LoveStorySkeleton },

  data() {
    return {
      loveStory: [],
      isLoadding: false,
    };
  },

  async created() {
    this.isLoadding = true;
    await this.$store.dispatch("ACT_GET_LOVE_STORY_PUBLIC").then((res) => {
      this.loveStory = res;
    });
    this.isLoadding = false;

    const metaImage = this.loveStory[0]?.avatar;

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
};
</script>
