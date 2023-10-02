export default {
  GET_MUSICS(state) {
    state.music.forEach((item) => {
      item.play = false
    })

    return state.music
  },
}
