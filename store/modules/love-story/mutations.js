// SET_LOVE_STORY_CREATE

export default {
  SET_LOVE_STORY_CREATE(state, dataItem) {
    state.loveStory.unshift({
      ...dataItem,
    })
  },

  SET_LOVE_STORY(state, data) {
    state.loveStory = data
  },

  SET_DATA_FROM(state, data) {
    state.dataFromLoveStory = data
  },

  SET_LOVE_STORY_UPDATE(state, dataItem) {
    // eslint-disable-next-line array-callback-return
    state.loveStory.map((item) => {
      if (item.id === dataItem.id) {
        item = dataItem

        state.dataFromLoveStory = dataItem
      }
    })

    return state.menus
  },
}
