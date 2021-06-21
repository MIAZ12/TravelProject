<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in recommendList" :key="item.id">                
                <img class="item-img" :src="item.imgUrl"/>               
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
      name:'HomeRecommend',
      data(){
          return {
              recommendList:[
                  {
                      id:"01",
                      title:"玻璃大峡谷",
                      desc:"集合玻璃平台、栈道、索桥为的观光玻璃组合",
                      imgUrl:"https://imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg",
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
    .recommend-title{
        line-height: .8rem;
        background: #eee;
        margin-top:.2rem;
        text-indent: .2rem;
    }
    .item{
        display: flex;
        height: 1.9rem;
        /* background: burlywood; */
        border-bottom: .01rem solid #eee;
    }

    .item-img{
        width:1.7rem;
        height: 1.7rem;
        margin: .1rem;
    }
    .item-info{
        flex: 1;
        padding:.1rem;
        min-width: 0;
        
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
    .item-button{
        line-height: .44rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        margin-top:.2rem;
        color:#fff;
    }
    
</style>
