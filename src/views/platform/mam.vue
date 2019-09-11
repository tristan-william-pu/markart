<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 14:19:18
 * @Description: man
 -->

<template>
  <div class="man">
    <div class="banner">
      <div class="img pc">
        <div class="warp">
          <p class="bannerfont animated bounceInUp">{{$t('mam.management')}}</p>
        </div>
      </div>
      <div class="mb">
        <img src="images/MAMs_03.jpg" alt="">
      </div>
    </div>
    <div class="warp">
      <div class="tit">{{$t('mam.manager')}}</div>

      <div
        class="art"
      >{{$t('mam.system')}}</div>
      <div
        class="art"
      >{{$t('mam.operation')}}</div>

      <div class="tit">{{$t('mam.key')}}</div>
      <div class="clelist">
        <ul>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.primary')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.minimum')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.reports')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.summary')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.filled')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.support')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.allocation')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.allow')}}</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>{{$t('mam.liquidation')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.man {
  width: 100%;
  .banner {
    width: 100%;
    height: 737px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .img {
      position: absolute;
      left: 50%;
      margin-left: -50%;
      height: 737px;
      background: url("./../../assets/MAM_02.jpg");
      width: 100%;
      z-index: 10;
      .warp {
        width: 1200px;
        display: block;
        margin: 0 auto;
        margin-top: -20px;
        margin-bottom: 20px;
        @include animation(bounceInUps);
        p {
          color: #fff;
          font-size: 66px;
          width: 100%;
          text-align: center;
          margin-top: 100px;
        }
      }
    }
    .pc {
      display: block;
    }
    .mb {
      display: none;
      >img {
        width: 100%;
      }
    }
  }
  .warp {
    max-width: 1200px;
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    .tit {
      font-family: montserratse;
      margin-top: 100px;
      font-size: 40px;
      text-align: left;
    }
    .art {
      font-family: montserrat;
      line-height: 30px;
      font-size: 16px;
      text-align: left;
      margin-top: 50px;
    }
    .clelist {
      width: 100%;
      margin-top: 80px;
      margin-bottom: 100px;
      ul {
        li {
          display: block;
          margin-bottom: 20px;
          img {
            float: left;
            width: 10px;
          }
          p {
            font-size: 16px;
            width: 90%;
            margin-left: 30px;
            @include clearfix();
          }
        }
      }
    }
  }
}
</style>