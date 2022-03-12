import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registro',
    name: 'RegisterForm',
    component: () => import('@/views/RegisterForm.vue'),
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: () => import('@/views/LoginForm.vue'),
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/registrar-contacto',
    name: 'RegisterContact',
    component: () => import('@/views/ContactForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// NAVIGATIONS GUARDS
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    localStorage.getItem('userData') === null ? next('/login') : next();
  } else {
    next();
  }
});

export default router;
