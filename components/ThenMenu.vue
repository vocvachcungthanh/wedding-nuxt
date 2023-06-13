<template>
  <div class="menu">
    <div class="container">
      <ul class="menu-box font__dancing">
        <li v-for="menu in getMenuList" :key="menu.menu_id" class="menu__list">
          <NuxtLink class="menu__link" :to="menu.menu_link">
            {{ menu.menu_name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import '~/assets/scss/components/CM_ThenMenu.scss'

export default {
  data() {
    return {
      menus: [],
    }
  },

  computed: {
    ...mapGetters({
      getMenuList: 'GET_LIST_MENUS',
    }),
  },

  created: function () {
    this.actGetMenus()
  },

  methods: {
    ...mapActions({
      actGetMenus: 'ACT_GET_MENUS',
    }),
  },
}
</script>
