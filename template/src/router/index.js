import Vue from 'vue'
import Router from 'vue-router'
import frame from '../pages/frame/frame.vue';
import measure from '../pages/rightrouter/measure/measure2D';
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'frame',
        component: frame,
    },
    {
        path:'/home',
        name:'home',
        component:frame,
        children:[
            {
                path: 'measure2D',
                component: measure
            },
            {
              path: 'swipView',
              component:measure
            },
        ]
    },

];

const router = new Router({
    routes
});


//这个是请求页面路由的时候会验证token存不存在，不存在的话会到登录页
router.beforeEach((to, from, next) => {
    next();
});
export default router;
