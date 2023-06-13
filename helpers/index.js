import cookie from 'cookie'

export const getToKenCookie = (request) => {
  try {
    const cookieString = request.headers.cookie
    const cookieObj = cookie.parse(cookieString)

    return cookieObj.token
  } catch (error) {
    return ''
  }
}
