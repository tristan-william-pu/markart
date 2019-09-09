<!--
 * @Autor: Diskfan
 * @Date: 2019-09-07 15:13:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 18:26:18
 * @Description: 
 -->
<template>
  <div class="about">
    <div class="banner pc">
      <div class="img">
        <p class="banerfont animated fadeInLeft">{{$t('about.welcome')}}</p>
      </div>
    </div>
    <img class="mobbaner mb" src="images/aboutban.jpg" alt="">
    <div class="bannertips">
      <div class="warp aboutli">
        <ul>
          <li>
            <p class="num">3</p>
            <p class="txt">{{$t('about.continents')}}</p>
            <p class="jjian">{{$t('about.busness')}}</p>
          </li>
          <li>
            <p class="num">
              <span style="font-size: 58px;vertical-align: middle">∞&nbsp;</span> : 1
            </p>
            <p class="txt">{{$t('about.leverage')}}</p>
            <p class="jjian">{{$t('about.lower')}}</p>
          </li>
          <li>
            <p class="num">350+</p>
            <p class="txt">{{$t('about.offline')}}</p>
            <p class="jjian">{{$t('about.seize')}}</p>
          </li>
          <li>
            <p class="num">$13,000,000</p>
            <p class="txt">{{$t('about.promotion')}}</p>
            <p class="jjian">{{$t('about.wait')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="aboutart">
      <div class="tit">{{$t('about.us')}}</div>
      <div
        class="art"
      >{{$t('about.leading')}}</div>
      <div
        class="art"
      >{{$t('about.exchange')}}</div>
      <div
        class="art"
      >{{$t('about.advance')}}</div>
      <div class="art">{{$t('about.industry')}}</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.about {
  .pc {
    display: block;
  }
  .mb {
    display: none;
  }
  width: 100%;
  .banner {
    width: 100vw;
    .img {
      background: url("/images/baners.png") no-repeat;
      height: 437px;
      width: 100%;
      p {
        color: #fff;
        font-family: montserratse;
        font-size: 66px;
        width: 100%;
        text-align: center;
        line-height: 437px;
        @include animation(bounceInUps);
      }
    }
  }
  .mobbaner {
    width: 100%;
    height: auto;
  }
  .bannertips {
    width: 1300px;
    margin: 0 auto;
    height: 285px;
    box-shadow: #999 0px 0px 20px;
    margin-top: -50px;
    position: relative;
    z-index: 12;
    background: #fff;
    @include animation(bounceInUps, 1s, 300ms);
    .aboutli {
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
      ul {
        @include flex();
        li {
          width: 20%;
          @include flex(center, flex-start, column);
          .num {
            font-size: 42px;
            font-family: montserratse;
            margin-top: 70px;
            color: #000;
          }
          .txt {
            font-size: 24px;
            font-family: montserratse;
            margin-top: 15px;
            color: #000;
          }
          .jjian {
            font-size: 14px;
            font-family: montserrat;
            margin-top: 10px;
            color: #686868;
          }
        }
      }
    }
  }
  .aboutart {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    .tit {
      font-family: montserratse;
      margin-top: 100px;
      font-size: 40px;
      text-align: center;
    }
    .art {
      font-family: montserrat;
      line-height: 30px;
      font-size: 16px;
      text-align: left;
      margin-top: 50px;
    }
  }
}
</style>