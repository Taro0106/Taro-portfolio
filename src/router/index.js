import { createRouter, createWebHashHistory } from 'vue-router' // 1. 改成引用 createWebHashHistory
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 2. 將 history 改為 Hash 模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router