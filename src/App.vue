<template>
  <div id="app">
    <!-- vue3 的keep-alive写法 -->
    <router-view v-slot="{ Component }">
  <keep-alive >
    <component :is="Component" />
  </keep-alive>
</router-view>

    <MainTabbar></MainTabbar>
    
  </div>
 
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabbar.vue';



export default {
  name: 'App',
  components: {
    MainTabbar,
    

  }
}
</script>

<style>
 @import "./assets/css/base.css"

</style>
