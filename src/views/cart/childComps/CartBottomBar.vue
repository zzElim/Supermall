<template>
  <div class="bottom-bar">
    <div class="check-content">
     <CheckButton class="check-button" :isChecked="isSelectAll" @click="checkClick()"></CheckButton>
       <span>全选</span>
       <div class="price">
      合计:{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{checkLength}})
    </div>

    </div>
  
  </div>

  
</template>

<script>
import CheckButton from '@/components/content/checkbutton/CheckButton.vue';
import { mapGetters } from 'vuex';
export default {
components:{
  CheckButton
},
computed: {
  ...mapGetters(['cartList']),
  totalPrice(){
    return '￥' + this.$store.state.cartList.filter(item=>{
      return item.checked
    }).reduce((preValue,item)=>{
      return preValue + item.price * item.count
    },0)
  },
  checkLength(){
    return this.$store.state.cartList.filter(item=>{
      return item.checked
    }).length
  },
  isSelectAll(){
    if(this.cartList.length ==0) return false
    //1.用filter方法    用此方法性能消耗较大 因为这个方法要遍历完整个数组  如果有不被选中的 就说明有不被选中的长度 就返回长度 然后取反就是false  数字取反就是false
    // return !(this.cartList.filter(item => !item.checked).length)
    //2.用every方法
    return this.cartList.every(item => item.checked )
    //3.用find方法
    // return !this.cartList.find(item => !item.checked)
    //4.用普通遍历方法
    // for(let item of this.cartList){
    //   if(!item.checked){
    //     return false
    //   }
    //   return true
    // }
  }
},
methods:{
  checkClick(){
   if(this.isSelectAll){//全部都选中
    this.cartList.forEach(item =>item.checked = false)
   }else{//部分或全部不选中
    this.cartList.forEach(item => item.checked = true)
   }
  }
}
}
</script>

<style>
.bottom-bar{
  position: relative;
  height: 40px;
  background-color: #ccc;
  
}
.check-content{
  height: 40px;
  display: flex;
  align-items: center;
  margin-left:10px;
}
.check-button{
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.price{
  margin-left: 30px;
}
.calculate{
  width: 83px;
  height: 40px;
  line-height: 40px;
  /* margin-left:  */
  background-color: orange;
  position: absolute;
  right: 0;
  margin: 0 auto;
  text-align: center;
  
}


</style>