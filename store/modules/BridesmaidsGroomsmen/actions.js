import { Refuse } from "@/libraries/core/refuse";

const axios = new Refuse();

export default {
  async ACT_CREATE_BRIDESMAIDS_GROOMSMEN({ commit }, params) {
    try {
      const response = await axios.post("admin/bridesmaids-groomsmen", params);

      if (response.status === 200) {
        commit("SET_CREATE_BRIDESMAIDS_GROOMSMEN", response.data);

        return Promise.resolve(response.message);
      }
    } catch (error) {
      return Promise.reject(error.errors.message);
    }
  },

  async ACT_UPDATE_BRIDESMAIDS_GROOMSMEN({ commit }, params) {
    try {
      const response = await axios.put(
        `admin/bridesmaids-groomsmen/${params.id}`,
        params
      );

      if (response.status === 200) {
        commit("SET_UPDATE_BRIDESMAIDS_GROOMSMEN", response.data);

        return Promise.resolve(response.message);
      }
    } catch (error) {
      return Promise.reject(error.errors.message);
    }
  },

  async ACT_GET_ALL_BRIDESMAIDS_GROOMSMEN({ commit }) {
    try {
      const response = await axios.get("admin/bridesmaids-groomsmen");

      if (response.status === 200) {
        commit("SET_BRIDESMAIDS_GROOMSMEN", response.data);

        return Promise.resolve(response.message);
      }
    } catch (error) {
      return Promise.reject(error.errors.message);
    }
  },

  async ACT_GET_BRIDESMAIDS_GROOMSMEN({ commit }) {
    try {
      const response = await axios.get("bridesmaids-groomsmen");

      if (response.status === 200) {
        commit("SET_BRIDESMAIDS_GROOMSMEN", response.data);

        return Promise.resolve(response.message);
      }
    } catch (error) {
      return Promise.reject(error.errors.message);
    }
  },
};
