<template>
  <div class="cart-list">
    <CartListItem
    v-for="(item, index) in cartList"
        :key="index"
        :item-info="item" ></CartListItem>
      
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
// import Scroll from '@/components/common/scroll/Scroll.vue';
import CartListItem from './CartListItem.vue';

export default {
components: {
  // Scroll,
  CartListItem

},
computed:{
  ...mapGetters(['cartList'])
}

}
</script>

<style scoped>
/* .cart-list{
  height: calc(100% - 44px - 49px)
} */
/* .content{
  height: 100%;
  overflow: hidden;

} */

</style>