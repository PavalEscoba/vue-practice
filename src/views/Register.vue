<template>
  <div class="auth-page">
    <div class="container page">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign Up</h1>
            <p class="text-xs-center">
              <router-link :to="{ name: 'login' }">
                Have an account?</router-link
              >
            </p>
            <!-- VALIDATION ERRORS -->
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="User Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="User Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="User Password"
                />
              </fieldset>
              <button
                class="btn btn-primary pull-xs-right"
                :disabled="isSubmitting"
              >
                Sign up
              </button>
            </form>
            {{ this.$store.state.count }}
            <button class="btn btn-warning" @click="incCounter">
              {{ isDisabled ? 'disabled' : 'enabled' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  computed: {
    isDisabled() {
      console.log(this.$store.state.isSubmitting);
      return this.$store.state.isSubmitting;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    onSubmit(evt) {
      console.log(evt.target);
      this.$store.commit('registerStart');
    },
    incCounter() {
      this.$store.commit('increment');
    },
  },
};
</script>
