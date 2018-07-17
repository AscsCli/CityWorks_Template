import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import registerRoute from './routerConfig'
import navConfig from './nav.config'
import index from '../pages/index.vue'
// import lib from '../../src/index'
import 'highlight.js/styles/atom-one-dark.css';
import demoBlock from './components/demo-block.vue'
import './plugin/setREM'
import '../assets/docs.scss';
import '../assets/indexDocs.scss';
import baseMap from "./components/map/baseMap.vue";
Vue.component("baseMap",baseMap);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

// Vue.use(lib)
Vue.use(Router)
Vue.component('demo-block', demoBlock);
const routesConfig = registerRoute(navConfig)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/install',
      component: index,
      children: routesConfig
    }
  ]
})
import {loadScriptTool} from 'Packages/tool/LoadScriptTool';
loadScriptTool.setDefault();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
