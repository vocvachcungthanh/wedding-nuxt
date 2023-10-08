<template>
  <div class="page__menu">
    <a-card title="Quản lý menu">
      <div class="card__menu">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card title="Thêm menu">
              <FormMenu />
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="Danh sách menu">
              <ListMenu />
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>

<script>
import FormMenu from '~/components/menus/FormMenus.vue'
import ListMenu from '~/components/menus/ListMenu.vue'

export default {
  name: 'PageMenu',

  components: {
    FormMenu,
    ListMenu,
  },

  layout() {
    return 'LayoutAdmin'
  },
}
</script>
