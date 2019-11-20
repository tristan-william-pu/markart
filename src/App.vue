<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:28:39
 * @Description: 
 -->
<template>
  <div id="app" class="app clearfix">
    <div class="message-wrap">
      <div class="message" id="notice">
        <svg class="success" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1129" width="32" height="32"><path d="M512.9 511.1m-447.4 0a447.4 447.4 0 1 0 894.8 0 447.4 447.4 0 1 0-894.8 0Z" fill="#0EC469" p-id="1130"></path><path d="M257.8 493.6s62.9 146.8 160.8 146.8c94.4 0 381.1-333.7 381.1-333.7S521.1 761.6 427.9 761.6c-77.5 0-133.4-110.7-170.1-268z" fill="#FFFFFF" p-id="1131"></path></svg>
        <svg  class="error" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2603" width="32" height="32"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-42.666667-213.333333h85.333334v85.333333h-85.333334v-85.333333z m0-341.333333h85.333334v256h-85.333334V298.666667z" p-id="2604" fill="#d81e06"></path></svg>
        <div class="detail"></div>
      </div>
    </div>
    <Header v-show="!~header.indexOf($route.fullPath.replace(/.*\//, ''))" />
      <keep-alive>
        <router-view  v-on:header="header" v-on:footer="footer" />
      </keep-alive>
    <Footer v-show="!~footer.indexOf($route.fullPath.replace(/.*\//, ''))" />
  </div>
</template>

<script>
import Header from './views/header.vue';
import Footer from './views/footer.vue';
export default {
  components: { Header, Footer },
  data(){
    return {
      header: ['plan','oversea','analysts','road'],
      footer: ['login','plan','oversea','analysts','road']
    }
  },
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
.message-wrap {
  position: fixed;
  width: 100%;
  height: 0px;
  z-index: 1;;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
}
.message {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  border: 1px solid #e3e3e3;
  width: unset;
  min-width: unset;
  max-width: unset;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 220px;
  border-radius: 4px;
  padding-top: 5px;
  padding-bottom: 5px;
  top: -40px;
  opacity: 0;
}
.fade-in {
  animation: fade 800ms cubic-bezier(0.18, 0.79, 0.3, 0.9);
  animation-fill-mode: forwards;
}
.fade-out {
  animation: fade-out 800ms cubic-bezier(0.18, 0.79, 0.3, 0.9);
  animation-fill-mode: forwards;
}
.message .detail {
  margin-left: 10px;
  color: #333;
}
@keyframes fade {
  0% {
    transform: translateY(0px);
    opacity: 0;
  }
  25% {
    transform: translateY(25px);
    opacity: 0;
  }
  100% {
    transform: translateY(100px);
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    transform: translateY(100px);
    opacity: 1;
  }
  75% {
    transform: translateY(25px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
}
</style>
