<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            {{ job.title }}
          </div>
          <div class="card-body">
            <span v-html="job.description"></span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            {{ job.company }}
          </div>
          <div class="card-body">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
// import { dbJobsRef } from '../../firebaseConfig';

export default {
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
    ...mapGetters([
      'currentUser',
    ]),
    job() {
      return this.$store.getters.getJob(this.$route.params.id);
    },
  },
  watch: {
  },
  components: {
    VueEditor,
  },
};
</script>

<style lang="scss" scoped>

</style>
