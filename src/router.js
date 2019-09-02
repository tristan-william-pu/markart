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
      component: importModule('about/safety')
    }, {
      // 交易平台
      path:'/platform',
      name: 'platform',
      component: importModule('platform/platform'),
      children: [
        {
          // MT4
          path: 'mt4',
          name: 'mt4',
          component: importModule('platform/mt4')
        }, {
          // 杠杆交易
          path: 'leverage',
          name: 'leverage',
          component: importModule('platform/leverage')
        }, {
          path: 'account',
          name: 'account',
          component: importModule('platform/account')
        }, {
          // clearpro
          path: 'clearpro',
          name: 'clearpro',
          component: importModule('platform/clearpro')
        }, {
          path: 'man',
          name: 'man',
          component: importModule('platform/man')
        }
      ]
    }, {
      path: '/product',
      name: 'product',
      component: importModule('product/product'),
      children: [
        {
          // 外汇
          path: 'foreign',
          name: 'foreign',
          component: importModule('product/foreign')
        }, {
          // 贵金属
          path: 'metal',
          name: 'metal',
          component: importModule('product/metal')
        }, {
          // 原油
          path: 'oil',
          name: 'oil',
          component: importModule('product/oil')
        }, {
          // 差价合约
          path: 'contract',
          name: 'contract',
          component: importModule('product/contract')
        }, {
          // 指数
          path: 'tradeindex',
          name: 'tradeindex',
          component: importModule('product/tradeindex')
        }, {
          // 数字货币
          path: 'currency',
          name: 'currency',
          component: importModule('product/currency')
        }
      ]
    }, {
      path: '/suport',
      name: 'suport',
      component: importModule('suport/suport'),
      children: [
        {
          path: 'type',
          name: 'type',
          component: importModule('suport/type')
        }, {
          // school
          path: 'school',
          name: 'school',
          component: importModule('suport/school')
        }
      ]
    }, {
      path: 'partners',
      name: 'partners',
      component: importModule('partners/partners'),
      children: [
        {
          // 白标
          path: 'white',
          name: 'white',
          component: importModule('partners/white')
        }, {
          // api
          path: 'api',
          name: 'api',
          component: importModule('partners/api')
        }, {
          path: 'provider',
          name: 'provider',
          component: importModule('partners/provider')
        }, {
          path: 'ib',
          name: 'ib',
          component: importModule('partnets/ib')
        }
      ]
    }, {
      path: '/contantus',
      name: 'contantus',
      component: importModule('contantus/contantus')
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
