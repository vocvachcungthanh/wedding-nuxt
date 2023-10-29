/* eslint-disable no-console */
export default {
  ACT_SET_VISIBLE(context, item) {
    context.commit('SET_VISIBLE', item)
  },

  ACT_SET_KEY_MENU(context, key) {
    context.commit('SET_KEY_MENU', key)
  },
}
