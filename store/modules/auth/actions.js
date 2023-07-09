import { MwAuth } from '@/libraries/auth/index'
import { MESS_WELCOME_ADMIN } from '~/libraries/constant'
import { MwCookie, MwHandle } from '~/libraries/helpers'
// import { MwHeaders } from '~/libraries/core/refuse'

// const configs = new MwHeaders()

const auth = new MwAuth()

export default {
  async ACT_AUTH_LOGIN(context, params) {
    try {
      const response = await this.$axios.post('auth/login', { ...params })

      if (response.status === 200) {
        context.commit('SET_AUTH_LOGIN', response.data)
        context.dispatch('ACT_AUTH_INFO')
      }

      return Promise.resolve({
        success: true,
      })
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_AUTH_INFO(context) {
    try {
      const configs = {
        headers: {
          access_token: MwCookie.get('access_token'),
        },
      }

      const response = await this.$axios.get('auth/info', configs)

      if (response.status === 200) {
        context.commit('SET_AUTH_INFO', response.data)

        auth.setUserInfo(response.data)

        this.$router.push('/admin')

        MwHandle.handleSuccess({
          context: MESS_WELCOME_ADMIN,
        })
      }
    } catch (error) {
      MwHandle.handleError({
        context: error.data.message,
      })
    }
  },

  async ACT_AUTH_LOGOUT(_context) {
    try {
      const configs = {
        headers: {
          access_token: MwCookie.get('access_token'),
        },
      }

      const response = await this.$axios.delete('auth/logout', configs)

      if (response.status === 200) {
        auth.logout()
        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },
}
