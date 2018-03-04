<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-header">
            Register
          </div>
          <div class="card-body">
            <div class="alert alert-danger">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              Password is too short.
            </div>
            <fieldset>
              <div class="form-group">
                <input
                  class="form-control input-lg"
                  placeholder="E-mail Address"
                  name="email"
                  type="text"
                >
              </div>
              <div class="form-group">
                <input
                  class="form-control input-lg"
                  placeholder="Password"
                  name="password"
                  value=""
                  type="password"
                >
              </div>
              <div class="form-group">
                <input
                  class="form-control input-lg"
                  placeholder="Confirm Password"
                  name="password"
                  value=""
                  type="password"
                >
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  >
                  <label class="form-check-label" for="invalidCheck">
                    I agree to the <router-link to="/terms">terms and conditions</router-link>
                  </label>
                </div>
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FireRegister',
  props: [],
  data() {
    return {
    };
  },
  mounted() {
  },
  created() {
  },
  ready() {
  },
  methods: {
  },
  computed: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

</style>
