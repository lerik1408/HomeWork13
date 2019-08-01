import VueRouter from 'vue-router';
import siginIn from './views/siginIn';



const routes = [
  { path: '/sign-in', component: siginIn },
//   { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes // сокращённая запись для `routes: routes`
})

export default router;
