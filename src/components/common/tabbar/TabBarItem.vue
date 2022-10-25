<template>
  <div class="tab-bar-item" @click="itemClick"  >
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
      <!-- <img src="" alt=""> -->
      <div v-if="!isActive">
      <slot  name="item-icon"></slot>
      </div>
      <div v-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="colorStyle" >
        <slot  name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    isActiveColor:{
      type:String,
      default:'red'
    }
  },
 data () {
  
  return {

    
  }
 },computed: {
    isActive(){
      return this.$route.path.includes(this.path) 
    },
    colorStyle(){
      return this.isActive?{color: this.isActiveColor}:{}

    }
 },
 
 methods:{
  itemClick(){
    this.$router.replace(this.path).catch(()=>{return})
  }
 }

}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size:14px ;
  
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top:3px ;
  /* 图片下面自动多三个像素 用这个就可以去除  为什么会多三个像素，是因为此元素默认放在父亲元素得基线上，通过vertical-align实现图片与文字对其，注意它只对行内元素跟行内块元素有效*/
  vertical-align: middle;   
  margin-bottom: 2px;
  
}

</style>