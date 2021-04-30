const state = {
  welcome: false
};

const getters = {
  getWelcome() {
    return state.welcome;
  },
};

const actions = {
  setWelcome: (state, welcome) => {
    state.welcome = welcome;
  },
};

export default {
  state,
  getters,
  actions,
};
