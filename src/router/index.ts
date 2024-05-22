import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Cabinet from '@views/Cabinet.vue'
import MainPage from '@/views/MainPage.vue'

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
    }
  ]
})

export default router
