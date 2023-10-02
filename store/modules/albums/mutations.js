export default {
  SET_GET_ALBUMS(state, data) {
    const existingIDs = new Set(state.albums.map((album) => album.id))

    const newData = data.filter((album) => !existingIDs.has(album.id))

    state.albums = [...state.albums, ...newData]
  },

  SET_GET_ALBUM_ADMIN(state, data) {
    state.albumAdmin = data
  },

  SET_STATUS_ALBUM_ADMIN(state, dataItem) {
    state.albumAdmin.data.forEach((item) => {
      if (item.id === dataItem.id) {
        item.status = dataItem.status
      }
    })
  },

  DELETE_ALBUM_ADMIN(state, id) {
    const data = state.albumAdmin.data.filter((item) => item.id !== id)

    state.albumAdmin.data = data
  },

  CREATE_ALBUM(state, dataItem) {
    state.albums.unshift({
      desc: dataItem.desc,
      id: dataItem.id,
      image: dataItem.image,
      title: dataItem.title,
      url: dataItem.url,
    })
  },

  SET_DATA_ITEMS_ALBUM(state, dataItem) {
    state.dataItem = dataItem
  },
}
