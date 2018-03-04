<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            Login
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
            <form v-on:submit.prevent="login">
              <div class="form-group">
                <input
                  v-model="form.email"
                  class="form-control input-lg"
                  placeholder="E-mail Address"
                  type="email"
                >
              </div>
              <div class="form-group">
                <input
                  v-model="form.password"
                  class="form-control input-lg"
                  placeholder="Password"
                  name="password"
                  type="password"
                >
              </div>
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                v-bind:class="{ 'btn-loading': form.busy }"
                :disabled="form.busy"
              >
                Login
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
import { store } from '../../store/store';

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('setUser', user);
  } else {
    store.dispatch('setUser', null);
  }
});

export default {
  props: [],
  data() {
    return {
      form: {
        busy: false,
        email: '',
        password: '',
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
    login() {
      this.form.busy = true;
      const email = this.form.email;
      const password = this.form.password;

      firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.$router.push('/');
      }).catch((error) => {
        this.error.message = error.message;
        this.form.busy = false;
      });
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

</style>
