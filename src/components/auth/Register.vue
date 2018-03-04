<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            Register
          </div>
          <div class="card-body">
             <div class="alert alert-danger" v-if="error.message">
              <button
                type="button"
                class="close"
                @click="error.message = null"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              {{ error.message ? error.message : 'Oops, something went wrong.' }}
            </div>
            <form v-on:submit.prevent="register">
              <div class="form-group">
                <input
                  v-model="form.email"
                  class="form-control input-lg"
                  placeholder="E-mail Address"
                  name="email"
                  type="email"
                >
              </div>
              <div class="form-group">
                <input
                  v-model="form.password"
                  class="form-control input-lg"
                  placeholder="Password"
                  type="password"
                >
              </div>
              <div class="form-group">
                <input
                  v-model="form.passwordConfirmation"
                  class="form-control input-lg"
                  placeholder="Confirm Password"
                  type="password"
                >
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    v-model="form.termsAccepted"
                    class="form-check-input"
                    type="checkbox"
                  >
                  <label class="form-check-label" for="invalidCheck">
                    I agree to the <router-link to="/terms">terms and conditions</router-link>
                  </label>
                </div>
              </div>
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                v-bind:class="{ 'btn-loading': form.busy }"
                :disabled="form.busy"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../../firebaseConfig';

export default {
  props: [],
  data() {
    return {
      form: {
        busy: false,
        email: '',
        password: '',
        passwordConfirmation: '',
        termsAccepted: false,
      },
      error: {
        message: null,
      },
    };
  },
  mounted() {
  },
  created() {
  },
  ready() {
  },
  methods: {
    register() {
      this.form.busy = true;
      if (this.form.password !== this.form.passwordConfirmation) {
        this.error.message = 'Passwords do not match.';
        this.form.busy = false;
      } else if (!this.form.termsAccepted) {
        this.error.message = 'You must accept our terms and conditions.';
        this.form.busy = false;
      } else {
        firebaseApp.auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            this.$router.push('/');
          }).catch((error) => {
            this.error.message = error.message;
            this.form.busy = false;
          });
      }
    },
  },
  computed: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

</style>
