<template>
  <div>
    <div>
      <home-header ></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="hotList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
import axios from 'axios';
import {mapState} from 'vuex';
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data(){
    return {
      lastCity:"",
      swiperList:[],
      iconList:[],
      hotList:[],
      weekendList:[],
    }
  },
  mounted(){
    this.lastCity=this.city;
    this.getHomeInfo();   
    // console.log("mounted"); 
  },
  // keepalive新增的生命周期函数
  activated(){
    if(this.lastCity!==this.city)
    {
      this.lastCity=this.city;
      this.getHomeInfo();
    }
    // console.log("activated");
  },
  computed:{
    ...mapState(['city']),
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city='+this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data;
      if(res.ret&&res.data){
        const data=res.data;
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.hotList=data.hotList;
        this.weekendList=data.weekendList;
      }
      // console.log(res);
    }
  }
};
</script>

<style>

</style>
