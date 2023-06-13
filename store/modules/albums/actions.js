export default {
  async ACT_GET_ALBUMS(context) {
    try {
      const response = await this.$axios.get('albums')

      if (response.status === 200) {
        const albums = []

        response.data.forEach((item) => {
          albums.push({
            album_id: item.id,
            album_image: item.link_img,
            album_link: item.link,
            album_status: item.status,
          })
        })

        context.commit('SET_GET_ALBUMS', albums)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },
}
