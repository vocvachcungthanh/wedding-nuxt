import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_CREATE_GUESTKBOOK(_context, params) {
    try {
      const response = await axios.post('guestkbook-create', params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      if (error.status === 500) {
        return Promise.reject(error.errors)
      } else {
        return Promise.reject(error)
      }
    }
  },

  async ACT_REPLY_GUESTKBOOK(_context, params) {
    try {
      const response = await axios.post('admin/send-message', params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      if (error.status === 500) {
        return Promise.reject(error.errors)
      } else {
        return Promise.reject(error)
      }
    }
  },
}
