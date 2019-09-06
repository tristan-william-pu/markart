<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 11:50:23
 * @Description: 
 -->
<template>
  <div id="app" class="app">
    <!-- <Header v-if="header_show" /> -->
      <keep-alive>
        <router-view  v-on:header="header" v-on:footer="footer" />
      </keep-alive>
    <!-- <Footer v-if="footer_show" /> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      header_show:true,
      footer_show:true
    }
  },
  methods:{
      //是否显示头部
      header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      footer:function (bool) {
          this.footer_show = bool;
      }
  },
}
</script>

<style lang="scss">
#app {
  font-size: 'sans-serif','Microsoft YaHei',"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
}
@import '@/styles/animation.scss';
img {
   vertical-align: middle;
}
@import '@/styles/app.scss';
</style>
