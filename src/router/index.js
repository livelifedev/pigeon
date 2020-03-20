import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLanding from "../views/AppLanding"
import BreederSelection from "../views/BreederSelection"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: AppLanding },
    { path: '/breeder-selection', component: BreederSelection }
  ]
});