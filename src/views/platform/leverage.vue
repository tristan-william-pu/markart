<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 14:05:08
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 13:54:57
 * @ Description: 交易杠杆
 -->


<template>
  <div class="leverage">
    <div class="banner">
      <div class="title">交易杠杆</div>
      <div class="wrap">
        <div class="bannerleft" style="opacity: 1;">
          <p class="bannerlefttit">杠杆高达无限</p>
          <p class="banerlefttips">投资门槛更低</p>
          <p class="banerleftatr">CPT Markets为更好的方便客户进行投资，灵活的杠杆机制，极大的降低客户投资门槛的同时也更好的提供客户的资金利用率。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.leverage {
  width: 100%;
  .banner {
    width: 100%;
    height: 737px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: url("./../../../public/images/Trading-Leveragebgs.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .title {
      line-height: 40px;
      margin-top: 140px;
      @include animation(bounceInUps);
      color: #fff;
      font-family: montserratse;
      font-size: 66px;
      width: 100%;
      text-align: center;
    }
    .wrap {
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
      .bannerleft {
        float: left;
        height: auto;
        width: 600px;
        @include animation(fade-left, 1s, 200ms);
        .bannerlefttit {
          font-size: 42px;
          font-family: montserrat;
          color: #fff;
          margin-top: 200px;
          line-height: 50px;
        }
        .banerlefttips {
          font-size: 28px;
          font-family: montserrat;
          color: #fff;
          line-height: 30px;
          margin-top: 10px;
        }
        .banerleftatr {
          font-size: 18px;
          font-family: montserrat;
          color: #fff;
          margin-top: 40px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>