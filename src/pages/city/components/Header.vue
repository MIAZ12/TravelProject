<template>
    <div class="header">
        <router-link to="/">
            <div class="header-back">
                <div class="iconfont back-icon">&#xe658;</div>
            </div>            
        </router-link>
        城市选择
        </div>
</template>
<script>
export default {
    name:'CityHeader',
}
</script>
<style scoped>
  .header{
      position: relative;
      text-align: center;
      line-height: .86rem;
      height: .86rem;
      background-color: #00bcd4;
      color:#fff;
      font-size:.4rem;
  }
  .header-back{
      position: absolute;
      color: #fff;
      
  }
</style>