<template>
  <div id="detailhh">
   <DetailNavBar></DetailNavBar>
   <Scroll class="content">
    <DetailSwiper :topImages="topImages" ></DetailSwiper>
   <DetailBaseInfo :goods="goods"></DetailBaseInfo>
   <DetailShopInfo :shop="shop"></DetailShopInfo>
   <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
   <DetailParamsInfo :paramInfo="paramInfo"></DetailParamsInfo>
   <DetaiCommentInfo :commentInfo="commentInfo"></DetaiCommentInfo>
   </Scroll>
 

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

import { getDetail,Goods,Shop,GoodsParam} from '@/network/detail'
import Scroll from '@/components/common/scroll/Scroll.vue'

export default {
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetaiCommentInfo
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{}
    }
  },
created(){
},
activated () {
  //1.保存传入的id
  this.iid = this.$route.params.iid

  //2.根据iid请求详细数据
  getDetail(this.iid).then(res=>{
    console.log(res);
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

  
}


}
</script>

<style scoped>
#detailhh{
  position: relative;
  background-color: #fff;
  z-index: 9;
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