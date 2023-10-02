import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_EVENTS(context) {
    try {
      const response = await axios.get('admin/events')

      if (response.status === 200) {
        context.commit('SET_LIST_EVENTS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_CREATE_EVENT(_context, params) {
    try {
      const response = await axios.post('admin/event-create', params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_UPDATE_EVENT(_context, params) {
    try {
      const response = await axios.put(`admin/events/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_GET_LIST_EVENTS(context) {
    try {
      const response = await axios.get('events')

      if (response.status === 200) {
        context.commit('SET_LIST_EVENTS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
