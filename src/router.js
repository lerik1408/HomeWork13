import VueRouter from 'vue-router';
import siginIn from './views/siginIn';
import entMailForReset from './views/entMailForReset';
import mailCheckForReset from './views/mailCheckForReset';
import siginUp from './views/siginUp';
import mailCheckForCreate from './views/mailCheckForCreate';
import createAcc from './views/createAcc';

const routes = [
  { path: '/sign-in', component: siginIn },
  { path: '/ent-mail-for-resset', component: entMailForReset },
  { path: '/mail-check-for-resset',component: mailCheckForReset},
  { path: '/sign-up',component: siginUp},
  { path: '/mail-check-for-create', component: mailCheckForCreate},
  { path: '/create-acc', component: createAcc},
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
