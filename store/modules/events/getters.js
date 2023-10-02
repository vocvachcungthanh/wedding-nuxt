export default {
  GET_LIST_EVENTS(state) {
    const info =
      'Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...'

    return {
      info,
      data: state.events,
    }
  },

  GET_EVENTS(state) {
    let Grooms = {}
    let Brides = {}
    const data = state.events || []

    data.forEach((item) => {
      if (item.key === 'groom') {
        Grooms = item
      } else {
        Brides = item
      }
    })

    return {
      Grooms,
      Brides,
    }
  },
}
