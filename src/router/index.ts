import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import LocalCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [user]
  },
  {
    name: 'login',
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

// 导航守卫 跳转之前做一些操作
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return './login'
    }
  }

  // console.log('导航守卫获取路由信息', router.getRoutes)
  // console.log('导航守卫要跳转的路径', to)

  // if (to.path.indexOf('/main') !== -1) {
  //   if (to.name === 'notFound') {
  //     to.name = 'user'
  //   }
  // }

  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
