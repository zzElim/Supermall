// import { def } from '@vue/shared'
import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')

//安装插件 
// Vue.use(VueRouter)  //这是vue2的  vue3用不了


const routes = [

  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home

  }, {
    path: '/category',
    component: Category

  }, {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },



]
//2.创建路由对象
const router = createRouter({
  routes,
  history: createWebHashHistory(),
  mode: 'history'


})

export default router