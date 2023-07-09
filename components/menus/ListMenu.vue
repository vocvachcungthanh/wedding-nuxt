<template>
  <div class="list-menus">
    <a-collapse
      v-for="item in menus"
      :key="item.menu_id"
      accordion
      class="menu__panel"
    >
      <a-collapse-panel :header="item.menu_name" :show-arrow="false">
        <a-form-item label="Tên menu">
          <a-input v-model="item.menu_name" placeholder="Nhập tên menu..." />
        </a-form-item>

        <a-form-item label="Link">
          <a-input v-model="item.menu_link" placeholder="Nhập link menu..." />
        </a-form-item>

        <a-form-item>
          <a-radio-group v-model="item.menu_status" name="radioGroup">
            <a-radio :value="1"> Hiển thị </a-radio>
            <a-radio :value="0"> Ẩn</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            type="primary"
            html-type="submit"
            class="btn__update"
            @click="() => handleUpdate(item)"
          >
            Cập nhật</a-button
          >
          <a-button type="danger">Xóa </a-button>
        </a-form-item>
      </a-collapse-panel>
    </a-collapse>
    <NoData v-if="menus.length <= 0" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NoData from '~/components/NoData.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'ListMenu',

  components: {
    NoData,
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      menus: [],
    }
  },

  computed: {
    ...mapGetters({
      listMenus: 'GET_LIST_MENUS',
    }),
  },

  watch: {
    listMenus() {
      this.menus = this.listMenus
    },
  },

  created: function () {
    this.actGetMenus()
  },

  methods: {
    handleStatus(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },

    handleUpdate(dataItem) {
      this.$store
        .dispatch('ACT_MENU_UPDATE', dataItem)
        .then((response) => {
          MwHandle.handleSuccess({
            context: response,
          })
        })
        .catch((error) => {
          MwHandle.handleError({
            context: error,
          })
        })
    },

    ...mapActions({
      actGetMenus: 'ACT_GET_MENU_LIST',
    }),
  },
}
</script>

<style lang="scss">
.menu__panel {
  margin-bottom: 1rem;

  .ant-collapse-header {
    background-color: #1890ff;
    color: #fff !important;
    font-weight: bold;
    border-bottom: 1px solid #1890ff;
    padding: 0.8rem 1.6rem;
  }

  .ant-collapse-content {
    border-top: 1px solid transparent;
  }
}

.ant-collapse {
  border: 1px solid #1890ff !important;
}

.ant-collapse > .ant-collapse-item {
  border-bottom: 0px;
}

.form__footer {
  display: flex;
  gap: 2rem;
}

.btn__update {
  margin-right: 1.5rem;
}
</style>
