import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps';
import vuescroll from 'vue-scroll';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(vuescroll);
Vue.config.productionTip = false;

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBNSRoMIfBJuZnYuCui18cCjKtKc0K-2rQ',
//     libraries: 'places',
//   },
// });

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDWRD4bqbsSjCp8tW4I4eTnI-npCx1zq8k',
    libraries: 'places',
  },
  // installComponents: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
