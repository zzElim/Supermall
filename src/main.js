import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue.prototype.$bus = new Vue()

createApp(App).use(router).mount('#app')

