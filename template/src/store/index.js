import Vue from 'vue'
import Vuex from 'vuex'
import leftMenu from './modules/leftMenu'
import projectConfig from './modules/projectConfig'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    leftMenu,
    projectConfig
  },
});

export default store
