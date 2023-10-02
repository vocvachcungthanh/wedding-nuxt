const RoutePublic = [
  {
    name: 'Home',
    path: '/',
    component: '~/pages/index.vue',
  },

  {
    name: 'Login',
    path: '/dang-nhap',
    component: '~/pages/Login/index.vue',
  },
]

module.exports = {
  router() {
    return RoutePublic
  },
}
