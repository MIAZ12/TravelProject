<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword" />
    </div>
    <div class="serach-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import {mapMutations} from 'vuex';
export default {
  name: "CitySearch",
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) clearTimeout(this.timer);
      if (!this.keyword) {
        this.list = [];
        return;
      }

      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    },
  },
    methods:{
    handleCityClick(city){
      // alert(city);
      this.keyword="";
      // this.$store.commit('changeCity',city);
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity'])
    
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
};
</script>
<style scoped>
.search {
  padding: 0 0.1rem;
  height: 0.72rem;
  background-color: #00bcd4;
}
.search-input {
  border-radius: 0.1rem;
  height: 0.62rem;
  line-height: 0.62rem;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 0 0.1rem;
}
.serach-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: green; */
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  border-bottom: 0.1rem;
}
</style>