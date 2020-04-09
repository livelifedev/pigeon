import { pigeonCreate, pigeonSelected } from '../../utils/api';

const state = {
  selectedPigeon: null
};

const getters = {
  selectedPigeon: state => state.selectedPigeon
};

const actions = {
  registerPigeon: async ({ commit }, formDetails) => {
    const { data } = await pigeonCreate(formDetails);
    commit('addToUserPigeons', data.pigeon, { root: true });
  },
  getSelectedPigeon: async ({ commit }, id) => {
    const { data } = await pigeonSelected(id);
    commit('setSelectedPigeon', data.pigeon);
  }
};

const mutations = {
  setSelectedPigeon: (state, pigeon) => {
    state.selectedPigeon = pigeon;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
