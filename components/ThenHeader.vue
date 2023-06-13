<template>
  <header class="header">
    <ThenLogo />
    <ThenMenu />
  </header>
</template>

<script>
import ThenLogo from '~/components/ThenLogo.vue'
import ThenMenu from '~/components/ThenMenu.vue'

import '~/assets/scss/components/CM_ThenHeader.scss'

export default {
  components: {
    ThenLogo,
    ThenMenu,
  },
}
</script>
