// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {setREM} from './plugin/setREM';
import "./api/mock/mock";


import 'babel-polyfill';
import Vue from 'vue';
import setRoute from './router';
import store from './store/index';

import Rocket from '@cityworks/rocket-ui';
import '@cityworks/rocket-ui/rocket-theme/index.css';
import "./style/index.scss";

Vue.use(Rocket);
Vue.config.productionTip = false;
//REM计算
setREM.init();

import {ApiFactor} from "./api/api-factor";

const baseUrl = API.baseUrl;
const apiConfs = API.apiList;
window.$apis = ApiFactor(baseUrl, apiConfs);

import App from './App.vue';
import {loadConfig} from "./plugin/loadConfig";

async function initApp() {
  let router = await setRoute();
  await loadConfig.init();
  const vm = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  });
}


initApp();
