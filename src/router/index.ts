import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import CabinetSettings from '@/views/CabinetSettings.vue'
import Cabinet from '@/views/Cabinet.vue'
import Vacancies from '@/views/Vacancies.vue'
import AboutCompany from '@/views/AboutCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user/:login/cabinet',
      name: 'cabinet',
      component: Cabinet
    },
    {
      path: '/user/:login/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/user/:login/cabinet/settings',
      name: 'settings',
      component: CabinetSettings
    },
    {
      path: '/user/:login/vacancies',
      name: 'vacancies',
      component: Vacancies
    },
    {
      path: '/user/:login/about',
      name: 'about',
      component: AboutCompany
    },
    {
      path: '/user/:login/privilege',
      name: 'privilege',
      component: () => import('@/views/PrivilegePage.vue')
    },
    {
      path: '/user/:login/new-employee',
      name: 'new-employee',
      component: () => import('@/views/NewEmployee.vue')
    },
    {
      path: '/user/:login/create-new-employee',
      name: 'create-new-employee',
      component: () => import('@/views/CreateNewEmployee.vue')
    },
    {
      path: '/user/:login/news/:title',
      name: 'one-news',
      component: () => import('@/views/OneNews.vue')
    }
  ]
})

export default router
