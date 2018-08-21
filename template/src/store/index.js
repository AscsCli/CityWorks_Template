import Vue from 'vue'
import Vuex from 'vuex'
import leftMenu from './modules/leftMenu'
import projectConfig from './modules/projectConfig'
import map2dConfig from './modules/map2dConfig';
import map3dConfig from './modules/map3dConfig';


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    leftMenu,
    projectConfig,
    map2dConfig,
    map3dConfig
  },
});

export default store
