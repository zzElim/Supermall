<template>
  <div>
    <Navbar>
      <template v-slot:left>
        <div class="img" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">

        </div>
      </template>
      
        <template v-slot:center>
          <div class="titles">
            <div v-for="(item,index) in titles" :key="index" class="titles-item"
             :class="{active: index === currentIndex}" @click="titleClick(index)">
            {{item}}
          </div>
          </div>
      </template>
      
    
    </Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data(){
    return{
      titles:['商品','参数','推荐','评论'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style>
.titles{
  display: flex;
  font-size: 14px;
}
.titles-item{
  flex: 1;

}
.img img{
  margin-top: 13px;
}
.active{
  color: var(--color-high-text);
}
</style>