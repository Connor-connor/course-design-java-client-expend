import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/Login'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/BaseTable',
    name: 'BaseTable',
    component: () => import('@/views/dashboard/BaseTable.vue')
  },
  {
    path: '/BaseTableOne',
    name: 'BaseTableOne',
    component: () => import('@/views/Table/BaseTableOne.vue')
  },
  {
    path: '/BaseTableTwo',
    name: 'BaseTableTwo',
    component: () => import('@/views/Table/BaseTableTwo.vue')
  },
  {
    path: '/BaseForm',
    name: 'BaseForm',
    component: () => import('@/views/dashboard/BaseForm.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
