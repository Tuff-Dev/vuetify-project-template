import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
    },
    {
      path: '/page-A',
      component: () => import('@/views/PageA'),
    },
    {
      name: '404',
      path: '*',
      component: () => import('@/views/404'),
    },
  ],
})

// router.beforeEach((to, from, next) => {
// })
