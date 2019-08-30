import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import './plugins/element.js'

Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换 locale 的值来实现语言切换
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
