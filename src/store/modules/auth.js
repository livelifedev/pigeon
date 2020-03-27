const state = {
  pigeon: JSON.parse(localStorage.getItem('squabDetails'))
};

const getters = {
  isActiveBreeder: state => !!state.pigeon
};

const actions = {
  startSession: ({ commit }, pigeon) => {
    commit('setPigeon', pigeon);
  }
};

const mutations = {
  setPigeon: (state, pigeon) => {
    state.pigeon = pigeon;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
