export default {
  SET_SLIDERS(state, data) {
    state.sliders = data
  },

  SET_UPDATE_STATUS(state, data) {
    // eslint-disable-next-line array-callback-return
    state.sliders.map((item) => {
      if (item.slider_id === data.id) {
        item.slider_status = data.status
      }
    })

    return state.sliders
  },

  SET_SLIDERS_CREATE(state, dataItem) {
    state.sliders.unshift({
      slider_id: dataItem.id,
      slider_img: dataItem.link_img,
      slide_link: dataItem.link,
      slider_status: dataItem.status,
    })
  },

  SET_DELETE_SLIDERS(state, id) {
    const data = []
    // eslint-disable-next-line array-callback-return
    state.sliders.map((item) => {
      if (item.slider_id !== id) {
        data.push(item)
      }
    })

    state.sliders = data
  },

  SET_EDIT_SLIDER(state, dataItem) {
    // eslint-disable-next-line array-callback-return
    state.sliders.map((item) => {
      if (item.slider_id === dataItem.id) {
        item.slider_img = dataItem.link_img
        item.slide_link = dataItem.link
        item.slider_status = dataItem.status
      }
    })

    return state.sliders
  },

  SET_LIST_SLIDERS(state, data) {
    state.sliders = [...state.sliders, ...data]
  },
}
