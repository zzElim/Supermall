<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" 
    class="tab-control-item"  :class="{active: index === currentIndex}" @click="isActive(index)">
      <span>{{item}}</span>
      </div>

  </div>
  
</template>

<script>
export default {
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    currentIndex:0
  }
},
methods:{
  isActive(index){
    this.currentIndex = index;
    this.$emit('tabClick',index)
  }
}
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #fff;
  
}
.tab-control-item{
  flex: 1;
  padding: 10px;
 
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid red;
}



</style>