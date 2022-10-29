<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
  /* height: 49px; */
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  /* position: fixed;
  top: 0;
  z-index: 999; */
}
.left,.right{
  width: 60px;
  /* background-color: red; */
}
.center{
  /* flex：1 表达的是比例，因为这里只有一个比例，所有它就是占了剩余空间的百分百 */
  flex: 1;
  /* background-color: blue  ; */
}
</style>