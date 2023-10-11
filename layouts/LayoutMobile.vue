<template>
  <section class="mobile-layout">
    <ThenHeaderMobile />
    <Nuxt />
    <ThenFooter />
  </section>
</template>

<script>
import ThenHeaderMobile from '~/components/mobiles/ThenHeaderMobile.vue'
import ThenFooter from '~/components/ThenFooter.vue'

export default {
  components: {
    ThenHeaderMobile,
    ThenFooter,
  },
}
</script>
