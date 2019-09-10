<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:23:50
 * @Description: 
 -->
<template>
  <div id="app" class="app">
    <Header v-show="!~header.indexOf($route.fullPath.replace(/.*\//, ''))" />
      <keep-alive>
        <router-view  v-on:header="header" v-on:footer="footer" />
      </keep-alive>
    <Footer v-show="!~footer.indexOf($route.fullPath.replace(/.*\//, '')) />
  </div>
</template>

<script>
export default {
  data(){
    return {
      header: [],
      footer: ['login']
    }
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
// #app {
//   font-size: 'sans-serif','Microsoft YaHei',"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
// }
@import '@/styles/animation.scss';
img {
   vertical-align: middle;
}
@import '@/styles/app.scss';
</style>
