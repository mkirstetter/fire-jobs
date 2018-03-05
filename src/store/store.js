import Vue from 'vue';
import Vuex from 'vuex';

import { firebaseMutations, firebaseAction } from 'vuexfire';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    jobs: [],
  },
  getters: {
    currentUser: state => state.currentUser,
    getJobs: state => state.jobs,
    getJob(state) {
      return key => state.jobs.filter(job => job['.key'] === key)[0];
    },
  },
  mutations: {
    ...firebaseMutations,
    userStatus(state, user) {
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('userStatus', user);
    },
    setJobsRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('jobs', ref);
    }),
  },
});
