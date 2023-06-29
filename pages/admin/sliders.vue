<template>
  <div>
    <a-card title="Quản lý slides">
      <a-button slot="extra" type="primary" @click="handleVisible(true)">
        <a-icon type="folder-add" /> Thêm mới slider
      </a-button>
      <div class="admin__slider">
        <template v-if="sliders.length > 0">
          <div
            v-for="item in sliders"
            :key="item.slider_id"
            class="slider__item"
          >
            <div class="slider__frame" @click="handleEdit(item)">
              <img
                class="slider__img"
                :class="`${item.slider_status === 0 ? 'hidden__img' : ''}`"
                :src="item.slider_img"
                alt=""
              />
            </div>

            <div class="slider__footer">
              <ButtonDelete :slider-id="item.slider_id" />

              <ButtonStatus
                :status="item.slider_status"
                :slider-id="item.slider_id"
              />
            </div>
          </div>
        </template>
        <infinite-loading v-if="isLoading" @infinite="loadingSlider">
        </infinite-loading>
      </div>

      <NoData v-if="sliders.length <= 0" />
    </a-card>
    <Drawer :title="getTitle" :visible="visible" @visibleEvent="handleVisible">
      <CreateSlider :data-item="dataItem" :visible="visible" />
    </Drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ButtonStatus from '~/components/sliders/ButtonStatus.vue'
import ButtonDelete from '~/components/sliders/ButtonDelete.vue'
import NoData from '~/components/NoData.vue'
import Drawer from '~/components/common/Drawer.vue'
import CreateSlider from '~/components/sliders/CreateSlider.vue'

export default {
  name: 'SliderAdmin',
  components: {
    ButtonDelete,
    ButtonStatus,
    NoData,
    Drawer,
    CreateSlider,
  },

  layout() {
    return 'LayoutAdmin'
  },

  data() {
    return {
      visible: false,
      dataItem: {
        slider_status: 1,
        viewImg: '',
      },

      page: 1,

      isLoading: true,
    }
  },

  computed: {
    getTitle() {
      return this.dataItem.slider_id ? 'Cập nhật slider' : 'Thêm mới slider'
    },
    ...mapGetters({
      sliders: 'GET_LIST_SLIDERS',
    }),
  },

  methods: {
    handleVisible(e) {
      if (e === false) {
        this.dataItem = {
          slider_status: 1,
          viewImg: '',
        }
      }
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
          limit: 8,
        })
        .then((response) => {
          this.page += 1
          if (response.to < response.total) {
            $state.loaded()
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

  .slider {
    &__item {
      width: 100%;
      flex: 1;
      height: 230px;
      background-color: #ddd;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      cursor: pointer;
    }

    &__img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.hidden__img {
        filter: grayscale(1);
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin-top: auto;
      display: flex;
    }
  }
}

.btn {
  &__status {
    cursor: pointer;
    width: 50%;
    color: #fff;
    background-color: #40a9ff;
    border-radius: 0;
    height: 3rem;
  }

  &__delete {
    cursor: pointer;
    width: 50%;
    background-color: red;
    color: #fff;
    height: 3rem;
    border-radius: 0;
  }
}
</style>
