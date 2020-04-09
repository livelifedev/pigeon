import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';

// Containers
import AppFull from '../containers/AppFull';

// Views
import AppLanding from '../views/AppLanding';
import AppLogin from '../views/AppLogin';
import BreederRegister from '../views/BreederRegister';
import BreederSelection from '../views/BreederSelection';
import BreederProfile from '../views/BreederProfile';
import BreederAviary from '../views/BreederAviary';
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
          path: 'login',
          component: AppLogin
        },
        {
          path: 'breeder-register',
          component: BreederRegister
        },
        {
          path: 'breeder-selection',
          component: BreederSelection
        },
        {
          path: 'breeder-profile',
          component: BreederProfile
        },
        {
          path: 'breeder-aviary',
          component: BreederAviary
        },
        {
          path: 'breeder-home/:id',
          component: BreederHome
          // beforeEnter: (to, from, next) => {
          //   if (sessionStorage.getItem('squabDetails')) {
          //     next();
          //   } else {
          //     next('/');
          //   }
          // }
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
