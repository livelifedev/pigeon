import {
  pigeonCreate,
  pigeonSelected,
  pigeonAddFeed,
  pigeonFeed
} from '../../utils/api';

const state = {
  selectedPigeon: null
};

const getters = {
  selectedPigeon: state => state.selectedPigeon,
  feedingSchedule: state => JSON.parse(state.selectedPigeon.feedSchedule)
};

const actions = {
  registerPigeon: async ({ commit }, formDetails) => {
    const { data } = await pigeonCreate(formDetails);
    commit('addToUserPigeons', data.pigeon, { root: true });
  },
  getSelectedPigeon: async ({ commit }, id) => {
    const { data } = await pigeonSelected(id);
    commit('setSelectedPigeon', data.pigeon);
  },
  attachFeedingSchedule: async ({ commit }, { id, formDetails }) => {
    const { data } = await pigeonAddFeed(id, formDetails);
    commit('updateFeedSchedule', data.feedSchedule);
  },
  updateFeedGrowth: async ({ commit }, { id, growth, lastFed }) => {
    const { data } = await pigeonFeed(id, growth, lastFed);
    commit('updatePigeon', data.updatedPigeon);
  }
};

const mutations = {
  setSelectedPigeon: (state, pigeon) => {
    state.selectedPigeon = pigeon;
  },
  updateFeedSchedule: (state, schedule) => {
    state.selectedPigeon.feedSchedule = schedule;
  },
  updatePigeon: (state, details) => {
    state.selectedPigeon = { ...state.selectedPigeon, ...details };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
