import Vue from 'vue';
import VueRouter from 'vue-router';

// Containers
import AppFull from '../containers/AppFull';

// Views
import AppLanding from '../views/AppLanding';
import BreederSelection from '../views/BreederSelection';
import BreederHome from '../views/BreederHome';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: 'landing',
      component: AppFull,
      children: [
        {
          path: 'landing',
          component: AppLanding
        },
        {
          path: 'breeder-selection',
          component: BreederSelection
        },
        {
          path: 'breeder-home',
          component: BreederHome,
          beforeEnter: (to, from, next) => {
            if (sessionStorage.getItem('squabDetails')) {
              next();
            } else {
              next('/');
            }
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
