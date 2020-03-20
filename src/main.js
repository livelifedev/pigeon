import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import BreederSelection from "./views/BreederSelection"

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes: [
    { path: '/selection', component: BreederSelection }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
