import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_CREATE_LOVE_STORY(_context, params) {
    try {
      const response = await axios.post('/admin/love-story', params)

      if (response.status === 200) {
        _context.commit('SET_LOVE_STORY_CREATE', response.data)
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

  async ACT_GET_LOVE_STORY(_context) {
    try {
      const response = await axios.get('admin/love-story')

      if (response.status === 200) {
        _context.commit('SET_LOVE_STORY', response.data)
      }
    } catch (error) {}
  },

  async ACT_GET_LOVE_STORY_PUBLIC(_context) {
    try {
      const response = await axios.get('love-story')

      if (response.status === 200) {
        return Promise.resolve(response.data)
      }
    } catch (error) {}
  },
}
