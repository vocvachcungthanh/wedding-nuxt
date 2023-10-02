const RoutePrivate = [
  {
    name: 'admin',
    path: '/quan-tri',
    component: '~/pages/admin/index.vue',
  },

  {
    name: 'albums',
    path: 'albums/danh-sach',
    component: '~/pages/admin/albums/index.vue',
  },
]

module.exports = {
  router() {
    return RoutePrivate
  },
}
