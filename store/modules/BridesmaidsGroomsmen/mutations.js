export default {
  SET_UPDATE_BRIDESMAIDS_GROOMSMEN(state, dataItem) {
    const index = state.BridesmaidsGroomsmen.findIndex(
      (item) => item.id === dataItem.id
    );

    if (index !== -1) {
      state.BridesmaidsGroomsmen[index] = dataItem;
    }

    return state.BridesmaidsGroomsmen;
  },

  SET_CREATE_BRIDESMAIDS_GROOMSMEN(state, dataItem) {
    state.BridesmaidsGroomsmen.unshift({
      ...dataItem,
    });
  },

  SET_BRIDESMAIDS_GROOMSMEN(state, dataItem) {
    state.BridesmaidsGroomsmen = dataItem;
  },
};
