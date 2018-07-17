
import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import button from '../pages/button.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/button',
          name: 'button',
          component: button
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/hello.md')))
    }
  ]
});
