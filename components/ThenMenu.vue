<!-- eslint-disable vue/no-use-v-if-with-v-for -->
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
        <ThemMenuSkeleton
          v-for="(_item, index) in 6"
          v-if="isLoading"
          :key="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ThemMenuSkeleton from './ThemMenuSkeleton.vue'

export default {
  components: { ThemMenuSkeleton },

  data() {
    return {
      menus: [],
      title: 'Hữu Thành - Thủy Tiên',
      isLoading: true,
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

  async created() {
    this.isLoading = true
    await this.actGetMenus()
    this.isLoading = false
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    async handleTtitle(menu) {
      this.title = menu.name
      await this.$nextTick()
      document
        .getElementById(`${menu.link}`)
        .scrollIntoView({ behavior: 'smooth' })
    },

    handleScroll() {
      const windowHeight = window.innerHeight
      for (const menu of this.getMenuList) {
        const element = document.getElementById(menu.link)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top < windowHeight) {
            this.title = menu.name
            break
          }
        }
      }
    },
    ...mapActions({
      actGetMenus: 'ACT_GET_MENUS',
    }),
  },
}
</script>
