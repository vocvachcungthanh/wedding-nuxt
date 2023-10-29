<template>
  <a-menu :default-selected-keys="[key]" mode="inline">
    <a-menu-item v-for="menu in menusAdmin" :key="menu.key">
      <nuxt-link :to="menu.link">
        <a-icon :type="menu.icon" />
        <span>{{ menu.name }}</span>
      </nuxt-link>
    </a-menu-item>
  </a-menu>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuAdmin',

  data() {
    return {
      key: 0,
    }
  },

  computed: {
    ...mapGetters({
      menusAdmin: 'GET_LIST_MENUS_ADMIN',
      keyMenu: 'GET_KEY_MENU',
    }),
  },

  watch: {
    keyMenu(keyNew) {
      return (this.key = keyNew)
    },
  },

  created() {
    switch (this.$route.name) {
      case 'admin-sliders':
        this.key = 1
        break
      case 'admin-couples':
      case 'admin-albums-update':
        this.key = 2
        break
      case 'admin-love-story':
        this.key = 3
        break
      case 'admin-albums':
        this.key = 4
        break
      case 'admin-events':
        this.key = 5
        break
      case 'admin-countdown':
        this.key = 6
        break

      case 'admin-music':
        this.key = 7
        break
      case 'admin-guestkbook':
        this.key = 8
        break
      case 'admin-menu':
        this.key = 9
        break
      default:
        break
    }
  },
}
</script>
