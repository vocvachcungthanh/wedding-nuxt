import { MwAuth } from '@/libraries/auth/index'
import { MESS_WELCOME_ADMIN } from '~/libraries/constant'
import { MwCookie, MwHandle } from '~/libraries/helpers'
import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

const auth = new MwAuth()

export default {
  async ACT_AUTH_LOGIN(context, params) {
    try {
      const response = await axios.post('login', { ...params })

      if (response.status === 200) {
        auth.setAccessToken(response.data.token)
        auth.setRefreshToken(response.data.refresh_token)
        auth.setTokenExpired(response.data.token_expired)
        auth.setRefreshTokenExpired(response.data.refresh_token_expired)
        auth.setUser(response.data.user_id)
        context.commit('SET_AUTH_LOGIN', response.data)
        context.dispatch('ACT_AUTH_INFO', {
          id: response.data.user_id,
          token: response.data.token,
        })
      }

      return Promise.resolve({
        success: true,
      })
    } catch (error) {
      return Promise.reject(error.errors)
    }
  },

  async ACT_AUTH_INFO(context, params) {
    try {
      const configs = {
        headers: {
          'X-Requested-With': 'XMLHttpsRequest',
          access_token: params.token,
        },
      }
      const response = await axios.get(`admin/auth/${params.id}`, configs)

      if (response.status === 200) {
        context.commit('SET_AUTH_INFO', response.data)

        auth.setUserInfo(response.data)

        this.$router.push('/admin')

        MwHandle.handleSuccess({
          context: MESS_WELCOME_ADMIN,
        })

        window.location.href = '/admin'
      }
    } catch (error) {
      MwHandle.handleError({
        context: error.errors.message,
      })
    }
  },

  async ACT_AUTH_LOGOUT(_context) {
    try {
      const response = await axios.delete(
        `/admin/auth/${MwCookie.get('user_id')}`
      )

      if (response.status === 200) {
        auth.logout()
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}
