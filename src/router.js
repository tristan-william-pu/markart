/*
 * @Autor: Diskfan
 * @Date: 2019-09-06 14:02:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:32:12
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

const importModule = file => () => import(`@/views/${file}.vue`)
Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },{
      // 活动
      path:'/plan',
      name:'plan',
      component: importModule('actives/plan')
    }, {
      path: '/about',
      name: 'about',
      component: importModule('about/about')
    }, {
      path: '/login',
      name: 'login',
      component: importModule('login/login')
    }, {
      path: '/regist',
      name: 'regist',
      component: importModule('login/regist')
    }, {
      path: '/safety',
      name: 'safety',
      component: importModule('about/safety')
    }, {
      // 交易平台
      path: '/platform',
      name: 'platform',
      component: importModule('platform/mt4')
    },
    {
      // MT4
      path: '/mt4',
      name: 'mt4',
      component: importModule('platform/mt4')
    }, {
      // 杠杆交易
      path: '/leverage',
      name: 'leverage',
      component: importModule('platform/leverage')
    }, {
      path: '/account',
      name: 'account',
      component: importModule('platform/account')
    }, {
      // clearpro
      path: '/clearpro',
      name: 'clearpro',
      component: importModule('platform/clearpro')
    }, {
      path: '/cpt',
      name: 'cpt',
      component: importModule('platform/cpt')
    }, {
      // CPT常见问题
      path: '/cptanq',
      name: 'cptanq',
      component: importModule('platform/cptanq')
    }, {
      path: '/compare',
      name: 'compare',
      component: importModule('platform/compare')
    }, {
      // man
      path: '/mam',
      name: 'mam',
      component: importModule('platform/mam')
    }, {
      path: '/product',
      name: 'product',
      component: importModule('product/product')
    }, {
      // 外汇
      path: '/foreign',
      name: 'foreign',
      component: importModule('product/foreign')
    }, {
      // 贵金属
      path: '/metal',
      name: 'metal',
      component: importModule('product/metal')
    }, {
      // 原油
      path: '/oil',
      name: 'oil',
      component: importModule('product/oil')
    }, {
      // 差价合约
      path: '/contract',
      name: 'contract',
      component: importModule('product/contract')
    }, {
      // 指数
      path: '/tradeindex',
      name: 'tradeindex',
      component: importModule('product/tradeindex')
    }, {
      // 数字货币
      path: '/currency',
      name: 'currency',
      component: importModule('product/currency')
    }, {
      path: '/suport',
      name: 'suport',
      component: importModule('suport/type')
    }, {
      path: '/type',
      name: 'type',
      component: importModule('suport/type')
    }, {
      // school
      path: '/school',
      name: 'school',
      component: importModule('suport/school'),
    }, {
      path: '/introduction',
      name: 'introduction',
      component: importModule('suport/introduction')
    }, {
      path:'/AZ',
      name: 'AZ',
      component: importModule('suport/AZ'),
    }, {
      path:'/video',
      name: 'video',
      component: importModule('suport/video'),
    }, {
      path:'/Basis',
      name: 'Basis',
      component: importModule('suport/Basis'),
    }, {
      path: '/partners',
      name: 'partners',
      component: importModule('partners/white')
    }, {
      // 白标
      path: '/white',
      name: 'white',
      component: importModule('partners/white')
    }, {
      // api
      path: '/api',
      name: 'api',
      component: importModule('partners/api')
    }, {
      path: '/provider',
      name: 'provider',
      component: importModule('partners/provider')
    }, {
      path: '/ib',
      name: 'ib',
      component: importModule('partners/ib')
    }, {
      path: '/contantus',
      name: 'contantus',
      component: importModule('contantus/contantus')
    }, {
      //活动页面
      path: '/oversea',
      name: 'oversea',
      component: importModule('actives/sep_oversea')
    },{
      path: '/analysts',
      name: 'analysts',
      component: importModule('actives/analysts')
    },{
      path: '/road',
      name: 'road',
      component: importModule('actives/road')
    },{
      path: '/clound',
      component: () => import('@/components/m-clound.vue')
    }, {
      path: '/*',
      redirect: '/'
    }
  ]
})
