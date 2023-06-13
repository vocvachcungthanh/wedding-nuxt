export default {
  async ACT_GET_SETTINGS(context) {
    try {
      const response = await this.$axios('settings')

      if (response.status === 200) {
        const settings = {
          id: response.data[0].id,
          brides_name: response.data[0].brides_name,
          grooms_name: response.data[0].grooms_name,
          address_home_brides: response.data[0].address_home_brides,
          address_home_grooms_name: response.data[0].address_home_grooms_name,
          map_brides: response.data[0].map_brides,
          map_grooms: response.data[0].map_grooms,
          time_wedding: response.data[0].time_wedding,
          facebook_brides: response.data[0].facebook_brides,
          facebook_grooms: response.data[0].facebook_grooms,
          instagram_brides: response.data[0].instagram_brides,
          instagram_grooms: response.data[0].instagram_grooms,
          created_at: response.data[0].created_at,
          updated_at: response.data[0].updated_at,
        }

        context.commit('SET_GET_SETTINGS', settings)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },
}
