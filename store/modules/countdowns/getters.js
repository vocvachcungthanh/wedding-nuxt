export default {
  GET_COUNT_DOWN(state) {
    const countDown = {
      ...state.countDowns,
      date: state.countDowns.date || null,
    }

    return countDown
  },
}
