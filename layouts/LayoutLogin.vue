<template>
  <section class="layout__login">
    <Nuxt />
  </section>
</template>

<script>
export default {
  middleware: 'login',
}
</script>
