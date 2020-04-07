import moment from 'moment';
import { userRegister, userCurrent } from '../../utils/api';

const state = {
  auth: localStorage.getItem('token'),
  currentUser: null,
  pigeon: JSON.parse(sessionStorage.getItem('squabDetails'))
};

const getters = {
  isLoggedIn: state => !!state.currentUser,
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
  },
  getCurrentUser: async ({ commit }) => {
    const { data } = await userCurrent();
    commit('setCurrentUser', data.profile);
  }
};

const mutations = {
  setAuth: (state, token) => {
    state.auth = token;
  },
  setCurrentUser: (state, profile) => {
    state.currentUser = profile;
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
