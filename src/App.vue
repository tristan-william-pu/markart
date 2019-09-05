<template>
  <div id="app">
    <Header />
      <keep-alive>
        <router-view />
      </keep-alive>
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  font-size: 'sans-serif','Microsoft YaHei',"SF Pro SC","HanHei SC","SF Pro Text","Myriad Set Pro","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif
}
@import '@/styles/animation.scss';
img {
   vertical-align: middle;
}
</style>
