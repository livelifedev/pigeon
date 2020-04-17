// import moment from 'moment';
import {
  pigeonCreate,
  pigeonSelected,
  pigeonAddFeed,
  pigeonFeed
} from '../../utils/api';
import { calcAge, calcMissedMeals, HUNGERS } from '../../utils/pigeonTools';

const state = {
  selectedPigeon: null,
  currentHunger: null
};

const getters = {
  selectedPigeon: state => state.selectedPigeon,
  currentHunger: state => state.currentHunger,
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
  },
  updateHunger: ({ commit }) => {
    const pigeon = state.selectedPigeon;
    const lastFedDayDiff = calcAge(pigeon.lastFed);
    const missedMeals = calcMissedMeals(
      pigeon.lastFed,
      JSON.parse(pigeon.feedSchedule)
    );

    if (lastFedDayDiff > 0) {
      commit('setPigeonHunger', HUNGERS.STARVING);
    } else if (missedMeals) {
      commit('setPigeonHunger', HUNGERS.HUNGRY);
    } else {
      commit('setPigeonHunger', HUNGERS.NEUTRAL);
    }
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
  },
  setPigeonHunger: (state, hunger) => {
    state.currentHunger = hunger;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
