<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 15:38:04
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 19:01:10
 * @ Description: cpt cTrader
 -->

<template>
  <div class="cpt">
    <Header />
    <div class="big-img">
      <div class="center">
        <h6>CPT cTrader</h6>
        <p>
          <a href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe">下载CPT CTRADER</a>
        </p>
      </div>
    </div>
    <div class="nav" :class="{fixed: static}">
      <ul class="clear">
        <li :class="{active: active == 0}" @click="active=0">
          <a href="javascript:void(0)" @click="scrollTo('introduction')">CPT cTrader 介绍</a>
        </li>
        <li :class="{active: active == 1}" @click="active=1">
          <a href="javascript:void(0)" @click="scrollTo('web')">CPT cTrader 网页版</a>
        </li>
        <li :class="{active: active == 2}" @click="active=2">
          <a href="javascript:void(0)" @click="scrollTo('ctPc')">CPT cTrader PC版</a>
        </li>
        <li :class="{active: active == 3}" @click="active=3">
          <a href="javascript:void(0)" @click="scrollTo('ios')">CPT cTrader IOS</a>
        </li>
        <li :class="{active: active == 4}" @click="active=4">
          <a href="javascript:void(0)d" @click="scrollTo('android')">CPT cTrader Android</a>
        </li>
      </ul>
    </div>
    <div class="replace" v-show="static"></div>
    <div class="introduction">
      <div class="center">
        <h3>CPT cTrader 介绍</h3>
        <div class="intCon">
          <div class="fl">
            <h6>CPT cTrader</h6>
            <p>CPT cTrader是CPT Markets基于领先的数字金融IT理念，针对交易者全新打造功能最强大的交易平台，提供直接市场接入(DMA)。CPT cTrader平台对止损/限价价位没有限制，允许您一键反转、翻倍或平仓所有头寸。</p>
            <p>CPT cTrader中可使用II级市场深度，可针对可用流动性提供更大的透明度。技术升级、服务升级、体验升级组成了CPT cTrader极具价值的产品服务。</p>
            <p class="ctLine"></p>
          </div>
          <div class="fr">
            <img src="images/indIntroduce.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="functi">
      <div class="top">
        <h3>
          <span>CPT cTrader的</span>主要交易功能
        </h3>
        <p class="ctLine"></p>
      </div>
      <div class="bot">
        <div class="tabs">
          <nav class="clear">
            <div data-con="local" :class="{active: funActive == 0}" @click="funActive = 0">
              <img src="@/assets/indFunction1.png" />
              <p>超快的订单执行</p>
            </div>
            <div data-con="global" :class="{active: funActive == 1}" @click="funActive = 1">
              <img src="@/assets/indFunction2.png" />
              <p>全透明二级定价-市场深度</p>
            </div>
            <div data-con="sports" :class="{active: funActive == 2}" @click="funActive = 2">
              <img src="@/assets/indFunction3.png" />
              <p>稳定交易体验</p>
            </div>
            <div data-con="funny" :class="{active: funActive == 3}" @click="funActive = 3">
              <img src="@/assets/indFunction4.png" />
              <p>交易指示和图表</p>
            </div>
          </nav>
          <div class="cont clear" v-show="funActive == 0">
            <p class="fl le">&gt;</p>
            <p
              class="word fl"
            >交易执行的延误是每个交易者最困扰的难题。CPT cTrader服务器对订单的平均执行时间低于120ms，通过领先的数据传输框架协议发送至最近的数据中心。这种超低延迟数据中心带给您的交易环境非常适合自动化交易、高频交易。</p>
          </div>
          <div class="cont clear" v-show="funActive == 1">
            <p class="fl le">&gt;</p>
            <p
              class="word fl"
            >CPT cTrader最独特的地方之一，就是它具备真正的无交易员处理平台（NDD）环境。通过FIX应用程序接口(API)将CPT cTrader平台直接连接到流动性提供商或者整合器，所以不存在干预交易的可能，这使得所有货币对的流动性报价对交易者完全透明。</p>
          </div>
          <div class="cont clear" v-show="funActive == 2">
            <p class="fl le">&gt;</p>
            <p
              class="word fl"
            >CPT cTrader确保一次快速执行多个订单，无需任何订单的等候队列，CPT cTrader会同步处理上百个订单，而其它平台则是按照先后顺序来处理。并且允许外汇交易者在波动的市场情况下快速打开、修改和关闭交易，给您提供最稳定的交易体验。</p>
          </div>
          <div class="cont clear" v-show="funActive == 3">
            <p class="fl le">&gt;</p>
            <p
              class="word fl"
            >CPT cTrader软件在28个时间框架内提供各种图表，以适应不同类型的交易者和交易策略。创建和保存多达50个图表模板以供使用，包括各种时间框架内的各种技术分析类型，符号和图表类型。允许图表分离并成为可在多个屏幕上使用的独立应用程序，且可进行自定义以符合您的交易风格。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="acqTop">
      <h3>
        <span>当您选择使用CPT cTrader账户</span>进行交易时，您可以获得
      </h3>
      <p class="ctLine"></p>
    </div>
    <div class="tabs">
      <div class="navList">
        <div class="oneDiv" :class="{active: getActive == 0}" @click="getActive=0">
          <div class="num">01</div>
          <dl>
            <dt>简化交易难度和透明的知情决策</dt>
            <dd>轻松市场执行</dd>
            <dd>多兼容网页交易</dd>
            <dd>套期保值能力</dd>
            <dd>二级市场深度</dd>
            <dd>以手数为单位的交易量计算</dd>
          </dl>
        </div>
        <div data-con="two" class="twoDiv" :class="{active: getActive == 1}" @click="getActive=1">
          <div class="num fl">02</div>
          <dl>
            <dt>高级图表和分析工具</dt>
            <dd>全尺寸刻度线图，移动设备也适用</dd>
            <dd>高级图表交易能力</dd>
            <dd>可视化技术分析工具</dd>
            <dd>能够自动创建和分享图表截图</dd>
          </dl>
        </div>
        <div
          data-con="three"
          class="threeDiv"
          :class="{active: getActive == 2}"
          @click="getActive=2"
        >
          <div class="num fl">03</div>
          <dl>
            <dt>便携一键交易</dt>
            <dd>只需点击一下即可反向交易</dd>
            <dd>只需点击一下即可实现双倍加仓</dd>
            <dd>只需单击一下即可关闭所有未结头寸</dd>
          </dl>
        </div>
        <div data-con="four" class="fourDiv" :class="{active: getActive == 3}" @click="getActive=3">
          <div class="num fl">04</div>
          <dl>
            <dt>优秀的客服支持</dt>
            <dd>多语言用户界面</dd>
            <dd>软件自动更新</dd>
            <dd>模拟账户</dd>
          </dl>
        </div>
      </div>
      <div class="fr">
        <div class="cont clear" v-show="getActive == 0">
          <img src="images/indAcquire1.png" />
        </div>
        <div class="cont clear" v-show="getActive == 1">
          <img src="images/indAcquire2.png" />
        </div>
        <div class="cont clear" v-show="getActive == 2">
          <img src="images/indAcquire3.png" />
        </div>
        <div class="cont clear" v-show="getActive == 3">
          <img src="images/indAcquire4.png" />
        </div>
      </div>
    </div>
    <div class="web">
      <div class="webTop">
        <h3>CPT cTrader 网页版</h3>
        <p
          class="con"
        >CPT cTrader网页版提供超快的订单执行功能，轻松、便捷,让您可以在世界任何地方享受真实的ECN外汇交易。 CPT cTrader网页版具有与CPT cTrader桌面版相同的市场领先价差，二级定价和一键式交易，以及个性化交易界面等功能，可以一目了然地监控您的持仓。</p>
        <div class="btn clear">
          <a href="https://ct.cptmarkets.com">
            <img src="images/XZ1.png" class="fl" />
            <p class="fl">CPT cTrader 网页版</p>
          </a>
        </div>
        <h6>
          <span>随时随地访问</span>CPT cTrader网页版
        </h6>
        <p class="ctLine"></p>
      </div>
      <div class="webBot">
        <div class="con clear">
          <div class="fl">
            <div>特征</div>
            <p class="black">在任何地方交易</p>
            <p class="black">充分利用我们的真实ECN点差</p>
            <p class="black">没有订单或交易限制</p>
            <p class="black">微交易最小手数为0.01，没有最大值</p>
            <p class="black">二级定价 - 完整的市场深度</p>
            <p>一键交易</p>
            <p>多种订单类型</p>
            <p>实时交易报告</p>
            <p>高级图表和技术分析</p>
          </div>
          <div class="fr">
            <div>优点</div>
            <p>我们不干预您的市场交易</p>
            <p>低成本交易节省资金</p>
            <p>享受最快的超低延迟执行</p>
            <p>通过微手数交易更好地控制交易风险</p>
            <p>轻松地将资金转入和转出您的交易账户</p>
            <p>支持所有主要的浏览器</p>
            <p>在CPT cTrader PC版和CPT cTrader网页版上使用相同的帐户</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ctPc">
      <div class="center">
        <h3>CPT cTrader PC版</h3>
        <div class="pcCon">
          <div class="fl">
            <p>CPT cTrader平台是一个包含二级报价的功能丰富的交易平台，可针对可用流动性提供更大的透明度。人性化的操作界面与丰富的图表功能，适合每一位交易者根据自己的交易风格开启交易之旅。</p>
            <div class="btn clear">
              <a href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe">
                <img src="images/XZ.png" />
                <p>下载 CPT cTrader PC版</p>
              </a>
            </div>
          </div>
          <div class="fr">
            <img src="images/indPC.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="ios">
      <div class="center clear">
        <div class="fl">
          <img src="images/indIOS.png" />
        </div>
        <div class="fr">
          <h3>CPT cTrader IOS</h3>
          <p>CPT cTrader苹果手机版作为原生应用程序为您提供最佳的外汇交易体验。直接从iOS设备访问我们领先市场的点差和无与伦比的执行速度。</p>
          <p>您将获得与CPT cTrader网页版相同的核心功能，具有更快的启动时间和相同的易用界面。这款便携式CPT cTrader系统可以从任何iOS设备访问，因此您可以随时参与到世界上流动性最好的交易市场。</p>
          <div class="btn clear">
            <div class="leWord">
              <img src="images/IOS.png" />
              <h6>
                下载
                <span>CPT cTrader iphone/ipad</span>
              </h6>
              <p>
                扫码一键下载
                <span>&gt;</span>
              </p>
            </div>
            <div class="ewm">
              <img src="images/iosEwm.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="android">
      <div class="center">
        <div class="fl">
          <h3>CPT cTrader Android</h3>
          <p>CPT cTrader安卓版为您提供最佳的外汇交易作为原生应用程序。它为您提供了有效技术分析所需的所有工具，包括常见的趋势指标，振荡器，波动率测量和线图，所有这些都可以直接在图表中访问。</p>
          <p>直接从Android设备获得我们的领先的市场点差和无与伦比的执行速度。您将获得与CPT cTrader网页版相同的核心功能，具有更快的启动时间和相同的易用界面。</p>
          <div class="btn clear">
            <div class="fl leWord">
              <img src="@/assets/andIcon.png" />
              <h6>
                下载
                <span>CPT cTrader Android</span>
              </h6>
              <p>
                扫码一键下载
                <span>&gt;</span>
              </p>
            </div>
            <div class="fl ewm">
              <img src="@/assets/andEwm.png" />
            </div>
          </div>
        </div>
        <div class="fr">
          <img src="images/indAnd.png" />
        </div>
      </div>
    </div>
    <div class="trading">
      <div class="center">
        <h6>
          <span>用您的</span>iPhone/iPad/Android交易外汇!
        </h6>
        <p class="ctLine"></p>
        <ul class="clear">
          <li class="oneLi">
            <p class="tit">交易</p>
            <p class="ctLine"></p>
            <span>超快执行外汇和大宗商品交易</span>
            <span>单击订单执行</span>
            <span>余额、保证金和损益表信息</span>
            <span>查看所有品种和费率，包括您的收藏列表</span>
            <span>可用图表</span>
          </li>
          <li class="twoLi">
            <p class="tit">账户</p>
            <p class="ctLine"></p>
            <span>完整的帐户列表 - 只需点按一下即可切换帐户</span>
            <span>查看交易历史</span>
            <span>查看和修改挂单</span>
          </li>
          <li class="threeLi">
            <p class="tit">平板电脑</p>
            <p class="ctLine"></p>
            <span>特殊的平板电脑分屏界面</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      static: true,
      funActive: 0,
      getActive: 0
    };
  },
  methods: {
    scrollTo(select) {
      const dom = this.$el.querySelector(`.${select}`);
      const reactDom = dom.getClientRects()[0];
      console.log(reactDom)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.cpt {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .big-img {
    width: 100%;
    background: url("./../../../public/images/indBg.jpg") no-repeat center;
    background-size: 100%;
    .center {
      width: 70%;
      margin: 0 auto;
      padding: 9% 0 5%;
      h6 {
        font-weight: 100;
        font-size: 60px;
        color: #fff;
        font-family: FZLTZHK;
        text-align: center;
        font-weight: 600;
      }
      p {
        font-family: LTH;
        font-size: 20px;
        color: #fff;
        width: 252px;
        line-height: 48px;
        background-color: #5b0eb2;
        border-radius: 15px;
        text-align: center;
        margin: 38px auto 0;
        a {
          color: #fff;
        }
      }
    }
  }
  .replace {
    height: 91px;
    width: 100%;
  }
  .nav {
    width: 100%;
    border-top: 5px solid #6714ba;
    height: 91px;
    margin-top: -4px;
    background-color: #242424;
    user-select: none;
    ul {
      width: 1207px;
      margin: 22px auto 0;
      li {
        float: left;
        line-height: 44px;
        width: 19%;
        margin-right: 1%;
        border-radius: 15px;
        font-family: LTH;
        text-align: center;
        font-size: 18px;
        color: #fff;
        &:hover {
          background-color: #6714ba;
        }
        a {
          color: #fff;
        }
      }
      .active {
        // background-color: #6714ba;
      }
    }
  }
  .nav.fixed {
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 0;
  }
  .introduction {
    .center {
      width: 1207px;
      margin: 30px auto 121px;
      h3 {
        text-align: center;
        font-size: 40px;
        color: #000;
        /* font-family: LTCH; */
        margin-bottom: 90px;
      }
      .intCon {
        clear: none;
        .fl {
          width: 411px;
          float: left;
          h6 {
            font-size: 30px;
            color: #000;
            font-family: REGULAR;
            font-weight: 100;
            margin: 38px 0;
            font-weight: 600;
          }
          p {
            font-size: 18px;
            line-height: 36px;
            color: #171717;
            font-family: LTH;
          }
          .ctLine {
            width: 54px;
            height: 7px;
            background-color: #5b0eb2;
            margin-top: 39px;
          }
        }
        .fr {
          width: 760px;
          float: right;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .functi {
    .top {
      width: 1207px;
      margin: 0 auto;
      h3 {
        font-size: 30px;
        line-height: 38px;
        font-family: FZLTZHK;
        span {
          display: block;
        }
      }
      .ctLine {
        width: 124px;
        height: 2px;
        background-color: #5b0eb2;
        margin: 32px 0 35px;
      }
    }
    .bot {
      background: url("./../../../public/images/indFunction.png") no-repeat
        center;
      .tabs {
        width: 1207px;
        margin: 0 auto;
        padding: 2% 0;
        .clear {
          @include flex();
          > div {
            width: 25%;
            @include flex();
            flex-direction: column;
            img {
              opacity: 0.6;
              transition: 0.3s all ease-out;
            }
            p {
              font-size: 21px;
              color: #d5b0ff;
              font-family: FZLTZHK;
              text-align: center;
              margin: 36px auto 76px;
              transition: 0.3s all ease-out;
            }
          }
          .active {
            p {
              color: #ffffff;
            }
            img {
              opacity: 1;
            }
          }
        }
        .cont {
          overflow: hidden;
          clear: none;
          .fl {
            color: #ffffff;
            font-size: 26px;
            float: left;
          }
          .le {
            margin-top: 3%;
          }
          .word {
            width: 70%;
            font-size: 18px;
            line-height: 35px;
            color: #ffffff;
            font-family: LTH;
            margin-left: 64px;
          }
        }
      }
    }
  }
  .acqTop {
    width: 1207px;
    margin: 112px auto 0;
    h3 {
      font-size: 30px;
      line-height: 40px;
      color: #000000;
      font-family: FZLTZHK;
      font-weight: 600;
      span {
        display: block;
      }
    }
    .ctLine {
      width: 124px;
      height: 2px;
      background-color: #5b0eb2;
      margin: 32px 0 35px;
    }
  }
  .tabs {
    width: 1207px;
    margin: 0 auto;
    clear: none;
    .navList {
      overflow: hidden;
      float: left;
      > div {
        clear: none;
        .num {
          width: 64px;
          height: 64px;
          line-height: 64px;
          border: 1px solid #5b0eb2;
          border-radius: 50%;
          font-size: 30px;
          background-color: #fff;
          color: #5b0eb2;
          margin-left: 12px;
          text-align: center;
          font-family: SEMIBOLD;
          float: left;
        }
        dl {
          margin: 0 0 38px 105px;
          dt {
            font-size: 22px;
            line-height: 44px;
            font-family: FZLTZHK;
            margin-bottom: 24px;
            font-weight: 600;
          }
          dd {
            line-height: 35px;
            color: #121212;
            font-size: 18px;
            font-family: LTH;
            transition: 0.3s all ease;
          }
        }
      }
      > div:not(.active) {
        dd {
          display: none;
          opacity: 0;
        }
      }
    }
    .fr {
      float: right;

      overflow: hidden;
      &:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .cont {
        overflow: hidden;
        clear: none;
      }
    }
  }
  .web {
    .webTop {
      width: 1207px;
      margin: 166px auto 0;
      h3 {
        font-size: 39px;
        color: #000000;
        text-align: center;
        font-family: LTCH;
        margin-bottom: 68px;
        font-weight: 600;
      }
      .con {
        font-size: 18px;
        color: #171717;
        line-height: 36px;
        font-family: LTH;
      }
      .btn {
        width: 536px;
        height: 62px;
        line-height: 62px;
        background-color: #550da5;
        margin: 60px auto 80px;
        border-radius: 5px;
        box-shadow: 0px 16px 18px -16px #5e5e5e;
        clear: none;
        a {
          img {
            margin: 2% 0 0 119px;
            float: left;
          }
          p {
            margin-left: 30px;
            font-size: 24px;
            color: #ffffff;
            font-family: MONBOLD;
          }
        }
        &:after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
      }
      h6 {
        font-size: 30px;
        line-height: 40px;
        color: #000000;
        font-family: FZLTZHK;
        font-weight: 100;
        font-weight: 600;
        span {
          display: block;
        }
      }
      .ctLine {
        width: 124px;
        height: 2px;
        background-color: #5b0eb2;
        margin: 32px 0 0;
      }
    }
    .webBot {
      width: 100%;
      height: 765px;
      background: url("./../../../public/images/indHtmlBG.png") no-repeat center;
      background-size: 100%;
      .con {
        width: 90%;
        margin: 0 auto;
        padding: 6% 0 11%;
        .fl {
          width: 40%;
          margin: 59px 0 0 10%;
          float: left;
          @include clearfix();
          > div {
            font-size: 22px;
            color: #000000;
            font-family: FZLTZHK;
            width: 89px;
            line-height: 34px;
            text-align: center;
            border: 1px solid #5b0eb2;
            border-radius: 10px;
            margin-bottom: 26px;
          }
          p {
            font-size: 18px;
            line-height: 36px;
            color: #000;
          }
          p:nth-child(n + 8) {
            color: #fff;
          }
        }
        .fr {
          width: 36%;
          margin: -6% -3% 0 0;
          @include clearfix();
          float: right;
          > div {
            font-size: 22px;
            color: #000000;
            font-family: FZLTZHK;
            width: 89px;
            line-height: 34px;
            text-align: center;
            border: 1px solid #5b0eb2;
            border-radius: 10px;
            margin-bottom: 26px;
          }
          p {
            font-size: 18px;
            line-height: 36px;
            color: #000;
          }
        }
      }
    }
  }
  .ctPc {
    .center {
      width: 1207px;
      margin: 135px auto 230px;
      h3 {
        font-size: 39px;
        color: #000000;
        text-align: center;
        font-family: LTCH;
        margin-bottom: 68px;
        font-weight: 600;
      }
      .pcCon {
        @include clearfix();
        .fl {
          width: 50%;
          margin-top: 57px;
          float: left;
          > p {
            font-size: 18px;
            font-family: LTH;
            line-height: 35px;
            color: #171717;
          }
          .btn {
            @include clearfix();
            width: 536px;
            height: 62px;
            background-color: #550da5;
            margin: 60px 0 80px;
            border-radius: 5px;
            box-shadow: 0px 16px 18px -16px #5e5e5e;
            a {
              img {
                margin: 3% 20px 0 98px;
                float: left;
              }
              p {
                margin-left: 30px;
                font-size: 24px;
                line-height: 62px;
                color: #ffffff;
                font-family: MONBOLD;
              }
            }
          }
        }
        .fr {
          width: 50%;
          float: right;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .ios {
    .center {
      width: 1207px;
      margin: 0 auto;
      .fl {
        width: 40%;
        float: left;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .fr {
        width: 50%;
        float: right;
        h3 {
          font-family: SEMIBOLD;
          margin-bottom: 31px;
          font-size: 39px;
          color: #000000;
          text-align: center;
        }
        p {
          font-size: 18px;
          line-height: 35px;
          color: #171717;
          font-family: LTH;
        }
      }
      .btn {
        width: 95%;
        background-color: #2b2b2d;
        margin-top: 45px;
        box-shadow: 3px 3px 3px #dbdbdb, 3px -3px 3px #dbdbdb,
          -3px 3px 3px #dbdbdb, -3px -3px 3px #dbdbdb;
        @include clearfix();
        @include flex();
        height: 100%;
        .leWord {
          width: 66%;
          margin: 3% 0 0 3%;
          float: left;
          img {
            width: 10%;
            vertical-align: middle;
          }
          p {
            font-size: 14px;
            color: #b5b5b5;
            font-family: LTH;
            margin-bottom: 25px;
            span {
              margin-left: 10px;
            }
          }
          h6 {
            font-size: 28px;
            color: #ffffff;
            font-family: FZLTZHK;
            line-height: 38px;
            margin: 20px 0;
            span {
              display: block;
              font-family: MONBOLD;
            }
          }
        }
        .ewm {
          width: 25%;
          img {
            width: 100%;
            margin: 32% 0;
          }
        }
      }
    }
  }
  .android {
    .center {
      width: 1207px;
      margin: 278px auto 152px;
      @include clearfix();
      > .fl {
        width: 60%;
        float: left;
        h3 {
          font-size: 39px;
          color: #000000;
          text-align: center;
          font-family: LTCH;
          margin-bottom: 68px;
        }
        p {
          font-size: 18px;
          line-height: 35px;
          color: #171717;
          font-family: LTH;
        }
        .btn {
          width: 68%;
          background-color: #89c931;
          margin-top: 45px;
          box-shadow: 3px 3px 3px #dbdbdb, 3px -3px 3px #dbdbdb,
            -3px 3px 3px #dbdbdb, -3px -3px 3px #dbdbdb;
          @include clearfix();
          @include flex();
          height: 100%;
          .leWord {
            width: 66%;
            margin: 3% 0 0 3%;
            float: left;
            h6 {
              font-size: 28px;
              color: #ffffff;
              font-family: FZLTZHK;
              line-height: 38px;
              margin: 20px 0;
              span {
                display: block;
              }
            }
          }
          .ewm {
            width: 25%;
            margin-left: 3%;
            float: left;
            img {
              width: 100%;
              margin: 43% 0;
              vertical-align: middle;
            }
          }
        }
      }
      > fr {
        width: 35%;
        float: right;
        img {
          vertical-align: middle;
        }
      }
    }
  }
  .trading {
    margin-top: 100px;
    position: relative;
    .center {
      width: 1207px;
      margin: 0 auto 226px;
      h6 {
        font-size: 30px;
        line-height: 40px;
        color: #000000;
        font-family: FZLTZHK;
        font-weight: 100;
        font-weight: 600;
        span {
          display: block;
        }
      }
      .ctLine {
        width: 124px;
        height: 2px;
        background-color: #5b0eb2;
        margin: 32px 0 100px;
        font-size: 16px;
        box-sizing: border-box;
      }
      ul {
        @include clearfix();
        @include flex();
        align-items: unset;
        li.oneLi {
          background: url("./../../assets/indTrading1.jpg") no-repeat bottom
            right #641cb6;
        }
        li.twoLi {
          background: url("./../../assets/indTrading2.jpg") no-repeat bottom
            right #641cb6;
        }
        li.threeLi {
          background: url("./../../assets/indTrading3.jpg") no-repeat bottom
            right #641cb6;
        }
        li {
          width: 30%;
          margin: 0 1%;
          list-style: none;
          transition: .5s all ease-out;
          .tit {
            font-size: 28px;
            color: #ffffff;
            font-family: FZLTZHK;
            margin: 22px 0 0 28px;
            text-align: center;
          }
          .ctLine {
            width: 52px;
            height: 1px;
            background-color: #fff;
            margin: 8px 0 20px 28px;
            font-size: 16px;
            box-sizing: border-box;
          }
          span {
            display: block;
            font-size: 16px;
            line-height: 25px;
            color: #d5b0ff;
            font-family: LTH;
            margin-left: 28px;
            transition: .5s all ease-out;
          }
          span:last-child {
            padding-bottom: 21px;
          }
          &:hover {
            transform: translateY(-10px);
            span {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>