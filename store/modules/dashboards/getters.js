export default {
  GET_DASHBOARDS(state, _, stateRoot) {
    const dashboards = state.dashboards
    const menus = stateRoot.storeMenus.menus_admin

    const data = menus.map((menuItem) => ({
      ...menuItem,
      total: dashboards[menuItem.code] || 0,
    }))

    return data
  },
}
