import moment from 'moment';
import { userLogin, userRegister, userCurrent } from '../../utils/api';

const state = {
  token: localStorage.getItem('token'),
  currentUser: null,
  ownedPigeons: null,
  pigeon: JSON.parse(sessionStorage.getItem('squabDetails'))
};

const getters = {
  isLoggedIn: state => !!state.currentUser,
  currentUser: state => state.currentUser,
  currentPigeon: state => state.pigeon,
  avatarElement: state => state.pigeon.element.toLowerCase(),
  pigeonAge: state => moment().diff(moment.unix(state.pigeon.dob), 'days'),
  ownedPigeons: state => state.ownedPigeons
};

const actions = {
  startSession: ({ commit }, pigeon) => {
    commit('setPigeon', pigeon);
  },
  loginUser: async ({ commit }, { email, password }) => {
    const { data } = await userLogin(email, password);
    localStorage.setItem('token', data.token);
    commit('setAuth', data.token);
  },
  logoutUser: ({ commit }) => {
    localStorage.removeItem('token');
    commit('setAuth', null);
    commit('setCurrentUser', null);
  },
  registerUser: async ({ commit }, formDetails) => {
    const { data } = await userRegister(formDetails);
    localStorage.setItem('token', data.token);
    commit('setAuth', data.token);
  },
  getCurrentUser: async ({ commit }) => {
    const { data } = await userCurrent();
    const { profile } = data;
    commit('setCurrentUser', profile);
    commit('setOwnedPigeons', profile.pigeons);
  }
};

const mutations = {
  setAuth: (state, token) => {
    state.token = token;
  },
  setCurrentUser: (state, profile) => {
    state.currentUser = { ...profile, pigeons: profile.pigeons.length };
  },
  setOwnedPigeons: (state, pigeons) => {
    state.ownedPigeons = pigeons.map(pigeon => ({
      ...pigeon,
      dob: `${moment().diff(moment.unix(pigeon.dob), 'days')} days`
    }));
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
