import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";
export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {

      //payLoad 新添加的商品
      //面试题:数组常用的方法有哪些？说出十个

      //1.查找之前数组是否存在这个商品
      let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
      if (oldProduct) {
        // oldPrice.count = oldPrice.count + 1;
        context.commit(ADD_COUNTER, oldProduct) //把这个操作作为一个方法放在mutations因为这样就能用 devtools工具 监听到了，就能方便调试
        resolve('当前的商品数量+1')
      } else {
        payLoad.count = 1;
        context.commit(ADD_TO_CART, payLoad)//把这个操作作为一个方法放在mutations因为这样就能用 devtools工具 监听到了，就能方便调试
        resolve('当前新商品已加入购物车')
      }
    })

  }
}