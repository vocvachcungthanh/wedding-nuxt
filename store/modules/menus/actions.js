import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()
export default {
  async ACT_GET_MENUS(context) {
    try {
      const response = await axios.get('menus')

      if (response.status === 200) {
        context.commit('SET_MENUS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_MENUS_CREATE(context, params) {
    try {
      const response = await axios.post('admin/menus', { ...params })

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
      const response = await axios.get('admin/menus')

      if (response.status === 200) {
        context.commit('SET_MENUS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_MENU_UPDATE(context, params) {
    try {
      const response = await axios.post(
        `menus/update/${params.menu_id}`,
        params
      )

      if (response.status === 200) {
        context.commit('SET_MENUS_UPDATE', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_MENU_DELETE(_context, ID) {
    try {
      const response = await axios.delete(`admin/menus/${ID}`)

      if (response.status === 200) {
        _context.commit('DELETE_MENU_ADMIN', ID)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}
