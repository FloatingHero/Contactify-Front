import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'RegisterForm',
    component: () => import('@/views/RegisterForm.vue')
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: () => import('@/views/LoginForm.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
