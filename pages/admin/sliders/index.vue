<template>
  <div>
    <a-card title="Quản lý slides">
      <a-button slot="extra" type="primary" @click="handleVisible">
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

    <FormSlider :data-item="dataItem" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { ItemSlider, FormSlider } from '~/components/admin/sliders'

import NoData from '~/components/NoData.vue'

export default {
  name: 'SliderAdmin',

  components: {
    ItemSlider,
    NoData,

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

  async created() {
    await this.$store.dispatch('ACT_SET_KEY_MENU', 1)
  },

  methods: {
    handleVisible() {
      this.dataItem = {}
      this.setVisible(true)
    },

    handleEdit(dataItem) {
      this.dataItem = dataItem
      this.setVisible(true)
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

    ...mapActions({
      setVisible: 'ACT_SET_VISIBLE',
    }),
  },
}
</script>
