import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";//mutation常量

export default {
  //mutations唯一的目的就是修改state中状态
  //mutations中的每个方法尽可能完成的事件比较单一一点
  //而这里面做的操作 做了两件事了，最好写在actions里面，复杂的操作和异步操作最好写在actions里面
  [ADD_COUNTER](state, payLoad) {
    payLoad.count++;
  },
  [ADD_TO_CART](state, payLoad) {
    payLoad.checked = true
    state.cartList.push(payLoad)
  }
}