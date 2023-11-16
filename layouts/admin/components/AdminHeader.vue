<template>
  <div>
    <a-layout-header class="header-admin">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleCollapsed"
      />
      <AdminLogo v-if="isMobile" />
      <Logout />
    </a-layout-header>
  </div>
</template>

<script>
import AdminLogo from "./AdminLogo.vue";
import Logout from "~/components/auth/Logout.vue";

export default {
  name: "ThenHeaderAdmin",

  components: {
    Logout,
    AdminLogo,
  },

  props: {
    collapsed: {
      type: Boolean,
      default: Boolean,
    },
  },

  data() {
    return {
      isMobile: false,
    };
  },

  created() {
    this.isMobile = this.$store.state.isMobile;
  },

  methods: {
    handleCollapsed() {
      this.$emit("collapsed", this.collapsed);
    },
  },
};
</script>
