<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 14:39:18
 * @Description: 外汇
 -->


<template>
  <div class="foreign">
    <div class="title">{{$t('exchange.forign')}}</div>
    <div class="exp">
      <div class="leftimg ">
        <img src="images/echange3.jpg" alt />
      </div>
      <div class="content ">
        <div class="space "></div>
        <div class="title ">
          {{$t('exchange.what')}}<br>{{$t('exchange.waihui')}}
        </div>
        <div class="line"></div>
        <div
          class="text"
        >{{$t('exchange.rate')}}</div>
      </div>
    </div>
    <div class="choose">
      <h1>
        {{$t('exchange.choose')}}
        <br />{{$t('exchange.resion')}}
      </h1>
      <div>
        <div class="loop">
          <div class="bg1">
            <div>
              <span class="icon01">
               {{$t('exchange.high')}} 
                <br />{{$t('exchange.market')}}
              </span>
              <span class="icon02">
               {{$t('exchange.automate')}}  
                <br />{{$t('exchange.base')}}
              </span>
              <span class="icon03">
                {{$t('exchange.instant')}}
                <br />{{$t('exchange.risk')}}
              </span>
              <span class="icon04">
                {{$t('exchange.quick')}}
                <br />{{$t('exchange.execute')}}
              </span>
              <span class="icon05">
                {{$t('exchange.volume')}}
                <br />{{$t('exchange.trans')}} 
              </span>
              <span class="icon06">
                {{$t('exchange.up')}}
                <br />{{$t('exchange.to')}} 
              </span>
              <span class="icon07">
                {{$t('exchange.week')}}
                <br />{{$t('exchange.stop')}}
              </span>
              <span class="icon08">
                {{$t('exchange.variety')}}
                <br />{{$t('exchange.select')}}
              </span>
            </div>
          </div>
          <div class="fenche">
            <img class="fc" src="images/fenche.png" alt />
            <img class="gan" src="@/assets/gan.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <Regist />
  </div>
</template>
<script>
import Regist from './regist.vue';
export default {
  components: { Regist }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.foreign {
  margin: 0 auto;
  > .title {
    font-size: 75px;
    color: #000;
    line-height: 223px;
    font-family: montserratse;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    opacity: 0;
    transform: translate(0, 50px);
    animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-fill-mode: forwards;
  }
  .exp {
    @include flex();
    margin-top: 100px;
    margin-top: 60px;
    height: 550px;
    background: #f8f7f7;
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    left: 0;
    .leftimg {
      width: 35%;
      @include flex();
      height: 100%;
      > img {
        animation: slide-right 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        opacity: 0;
        animation-delay: 200ms;
        position: absolute;
      }
    }
    .content {
      width: 65%;
      background: #ffffff;
      height: 100%;
      .space {
        height: 140px;
      }
      .title {
        font-size: 55px;
        margin-top: 30px;
        color: #000;
        animation: slide-left 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        opacity: 0;
        animation-delay: 200ms;
        position: absolute;
        margin-top: -60px;
      }
      .line {
        width: 100px;
        height: 1px;
        background: #5004ac;
        margin-top: 80px;
        float: left;
        position: absolute;
        opacity: 0;
        animation: slide-left 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        animation-delay: 400ms;
      }
      .text {
        padding: 0 50px;
        margin-left: 20px;
        width: 650px;
        margin-top: 65px;
        font-size: 18px;
        font-family: montserrat;
        letter-spacing: 1px;
        line-height: 40px;
        opacity: 0;
        animation: slide-left-text 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        animation-delay: 600ms;
      }
    }
  }
  .choose {
    width: 100%;
    margin-top: 730px;
    height: 1100px;
    h1 {
      font-size: 40px;
      margin: 0.67em 0;
      text-align: center;
    }
    .loop {
      width: 750px;
      height: 750px;
      margin: 10% auto;
      position: relative;
      .bg1 {
        width: 750px;
        height: 750px;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 10;
        > div {
          width: 750px;
          height: 750px;
          border: #ccc 1px dashed;
          border-radius: 50%;
          position: relative;
          animation: animtran 40s linear infinite;
          > span {
            width: auto;
            position: absolute;
            animation: animtrans 40s linear infinite;
            text-align: center;
            background: #fff;
          }
          .icon01 {
            bottom: 140px;
            left: 35px;
          }
          .icon02 {
            top: 300px;
            left: -54px;
          }
          .icon03 {
            top: 62px;
            left: 85px;
          }
          .icon04 {
            top: 159px;
            right: 3px;
          }
          .icon05 {
            top: 400px;
            right: -80px;
          }
          .icon06 {
            bottom: 100px;
            right: 35px;
          }
          .icon07 {
            bottom: -25px;
            left: 315px;
          }
          .icon08 {
            top: -6px;
            left: 400px;
          }
        }
      }
      .fenche {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        .fc {
          position: absolute;
          left: 50%;
          margin-left: -200px;
          top: 150px;
          z-index: 30;
          width: 400px;
          animation: animtrans 6s ease-in-out infinite;
          vertical-align: middle;
        }
        .gan {
          position: absolute;
          left: 50%;
          margin-left: -9px;
          top: 300px;
          z-index: 20;
        }
      }
    }
  }
}
</style>