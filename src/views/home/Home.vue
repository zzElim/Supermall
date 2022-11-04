<template>
  <div id="home"  >
    
      <Navbar class="home-nav">
      <template v-slot:center >购物街</template>
      </Navbar>
      <TabControl 
   :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" class="fixed" v-show="isTabfixed"></TabControl>

   <Scroll class="content" ref="scroll" 
   :probeType="3" @scroll="contentScroll"
   :pullUpLoad="true" @pullingUp="loadMore" >
  <HomeSwiper :banners="banners"  @swiperImageLoad="swiperImageLoad"></HomeSwiper>
  <RecommendView :recommends="recommends" ></RecommendView>
  <FeatureView></FeatureView>
  <TabControl 
   :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>
  <GoodsList :goods="showGods"></GoodsList>  
  <!-- 这个showGods 是把代码内容放进了computed计算属性里面让这里简洁 -->
    </Scroll>

    <BackTop @click="backClick()" v-show="isShowBackTop"></BackTop>
   
 
  </div>
  
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue';

import Navbar from '@/components/common/navbar/Navbar.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue';
import BackTop from '@/components/content/backtop/BackTop.vue'


import { getHomeMultidata,getHomeGoods} from '@/network/home';

export default {
components: {
 HomeSwiper,
 RecommendView,
 FeatureView,
 Navbar,
 TabControl,
 GoodsList,
 Scroll,
 BackTop

  },
  
  data () {
    return {
     banners:[],
     recommends:[],
     goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
     },
     currentType:'pop',
     isShowBackTop:false,
     tabOffsetTop:0,
     isTabfixed:false,
     saveY:0
    }
  },//生命周期函数 在页面创建后请求数据
  created () {
    //请求多个数据
   this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //监听item中图片加载完成
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
   },
   mounted(){
    

   },
  
   activated(){
    this.$refs.scroll.scroll.refresh()

    this.$refs.scroll.scrollTo(0,this.saveY,0);
   },
   deactivated(){
    //保存Y值
    this.saveY = this.$refs.scroll.scroll.y    
    // this.$refs.scroll.scroll.refresh()

   },
   computed: {
    showGods(){
      return this.goods[this.currentType].list
    }
   },
  
  methods:{
    //事件监听相关的方法代码********************
    tabClick(index){
      switch(index){
        case 0:
        this.currentType = 'pop'
        break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      //判断backtop是否显示
      this.isShowBackTop = (-position.y) > 1000
      
      //决定tabcontrol是否吸顶()
      this.isTabfixed = (-position.y) >this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)

    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    // 网络请求相关的方法代码******************
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list;
    this.recommends=res.data.recommend.list;
    // console.log(res);
    })
  },
  getHomeGoods(type){
    const page =this.goods[type].page +1;
    getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page =this.goods[type].page + 1;
      //完成上拉加载更多
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.scroll.refresh()

})
}
 }
}
  
  


</script>


<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh; 
  position: relative;
}


.home-nav{
  background-color: var(--color-tint);
  
  color:#fff;
  /* position: sticky; */

   /* top: 0; */
 
}

.content{
  /* 先写死先   667 - 93 */
  /* height: 574px;   */

  
  /* 一种方法是计算视窗高度 */
  /* height: calc(100% - 93px); */
  overflow:hidden;

  /* 一种是直接用定位写 */
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.fixed{
  position: relative;
  z-index: 9;
  
}


</style>