<template>
  <div class="index">
    <div class="container pt-5">
      <h1 class="pb-5">Find an English job in Europe.</h1>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Type</th>
            <th scope="col">Location</th>
            <th scope="col">Posted</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in getJobs" :key="job['.key']" @click="showJob(job['.key'])">
            <td>{{ job.title }}</td>
            <td>{{ job.location }}</td>
            <td>{{ job.type }}</td>
            <td>{{ job.createdAt | moment("from") }}</td>
            <td>{{ job.salary }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Index',
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
    showJob(key) {
      // this.$router.push('/jobs/' + key);
      this.$router.push({ name: 'ShowJob', params: { id: key } });
    },
  },
  computed: {
    ...mapGetters([
      'getJobs',
    ]),
  },
  watch: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
