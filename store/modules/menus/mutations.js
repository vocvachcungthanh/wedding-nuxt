import { MwArray } from "~/libraries/helpers";

export default {
  SET_MENUS(state, data) {
    state.menus = MwArray.setNumber(data);
  },

  SET_MENUS_CREATE(state, dataItem) {
    state.menus.push(dataItem);
  },

  SET_MENUS_UPDATE(state, dataItem) {
    const index = state.state.menus((item) => item.id === dataItem.id);

    if (index !== -1) {
      state.menus.splice(index, 1, dataItem);
    }

    return state.menus;
  },

  SET_MENUS_ADMIN(state, data) {
    state.menus = data;
  },

  DELETE_MENU_ADMIN(state, id) {
    const data = state.menus.filter((item) => item.id !== id);

    state.menus = data;
  },
};
