<template>
  <div id="detailhh">
   <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
   <Scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll">
    <DetailSwiper :topImages="topImages" ></DetailSwiper>
   <DetailBaseInfo :goods="goods"></DetailBaseInfo>
   <DetailShopInfo :shop="shop"></DetailShopInfo>
   <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
   <DetailParamsInfo :paramInfo="paramInfo" ref="params" ></DetailParamsInfo>
   <DetaiCommentInfo :commentInfo="commentInfo" ref="comment"></DetaiCommentInfo>
   <GoodsList :goods="recommends" ref="recommend"></GoodsList>
   </Scroll>
 
   <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
   <BackTop @click="backClick()" v-show="isShowBackTop"></BackTop>

  </div>
  
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetaiCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'


import { getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import {backTopMixin} from '@/common/mixin'
import { mapActions } from 'vuex'


export default {
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetaiCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [backTopMixin],
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0

    }
  },
  methods:{
    ...mapActions(['addCart']),
    titleClick(index){
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],200)
      
    },
    contentScroll(position){
      //获取Y值
      const positionY = -position.y

      let length = this.themeTopYs.length
      for(let i =0;i <  length - 1;i++){
       
        if (this.currentIndex !== i && ((positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]))) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      };
      this.isShowBackTop = (-position.y) > 1000
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      const product ={};
      product.image = this.topImages[0]
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid

      //2.将商品添加到购物车里面(两个重要知识点！ 1.actions是有promise的 所以可以执行一些操作 2.mapActions )
      
      //这个是用了mapActions 映射
      // this.addCart(product).then(res=>{
      //   console.log(res);
      // })
      //这个是直接调actions里面的
      // this.$store.dispatch('addCart', product).then(res=>{
      //   console.log(res);
      // })
   
      Notice({ message: "hello world" })
      
    }
  },
created(){

},
activated () {
  //1.保存传入的id
  this.iid = this.$route.params.iid

  //2.根据iid请求详细数据
  getDetail(this.iid).then(res=>{
    // console.log(res);
    const data =res.result;
    //1.获取顶部的图片轮播数据
    this.topImages = data.itemInfo.topImages    
    //2.获取商品信息
    this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //3.获取店铺信息
    this.shop = new Shop(data.shopInfo)
    //4.保存商品的详情数据
    this.detailInfo = data.detailInfo
    //5.获取参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule) 
    //6.获取评论信息
    if (data.rate.list) {
       this.commentInfo = data.rate.list[0];
          }
  })

  //3.请求推荐数据 (接口不一样 不是iid)
  getRecommend().then( res =>{
    console.log(res);
    this.recommends = res.data.list
    
  })
},
mounted(){
  setTimeout(()=>{
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
    this.themeTopYs.push(Number.MAX_VALUE)
    console.log(this.themeTopYs);
 

  },2000)
   
}


}
</script>

<style scoped>
#detailhh{
  position: relative;
  background-color: #fff;
  z-index: 1;
  height: 100vh; 
}
.content{
  height: calc(100% - 44px);
  overflow: hidden;
  /* position:absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0; */

}

</style>