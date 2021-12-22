import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

//
// import user from './main/system/user/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/main/system/user',
        name: 'user',
        component: () => import('@/views/main/system/user/user.vue'),
        children: []
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:pathMath(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
