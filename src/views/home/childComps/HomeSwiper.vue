<template>
   <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link"></a>
        <img :src="item.image" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>

import { Swiper,SwiperItem } from '@/components/common/swiper';
export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
        
      }
    }
  },
  components: {
    Swiper,
    SwiperItem

  }

}
</script>

<style>

</style>