import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
