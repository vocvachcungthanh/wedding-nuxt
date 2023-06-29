import { MwString, MwCookie } from '~/libraries/helpers'

export class MwAuth {
  constructor(request = null) {
    this.req = request
  }

  isServer() {
    return process.server
  }

  isBrowser() {
    return process.browser
  }

  setAccessToken(accessToken) {
    if (this.isServer()) return
    if (MwString.checkExists(accessToken)) {
      MwCookie.set('access_token', accessToken, '1M')
    } else MwCookie.delete('access_token')
  }

  setUserInfo(userInfo) {
    if (this.isServer()) return
    if (MwString.isObject(userInfo)) {
      MwCookie.set('user_info', JSON.stringify(userInfo), '1M')
    } else MwCookie.delete('user_info')
  }

  /**
   * Thông tin user đăng nhập
   * */
  getUserInfo() {
    let strInfoUser = null
    if (
      this.isServer() &&
      MwString.existsObject(this.req, ['headers', 'cookie'])
    ) {
      strInfoUser = MwCookie.convertCookie('user_info', this.req.headers.cookie)
    }

    if (this.isBrowser() && MwString.checkExists(MwCookie.get('user_info'))) {
      strInfoUser = MwCookie.get('user_info')
    }

    if (strInfoUser) return JSON.parse(strInfoUser)
    else return null
  }

  logout() {
    if (this.isServer()) return
    MwCookie.delete('token_expired')
    MwCookie.delete('user_id')
    MwCookie.delete('refresh_token_expired')
    MwCookie.delete('access_token')
    MwCookie.delete('user_info')
    MwCookie.delete('refresh_token')
  }

  /**
   * Kiểm tra đăng nhập
   * */
  logged() {
    const userInfo = this.getUserInfo()

    if (
      MwString.isObject(userInfo) &&
      MwString.checkExists(userInfo.id) &&
      parseInt(userInfo.id) >= 1
    ) {
      return true
    } else return false
  }
}
