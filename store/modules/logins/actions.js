export default {
  async ACT_LOGIN(context, params) {
    try {
      const response = await this.$axios.post('logins', params)

      if (response.status === 200) {
        // eslint-disable-next-line no-console
        console.log(response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },
}
