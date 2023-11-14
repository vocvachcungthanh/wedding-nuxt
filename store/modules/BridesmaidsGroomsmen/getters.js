export default {
  GET_BRIDESMAIDS_GROOMSMEN(state) {
    let Groomsmen = {};
    let Bridesmaids = {};

    const data = state.BridesmaidsGroomsmen || [];

    data.forEach((item) => {
      if (parseInt(item.status, 10) === 2) {
        Groomsmen = item;
      } else {
        Bridesmaids = item;
      }
    });

    return {
      Groomsmen,
      Bridesmaids,
    };
  },
};
