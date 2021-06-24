// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import fastClick from 'fastclick';
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/style/reset.css';
import './assets/style/border.css';
import './assets/style/iconfont.css';
// eslint-disable-next-line import/first
import VueAwesomeSwiper from 'vue-awesome-swiper';
// eslint-disable-next-line import/first
import 'swiper/swiper-bundle.css';
import store from './store/index';

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

// 路由：根据网址的不同，返回不同的页面给用户
