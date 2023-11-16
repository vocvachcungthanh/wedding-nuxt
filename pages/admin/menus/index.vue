<template>
  <div class="page__menu">
    <a-card title="Quản lý menu">
      <div class="card__menu">
        <a-row :gutter="[16, 16]">
          <a-col :lg="12" :xl="10" :xxl="8">
            <a-card title="Thêm menu">
              <FormMenu />
            </a-card>
          </a-col>
          <a-col :lg="12" :xl="12" :xxl="12">
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
import { FormMenu, ListMenu } from "~/components/admin/menus";

export default {
  name: "PageMenu",

  components: {
    FormMenu,
    ListMenu,
  },

  layout() {
    return "LayoutAdmin";
  },

  async created() {
    await this.$store.dispatch("ACT_SET_KEY_MENU", 9);
  },
};
</script>
