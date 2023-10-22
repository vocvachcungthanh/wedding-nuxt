<template>
  <div class="list-menus">
    <a-collapse
      v-for="item in listMenus"
      :key="item.key"
      accordion
      class="menu__panel"
    >
      <a-collapse-panel :header="item.name" :show-arrow="false">
        <a-form-item label="Tên menu">
          <a-input v-model="item.name" placeholder="Nhập tên menu..." />
        </a-form-item>

        <a-form-item label="Link">
          <a-input v-model="item.link" placeholder="Nhập link menu..." />
        </a-form-item>

        <a-form-item>
          <a-radio-group v-model="item.status" name="radioGroup">
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
          <DeleteMenu :id="item.id" />
        </a-form-item>
      </a-collapse-panel>
    </a-collapse>
    <NoData v-if="listMenus.length <= 0" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DeleteMenu from './DeleteMenu.vue'
import NoData from '~/components/NoData.vue'
import { MwHandle } from '~/libraries/helpers'

export default {
  name: 'ListMenu',

  components: {
    NoData,
    DeleteMenu,
  },

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },

  computed: {
    ...mapGetters({
      listMenus: 'GET_LIST_MENUS',
    }),
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
