<template>
  <header class="mobile__header">
    <ThenLogo />
    <ThenMenuMobile />
  </header>
</template>

<script>
import '~/assets/scss/mobile/index.scss'

import ThenMenuMobile from './ThenMenuMobile.vue'
import ThenLogo from '~/components/ThenLogo.vue'

export default {
  components: {
    ThenLogo,
    ThenMenuMobile,
  },
}
</script>
