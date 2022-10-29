import axios from "axios";

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  })

  //2.axios的拦截器  下面是对instance的拦截  也可以用axios.interceptors对全局拦截
  //2.1请求拦截器的作用     请求拦截(成功，失败)    响应拦截(成功，失败)
  instance.interceptors.request.use(config => {
    // console.log(config);
    //1.比如config中的一些信息不符合服务器的要求

    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    //3.某些网络请求(比如登录(token)) 需要token令牌时， 必须携带一些信息
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
    return res.data//其实只返回res.data也行
  }, err => {

  })

  //发送真正的网络请求******* 这是一个最完美最简单的方案
  return instance(config)
}
