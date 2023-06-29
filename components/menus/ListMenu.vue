<template>
  <div class="list-menus">
    <div>
      <a-collapse
        v-for="item in menus"
        :key="item.menu_id"
        accordion
        class="menu__panel"
      >
        <a-collapse-panel :header="item.menu_name" :show-arrow="false">
          <a-row>
            <a-col :span="15">
              <a-input v-model="item.menu_link" placeholder="Nhập link ..." />
            </a-col>
          </a-row>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListMenu',

  computed: {
    ...mapGetters({
      menus: 'GET_LIST_MENUS',
    }),
  },

  created: function () {
    this.actGetMenus()
  },

  methods: {
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
</style>
