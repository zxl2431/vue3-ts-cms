// serviece 统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('具体实例---请求成功的拦截')
      // console.log(config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('具体实例---请求失败的拦截')
      return err
    },
    resonpseInterceptor: (res) => {
      console.log('具体实例---响应成功的拦截')
      return res
    },
    resonpseInterceptorCatch: (err) => {
      console.log('具体实例---响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
