import { MwCookie } from '~/libraries/helpers'

export default function ({ $axios }, inject) {
  const headers = {
    access_token: MwCookie.get('access_token'),
  }

  const api = $axios.create({
    headers,
  })

  api.interceptors.response.use(
    (response) => {
      return {
        status: response.status,
        data: response.data.data,
        message: response.data.message,
      }
    },
    (error) => {
      if (error.response.status === 500) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({
          status: 500,
          message: 'Lỗi kết nối csdl',
        })
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message,
      })
    }
  )

  // eslint-disable-next-line no-undef
  api.setBaseURL(process.env.baseApiUrl)

  inject('axios', api)
}
