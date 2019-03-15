// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// require("es6-promise").polyfill();
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import store from './vuex/store'
import './common/css/common.css'
import $ from 'jquery'

import VueParticles from 'vue-particles';
Vue.use(VueParticles);
import {initGlobal} from './common/js/global'
initGlobal();


Vue.config.productionTip = false
Vue.use(ElementUI)


// 全局判断登录访问权限
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {// 对路由进行验证
    if (store.state.userInfo) { // 已经登陆
      next()
    } else {
      next({path: '/'})
    }
  } else {
    next()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
