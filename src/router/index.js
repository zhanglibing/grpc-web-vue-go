/** 2018/10/5
 *author:zhanglibing
 *email:1053081179@qq.com
 *功能:
 */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'admin',
      component: resolve => require(['@/views/admin'], resolve),
      meta: {auth: true},
      children: [
        {
          path: '/',
          component: resolve => require(['@/views/home'], resolve)
        },
        {
          path: 'eventEntry',
          name: 'eventEntry',
          component: resolve => require(['@/views/eventEntry/home'], resolve),
          meta: {auth: true},
        },
        {
          path: 'submit',
          name: 'submit',
          component: resolve => require(['@/views/eventEntry/submit'], resolve),
          meta: {auth: true},
        },
        {
          path: 'dataBoard',
          name: 'submit',
          component: resolve => require(['@/views/dataBoard/home'], resolve),
          meta: {auth: true},
        },
        {
          path: 'search',
          name: 'search',
          component: resolve => require(['@/views/search'], resolve),
          meta: {auth: true},
        },
      ],
    },
    {path: '*', redirect: '/404'}
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
