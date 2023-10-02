import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_CREATE_COUNT_DOWN(_context, params) {
    try {
      const response = await axios.post('admin/count-down-create', params)

      if (response.status === 200) {
        _context.commit('SET_LIST_COUNT_DOWN', response.data)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_UPDATE_COUNT_DOWN(_context, params) {
    try {
      const response = await axios.put(`admin/countdowns/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_LIST_COUNT_DOWN(context) {
    try {
      const response = await axios.get('admin/countdowns')

      if (response.status === 200) {
        context.commit('SET_LIST_COUNT_DOWN', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_GET_COUNT_DOWN(context) {
    try {
      const response = await axios.get('count-down')
      if (response.status === 200) {
        context.commit('SET_LIST_COUNT_DOWN', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
