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
}
