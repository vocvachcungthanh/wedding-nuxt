<template>
  <style lang="scss">
    .guestbook::after {
      background-image: url('{{ backgroundImage }}');
    }
  </style>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage:
        'https://cdn.biihappy.com/ziiweb/default/template/644000ba4f8e0c7ddf09c709/a33b08a813ee02e7a4b7d72ce05d9e93.jpg',
    }
  },
}
</script>
