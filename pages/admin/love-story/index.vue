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

      <LoveStory />
    </a-card>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { LoveStory, ItemLoveStory } from '~/components/admin/love-stroy'
import NoData from '~/components/NoData.vue'

export default {
  components: {
    LoveStory,
    ItemLoveStory,
    NoData,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      dataItem: {},
    }
  },

  computed: {
    ...mapGetters({
      loveStorys: 'GET_LOVE_STORY',
    }),
  },

  async created() {
    await this.$store.dispatch('ACT_GET_LOVE_STORY')
  },

  methods: {
    handleVisible() {
      this.setVisible(true)
      this.setFromLoveStory({})
    },

    ...mapActions({
      setVisible: 'ACT_SET_VISIBLE',
      setFromLoveStory: 'ACT_GET_DATA_FROM',
    }),
  },
}
</script>
