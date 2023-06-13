export default {
  async ACT_GET_MENUS(context) {
    try {
      const response = await this.$axios.get('menus')

      if (response.status === 200) {
        const menus = []

        response.data.forEach((item) => {
          menus.push({
            menu_id: item.id,
            menu_name: item.name,
            menu_link: item.link,
          })
        })

        // eslint-disable-next-line no-console
        context.commit('SET_MENUS', menus)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
