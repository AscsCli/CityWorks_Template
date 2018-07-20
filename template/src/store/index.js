import Vue from 'vue'
import Vuex from 'vuex'
import leftMenu from './modules/leftMenu'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    leftMenu
  },
  getters
})

export default store
