<template>
  <div class="cart">
    <Navbar class="nav-bar">
      <template v-slot:center>
         <div>购物车({{length}})</div>  
      </template>
    </Navbar>
    <Scroll class="content">
      <CartList>
        <!-- <CartListItem v-for="(item,index) in LIST" :key="index" :itemInfo="item"></CartListItem> -->
      </CartList>
    </Scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue';
import CartList from '@/views/cart/childComps/CartList.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';
// import CartListItem from './childComps/CartListItem.vue';


import { mapGetters } from 'vuex';
export default {
 components: {
  Navbar,
  CartList,
  // CartListItem,
  Scroll,
  CartBottomBar

 },
 computed:{
  //mapgetters两种写法
  // ...mapGetters(['cartLength'])

  //这个看length是自定义名字  后面这个就是写在getters中的名字 具体看官网
  ...mapGetters({
    length:'cartLength',
    LIST: "cartList",
  })
 } 
}
</script>

<style scoped>
/* .cart{
  height: 100vh;
  
} */
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  
}
.content{
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>