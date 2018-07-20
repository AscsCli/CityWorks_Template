﻿// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {setREM} from './plugin/setREM';
import 'babel-polyfill';
import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
import store from './store/index';

import {resourcePlugin} from "@/plugin/resourcePlugin";
import Rocket from '@cityworks/rocket-ui';
import '@cityworks/rocket-ui/rocket-theme/index.css';
import "./style/index.scss"

Vue.use(Rocket);
Vue.config.productionTip = false;

Vue.use(VueResource);
//REM计算
setREM.init();


//如果url中有参数，将参数去掉
let urlToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");


resourcePlugin.init(urlToken);

import App from './App.vue';
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
});
