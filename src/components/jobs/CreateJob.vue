<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-header">
            Create a Job
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
            <form v-on:submit.prevent="addJob">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-9">
                  <input
                    v-model="form.fields.title"
                    type="text"
                    class="form-control"
                    placeholder="Enter title"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Category</label>
                <div class="col-sm-9">
                  <select v-model="form.fields.category" name="category" class="form-control">
                    <option value="">Select a category</option>
                    <option value="1">Developer</option>
                    <option value="2">Designer</option>
                    <option value="3">Growth Hacker</option>
                    <option value="4">Product Manager</option>
                    <option value="5">Business</option>
                    <option value="6">Operational</option>
                    <option value="7">Writer</option>
                    <option value="8">Engineer</option>
                    <option value="9">Data Scientist</option>
                    <option value="10">Community Manager</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Type</label>
                <div class="col-sm-9">
                  <select v-model="form.fields.type" name="type" class="form-control">
                    <option value="">Select a type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Location</label>
                <div class="col-sm-9">
                  <input
                    v-model="form.fields.location"
                    type="text"
                    class="form-control"
                    placeholder="Enter location"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Salary</label>
                <div class="col-sm-9">
                  <input
                    v-model="form.fields.salary"
                    type="text"
                    class="form-control"
                    placeholder="Enter salary"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">By Email</label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <input type="radio" value="email" v-model="form.fields.applicationsBy">
                      </span>
                    </div>
                    <input
                      v-model="form.fields.email"
                      type="text"
                      class="form-control"
                      :disabled="form.fields.applicationsBy === 'link'"
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">By Link</label>
                <div class="col-sm-9">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <input type="radio" value="link" v-model="form.fields.applicationsBy">
                      </span>
                    </div>
                    <input
                      v-model="form.fields.link"
                      type="text"
                      class="form-control"
                      :disabled="form.fields.applicationsBy === 'email'"
                      placeholder="https://yourdomain.com/jobs/1/apply"
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Description</label>
                <div class="col-sm-9">
                  <vue-editor
                    v-model="form.fields.description"
                    :editorToolbar="customToolbar"
                  ></vue-editor>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-9 offset-md-3">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-bind:class="{ 'btn-loading': form.busy }"
                    :disabled="form.busy"
                  >
                    Post Job
                  </button>
                  <a href="#" class="btn btn-default">Cancel</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import { dbJobsRef } from '../../firebaseConfig';

export default {
  props: [],
  data() {
    return {
      form: {
        busy: false,
        fields: {
          title: null,
          category: null,
          type: null,
          location: null,
          salary: null,
          email: null,
          description: null,
          applicationsBy: 'email',
          createdAt: null,
        },
      },
      error: {
        message: null,
      },
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'code-block'],
      ],
    };
  },
  mounted() {
    if (this.currentUser) {
      this.form.fields.email = this.currentUser.email;
    }
  },
  created() {
  },
  ready() {
  },
  methods: {
    addJob() {
      this.form.busy = true;
      this.form.fields.createdAt = new Date().toString();
      dbJobsRef.push(this.form.fields).then(() => {
        this.form.busy = false;
      }).catch((error) => {
        this.error.message = error.message;
        this.form.busy = false;
      });
    },
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
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
