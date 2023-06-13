<template>
  <section class="layout-default">
    <ThenHeader />
    <Nuxt />
    <ThenFooter />
  </section>
</template>

<script>
import ThenHeader from '~/components/ThenHeader.vue'
import ThenFooter from '~/components/ThenFooter.vue'

export default {
  name: 'LayoutDefault',

  components: {
    ThenHeader,
    ThenFooter,
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/StyleGlobal.scss';
</style>
