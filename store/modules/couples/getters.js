export default {
  GET_LIST_COUPLES(state) {
    let data = {}

    state.couples.data.forEach((item) => {
      if (item.status === 1) {
        data = item
      }
    })

    return data
  },

  GET_COUPLES(state) {
    let Grooms = {}
    let Brides = {}
    const BgCouple = state.couples.bgCouple || {}
    const data = state.couples.data || []

    data.forEach((item) => {
      if (item.status === 2) {
        Grooms = item
      } else {
        Brides = item
      }
    })

    return {
      Grooms,
      Brides,
      BgCouple,
    }
  },
}
