import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_COUPLES(context) {
    try {
      const response = await axios.get('admin/couples')

      if (response.status === 200) {
        context.commit('SET_LIST_COUPLES', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_CREATE_COUPLE(_context, params) {
    try {
      const response = await axios.post('admin/couple-create', params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_UPDATE_COUPLE(_context, params) {
    try {
      const response = await axios.put(`admin/couples/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_GET_LIST_COUPLES(context) {
    try {
      const response = await axios.get('couples')

      if (response.status === 200) {
        context.commit('SET_LIST_COUPLES', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
