import authApi from '@/src/api/auth';

const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = !state.isSubmitting;
  },
};

const actions = {
  register(context) {
    setTimeout(() => {
      context.commit('registerStart');
    }, 2000);
  },
};

export default {
  state,
  mutations,
  actions,
};
