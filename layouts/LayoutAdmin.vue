<!-- eslint-disable vue/no-parsing-error -->
<template>
  <a-layout id="components-layout-demo-side" :style="{ minHeight: '100vh' }">
    <a-layout-sider v-model="collapsed">
      <AdminLogo />
      <AdminMenu />
    </a-layout-sider>
    <a-layout>
      <AdminHeader :collapsed="collapsed" @collapsed="handleCollapsed" />
      <a-layout-content class="admin-content">
        <Nuxt />
      </a-layout-content>
      <AdminFooter />
    </a-layout>
  </a-layout>
</template>
<script>
import AdminHeader from '~/layouts/admin/components/AdminHeader.vue'
import AdminMenu from '~/layouts/admin/components/AdminMenu.vue'
import AdminLogo from '~/layouts/admin/components/AdminLogo.vue'
import AdminFooter from '~/layouts/admin/components/AdminFooter.vue'

import '~/assets/scss/layouts/LA_Admin.scss'

export default {
  name: 'LayoutAdmin',

  components: {
    AdminHeader,
    AdminMenu,
    AdminLogo,
    AdminFooter,
  },

  middleware: 'admin',

  data() {
    return {
      collapsed: false,
    }
  },

  methods: {
    handleCollapsed(e) {
      this.collapsed = !e
    },
  },
}
</script>
