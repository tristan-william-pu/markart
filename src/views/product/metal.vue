<template>
  <div class="metal">
    <div class="name">贵金属</div>
    <div class="warp">
      <div class="leftimg">
        <img
          class="animated moneyimg fadeInLeft"
          src="images/metal.jpg"
          alt
          style="opacity: 1;"
        />
      </div>
      <div class="floatfont">
        <div class="title" style="opacity: 1;">为什么选择交易贵金属?</div>
        <div class="line" style="opacity: 1;"></div>
        <div
          class="text"
          style="opacity: 1;"
        >贵金属交易是一个“双向”的交易，由于地球贵金属的存储量是恒定的，因而产生了非常高的价值。投资者在对贵金属市场看好的情况下，可以通过低买高卖赚取差价；也可以是在不看好经济前景的情况下通过购买贵金属来达到一种规避风险、保值增产的手段。CPT Markets现有可交易的贵金属产品有：黄金、白银。投资人可以根据自身喜好进行购买投资。</div>
      </div>
    </div>
    <div class="choose">
      <div class="tit">交易贵金属的优势</div>
      <div class="clearfix">
        <div class="melaleft">
          <p class="purfont">
            +
            <br />我们的优势
          </p>
          <span class="borderfont">T+0模式，24小时交易</span>
          <span class="borderfont">高保值抵抗通货膨胀</span>
          <span class="borderfont">风险较低回报较高</span>
        </div>

        <div class="melacenter">
          <img class="imgcenter" src="images/metal7.jpg" alt />
        </div>

        <div class="melaright">
          <span class="borderfont more">公开透明，市场公正</span>
          <span class="borderfont more31">即时交收，变现容易</span>
          <span class="borderfont less">
            市场波动率大，
            <br />双向交易均可收益
          </span>
          <p class="purfont">
            立即
            <br />体验
          </p>
          <div class="clear"></div>
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
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.metal {
  .name {
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
    margin-top: -20px;
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
    }
  }
}

</style>