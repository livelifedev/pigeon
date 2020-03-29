import moment from 'moment';

const state = {
  pigeon: JSON.parse(localStorage.getItem('squabDetails'))
};

const getters = {
  isActiveBreeder: state => !!state.pigeon,
  currentPigeon: state => state.pigeon,
  avatarElement: state => state.pigeon.element.toLowerCase(),
  pigeonAge: state => moment().diff(moment.unix(state.pigeon.dob), 'days')
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
