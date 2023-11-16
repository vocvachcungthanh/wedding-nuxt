import { MwArray } from "~/libraries/helpers";

export default {
  SET_SLIDERS(state, data) {
    state.sliders = [];
    state.sliders = data;
  },

  // private

  SET_UPDATE_STATUS(state, data) {
    state.sliders.forEach((item) => {
      if (item.id === data.id) {
        item.status = data.status;
      }
    });

    return state.sliders;
  },

  SET_SLIDERS_CREATE(state, dataItem) {
    state.sliders.unshift({
      ...dataItem,
    });
  },

  SET_DELETE_SLIDERS(state, id) {
    const data = state.sliders.filter((item) => item.id !== id);

    state.sliders = data;
  },

  SET_SLIDER_STATUS(state, dataItem) {
    state.sliders.forEach((item) => {
      if (item.id === dataItem.id) {
        item.status = Number(dataItem.status);
      }
    });

    return state.sliders;
  },

  SET_LIST_SLIDERS(state, data) {
    const sliders = MwArray.setNumber(data);
    const existingIDs = new Set(state.sliders.map((slider) => slider.id));

    const newData = sliders.filter((slider) => !existingIDs.has(slider.id));

    state.sliders = [...state.sliders, ...newData];
  },

  SET_UPLOAD_SLIDERS(state, dataItem) {
    state.sliders.forEach((item) => {
      if (item.id === dataItem.id) {
        item.image = dataItem.image;
        item.title = dataItem.title;
        item.url = dataItem.url;
        item.desc = dataItem.desc;
        item.google_id = dataItem.google_id;
        item.source_id = dataItem.source_id;
        item.status = dataItem.status;
      }
    });

    return state.sliders;
  },
};
