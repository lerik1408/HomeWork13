/* eslint-disable import/no-unresolved */
import VueRouter from 'vue-router';

import siginIn1 from './auth/views/siginIn';
import passwordRecovery1 from './auth/views/passwordRecovery/1';
import passwordRecovery2 from './auth/views/passwordRecovery/2';
import passwordRecovery3 from './auth/views/passwordRecovery/checkMail';
import siginUp1 from './auth/views/signUp/1';
import siginUp2 from './auth/views/signUp/2';
import siginUp3 from './auth/views/signUp/checkMail';
import messenger from './messenger/views';
import profile from './profile/views/profile';
// import personal from './profile/views/personal';
// import account from './profile/views/account';
import search from './search/views/search';
import profileSearch from './search/views/profile';
// import profile from './profile/views/profile';

const routes = [
  { path: '/sign-in', name: 'home', component: siginIn1 },
  { path: '/password-recovery-1', component: passwordRecovery1 },
  { path: '/password-recovery-2', component: passwordRecovery2 },
  { path: '/password-recovery-3', component: passwordRecovery3 },
  { path: '/sign-up-1', component: siginUp1 },
  { path: '/sign-up-2', component: siginUp2 },
  { path: '/sign-up-3', component: siginUp3 },
  { path: '/search/:id', name: 'pagination', component: search },
  { path: '/search', name: 'search', component: search },
  { path: '/search/profile/:id', component: profileSearch },
  // { path: '/search/:id', component: search},
  {
    path: '/messenger',
    name: 'messenger',
    component: messenger,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        next();
      } else {
        next({
          path: '/sign-in',
        });
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    beforeEnter(to, from, next) {
      if (localStorage.getItem('user')) {
        next();
      } else {
        next({
          path: '/sign-in',
        });
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
