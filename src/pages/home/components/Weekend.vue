<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in list" :key="item.id"> 
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
    .weekend-title{
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item-img-wrapper{
        overflow:hidden;
        height:0;
        padding-bottom: 37.09%;
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
