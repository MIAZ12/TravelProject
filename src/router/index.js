import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 访问根路径
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
