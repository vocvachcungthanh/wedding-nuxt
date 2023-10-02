import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  // public
  async ACT_GET_SLIDERS(context) {
    try {
      const response = await axios.get('sliders')

      if (response.status === 200) {
        context.commit('SET_SLIDERS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },

  // private

  async ACT_CREATE_SLIDERS(_context, params) {
    try {
      const response = await axios.post('/admin/slider-create', params)

      if (response.status === 200) {
        _context.commit('SET_SLIDERS_CREATE', response.data)
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

  async ACT_UPDATE_SLIDER(context, params) {
    try {
      const response = await axios.put(`sliders/${params.id}`, {
        status: params.status,
      })

      if (response.status === 200) {
        context.commit('SET_UPDATE_STATUS', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message)
    }
  },

  async ACT_UPDATE_ALL(context, params) {
    try {
      const response = await axios.put(`admin/sliders/${params.id}`, params)

      if (response.status === 200) {
        context.commit('SET_UPLOAD_SLIDERS', params)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_DELETE_SLIDER(context, params) {
    try {
      const response = await axios.post('admin/slider-delete', params)

      if (response.status === 200) {
        context.commit('SET_DELETE_SLIDERS', params.id)
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_SLIDER_STATUS(context, params) {
    try {
      const response = await axios.post('admin/slider-status', params)

      if (response.status === 200) {
        context.commit('SET_SLIDER_STATUS', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },

  async ACT_GET_LIST_SLIDER(_context, _params) {
    try {
      const response = await axios.get(`admin/sliders/${_params.page}`)

      if (response.status === 200) {
        _context.commit('SET_LIST_SLIDERS', response.data.data)
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

  async ACT_UPLOAD_IMAGE(_context, params) {
    try {
      const response = await axios.post('admin/sliders', params, {
        'Content-Type': 'multipart/form-data',
      })

      if (response.status === 200) {
        // eslint-disable-next-line no-console
        return Promise.resolve(response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return Promise.reject(error.errors.file[0])
    }
  },
}
