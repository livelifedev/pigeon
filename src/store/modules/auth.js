import { userLogin, userRegister, userCurrent } from '../../utils/api';

const state = {
  token: localStorage.getItem('token'),
  currentUser: null,
  ownedPigeons: null
};

const getters = {
  isLoggedIn: state => !!state.currentUser,
  currentUser: state => state.currentUser,
  ownedPigeons: state => state.ownedPigeons
};

const actions = {
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
    const profile = { ...data.profile, pigeons: data.profile.pigeons.length };
    commit('setCurrentUser', profile);
    commit('setOwnedPigeons', data.profile.pigeons);
  }
};

const mutations = {
  setAuth: (state, token) => {
    state.token = token;
  },
  setCurrentUser: (state, profile) => {
    state.currentUser = profile;
  },
  setOwnedPigeons: (state, pigeons) => {
    state.ownedPigeons = pigeons;
  },
  addToUserPigeons: (state, pigeon) => {
    state.ownedPigeons.push(pigeon);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
