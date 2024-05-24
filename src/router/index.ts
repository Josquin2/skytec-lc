import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainPage from '@/views/MainPage.vue'
import CabinetSettings from '@/views/CabinetSettings.vue'
import Cabinet from '@/views/Cabinet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    }
  ]
})

export default router
