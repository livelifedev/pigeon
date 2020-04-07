import moment from 'moment';
import { userRegister } from '../../utils/api';

const state = {
  auth: localStorage.getItem('token'),
  pigeon: JSON.parse(sessionStorage.getItem('squabDetails'))
};

const getters = {
  isLoggedIn: state => !!state.auth,
  isActiveBreeder: state => !!state.pigeon,
  currentPigeon: state => state.pigeon,
  avatarElement: state => state.pigeon.element.toLowerCase(),
  pigeonAge: state => moment().diff(moment.unix(state.pigeon.dob), 'days')
};

const actions = {
  startSession: ({ commit }, pigeon) => {
    commit('setPigeon', pigeon);
  },
  registerUser: async ({ commit }, formDetails) => {
    const { data } = await userRegister(formDetails);
    localStorage.setItem('token', data.token);
    commit('setAuth', data.token);
  }
};

const mutations = {
  setAuth: (state, token) => {
    state.auth = token;
  },
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
