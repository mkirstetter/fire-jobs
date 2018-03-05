import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import CreateJob from '../components/jobs/CreateJob';
import ShowJob from '../components/jobs/ShowJob';
import { store } from '../store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/jobs/:id',
      name: 'ShowJob',
      component: ShowJob,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/admin/jobs/create',
      name: 'CreateJob',
      component: CreateJob,
      meta: { requiresLogin: true },
    },
  ],
  linkExactActiveClass: 'active',
  mode: 'history',
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && !store.state.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
