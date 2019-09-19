<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 13:29:37
 * @Description: 差价合约
 -->

<template>
  <div class="conctrat">
    <div class="title">{{$t('CFD.contract')}}</div>
    <div class="warp clearfix">
      <div class="leftimg">
        <img src="images/CFD03.jpg" alt />
      </div>
      <div class="content">
        <div class="title">
          {{$t('CFD.what')}}
          <br />{{$t('CFD.cfd')}}
        </div>
        <div class="line"></div>
        <div class="text">
         {{$t('CFD.appeared')}} <br>
          {{$t('CFD.behavior')}}
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="artleft">
        <div class="tit">{{$t('CFD.characteristics')}}</div>
        <div class="art">
          {{$t('CFD.margin')}}
          <br />{{$t('CFD.tradable')}}
          <br />{{$t('CFD.mode')}}
          <br />{{$t('CFD.powerful')}}>
          <br />{{$t('CFD.high')}}
          <br />
        </div>
      </div>
      <img class="imgright" src="images/CFD07.png" alt />
    </div>
    <div class="how">
      <div class="tit">{{$t('CFD.how')}}</div>
      <div
        class="art"
      >{{$t('CFD.types')}}</div>
      <div class="art">
        <span class="pupcolor">{{$t('CFD.formula')}}</span>
        <br />{{$t('CFD.losts')}}
        <br />{{$t('CFD.example')}}
        <br />{{$t('CFD.average')}}
      </div>
      <div class="art">
        <span class="pupcolor">{{$t('CFD.method')}}</span>
        <br />{{$t('CFD.closing')}}
        <br />{{$t('CFD.example')}}
        <br />{{$t('CFD.above')}}
        <br />{{$t('CFD.profit')}}
      </div>
      <div class="art">{{$t('CFD.invertor')}}</div>
    </div>
    <Regist />
  </div>
</template>
<script>
import Regist from "./regist.vue";
export default {
  components: { Regist }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.conctrat {
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
  .warp {
    @include flex();
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    .leftimg {
      margin-left: -100px;
      width: 500px;
      height: 600px;
      background: #f8f7f7;
      position: relative;
      overflow: hidden;
      float: left;
      @include flex();
      > img {
        animation: slide-right 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        opacity: 0;
        animation-delay: 200ms;
        position: absolute;
      }
    }
    .content {
      float:left;
      background: #ffffff;
      height: 100%;
      margin-top:50px;
      .title {
        font-size: 55px;
        color: #000;
        animation: slide-left 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        opacity: 0;
        animation-delay: 200ms;
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
  .wrap {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    @include clearfix();
    .artleft {
      width: 600px;
      float: left;
      text-align: left;
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

    .imgright {
      float: right;
      margin-top: 80px;
    }
  }
  .how {
    width: 1200px;
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
      margin-bottom: 20px;
      margin-top: 50px;
      .pupcolor {
        color: #5b0eb2;
      }
    }
  }
}
</style>