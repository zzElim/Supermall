<template>
  <div id="home" class="home-nav">
    <Navbar>
      <template v-slot:center >购物街</template>
  </Navbar>
  <HomeSwiper :banners="banners"></HomeSwiper>
  <RecommendView :recommends="recommends" ></RecommendView>
   
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue';
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue'
import { getHomeMultidata } from '@/network/home';

export default {
components: {
  Navbar,
 HomeSwiper,
 RecommendView
  },
  
  data () {
    return {
     banners:[],
     recommends:[]
    // result:null
    }
  },//生命周期函数 在页面创建后请求数据
  created () {
   getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list;
    this.recommends=res.data.recommend.list;
    console.log(res);
    
   })
  }
}


</script>


<style>
.home-nav{
  background-color: var(--color-tint);
  height: 44px;
  color: white;
}

</style>