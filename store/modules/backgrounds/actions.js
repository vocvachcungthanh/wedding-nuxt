import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_CREATE_BG(context, params) {
    try {
      const response = await axios.post('admin/bgs-create', params)

      if (response.status === 200) {
        context.commit('SET_CREATE_BG', response.message)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },

  async ACT_UPDATE_BG(_context, params) {
    try {
      const response = await axios.put(`admin/bgs/${params.id}`, params)

      if (response.status === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.errors.message)
    }
  },
}
