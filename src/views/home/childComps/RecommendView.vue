<template>
  <div class="recommend" >
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
      
    </div>
  </div>
  
</template>

<script>
export default {
 props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
 }

}
</script>

<style>
 .recommend{
  display: flex;
  text-align: center;
  padding: 12px 0 20px;
  border-bottom: 10px  solid #eee;
  font-size: 14px;
 }
 .recommend-item{
 flex:1;
 }
 .recommend-item img{
  width: 75px;
  height: 75px;
  margin-bottom: 10px;
  
 }

</style>