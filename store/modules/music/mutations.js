export default {
  SET_LIST_MUSIC(state, data) {
    state.music = data
  },

  SET_MUSIC_ADMIN(state, data) {
    const existingIDs = new Set(state.music.map((item) => item.id))

    const newData = data.filter((item) => !existingIDs.has(item.id))

    state.music = [...state.music, ...newData]
  },

  CREATE_MUSIC(state, dataItem) {
    state.music.unshift(dataItem)
  },

  DELETE_MUSIC(state, id) {
    const data = state.music.filter((item) => item.id !== id)

    state.music = data
  },
}
