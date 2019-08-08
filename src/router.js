import VueRouter from 'vue-router';
import siginIn from './views/siginIn';
import entMailForReset from './views/entMailForReset';
import mailCheckForReset from './views/mailCheckForReset';
import siginUp from './views/siginUp';
import mailCheckForCreate from './views/mailCheckForCreate';
import createAcc from './views/createAcc';
import messenger from './views/messenger';
import search from './views/search';
import personInfo from './views/personInfo';
import accInfo from './views/accInfo';

const routes = [
  { path: '/sign-in', component: siginIn },
  { path: '/ent-mail-for-reset', component: entMailForReset },
  { path: '/mail-check-for-reset',component: mailCheckForReset},
  { path: '/sign-up',component: siginUp},
  { path: '/mail-check-for-create', component: mailCheckForCreate},
  { path: '/create-acc', component: createAcc},
  { path: '/messenger', component: messenger},
  { path: '/search', component: search},
  { path: '/person-info',
    component: personInfo,
    beforeEnter: function(to, from, next){
      if(localStorage.getItem('user')){
        next()
      } else {
        next({
          path: '/sign-in'
        })
      }
    }
  },
  { path: '/account-info', component: accInfo}
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
