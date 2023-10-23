<template>
  <section>
    <a-card title="Câu chuyện tình yêu">
      <a-button slot="extra" type="primary" @click="handleVisible">
        <a-icon type="folder-add" /> Thêm câu chuyện
      </a-button>

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
import Drawer from '~/components/common/Drawer.vue'
import { LoveStory } from '~/components/admin/love-stroy'

export default {
  components: {
    Drawer,
    LoveStory,
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
  },

  methods: {
    handleVisible() {
      this.visible = !this.visible
    },
  },
}
</script>
