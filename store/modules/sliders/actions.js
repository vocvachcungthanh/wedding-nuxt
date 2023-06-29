import { MwHeaders } from '~/libraries/core/refuse'

const configs = new MwHeaders()

export default {
  async ACT_GET_SLIDERS(context) {
    try {
      const response = await this.$axios.get('sliders')

      if (response.status === 200) {
        const sliders = []

        response.data.forEach((item) => [
          sliders.push({
            slider_id: item.id,
            slider_link: item.link,
            slider_img: item.link_img,
            slider_status: item.status,
          }),
        ])

        context.commit('SET_SLIDERS', sliders)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error })
    }
  },

  async ACT_CREATE_SLIDERS(context, params) {
    try {
      const response = await this.$axios.post(
        'sliders',
        { ...params },
        configs.headers()
      )

      if (response.status === 200) {
        context.commit('SET_SLIDERS_CREATE', response.data)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_UPDATE_SLIDER(context, params) {
    try {
      const response = await this.$axios.put(
        `sliders/${params.id}`,
        {
          status: params.status,
        },
        configs.headers()
      )

      if (response.status === 200) {
        context.commit('SET_UPDATE_STATUS', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message)
    }
  },

  async ACT_DELETE_SLIDER(context, id) {
    try {
      const response = await this.$axios.delete(`sliders/${id}`)

      if (response.status === 200) {
        context.commit('SET_DELETE_SLIDERS', id)
        return Promise.resolve({
          status: 'ok',
        })
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_EDIT_SLIDER(context, params) {
    try {
      const response = await this.$axios.post(
        'sliders/edit',
        params,
        configs.headers()
      )

      if (response.status === 200) {
        context.commit('SET_EDIT_SLIDER', params)

        return Promise.resolve(response.message)
      }
    } catch (error) {
      return Promise.reject(error.message)
    }
  },

  async ACT_GET_LIST_SLIDER(_context, _params) {
    try {
      const response = await this.$axios.post(
        `sliders/list?page=${_params.page}`,
        {
          limit: _params.limit,
        },
        configs.headers
      )

      if (response.status === 200) {
        // eslint-disable-next-line no-console
        console.log(response.data)
        const sliders = []

        response.data.data.forEach((item) => [
          sliders.push({
            slider_id: item.id,
            slider_link: item.link,
            slider_img: item.link_img,
            slider_status: item.status,
          }),
        ])

        _context.commit('SET_LIST_SLIDERS', sliders)

        return Promise.resolve({
          to: response.data.to,
          total: response.data.total,
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
