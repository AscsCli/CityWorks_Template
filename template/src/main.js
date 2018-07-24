// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {setREM} from './plugin/setREM';
import "./api/mock/mock";


import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './vuex/index';

import Rocket from '@cityworks/rocket-ui';
import '@cityworks/rocket-ui/rocket-theme/index.css';
import "./style/index.scss";

import {ApiFactor} from "./api/api-factor";

Vue.use(Rocket);

Vue.config.productionTip = false;
const baseUrl = PROXY.baseUrl;
const apiConfs = PROXY.apiList;

window.$apis = ApiFactor(baseUrl,apiConfs);

//REM计算
setREM.init();

import App from './App.vue';

var vm = new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
});

