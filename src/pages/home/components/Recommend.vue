<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id">                
                <img class="item-img" :src="item.imgUrl"/>               
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.price}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
      name:'HomeRecommend',
      props:{
          list:Array,
      },
      data(){
          return {              
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
