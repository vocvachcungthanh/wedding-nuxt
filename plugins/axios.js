export default function ({ $axios, redirect }, inject) {
  const api = $axios.create({
    Headers: {},
  })

  // eslint-disable-next-line no-undef
  api.setBaseURL(process.env.baseApiUrl)

  inject('axios', api)
}
