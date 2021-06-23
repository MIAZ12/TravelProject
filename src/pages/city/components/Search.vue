<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name:'CitySearch',
}
</script>
<style scoped>
  .search{
      padding: 0 .1rem;    
      height: .72rem;
      background-color: #00bcd4;
  }
  .search-input{
      border-radius: 0.1rem;
      height: .62rem;
      line-height: .62rem;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      padding: 0 .1rem;
  }

</style>