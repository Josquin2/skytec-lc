import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomeUser from '@views/HomeUser.vue'
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
      path: '/user/:login()',
      name: 'user',
      component: HomeUser
    },
    {
      path: '/user/:login()/main',
      name: 'main',
      component: MainPage
    }
  ]
})

export default router
