const state = {
  welcome: false
};

const getters = {
  getWelcome() {
    return state.welcome;
  },
};

const mutations = {
  setWelcome: (state, welcome) => {
    state.welcome = welcome;
  },
};

export default {
  state,
  getters,
  mutations,
};
