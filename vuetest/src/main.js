import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import axios from 'axios';
// 1安装axios
// 2.引入axios
Vue.use(axios);
Vue.use(VueRouter);
// Vue.component("topName",'Component/top.vue')
import MainRight from './Component/MainRight.vue';
import MainLeft from './Component/MainLeft.vue';
const routes = [
  { path: '/MainRight', component: MainRight },
  { path: '/MainLeft', component: MainLeft },
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})