<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 13:55:38
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:05:51
 * @ Description: 交易数字
 -->


<template>
  <div class="tradeindex">
    <div class="title">数字货币</div>
    <div class="exp">
      <div class="leftimg">
        <img src="images/Currency03.jpg" alt />
      </div>
      <div class="content">
        <div class="space"></div>
        <div class="title">
          什么是
          <br />数字货币?
        </div>
        <div class="line"></div>
        <div
          class="text"
        >自2009起，随着数字货币的诞生和兴起，全球进入到了一个去中心化的货币时代。以比特币为代表的数字加密货币，摆脱了传统的货币发行机制，依靠特定算法和P2P形式，让其拥有了安全、私密、稀缺等特别点，在长期实践中获得了全球投资者们的广泛认同。</div>
      </div>
    </div>
    <div class="wrap">
      <div class="tit">数字货币的核心优势</div>
      <div class="currencyimg clearfix">
        <ul>
          <li>
            <img src="@/assets/Currency13.jpg" alt />
            <p>支付自由</p>
          </li>
          <li>
            <img src="@/assets/Currency10.jpg" alt />
            <p>流通性强</p>
          </li>
          <li>
            <img src="@/assets/Currency07.jpg" alt />
            <p>
              交易费用低
              <br />
            </p>
          </li>
          <li>
            <img src="@/assets/Currency22.png" alt />
            <p>安全可控</p>
          </li>
          <li>
            <img src="@/assets/Currency19.jpg" alt />
            <p>透明中立</p>
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