import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    flag: true,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.number;
    },
    show(state) {
      state.flag = !state.flag;
    },
  },
});
export default store;
