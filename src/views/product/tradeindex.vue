<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 13:51:15
 * @Description: 指数
 -->

<template>
  <div class="tradeindex">
    <div class="title">{{$t('tradeIndex.trade')}}</div>
    <div class="exp">
      <div class="leftimg">
        <img src="images/index03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
         {{$t('tradeIndex.what')}} 
          <br />{{$t('tradeIndex.index')}}
        </div>
        <div class="line"></div>
        <div
          class="text"
        >{{$t('tradeIndex.derivative')}}</div>
      </div>
    </div>
    <div class="wrap">
      <div class="tit">
        {{$t('tradeIndex.choose')}}
        <br />{{$t('tradeIndex.why')}}
      </div>
      <div
        class="art"
      >{{$t('tradeIndex.offer')}}</div>
    </div>
    <div class="choose">
      <div class="part pc">
        <div class="indexicon">
          <ul>
            <li>
              <img src="@/assets/index13.jpg" alt />
              <p>
                {{$t('tradeIndex.effective')}}
                <br />{{$t('tradeIndex.risk')}}
              </p>
            </li>
            <li>
              <img src="@/assets/index17.jpg" alt />
              <p>
                {{$t('tradeIndex.competitive')}}
                <br />{{$t('tradeIndex.spread')}}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img class="imgcen" src="images/index07.jpg" alt />
      <div class="part mb">
        <div class="indexicon">
          <ul>
            <li>
              <img src="@/assets/index13.jpg" alt />
              <p>
               {{$t('tradeIndex.effective')}} 
                <br />{{$t('tradeIndex.risk')}}
              </p>
            </li>
            <li>
              <img src="@/assets/index17.jpg" alt />
              <p>
                {{$t('tradeIndex.competitive')}}
                <br />{{$t('tradeIndex.spread')}}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="part">
        <div class="indexicon">
          <ul>
            <li>
              <img src="@/assets/index10.jpg" alt />
              <p>
                {{$t('tradeIndex.margin')}}
                <br />{{$t('tradeIndex.low')}}
              </p>
            </li>
            <li>
              <img src="@/assets/index19.png" alt />
              <p>
                {{$t('tradeIndex.samply')}}
                <br />{{$t('tradeIndex.leverage')}}
              </p>
            </li>
          </ul>
        </div>
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
.tradeindex {
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
    .art {
      font-family: montserrat;
      line-height: 30px;
      font-size: 16px;
      text-align: left;
      margin-top: 50px;
    }
  }
  .choose {
    width: 1000px;
    margin: 0 auto;
    height: 400px;
    margin-bottom: 340px;
    .part {
      width: 300px;
      margin-top: 170px;
      float: left;
      .indexicon {
        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          cursor: pointer;
          li {
            text-align: center;
            margin-bottom: 100px;
            list-style: none;
            text-align: center;
            img {
              height: 60px;
            }
            p {
              width: 250px;
              text-align: center;
              margin: 20px auto;
              font-size: 16px;
              box-sizing: border-box;
            }
          }
        }
      }
    }
    .part.mb {
      display: none;
    }
    .imgcen {
      margin: 0px auto;
      float: left;
    }
  }
}
</style>