<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep alive 不会每次请求都重复请求json文件 -->
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

</style>
