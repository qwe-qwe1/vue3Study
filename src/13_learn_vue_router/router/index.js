import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Home from ''
// import About from

const routes = [
  { path: '/', redirect: '/home' },
  // magic common
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue'),
    meta: {
      name: 'why',
      age: 18
    },
    children: [
      { path: '', redirect: '/home/message'},
      { path: 'message', component: () => import('../pages/HomeMessage.vue') },
      { path: 'shops', component: () => import('../pages/HomeShops.vue') }
    ]
  },
  { path: '/about', component: () => import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue') },
  { path: '/user/:username/id/:id', component: () => import(/* webpackChunkName: "about-chunk" */ '../pages/User.vue') },
  { path: '/:pathMatch(.*)', component: () => import('../pages/NotFound.vue') }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
