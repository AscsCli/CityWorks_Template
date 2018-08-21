import Vue from 'vue'
import Router from 'vue-router'
import frame from '../pages/frame/frame.vue';
import {routeRegister} from './routerRegiester';

let infoUrl = './static/config/info.json';

let routes = [];
let router = {};

Vue.use(Router);

/*//这个是请求页面路由的时候会验证token存不存在，不存在的话会到登录页
router.beforeEach((to, from, next) => {
  next();
});*/

async function setRoute() {
  let children = await routeRegister.init(infoUrl);
  routes = [
    {
      path: '/',
      name: 'frame',
      redirect: '/home/measure',
      component: frame,
    },
    {
      path: '/home',
      name: 'home',
      component: frame,
      children: [
        ...children
      ]
    },
  ];
  
  const router = new Router({
    routes
  });
  
  return router;
}

export default setRoute;
