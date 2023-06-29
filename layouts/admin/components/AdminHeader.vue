<template>
  <div>
    <a-layout-header class="header-admin">
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
}
</script>
