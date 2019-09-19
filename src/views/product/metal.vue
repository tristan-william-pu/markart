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
    <div class="warp clearfix">
      <div class="leftimg ">
        <img src="images/metal.jpg" alt/>
      </div>
      <div class="content">
        <div class="title">
          {{$t('metal.why')}}<br>{{$t('metal.trade')}}
          </div>
        <div class="line"></div>
        <div  class="text">{{$t('metal.way')}}</div>
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
          </p>
          <div class="clear"></div>
          <router-link to="/regist">
            <img class="arrowicon" src="@/assets/metalarow.png" alt />
          </router-link>
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
          <router-link to="/regist">
          
            <img class="arrowicon" src="@/assets/metalarow.png" alt />
          </router-link>
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