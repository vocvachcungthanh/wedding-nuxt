import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_MUSIC(context) {
    try {
      const response = await axios.get('music')

      if (response.status === 200) {
        context.commit('SET_LIST_MUSIC', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_CREATE_MUSIC(_context, params) {
    try {
      const response = await axios.post('admin/music-create', params)

      if (response.status === 200) {
        _context.commit('CREATE_MUSIC', response.data)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_UPDATE_MUSIC(_context, params) {
    try {
      const response = await axios.put(`admin/music/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_GET_MUSIC_ADMIN(_context, params) {
    try {
      const response = await axios.get(`/admin/music/${params.page}`, {
        params: { ...params },
      })

      if (response.status === 200) {
        _context.commit('SET_MUSIC_ADMIN', response.data.data)

        return Promise.resolve({
          current_page: response.data.current_page,
          last_page: response.data.last_page,
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_DELETE_MUSIC(_context, params) {
    try {
      const response = await axios.post('admin/music-delete', params)

      if (response.status === 200) {
        _context.commit('DELETE_MUSIC', params.id)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  ACT_PLAY_MUSIC(_context, params) {
    _context.commit('SET_PLAY_MUSIC', params)
  },
}
