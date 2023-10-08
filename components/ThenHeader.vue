<template>
  <header class="header">
    <ThenLogo />
    <ThenMenu />
  </header>
</template>

<script>
import ThenLogo from '~/components/ThenLogo.vue'
import ThenMenu from '~/components/ThenMenu.vue'

export default {
  components: {
    ThenLogo,
    ThenMenu,
  },
}
</script>
