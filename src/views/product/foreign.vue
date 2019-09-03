<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 13:55:38
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 07:51:47
 * @ Description: 外汇
 -->


<template>
  <div class="foreign">
    <Header />
    <div class="title">外汇</div>
    <div class="exp">
      <div class="leftimg">
        <img src="./../../../public/images/echange3.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">什么是外汇?</div>
        <div class="line"></div>
        <div
          class="text"
        >外汇交易是一国货币与另一国货币的交换。目前，汇率主要受国际贸易、国民经济和投资流动的政策和影响的影响。不同于其他的金融交易，外汇市场没有具体地点，也没有中央交易所，而是通过银行、企业和个人间的电子网络进行交易。因此，外汇市场信息更加透明，流动性更好，价格也更公平。其具有在5×24小时内双向交易的特点，深受大型投资机构和投资者的喜爱。</div>
      </div>
    </div>
    <div class="choose">
      <h1>
        选择CPT Markets
        <br />外汇交易的理由
      </h1>
      <div>
        <div class="loop">
          <div class="bg1">
            <div>
              <span class="icon01">
                外汇市场
                <br />参与度高
              </span>
              <span class="icon02">
                根据交易策略
                <br />设置自动化交易
              </span>
              <span class="icon03">
                即时市场分析
                <br />降低交易风险
              </span>
              <span class="icon04">
                交易迅速即时
                <br />可以即时成交
              </span>
              <span class="icon05">
                交易量大、
                <br />流通性强、透明度高
              </span>
              <span class="icon06">
                杠杆高达1:500
                <br />交易成本低
              </span>
              <span class="icon07">
                每周5×24小时
                <br />不间断交易
              </span>
              <span class="icon08">
                多种交易货币对
                <br />任意选择
              </span>
            </div>
          </div>
          <div class="fenche">
            <img class="fc" src="./../../../public/images/fenche.png" alt />
            <img class="gan" src="@/assets/gan.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <Regist />
    <Footer />
  </div>
</template>
<script>
import Regist from './regist.vue';
export default {
  components: { Regist }
};
</script>
<style lang="scss" scoped>
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
          -webkit-animation: animtran 40s linear infinite;
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