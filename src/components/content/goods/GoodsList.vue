<template>
  <div class="goods">
    <GoodListItem v-for="item in goods" :goods-item="item"></GoodListItem>
  
  </div>
  
</template>

<script>
import GoodListItem from './GoodListItem.vue';
export default {
  components: {
    GoodListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style>
.goods{
  display: flex;
  /* flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。 */
  flex-wrap: wrap;
  /* justify-content 能够设置子元素的对齐和空间分配方式 */
  justify-content: space-around;
}

</style>