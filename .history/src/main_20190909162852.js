/*
 * @Autor: Diskfan
 * @Date: 2019-09-09 15:27:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 15:27:52
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Util from '@/common/util.js';
Vue.use(VueI18n);

Object.defineProperty(Vue.prototype, '$util', {
  value: Util,
  enumerable: false,
  writable: false
})

Vue.config.productionTip = false

const messages = {
  en: require('./common/lang/en'),
  cn: require('./common/lang/zh')
}

const i18n = new VueI18n({
  locale: 'cn',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true
})
// const i18n = new VueI18n({
//   locale: 'zh-CN',    // 语言标识
//   //this.$i18n.locale // 通过切换 locale 的值来实现语言切换
//   messages: {
//     'cn': require('./common/lang/zh'),   // 中文语言包
//     'en-US': require('./common/lang/en')    // 英文语言包
//   }
// })


window.$root = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
