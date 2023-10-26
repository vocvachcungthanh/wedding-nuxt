/* eslint-disable no-console */
export default {
  ACT_SET_VISIBLE(context, item) {
    console.log(item)
    context.commit('SET_VISIBLE', item)
  },
}
