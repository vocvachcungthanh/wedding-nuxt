<template>
  <div class="menu">
    <div class="container">
      <ul class="menu-box font__dancing">
        <li
          v-for="menu in getMenuList"
          :key="menu.key"
          class="menu__list"
          @click="handleTtitle(menu)"
        >
          <NuxtLink class="menu__link" to="/">
            {{ menu.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      menus: [],

      title: 'Hữu Thành - Thủy Tiên',
    }
  },

  head() {
    return {
      title: this.title,
    }
  },

  // this.$route.name

  computed: {
    ...mapGetters({
      getMenuList: 'GET_LIST_MENUS',
    }),
  },

  created: function () {
    this.actGetMenus()
  },

  methods: {
    async handleTtitle(menu) {
      this.title = menu.name
      await this.$nextTick()
      document
        .getElementById(`${menu.link}`)
        .scrollIntoView({ behavior: 'smooth' })
    },

    ...mapActions({
      actGetMenus: 'ACT_GET_MENUS',
    }),
  },
}
</script>
