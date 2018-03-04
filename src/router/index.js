import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import CreateJob from '../components/jobs/CreateJob';
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
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && !store.state.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
