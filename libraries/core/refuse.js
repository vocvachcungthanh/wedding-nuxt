import { MwCookie } from '~/libraries/helpers'

export class MwHeaders {
  headers() {
    return {
      access_token: MwCookie.get('access_token'),
    }
  }
}
