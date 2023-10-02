<template>
  <div>
    <a-layout-header class="header-admin">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleCollapsed"
      />
      <Logout />
    </a-layout-header>
  </div>
</template>

<script>
import Logout from '~/components/auth/Logout.vue'

export default {
  name: 'ThenHeaderAdmin',

  components: {
    Logout,
  },

  props: {
    collapsed: {
      type: Boolean,
      default: Boolean,
    },
  },

  methods: {
    handleCollapsed() {
      this.$emit('collapsed', this.collapsed)
    },
  },
}
</script>
