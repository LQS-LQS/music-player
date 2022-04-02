import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store/index.js'
import axios from 'axios'
axios.defaults.baseURL = "/wangyiyun";

import "./assets/css/common.css"    //引入全局的css
import "./assets/css/图标文件夹/css/all.min.css"

// import api from './api/index.js'
// Vue.prototype.$api = api;

Vue.config.productionTip = false
Vue.use(VueRouter)    //使用了VueRouter可以在配置项
//console.log(process.env.NODE_ENV);
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
