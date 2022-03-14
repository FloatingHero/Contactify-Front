import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Inicio',
    },
  },
  {
    path: '/registro',
    name: 'RegisterForm',
    component: () => import('@/views/RegisterForm.vue'),
    meta: {
      title: 'Registro',
    },
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: () => import('@/views/LoginForm.vue'),
    meta: {
      title: 'Inicio de sesión',
    },
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: { requiresAuth: true, title: 'Perfil' },
  },
  {
    path: '/registrar-contacto',
    name: 'RegisterContact',
    component: () => import('@/views/ContactForm.vue'),
    meta: { requiresAuth: true, title: 'Registro de contacto' },
  },
  {
    path: '/editar-contacto/:contact_id',
    name: 'EditContact',
    component: () => import('@/views/ContactForm.vue'),
    meta: { requiresAuth: true, title: 'Edición de contacto' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// NAVIGATIONS GUARDS
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    localStorage.getItem('userData') === null ? next('/login') : next();
  } else {
    next();
  }
});

export default router;
