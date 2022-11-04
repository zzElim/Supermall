import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//解决移动端300ms延迟
import FastClick from 'fastclick'
//使用vue-lazyload库实现lazyload
import lazyPlugin from 'vue3-lazy'
// import toast from './components/common/toast'

//添加事件总线对象(vue2)
// Vue.prototype.$bus = new Vue()

//解决移动端300ms延迟
FastClick.attach(document.body)

createApp(App).use(router).use(store).use(lazyPlugin, {
  loading: require('@/assets/img/common/placeholder.png')
}).mount('#app')



