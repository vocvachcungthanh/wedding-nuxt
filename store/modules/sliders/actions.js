export default {
  async ACT_GET_SLIDERS(context) {
    try {
      const response = await this.$axios.get('sliders')

      if (response.status === 200) {
        const sliders = []

        response.data.forEach((item) => [
          sliders.push({
            slider_id: item.id,
            slider_link: item.link,
            slider_img: item.link_img,
          }),
        ])

        context.commit('SET_SLIDERS', sliders)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },
}
