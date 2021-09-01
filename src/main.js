import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/vantui"
import 'reset-css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 全局过滤器格式
Vue.filter("RMBFormat", value => {
  return "￥  " + Number(value).toFixed(2) + "  元"
})
