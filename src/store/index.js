import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import pigeon from './modules/pigeon';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    pigeon
  }
});
