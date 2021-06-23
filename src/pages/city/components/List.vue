<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">北京</div>
          <div class="item">北京</div>
          <div class="item">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';
export default {
  name: "CityList",
  mounted(){
      this.scroll=new Bscroll(this.$refs.wrapper);
  }
};
</script>
<style scoped>
.list {
  /* 模拟原生拖动 */
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  line-height: 0.44rem;
  background: #eee;
  color: #666;
  font-size: 0.26rem;
  padding-left: 0.2rem;
  border-top: 0.01rem solid #ccc;
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}
.button-wrapper {
  width: 33.33%;
  float: left;
}
.button {
  text-align: center;
  margin: 0.1rem;
  padding: 0.1rem 0;
  border: 0.02rem solid #ccc;
  border-radius: 0.1rem;
}
.item {
  padding: 0.2rem 0.2rem;
  border-bottom: 0.01rem solid #ccc;
}
</style>