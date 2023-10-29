import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_DASHBOARDS(_context) {
    try {
      const response = await axios.get('admin/dashboard')

      if (response.status === 200) {
        _context.commit('SET_DASHBOARDS', response.data)
      }
    } catch (error) {}
  },
}
