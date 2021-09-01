import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
