<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 13:55:38
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 07:51:22
 * @ Description: 差价合约
 -->


<template>
  <div class="conctrat">
    <Header />
    <div class="title">差价合约(CFD)</div>
    <div class="exp">
      <div class="leftimg">
        <img src="./../../../public/images/CFD03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
          什么是
          <br />差价合约（CFD）？
        </div>
        <div class="line"></div>
        <div class="text">
          <p>CFD差价合约交易最早出现在20世纪70年代, 80年代主要集中在银行间和大机构之间交易。1999年正式在境外零售市场交易，2000年在英国推出英国股票差价合约。</p>
          <p>差价合约是一种新兴的金融衍生品，是以某个商品的价格所进行的买卖，并不会涉及该商品实体的交易，可以说这是一种计算商品的开仓价值与平仓价值差额的投资行为。</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="artleft">
        <div class="tit">差价合约特征</div>
        <div class="art">
          可以保证金交易
          <br />自由买卖, 上升下跌市场都可交易
          <br />采用T+0交易模式
          <br />影响力较大的杠杆交易模式
          <br />市场波动大、投资回报高
          <br />
        </div>
      </div>
      <img class="imgright" src="./../../../public/images/CFD07.png" alt />
    </div>
    <div class="how">
      <div class="tit">如何操作CFD交易？</div>
      <div
        class="art"
      >CFD交易有许多的类型. CPT Markets就以指数差价合约为例，为交易者简单的演示指数CFD保证金&amp;盈亏计算方式， 以便投资者对于差价合约有更清晰的认识。</div>
      <div class="art">
        <span class="pupcolor">CFD保证金计算的公式为:</span>
        <br />CFD保证金计算的公式为:手数× 合约量 × 市价× 预付款百分比 =保证金
        <br />举例：
        <br />U30USD（道琼斯工业平均）的合约量为10, 当前指数为20000.0，预付款百分比为1%，则交易1手U30USD的保证金为：1 × 10 × 20000.0 × 1% = 2000 USD
      </div>
      <div class="art">
        <span class="pupcolor">CFD盈亏计算的方式：</span>
        <br />（平仓价 – 开仓价） × 合约量 × 手数 =盈亏
        <br />举例：
        <br />还是上例，如果买单入场价为20000.0，出场价为20001.0，
        <br />则盈利为：(20001.0 – 20000.0) × 1 × 10 = 10 USD
      </div>
      <div class="art">通过以上例子，投资者对于CPT Markets的指数CFD保证金&amp;盈亏计算方式有了一定的了解，可以根据自身的情况来判断是否需要投入差价合约交易。</div>
    </div>
    <Regist />
    <Footer />
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
    margin-top: 577px;
    margin-bottom: 20px;
    &:after {
      content: ".";
      display: block;
      clear: both;
      visibility: hidden;
      line-height: 0;
      height: 0;
    }
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