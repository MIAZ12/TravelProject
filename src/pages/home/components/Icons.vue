<template>
  <div class="icons">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="(page,index) of pages" :key="index">
     <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src='item.imgUrl' />
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data(){
      return {
        swiperOptions: {
          pagination:".swiper-pagination",
      },
          iconList:[
              {
                  id:"0001",
                  desc:"热门景点2342252525",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0002",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0003",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0004",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0005",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0006",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0007",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0008",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
              {
                  id:"0009",
                  desc:"热门景点",
                  imgUrl:"https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
              },
          ]
      }
  },
    computed:{
      pages(){
          const pages=[];
          this.iconList.forEach((item,index)=>{
              const page=Math.floor(index/8);
              if(!pages[page]){
                  pages[page]=[]
              }
              pages[page].push(item);
          })
          return pages;

      }
  }
};
</script>
<style scoped >
.icons {
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  /* background: green; */
}
.icon {
  overflow: hidden;
  float: left;
  width: 25%;
  height:0;
  padding-bottom: 25%;
  /* background: red; */
  position: relative;

}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  /* background: blue; */
  box-sizing: border-box;
  padding:.1rem;
}
.icon-img-content{
    height:100%;
    display: block;
    margin:0 auto;
}
.icon-desc{
    position: absolute;
    left:0;
    right:0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;


}
</style>
