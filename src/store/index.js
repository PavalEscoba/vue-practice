import Vue from 'vue';
import Vuex from 'vuex';

// import auth from '@/store/modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isSubmitting: false,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    registerStart(state) {
      state.isSubmitting = !state.isSubmitting;
    },
  },
  // actions: {},
  // modules: {
  //   auth,
  // },
});
