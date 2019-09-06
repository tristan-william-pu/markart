<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 14:02:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 17:00:28
 * @Description: clearpro
 -->

 
<template>
  <div class="clearpro">
    <div class="banner pc">
      <div class="wrap">
      <div class="title">Clearpro</div>
      <div class="tip">{{$t('clearpro.experience')}}</div>
      <img src="images/Clearpro3_03.png" alt />
      </div>
    </div>
    <div class="banner mb">
      <img src="images/Clearpro_02.jpg" alt="">
    </div>
    <div class="wrap">
      <div class="tit">Clearpro</div>
      <div class="art">
        {{$t('clearpro.management')}}</div>
    <div class="clearproinfo">
      <div class="partleft">
        <div class="tit">{{$t('clearpro.advantages')}}</div>
        <div class="clelist">
          <ul>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.view')}}</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.market')}}</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.speed')}}</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.docking')}}</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.product')}}</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>{{$t('clearpro.settings')}}</p>
            </li>
          </ul>
        </div>
      </div>
      <img class="partrightimg" src="@/assets/Clearpro_05.jpg" alt />
      <div class="clearfix"></div>
    </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.clearpro {
  width: 100%;
  .banner {
    background: url("./../../../public/images/Clearprobg_02.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 737px;
    width: 100vw;
    @include flex(flex-start, center, column);
    .title {
      line-height: 60px;
      padding-top: 80px;
      color: #fff;
      font-family: montserratse;
      font-size: 70px;
      width: 100%;
      text-align: center;
      @include animation(bounceInUps);
    }
    .tip {
      text-align: center;
      color: #fff;
      font-size: 36px;
      margin-top: 30px;
      @include animation(bounceInUps, 1s, 200ms);
    }
    img {
      margin-top: 75px;
      @include animation(fadeInLeft, 1s, 400ms);
    }
  }
  .mb {
    display: none;
    width: 100%;
    height: unset;
    img {
      width: 100%;
    }
  }
  .wrap {
    width: 1200px;
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
  }
  .clearproinfo {
    margin-top: 50px;
    margin-bottom: 100px;
    width: 1200px;
    display: block;
    margin: 0 auto;
    height: 600px;
    .partleft {
      float: left;
      width: 500px;
      .tit {
        text-align: left;
        font-family: montserratse;
        margin-top: 100px;
        font-size: 40px;
      }
      .clelist {
        margin-top: 80px;
        li {
          display: block;
          margin-bottom: 30px;
          img {
            float: left;
            width: 10px;
          }
          p {
            float: left;
            margin-left: 30px;
            width: 90%;
            font-size: 16px;
          }
        }
      }
    }
    .partrightimg {
      float: right;
      width: 500px;
      margin-top: 50px;
    }
  }
}
</style>