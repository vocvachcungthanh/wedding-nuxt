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

  async ACT_UPDATE_LOVE_STORY(_context, params) {
    try {
      const response = await axios.put(`admin/love-story/${params.id}`, params)

      if (response.status === 200) {
        _context.commit('SET_LOVE_STORY_UPDATE', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  ACT_GET_DATA_FROM(_context, dataItem) {
    _context.commit('SET_DATA_FROM', dataItem)
  },

  async ACT_DELETE_LOVE_STORY(_context, params) {
    try {
      const response = await axios.post('admin/lover-story-delete', params)

      if (response.status === 200) {
        _context.commit('DELETE_LOVE_STORY', params.id)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}
