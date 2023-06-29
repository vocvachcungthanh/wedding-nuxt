import { MwHeaders } from '~/libraries/core/refuse'

const configs = new MwHeaders()

export const coverMenus = (data) => {
  const menus = []

  data.forEach((item) => {
    menus.push({
      menu_id: item.id,
      menu_name: item.name,
      menu_link: item.link,
    })
  })

  return menus
}

export default {
  async ACT_GET_MENUS(context) {
    try {
      const response = await this.$axios.get('menus')

      if (response.status === 200) {
        context.commit('SET_MENUS', coverMenus(response.data))
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_MENUS_CREATE(context, params) {
    try {
      const response = await this.$axios.post(
        'admin/menus',
        { ...params },
        configs.headers()
      )

      if (response.status === 200) {
        context.commit('SET_MENUS_CREATE', response.data)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_GET_MENU_LIST(context) {
    try {
      const response = await this.$axios.post('menus/list', configs.headers())

      if (response.status === 200) {
        context.commit('SET_MENUS', coverMenus(response.data))
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
