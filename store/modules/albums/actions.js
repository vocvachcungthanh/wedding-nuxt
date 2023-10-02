import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_ALBUMS(context, params) {
    try {
      const response = await axios.get(`albums/${params.page}`, {
        params: { ...params },
      })

      if (response.status === 200) {
        context.commit('SET_GET_ALBUMS', response.data.data)
        return Promise.resolve({
          current_page: response.data.current_page,
          last_page: response.data.last_page,
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },

  async ACT_CREATE_ALBUM(_context, params) {
    try {
      const response = await axios.post('/admin/album-create', params)

      if (response.status === 200) {
        _context.commit('CREATE_ALBUM', response.data)
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

  async ACT_GET_ALBUM_ADMIN(_context, params) {
    try {
      const response = await axios.get(`/admin/albums/${params.page}`, {
        params: { ...params },
      })

      if (response.status === 200) {
        _context.commit('SET_GET_ALBUM_ADMIN', response.data)

        return Promise.resolve(response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_STATUS_ALBUM_ADMIN(_context, params) {
    try {
      const response = await axios.post('admin/album-status', params)

      if (response.status === 200) {
        _context.commit('SET_STATUS_ALBUM_ADMIN', params)

        return Promise.resolve(response.data)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_ALBUM_DELETE(_context, params) {
    try {
      const response = await axios.post('admin/album-delete', params)

      if (response.status === 200) {
        _context.commit('DELETE_ALBUM_ADMIN', params.id)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  ACT_DATA_ITEMS_ALBUM(_context, params) {
    _context.commit('SET_DATA_ITEMS_ALBUM', params)
  },

  async ACT_UPDATE_ALBUMS(_context, params) {
    try {
      const response = await axios.put(`admin/albums/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}
