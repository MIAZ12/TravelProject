<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="(item,index) of list" :key="index">
        <img
          class="swiper-img"
          :src="item"
        />
      </swiper-slide>
      
      <div class="swiper-pagination" slot="pagination">11</div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list:Array,
  },
  data () {
    return {
      swiperOptions: {
          pagination:".swiper-pagination",
          loop:true,       
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  },
};
</script>
<style scoped>
.wrapper {
    /* 设置宽高比例 */
    width:100%;
    height:0;
    overflow: hidden;
    padding-bottom: 26.5%;
    background: grey;
}
.swiper-img {
  width: 100%;
}
</style>
