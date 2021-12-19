import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/index.less'

// 全局引入element-plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 全局引入element-plus/icons
import * as Icons from '@element-plus/icons-vue'

import router from './router'
import store from './store'

// import './service/axios_demo'
import hyRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
// 注册Icons 全局组件
for (const name in Icons) {
  app.component(name, (Icons as any)[name])
}
app.mount('#app')
// console.log(process.env.NODE_ENV)

// const res = hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   headers: {},
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     resonpseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   },
//   showLoading: true
// })

// console.log(res)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// hyRequest
//   .get<DataType>({
//     url: './home/multidata',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
