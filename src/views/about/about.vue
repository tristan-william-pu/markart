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

    <div class="tradestep">
        <div class="tit">
            {{$t('about.chooese')}} <span class="pupcolor">{{$t('about.CPT')}}</span><br>
            {{$t('about.earth')}}
        </div>
        <div class="stepbox warp clearfix">
          <ul>
            <li>
              <img src="@/assets/icon05.png" alt="">
              <p>{{$t('about.Customer')}}</p>
            </li>
            <span class="arrow pc">></span>
            <li>
                <img src="@/assets/icon06.png" alt="">
                <p>{{$t('about.new')}}</p>
            </li>
            <span class="arrow pc">></span>
            <li>
                <img src="@/assets/icon07.png" alt="">
                <p>{{$t('about.competitiveness')}}</p>
              </li>
              <span class="arrow pc">></span>
              <li>
                  <img src="@/assets/icon08.png" alt="">
                  <p>{{$t('about.again')}}</p>
                </li>
          </ul>
        </div>
      </div>

       <div class="btnbox aboutuse">
        <div class="btn">
          <a href="index.php?m=simulationRegister&a=simulationRegister" onclick="ga('send', 'event', 'DR', 'play', 'OPEN');">{{$t('about.simulation')}}</a>
        </div>
        <div class="btn active">
          <a href="index.php?m=register&a=register" onclick="ga('send', 'event', 'TR', 'play', 'OPEN');">{{$t('about.trueth')}}</a> 
        </div>
       
      </div>


  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.about {
  margin-bottom: 20px;
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
  .tradestep{
    .tit{
      width: 100%;
      font-size: 40px;
      font-family: montserratse;
      text-align: center;
      margin-top: 150px;
      line-height: 70px;
      .pupcolor {
          color: #5b0eb2;
      }
    }
    .stepbox{
      margin-top: 50px;
      ul{
        li{
          float: left;
          text-align: center;
          width: 20%;
          img{
            height: 112px;
          }
          p{
            font-size: 21px;
            font-family:montserrat;
            margin-top: 40px 
          }
        }
      } 
    }
  } 

  .aboutuse.btnbox{
    width: 100%;
    text-align: center;
    margin-top: 100px;
    .btn{
      border-radius: 20px;
      width: 200px;
      height: 40px;
      border: 1px solid #5b0eb2;
      font-family: montserratse;
      background: none;
      color: #5b0eb2;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      display: inline-block;
      position: relative;
      overflow: hidden;
      margin-right: 20px;
      a{
        color: #000;
        display: block;
        &:hover{
          color:#fff !important;
        }
      }
      &:hover{
        background: #5b0eb2;
      }
     
    }
  }
}
.arrow{
  float: left;
  font-size: 55px;
  color: #319bd6;
  line-height: 200px;
  width: 6%
}
</style>