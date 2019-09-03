<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 07:12:57
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 07:52:32
 * @ Description: 交易产品
 -->

<template>
  <div class="products">
    <!-- <Header /> -->
    <div class="banner">
      <div class="title">交易产品</div>
      <div class="desc">在CPT Markets, 交易您想要的市场</div>
      <div class="list-wrap">
        <div class="item">
          <img src="@/assets/proicons1.png" alt />
          外汇
        </div>
        <div class="item">
          <img src="@/assets/proicons2.png" alt />
          贵金属
        </div>
        <div class="item">
          <img src="@/assets/proicons3.png" alt />
          原油
        </div>
        <div class="item">
          <img src="@/assets/proicons4.png" alt />
          指数
        </div>
        <div class="item">
          <img src="@/assets/proicons5.png" alt />
          CFD
        </div>
        <div class="item">
          <img src="@/assets/proicons6.png" alt />
          数字货币
        </div>
      </div>
    </div>
    <Regist />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Regist from "./regist.vue";
export default {
  components: { Regist }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.products {
  width: 100%;
  .banner {
    width: 100%;
    height: 437px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: url("./../../../public/images/trading.jpg");
    .title {
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: montserratse;
      font-size: 40px;
      margin-top: 80px;
      animation-name: bounceInUps;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }
}
</style>