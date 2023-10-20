export default {
  SET_GUESTKBOOK(state, data) {
    state.guestkbooks = data
  },

  SET_CREATE_GUESTKBOOK(state, dataItem) {
    const DeleteItems = ['created_at', 'email', 'updated_at', '']

    DeleteItems.forEach((item) => {
      delete dataItem[item]
    })

    const isCheck = state.guestkbooks.data.some(
      (item) => item.id === dataItem.id
    )

    if (!isCheck) state.guestkbooks.data.unshift(dataItem)
  },

  SET_GUESTKBOOK_PUBLIC(state, data) {
    state.guestkbooks = data
  },
}
