import moment from 'moment';
import { pigeonSelected } from '../../utils/api';

const state = {
  selectedPigeon: null
};

const getters = {
  selectedPigeon: state => state.selectedPigeon
};

const actions = {
  getSelectedPigeon: async ({ commit }, id) => {
    const { data } = await pigeonSelected(id);
    const pigeon = {
      ...data.pigeon,
      dob: `${moment().diff(moment.unix(data.pigeon.dob), 'days')} days`
    };
    commit('setSelectedPigeon', pigeon);
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
