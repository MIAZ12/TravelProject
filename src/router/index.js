import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home/home';
import City from '../pages/city/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 访问根路径
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      // 访问根路径
      path: '/city',
      name: 'City',
      component: City,
    },
  ],
});
