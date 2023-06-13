import { getToKenCookie } from '~/helpers'

export default function ({ req, redirect }) {
  const tokenUser = getToKenCookie(req)
  // eslint-disable-next-line no-console
  console.log(tokenUser)

  return redirect('/admin')
}
