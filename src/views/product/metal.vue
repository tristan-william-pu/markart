<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 14:47:05
 * @Description: 
 -->
<template>
  <div class="metal">
    <div class="title">{{$t('metal.precious')}}</div>
    <div class="warp">
      <div class="leftimg ">
        <img
          class="animated moneyimg fadeInLeft"
          src="images/metal.jpg"
          alt
          style="opacity: 1;"
        />
      </div>
      <div class="floatfont">
        <div class="title" style="opacity: 1;">{{$t('metal.why')}}<br>{{$t('metal.trade')}}</div>
        <div class="line" style="opacity: 1;"></div>
        <div
          class="text"
          style="opacity: 1;"
        >{{$t('metal.way')}}</div>
      </div>
    </div>
    <div class="choose">
      <div class="tit">{{$t('metal.advantages')}}<br>{{$t('metal.advantagesbr')}}</div>
      <div class="clearfix">
        <div class="melaleft">
          <p class="purfont">
            +
            <br />{{$t('metal.our')}}
          </p>
          <span class="borderfont">{{$t('metal.mode')}}</span>
          <span class="borderfont">{{$t('metal.value')}}</span>
          <span class="borderfont">{{$t('metal.lower')}}</span>
        </div>

        <div class="melacenter">
          <img class="imgcenter" src="images/metal7.jpg" alt />
        </div>

        <div class="melaright pc">
          <span class="borderfont more">{{$t('metal.public')}}</span>
          <span class="borderfont more31">{{$t('metal.delivery')}}</span>
          <span class="borderfont less">
            {{$t('metal.volatility')}}
            <br />{{$t('metal.trip')}}
          </span>
          <p class="purfont">
            {{$t('metal.experience')}}
            <!-- <br />{{$t('metal.precious')}}体验 -->
          </p>
          <div class="clear"></div>
          <a href="javascript:void(0)">
            <img class="arrowicon" src="@/assets/metalarow.png" alt />
          </a>
        </div>
        <div class="melaright mb">
         
          <div class="list">
            <span class="borderfont more">{{$t('metal.public')}}</span>
            <span class="borderfont more31">{{$t('metal.delivery')}}</span>
            <span class="borderfont less">
              {{$t('metal.volatility')}}<br />{{$t('metal.trip')}}
            </span>
          </div>
          <div class="clear"></div>
           <p class="purfont">
            {{$t('metal.experience')}}
          </p>
          <a href="javascript:void(0)">
            <img class="arrowicon" src="@/assets/metalarow.png" alt />
          </a>
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
.metal {
  .title {
    font-size: 75px;
    color: #000;
    line-height: 223px;
    font-family: montserratse;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    animation-name: bounceInUps;
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .warp {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    @include clearfix();
    .leftimg {
      margin-left: -100px;
      width: 500px;
      height: 600px;
      background: #f8f7f7;
      position: relative;
      overflow: hidden;
      float: left;
      > img {
        display: block;
        height: 600px;
        animation-name: fadeInLeft;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 100ms;
      }
    }
    .floatfont {
      float: left;
      font-family: montserratse;
      margin-top: 50px;
      position: relative;
      z-index: 99;
      width: calc(100% - 500px);
      height:auto;
      .title {
        animation-name: fadeInRight;
        animation-duration: 1s;
        animation-delay: 100ms;
        animation-fill-mode: both;
        font-size: 55px;
        margin-top: 30px;
        margin-left: -50px;
        position: absolute;
      }
      .line {
        animation-name: fadeInRight;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 200ms;
        width: 100px;
        height: 1px;
        background: #5004ac;
        margin-top: 188px;
        margin-left: -50px;
        opacity: 0;
        position: absolute;
      }
      .text {
        float: left;
        width: 650px;
        margin-top: 172px;
        font-size: 18px;
        font-family: montserrat;
        letter-spacing: 1px;
        line-height: 40px;
        opacity: 0;
        animation-name: fadeInRight;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 300ms;
        padding: 0px 70px;
      }
    }
  }
  .choose {
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
    .clearfix {
      &:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
      }
      .melaleft {
        float: left;
        width: 300px;
        height: auto;
        .purfont {
          font-size: 36px;
          line-height: 40px;
          text-align: left;
          font-family: montserratse;
          margin-top: 50px;
          color: #5004ac;
          margin-bottom: 50px;
        }
        .borderfont {
          border: 1px dashed #bc0d0d;
          line-height: 30px;
          padding-left: 20px;
          padding-right: 20px;
          font-family: montserrat;
          margin-bottom: 30px;
          display: block;
        }
      }
      .melacenter {
        float: left;
        width: 600px;
        height: auto;
        overflow: hidden;
        margin-bottom: 20px;
        img {
          margin-left: auto;
          margin-right: auto;
          display: block;
          margin-top: 70px;
        }
      }
      .melaright {
        float: right;
        width: 300px;
        height: auto;
        margin-top: 50px;
        .borderfont {
          line-height: 30px;
          padding-left: 20px;
          padding-right: 20px;
          font-family: montserrat;
          margin-bottom: 30px;
          display: block;
          border: 1px dashed #04ac3b;
          float: right;
        }
        .more {
          width: 320px;
          border: 1px dashed #04ac3b;
          float: right;
        }
        .more31 {
          width: 310px;
        }
        .less {
          width: 230px;
        }
        .purfont {
          font-size: 36px;
          line-height: 40px;
          text-align: left;
          font-family: montserratse;
          margin-top: 50px;
          color: #5004ac;
          margin-bottom: 0px;
          float: right;
        }
        .clear {
          @include clearfix();
        }
        a {
          color: var(--color-link);
          outline: none;
          img {
            float: right;
            margin-top: 30px;
            margin-right: 0px;
            transition: 1s;
          }
        }
      }
      .melaright.mb {
        display: none;
        width: 90%;
        margin: 0 auto;
        float: unset;
        .purfont {
          width: 50px;
          display: inline-block;
          float: left;
          margin-top: 0;
          vertical-align: middle;
        }
        .list {
          width: calc(100% - 50px);
          float: left;
          vertical-align: middle;
          display: flex;
          flex-direction: column;
          >span {
            width: 100%;
          }
        }
        >a img {
              margin-left: calc(50% - 40px);
              float: unset;
        }
      }
    }
  }
}

</style>