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
            <fieldset>
              <div class="form-group">
                <input
                  class="form-control input-lg"
                  placeholder="E-mail Address"
                  name="email"
                  id="email"
                  type="text"
                >
              </div>
              <div class="form-group">
                <input
                  class="form-control input-lg"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value=""
                  type="password"
                >
              </div>
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                @click.prevent="login"
              >Login</button>
            </fieldset>
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
      busy: false,
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
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.$router.push('/');
      }).catch((error) => {
        this.error.message = error.message;
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
