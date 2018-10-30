import Vue from 'vue';
import App from './App.vue';
//引入公共的scss   注意：创建项目的时候必须用scss

import './assets/css/basic.scss';  

import router from './router/router.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

