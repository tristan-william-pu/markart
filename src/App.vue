<template>
  <div id="app">
    <Header v-if="header_show" />
      <keep-alive>
        <router-view  v-on:header="header" v-on:footer="footer" />
      </keep-alive>
    <Footer v-if="footer_show" />
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
<<<<<<< HEAD
// #app {
//   font-size: 'sans-serif','Microsoft YaHei',"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
// }
=======
#app {
  font-size: 'sans-serif','Microsoft YaHei',"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
}
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
@import '@/styles/animation.scss';
img {
   vertical-align: middle;
}
</style>
