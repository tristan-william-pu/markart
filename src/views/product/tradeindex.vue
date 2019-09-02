<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 13:55:38
 * @ Modified by: Your name
 * @ Modified time: 2019-09-02 21:44:18
 * @ Description: 指数
 -->


<template>
  <div class="tradeindex">
    <div class="title">指数</div>
    <div class="exp">
      <div class="leftimg">
        <img src="./../../../public/images/index03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
          什么是
          <br />交易指数？
        </div>
        <div class="line"></div>
        <div
          class="text"
        >指数交易是在股指交易基础上的衍生市场。指数差价合约反映了交易所相关期货的价格波动。其变动跟随相关期货的变动。CPT Markets 提供的指数差价合约是以盈亏保证金的形式给到您的账户，即交易当前值与交易未来值间的差额。严格来说，指数差价合约与普通差价合约原理相同。</div>
      </div>
    </div>
    <div class="wrap">
      <div class="tit">
        选择CPT Markets
        <br />指数交易的原因
      </div>
      <div
        class="art"
      >CPT Markets提供多种指数交易产品，涵盖道•琼斯工业平均指数、英国富时100指数、标普500指数、纳斯达克100指数、德国法兰克福DAX指数、法国40CAC指数、欧洲斯托克50指数，以及香港恒生指数等。</div>
    </div>
    <div class="choose">
      <div class="part">
        <div class="indexicon">
          <ul>
            <li>
              <img src="./../../../public/images/index13.jpg" alt />
              <p>
                有效的
                <br />风险控制
              </p>
            </li>
            <li>
              <img src="./../../../public/images/index17.jpg" alt />
              <p>
                极具竞争力的
                <br />点差
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img class="imgcen" src="./../../../public/images/index07.jpg" alt />
      <div class="part">
        <div class="indexicon">
          <ul>
            <li>
              <img src="./../../../public/images/index10.jpg" alt />
              <p>
                保证金低
                <br />成本低
              </p>
            </li>
            <li>
              <img src="./../../../public/images/index19.png" alt />
              <p>
                交易品种多样
                <br />杠杆灵活
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
<style lang="scss" scoped>
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
    .imgcen {
      margin: 0px auto;
      float: left;
    }
  }
}
@keyframes slide-up {
  from {
    transform: translate(0, 50px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0px);
    opacity: 1;
  }
}
@keyframes slide-left {
  0% {
    transform: translate(40px, 0);
    opacity: 0;
  }
  25% {
    // transform: translate(20px, 0);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50px, 0);
    opacity: 1;
  }
}
@keyframes slide-left-text {
  0% {
    transform: translate(40px, 0);
    opacity: 0;
  }
  25% {
    // transform: translate(20px, 0);
    opacity: 0.8;
  }
  100% {
    transform: translate(0px, 0);
    opacity: 1;
  }
}
@keyframes slide-right {
  0% {
    transform: translate(-40px, 0);
    opacity: 0;
  }
  25% {
    // transform: translate(20px, 0);
    opacity: 0.8;
  }
  100% {
    transform: translate(0px, 0);
    opacity: 1;
  }
}
@keyframes animtrans {
  from {
    transform: rotateZ(360deg);
  }
  to {
    transform: rotateZ(0deg);
  }
}
@keyframes animtran {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes animtrans {
  from {
    transform: rotateZ(360deg);
  }
  to {
    transform: rotateZ(0deg);
  }
}
</style>