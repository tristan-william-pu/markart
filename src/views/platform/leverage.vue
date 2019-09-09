<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 16:50:36
 * @Description: 交易杠杆
 -->

 
<template>
  <div class="leverage">
    <div class="banner pc">
      <div class="title">{{$t('leverage.trading')}}</div>
      <div class="wrap">
        <div class="bannerleft" style="opacity: 1;">
          <p class="bannerlefttit">{{$t('leverage.unlimited')}}</p>
          <p class="banerlefttips">{{$t('leverage.lower')}}</p>
          <p class="banerleftatr">{{$t('leverage.facilitate')}}</p>
        </div>
      </div>
    </div>
    <div class="banner mb">
      <img src="images/Leverage_03.jpg" alt="">
    </div>
    <div class="tablelist">
      <div class="headers clearfix">
        <p>{{$t('leverage.USD')}}</p>
        <p>{{$t('leverage.leverage')}}</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.exclude')}}</p>
        <p>{{$t('leverage.unlimit')}}</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeSecend')}}</p>
        <p>1:2000</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeThird')}}</p>
        <p>1:1000</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeFourth')}}</p>
        <p>1:500</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeFifth')}}</p>
        <p>1:400</p>
      </div>
      <!-- <div class="clearfix">
      <p>20,000 (include- 50,000 (exclude)</p>
      <p>Maximum 1:400</p>
      </div>-->
      <div class="clearfix">
        <p>{{$t('leverage.excludeSixth')}}</p>
        <p>1:300</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeSeventh')}}</p>
        <p>1:200</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeEighth')}}</p>
        <p>1:100</p>
      </div>
      <div class="clearfix">
        <p>{{$t('leverage.excludeNinth')}}</p>
        <p>1:50</p>
      </div>
    </div>
    <div class="art">
      <br style="color:red" />{{$t('leverage.tips')}}
      <br />{{$t('leverage.adjust')}}
    </div>
    <div class="pubtn">
      <a href="/register/register">{{$t('leverage.creat')}}</a>
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
  .mb {
    display: none;
    height: auto;
    img {
      width: 100%;
    }
  }
  .tablelist {
    border: 1px solid #5b0eb2;
    height: auto;
    margin: 0 auto;
    margin-top: 60px;
    width: 70%;
    .headers {
      height: 100px;
      background: #5b0eb2;
      @include flex();
      p {
        color: #fff;
        font-size: 24px;
      }
    }
    > div {
      @include flex();
      p {
        line-height: 100px;
        color: #000;
        font-size: 16px;
        width: 50%;
        text-align: center;
      }
    }
  }
  .art {
    width: 1000px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    font-size: 14px;
    font-family: montserrat;
    line-height: 30px;
    text-align: left;
  }
  .pubtn {
    width: 240px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 21px;
    background: #5b0eb2;
    margin: 80px auto;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
}
</style>