// SET_LOVE_STORY_CREATE

export default {
  SET_LOVE_STORY_CREATE(state, dataItem) {
    state.loveStory.unshift({
      ...dataItem,
    })
  },
}
