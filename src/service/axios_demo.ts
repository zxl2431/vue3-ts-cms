import axios from 'axios'

// axios的实例对象
// 1.模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// 2.get请求, 并传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'Mr.zhang',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 3.post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       sex: 'man',
//       class: 2431
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// Promise中类型的使用
// new Promise<string>((resolve) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios的配置选项
// 4.1 全局配置
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 1000
// axios.defaults.headers = {}

// 4.2 每一个请求单独配置
// axios
//   .get('/get', {
//     params: {
//       friend: 'biao',
//       age: 16
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 5.axios.all -> 多个请求,一起返回
// axios
//   .all([
//     axios.get('/get', { params: { name: 'why', age: 18 } }),
//     axios.post('/post', { data: { name: 'zhang', age: 16 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })

// 6.axios的拦截器
// axios.interceptors.request.use(
//   (config) => {
//     //在发送请求之前想做的一些操作
//     // 1.给请求添加token
//     // 2.isLoading动画
//     console.log('请求成功的拦截', config)
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     return err
//   }
// )

// 7.axios响应的拦截
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截', res)
//     return res
//   },
//   (err) => {
//     console.log('响应失败的拦截')
//     return err
//   }
// )

// 8.axios的request方法
axios
  .request({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log('request方法', res.data)
  })
