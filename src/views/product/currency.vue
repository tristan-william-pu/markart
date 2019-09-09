<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 14:21:13
 * @Description: 交易数字
 -->

<template>
  <div class="currency">
    <div class="title">{{$t('currency.number')}}</div>
    <div class="exp">
      <div class="leftimg">
        <img src="images/Currency03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
          {{$t('currency.what')}}
          <br />{{$t('currency.currency')}}
        </div>
        <div class="line"></div>
        <div
          class="text"
        >{{$t('currency.emergence')}}</div>
      </div>
    </div>
    <div class="wrap">
      <div class="tit">{{$t('currency.core')}}</div>
      <div class="currencyimg clearfix">
        <ul>
          <li>
            <img src="@/assets/Currency13.jpg" alt />
            <p>{{$t('currency.pay')}}</p>
          </li>
          <li>
            <img src="@/assets/Currency10.jpg" alt />
            <p>{{$t('currency.strong')}}</p>
          </li>
          <li>
            <img src="@/assets/Currency07.jpg" alt />
            <p>
              {{$t('currency.low')}}
              <br />
            </p>
          </li>
          <li>
            <img src="@/assets/Currency22.png" alt />
            <p>{{$t('currency.safety')}}</p>
          </li>
          <li>
            <img src="@/assets/Currency19.jpg" alt />
            <p>{{$t('currency.neutral')}}</p>
          </li>
        </ul>
      </div>
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
.currency {
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
        width: 500px;
        height: 600px;
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
        color: #000;
        animation: slide-left 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        opacity: 0;
        animation-delay: 200ms;
        position: absolute;
        margin-top: -85px;
        margin-left: 10px;
      }
      .line {
        width: 100px;
        height: 1px;
        background: #5004ac;
        margin-top: 150px;
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
        margin-top: 135px;
        font-size: 18px;
        font-family: montserrat;
        letter-spacing: 1px;
        line-height: 40px;
        opacity: 0;
        animation: slide-left-text 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-fill-mode: forwards;
        animation-delay: 600ms;
        p {
          font-size: 16px;
          box-sizing: border-box;
        }
      }
    }
  }
  .wrap {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    margin-top: 650px;
    .tit {
      font-family: montserratse;
      margin-top: 100px;
      font-size: 40px;
      text-align: center;
    }
    .currencyimg {
      margin-top: 100px;
      ul,
      li {
        padding: 0;
        margin: 0;
        list-style: none;
        cursor: pointer;
        li {
          width: 33.3%;
          float: left;
          text-align: center;
          margin-bottom: 50px;
          list-style: none;
          img {
            vertical-align: middle;
          }
          p {
            text-align: center;
            margin-top: 30px;
            font-size: 16px;
          }
        }
        li:nth-child(n + 4) {
          width: 50%;
          margin-left: 5%;
        }
        li:nth-child(5) {
          width: 20%;
          margin-right: 10%;
        }
      }
    }
  }
}
</style>