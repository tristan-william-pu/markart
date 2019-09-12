import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language:"cn",
  },
  mutations: {
    storageLang(state,lang){
        state.language = lang;
    }
  },
  actions: {

  }
})
