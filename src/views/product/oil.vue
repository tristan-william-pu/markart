<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 13:13:09
 * @Description: 原油
 -->


<template>
  <div class="oil">
    <div class="title">原油</div>
    <div class="exp">
      <div class="leftimg">
        <img src="images/Oil03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
          为什么选择CPT Markets
          <br />原油交易？
        </div>
        <div class="line"></div>
        <div
          class="text"
        >原油交易起源于20世纪70年代初发生的石油危机。由于造成石油价格剧烈波动，使得石油交易量一直呈现快速增长之势，现已超过金属产品的交易量。在石油期货合约之中，当属原油期货是交易量最大，也是交易最频繁的品种。目前，CPT Markets交易的原油产品为伦敦布伦特原油（UKOUSD）和美国原油（USOUSD）两种。投资者可根据个人对市场的理解，自由选择品种进行交易。</div>
      </div>
    </div>
    <div class="choose">
      <h1>原油交易运营模式</h1>
      <div class="clearfix">
        <div class="leftart">
          <ul>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <span>采用T+0交易规则，交易灵活</span>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <span>点差低，交易成本低</span>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <span>杠杆交易提高资金利用率</span>
            </li>
            <li class="clearfix">
              <img src="@/assets/Oil10.png" alt />
              <span>供需影响价格，容易把握行情</span>
            </li>
          </ul>
        </div>
        <img class="rightimg" src="images/Oil07.jpg" alt />
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
.oil {
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
      }
    }
  }
  .choose {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: 660px;
    margin-bottom: 20px;
    h1 {
      font-size: 40px;
      margin: 0.67em 0;
      text-align: center;
    }
    .clearfix {
      @include clearfix();
      .leftart {
        width: 600px;
        float: left;
        margin-top: 80px;
        margin-left: 50px;
        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          cursor: pointer;
          li {
            display: block;
            margin-bottom: 40px;
            img {
              display: block;
              float: left;
            }
            span {
              line-height: 22px;
              margin-left: 15px;
              font-size: 18px;
              color: #000;
              float: left;
            }
          }
        }
      }
        .rightimg {
          width: 500px;
          float: right;
          margin-right: 50px;
        }
    }
  }
}
</style>