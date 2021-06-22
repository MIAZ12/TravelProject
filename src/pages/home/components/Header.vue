<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>输入城市
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  height: 0.86rem;
  background: #00bcd4;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
}
.header-left back-icon {
  text-align: center;
  font-size: 0.4rem;
}
.header-input {
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  flex: 1;
  background: #fff;
  border-radius: 0.1rem;
  color: grey;
}
.header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
}
</style>