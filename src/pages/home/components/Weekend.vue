<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in weekendList" :key="item.id"> 
                <div class="item-img-warpper">               
                <img class="item-img" :src="item.imgUrl"/>               
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
      name:'HomeWeekend',
      data(){
          return {
              weekendList:[
                  {
                      id:"01",
                      title:"玻璃大峡谷",
                      desc:"集合玻璃平台、栈道、索桥为的观光玻璃组合",
                      imgUrl:"https://img1.qunarzz.com/sight/p0/1503/cd/cd023b889435b33.water.jpg_256x160_737bffe3.jpg",
                  },
                  {
                      id:"02",
                      title:"玻璃大峡谷",
                      desc:"集合玻璃平台、栈道、索桥为的观光玻璃组合",
                      imgUrl:"https://imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg",
                  },
              ]
          }
      }
  }
</script>
<style scoped>
    .weekend-title{
        line-height: .8rem;
        background: #eee;
        margin-top:.2rem;
        text-indent: .2rem;
    }
    .item-img-wrapper{
        overflow:hidden;
        height:0;
        padding-bottom: 33.9%;
    }
    .item-img{
        width:100%;
        /* padding:.1rem; */
    }
    .item-info{
        padding:.1rem;        
    }
    .item-title{
        line-height: .54rem;
        font-size: .32rem;
    }
    .item-desc{
        line-height: .4rem;
        color:#ccc;
        overflow: hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }

    
</style>
