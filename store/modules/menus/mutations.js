export default {
  SET_MENUS(state, item) {
    state.menus = item
  },

  SET_MENUS_CREATE(state, dataItem) {
    state.menus.unshift({
      menu_id: dataItem.id,
      menu_name: dataItem.name,
      menu_link: dataItem.link,
      menu_status: dataItem.status,
      menu_icon: dataItem.icon,
    })
  },
}
