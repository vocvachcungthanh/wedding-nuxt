<template>
  <section>
    <a-card title="Câu chuyện tình yêu">
      <a-button slot="extra" type="primary" @click="handleVisible">
        <a-icon type="folder-add" /> Thêm câu chuyện
      </a-button>
      <a-row v-if="loveStorys.length > 0" :gutter="[15, 15]">
        <ItemLoveStory
          v-for="item in loveStorys"
          :key="item.id"
          :data-item="item"
        />
      </a-row>
      <NoData v-else />
      <Drawer
        :title="getTitle"
        :visible="visible"
        @visibleEvent="handleVisible"
      >
        <LoveStory />
      </Drawer>
    </a-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Drawer from '~/components/common/Drawer.vue'
import { LoveStory, ItemLoveStory } from '~/components/admin/love-stroy'
import NoData from '~/components/NoData.vue'

export default {
  components: {
    Drawer,
    LoveStory,
    ItemLoveStory,
    NoData,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      visible: false,
      dataItem: {},
    }
  },

  computed: {
    getTitle() {
      return this.dataItem.id ? 'Cập nhật câu chuyện' : 'Thêm câu chuyện'
    },

    ...mapGetters({
      loveStorys: 'GET_LOVE_STORY',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_LOVE_STORY')
  },

  methods: {
    handleVisible() {
      this.visible = !this.visible
    },
  },
}
</script>
