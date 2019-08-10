import VueRouter from 'vue-router';
// import siginIn from './views/siginIn';
// import entMailForReset from './views/entMailForReset';
// import mailCheckForReset from './views/mailCheckForReset';
// import siginUp from './views/siginUp';
// import mailCheckForCreate from './views/mailCheckForCreate';
// import createAcc from './views/createAcc';
// import messenger from './views/messenger';
// // import search from './views/search';
// import personInfo from './views/personInfo';
// import accInfo from './views/accInfo';
// new
import siginIn1 from './auth/views/siginIn';
import passwordRecovery1 from './auth/views/passwordRecovery/1';
import passwordRecovery2 from './auth/views/passwordRecovery/2';
import passwordRecovery3 from './auth/views/passwordRecovery/checkMail';
import siginUp1 from './auth/views/signUp/1';
import siginUp2 from './auth/views/signUp/2';
import siginUp3 from './auth/views/signUp/checkMail';
import messenger from './messenger/views';
import personal from './profile/views/personal';
import account from './profile/views/account';
import search from './search/views/results';

const routes = [
  // { path: '/sign-in', component: siginIn },
  // { path: '/ent-mail-for-reset', component: entMailForReset },
  // { path: '/mail-check-for-reset',component: mailCheckForReset},
  // { path: '/sign-up',component: siginUp},
  // { path: '/mail-check-for-create', component: mailCheckForCreate},
  // { path: '/create-acc', component: createAcc},
  // { path: '/search', component: search,},
  // { path: '/messenger', component: messenger,
  //   beforeEnter: function(to, from, next){
  //     if(localStorage.getItem('user')){
  //       next()
  //     } else {
  //       next({
  //         path: '/sign-in'
  //       })
  //     }
  //   }
  // },
  // { path: '/person-info',
  //   component: personInfo,
  //   beforeEnter: function(to, from, next){
  //     if(localStorage.getItem('user')){
  //       next()
  //     } else {
  //       next({
  //         path: '/sign-in'
  //       })
  //     }
  //   }
  // },
  // { path: '/account-info', component: accInfo,
  //   beforeEnter: function(to, from, next){
  //     if(localStorage.getItem('user')){
  //       next()
  //     } else {
  //       next({
  //         path: '/sign-in'
  //       })
  //     }
  //   }
  // },
  // new
  { path: '/sign-in', component: siginIn1 },
  { path: '/password-recovery-1', component: passwordRecovery1},
  { path: '/password-recovery-2', component: passwordRecovery2},
  { path: '/password-recovery-3', component: passwordRecovery3},
  { path: '/sign-up-1', component: siginUp1},
  { path: '/sign-up-2', component: siginUp2},
  { path: '/sign-up-3', component: siginUp3},
  // { path: '/messenger1', component: messenger1},
  // { path: '/profile/personal', component: personal},
  // { path: '/profile/account', component: account},
  { path: '/search', component: search},
  { path: '/messenger',
    component: messenger,
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
  { path: '/profile/personal',
    component: personal,
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
  { path: '/profile/account',
    component: account,
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
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
