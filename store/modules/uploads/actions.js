import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_UPLOAD_FILES(_context, params) {
    try {
      const response = await axios.post('admin/upload-file', params, {
        'Content-Type': 'multipart/form-data',
      })

      if (response.status === 200) {
        return Promise.resolve(response.data)
      }
    } catch (error) {
      if (error.status === 500) {
        return Promise.reject(error.errors.message)
      }

      return Promise.reject(error.errors.file[0])
    }
  },

  async ACT_DELETE_IMAGE(_context, googleId) {
    try {
      const response = await axios.post('admin/upload-delete-file', {
        google_id: googleId,
      })

      if (response === 200) {
        return Promise.resolve(response.message)
      }
    } catch (error) {
      if (error.status === 500) {
        return Promise.reject(error.errors.message)
      }

      return Promise.reject(error.errors.file[0])
    }
  },
}
