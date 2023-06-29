export default {
  GET_LIST_SLIDERS(state) {
    return state.sliders
  },

  GET_SLIDER_PUBLIC(state) {
    const data = []

    // eslint-disable-next-line array-callback-return
    state.sliders.map((item) => {
      if (item.slider_status === 1) {
        data.push(item)
      }
    })

    return data
  },
}
