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
}
