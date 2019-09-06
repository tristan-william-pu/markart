<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 14:52:02
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:06:36
 * @ Description: clearpro
 -->

<template>
  <div class="clearpro">
    <div class="banner">
<<<<<<< HEAD
      <div class="wrap">
      <div class="title">Clearpro</div>
      <div class="tip">{{$t('clearpro.experience')}}</div>
      <img src="images/Clearpro3_03.png" alt />
      </div>
    </div>
    <div class="wrap">
      <div class="tit">Clearpro</div>
      <div class="art">
        {{$t('clearpro.management')}}</div>
    <div class="clearproinfo">
      <div class="partleft">
        <div class="tit">{{$t('clearpro.advantages')}}</div>
=======
      <div class="title">Clearpro</div>
      <div class="tip">为交易者创造最佳交易体验</div>
      <img src="images/Clearpro3_03.png" alt />
    </div>
    <div class="wrap">
      <div class="tit">Clearpro</div>
      <div
        class="art"
      >ClearPro交易平台整合流动性、风险管理、保证金及后台报告于一身，针对需要简单、快速、可靠的平台来导航市场的专业操盘手运用。主界面包括交易区、图表与新闻区、活动日志区和后台区。交易员可以通过添加模块和设置功能来自定义交易界面。在交易执行和技术分析方面，ClearPro集成了一键成交、订单类型及订单事件持续等方面的设置，并且还为交易者提供了每个货币对的实时市场深度。同时，根据不同的客户或群组设置专属的流动性，使客户在同一时间就能实现对流动性、风险、保证金、后台报告和交易分配的有效管理。其简洁直观易于使用的现代化界面，为交易员营造了最佳的交易体验。</div>
    </div>
    <div class="clearproinfo">
      <div class="partleft">
        <div class="tit">Clearpro优势</div>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
        <div class="clelist">
          <ul>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
<<<<<<< HEAD
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
=======
              <p>检视平均价格</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>市场深度</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>执行速度</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>模块对接的客制化交易环境</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>产品分门别类、交易信息一目了然</p>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <p>自定义设置下载报告</p>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
            </li>
          </ul>
        </div>
      </div>
      <img class="partrightimg" src="@/assets/Clearpro_05.jpg" alt />
<<<<<<< HEAD
      <div class="clearfix"></div>
    </div>
=======
      <div class="clear"></div>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
<<<<<<< HEAD
      padding-top: 80px;
=======
      padding-top: 55px;
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
      color: #fff;
      font-family: montserratse;
      font-size: 70px;
      width: 100%;
<<<<<<< HEAD
=======
      font-weight: 700;
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
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
<<<<<<< HEAD
=======
      width: 85%;
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
      @include animation(fadeInLeft, 1s, 400ms);
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
<<<<<<< HEAD
          margin-bottom: 30px;
=======
          margin-bottom: 20px;
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
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