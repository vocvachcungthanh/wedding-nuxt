<template>
  <div>
    <a-card title="Quản lý slides">
      <a-button slot="extra" type="primary" @click="handleVisible(true)">
        <a-icon type="folder-add" /> Thêm mới slider
      </a-button>
      <div class="admin__slider">
        <template v-if="sliders.length > 0">
          <ItemSlider
            v-for="item in sliders"
            :key="item.id"
            :data-item="item"
            @edit="handleEdit"
          />
        </template>
        <infinite-loading v-if="isLoading" @infinite="loadingSlider">
          <div slot="spinner"><a-spin /></div>
        </infinite-loading>
      </div>

      <NoData v-if="sliders.length <= 0" />
    </a-card>

    <Drawer :title="getTitle" :visible="visible" @visibleEvent="handleVisible">
      <FormSlider :data-item="dataItem" :visible="visible" />
    </Drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ItemSlider, FormSlider } from '~/components/admin/sliders'

import NoData from '~/components/NoData.vue'
import Drawer from '~/components/common/Drawer.vue'

export default {
  name: 'SliderAdmin',

  components: {
    ItemSlider,
    NoData,
    Drawer,

    FormSlider,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      visible: false,
      dataItem: {},
      page: 1,

      isLoading: true,
    }
  },

  head() {
    return {
      title: 'danh sách slides',
    }
  },

  computed: {
    getTitle() {
      return this.dataItem.id ? 'Cập nhật slider' : 'Thêm mới slider'
    },

    ...mapGetters({
      sliders: 'GET_LIST_SLIDERS',
    }),
  },

  methods: {
    handleVisible(e) {
      this.dataItem = {}
      return (this.visible = e)
    },

    handleEdit(dataItem) {
      this.dataItem = dataItem
      this.visible = true
    },

    loadingSlider($state) {
      this.$store
        .dispatch('ACT_GET_LIST_SLIDER', {
          page: this.page,
        })
        .then((response) => {
          if (response.current_page < response.last_page) {
            this.page++
            $state.loaded()
            this.isLoading = true
          } else {
            $state.complete()
            this.isLoading = false
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>

<style lang="scss">
.admin__slider {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}
</style>
