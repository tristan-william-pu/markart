import Vue from 'vue'
import Router from 'vue-router'

const importModule = file => () => import(`@/views/${file}`)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: importModule('home/home')
    },
    {
      path: '/home',
      name: 'home',
      component: importModule('home/home')
    }, {
      path: '/about',
      name: 'about',
      component: importModule('about/about')
    }, {
      path:'/platform',
      name: 'platform',
      component: importModule('platform/platform')
    }, {
      path: '/product',
      name: 'product',
      component: importModule('product/product')
    }, {
      path: '/suport',
      name: 'suport',
      component: importModule('suport/suport')
    }, {
      path: '/*',
      redirect: '/'
    }
    // {
    //   path: '*',
    //   name: '404',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    // }
  ]
})
