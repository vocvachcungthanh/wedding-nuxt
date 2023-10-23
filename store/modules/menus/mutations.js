export default {
  SET_MENUS(state, data) {
    state.menus = data
  },

  SET_MENUS_CREATE(state, dataItem) {
    state.menus.push(dataItem)
  },

  SET_MENUS_UPDATE(state, dataItem) {
    // eslint-disable-next-line array-callback-return
    state.menus.map((item) => {
      if (item.menu_id === dataItem.menu_id) {
        item = dataItem
      }
    })

    return state.menus
  },

  SET_MENUS_ADMIN(state, data) {
    state.menus = data
  },

  DELETE_MENU_ADMIN(state, id) {
    const data = state.menus.filter((item) => item.id !== id)

    state.menus = data
  },
}
