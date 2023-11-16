import { MwArray } from "~/libraries/helpers";

export default {
  SET_LOVE_STORY_CREATE(state, dataItem) {
    state.loveStory.unshift({
      ...dataItem,
    });
  },

  SET_LOVE_STORY(state, data) {
    state.loveStory = MwArray.setNumber(data);
  },

  SET_DATA_FROM(state, data) {
    state.dataFromLoveStory = data;
  },

  SET_LOVE_STORY_UPDATE(state, dataItem) {
    const index = state.loveStory.findIndex((item) => item.id === dataItem.id);

    if (index !== -1) {
      state.loveStory.splice(index, 1, dataItem);
      state.dataFromLoveStory = dataItem;
    }

    return state.loveStory;
  },

  DELETE_LOVE_STORY(state, id) {
    const data = state.loveStory.filter((item) => item.id !== id);

    state.loveStory = data;
  },
};
