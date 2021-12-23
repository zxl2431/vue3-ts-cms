import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.首先加载默认的所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // console.log('所有的routeFiles', routeFiles)
  // 1.2 遍历这个对象
  // console.log(routeFiles.keys()) //遍历一次
  routeFiles.keys().forEach((key) => {
    // console.log(key.split('.')[1])
    // 读取某个文件
    const route = require('../router/main' + key.split('.')[1])
    // console.log('解析单独的route', route)
    allRoutes.push(route.default)
  })

  //2.根据用户登录后返回的菜单添加需要的routes
  // userMenus :
  // type === 1 --> children
  // type === 2 --> add
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}