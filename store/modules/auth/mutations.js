import { MwCookie } from '~/libraries/helpers'

export default {
  SET_AUTH_LOGIN(state, data) {
    MwCookie.set('access_token', data.token)
    MwCookie.set('refresh_token', data.refresh_token)
    MwCookie.set('refresh_token_expired', data.refresh_token_expired)
    MwCookie.set('token_expired', data.token_expired)
    MwCookie.set('user_id', data.user_id)

    state.INIT_AUTH.LOGIN = data
  },

  SET_AUTH_INFO(state, data) {
    state.INIT_AUTH.INFO = data
  },
}
