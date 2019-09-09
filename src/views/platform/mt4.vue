<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 16:33:03
 * @Description: mt4
 -->



<template>
  <div class="mt4">
    <div class="bar">
      <img class="title" src="@/assets/MT4tit.png" alt />
      <p class="tip" style="opacity: 1;">为您竖起价值的船帆，乘风起航</p>
    </div>
    <div class="trading">
      <div class="clearfix">
        <div class="headertitle">MT4介绍</div>
      </div>
      <div
        class="tipstit"
      >MT4是当今全球最为成熟，外汇领域应用最为广泛的在线交易平台。帮助投资者即时查看外汇行情，进行模拟和真实交易；PC端、移动端的完美结合，为交易者提供了灵活的交易接口，身处何地都可以高效进行操作；全面、可靠的图表、数据分析功能，及时收集全球时事新闻，提供多语言的客户交易体验，5*24小时专业的客户服务；在线实时监控和管理，无论客户经验丰富与否，都能够通过MT4平台获得快速、高效的交易信息，在便捷的操作中迅速积累财富，创造更长远的价值。</div>

      <div class="clearfix">
        <div class="headertitle">美分账户</div>
      </div>
      <div
        class="tipstit"
        style="text-align: center;"
      >CPT Markets美分账户，交易门槛低、投资成本少，智能操作简单便捷，能够满足不同经验客户的交易需求，助您掌控无限未来！</div>

      <div class="meifenacco">
        <img src="@/assets/centAcc.png" />
        <div class="searchserv">
          <p>点击查看美分账户MT4软件搜索服务器教程</p>
          <a href="/Public/addheader/pdf/MT4/MT4PC.pdf" download="MT4客户端搜索服务器">
            <p>MT4 客户端搜索服务器</p>
          </a>
          <a href="/Public/addheader/pdf/MT4/MT4 IOS.pdf" download="MT4IOS手机端搜索服务器">
            <p>MT4 IOS手机端搜索服务器</p>
          </a>
          <a href="/Public/addheader/pdf/MT4/MT4 android.pdf" download="MT4安卓手机端搜索服务器">
            <p>MT4 安卓手机端搜索服务器</p>
          </a>
        </div>
      </div>

      <a
        href="https://download.mql5.com/cdn/web/10957/mt4/cptmarkets4setup.exe"
        download="cptmarkets"
      >
        <div class="downbtn">
          <img src="@/assets/MT4_07.png" alt />
          <span>下载MetaTrader 4（PC）</span>
        </div>
      </a>
      <p>大片动画</p>
    </div>
    <div class="downloadtit">下载MetaTrader 4</div>
    <div class="downtip" style="opacity: 1;">最受欢迎的外汇交易平台</div>
    <div class="macdown">
      <img class="leftimg" src="images/MT4mac_07.png" alt />
      <div class="downinfo">
        <p class="infotite">MetaTrader 4 iPhone/iPad</p>
        <p class="infoart">数以百万的交易者已经选择MetaTrader 4 iPad/iPhone，随时随地进行金融市场的工作。</p>
        <p class="infoart">
          下载MT4 MacOS版本，
          <a
            href="/Public/addheader/pdf/MT4/Install Terminal on Mac OS_zh.pdf"
            download="MT4 MacOS"
          >
            <span style="text-decoration: underline;color: #206097;">点击此处</span>
          </a>。
        </p>
        <a
          href="https://itunes.apple.com/us/app/metatrader-4/id496212596?utm_source=www.metatrader4.com&amp;utm_campaign=download"
          download="cptmarkets"
        >
          <div class="garybtn">
            <img class="downimg" src="@/assets/MT4_14.png" alt />
            <div class="downfont">
              <p class="big">下载 MetaTrader 4 iPhone/iPad</p>
              <p class="se">一周5天全天候24小时进行交易</p>
            </div>
            <div class="downloqr">
              <img src="@/assets/apple.jpg" />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="androiddown">
      <img src="images/MT4_18.png" class="bg" alt="">
      <div class="warp">
        <div class="downinfo">
          <p class="infotite">MetaTrader 4 Android</p>
          <p class="infoart">现在有大量的Android系统的智能手机和平板电脑，可以使用其中任何一部通过MetaTrader 4进行外汇交易</p>
          <a
            href="https://download.mql5.com/cdn/mobile/mt4/android?utm_source=www.metatrader4.com&amp;utm_campaign=download"
            download="cptmarkets"
          >
            <div class="garybtn">
              <img class="downimg" src="@/assets/MT4_21.png" alt />
              <div class="downfont clearfix">
                <p class="big">下载 MetaTrader 4 Android</p>
                <p class="se">在世界各地进行交易</p>
              </div>
              <div class="downloqr" style="background-image: block !important;">
                <img src="@/assets/android.jpg" />
              </div>
            </div>
            <p style="margin-top:10px;margin-left:10px;">
              <span style="color:#5b0eb2">提示</span>：请使用浏览器扫描二维码，下载MT4
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="que">
      <div class="tit">MT4常见问题</div>
      <div
        class="art"
      >通过以上关于MT4的介绍，想必您已经对MT4平台有了一定的了解，想要迫不及待的自己尝试一番，或许您在具体的操作中会遇到一些小问题，请您无需担心，试试看从以下的Q&amp;A中找到解决的答案吧。</div>
    </div>
    <div class="anq">
      <dl>
        <dt @click="expandClick(0)">如何查看CPT Markets提供的所有交易品种？</dt>
        <transition name="fade">
          <dd v-show="expand[0]">
            <div class="line"></div>
            <p>在“市场报价”窗口中， 右击并选择“显示全部”， 便能查看可以进行交易的所有产品品种。具体的交易代码及所对应的产品名称，请咨询客服。</p>
          </dd>
        </transition>

        <dt @click="expandClick(1)">已经下载了MT4平台。如何登录真实账户进行交易呢？</dt>
        <transition name="fade">
          <dd v-show="expand[1]">
            <div class="line"></div>
            <p>您需使用平台给您提供的真实MT4账号和密码登录 MT4 交易平台，选择服务器，登录真实账户进行交易。</p>
          </dd>
        </transition>
        <dt @click="expandClick(2)">如何更改MT4的交易密码？</dt>
        <transition name="fade">
          <dd v-show="expand[2]">
            <div class="line"></div>
            <p>如需更改 MT4 的真实账户交易密码，请登录CPT Markets网站客户中心进行密码修改。</p>
          </dd>
        </transition>
        <dt @click="expandClick(3)">如何在MT4平台上插入趋势线？</dt>
        <transition name="fade">
          <dd v-show="expand[3]">
            <div class="line"></div>
            <p>
              请参照以下步骤:
              1. 在顶端菜单栏上，选择“插入”。
              2. 选择想要的趋势线。
              3. 释放鼠标按钮后，将出现带有十字准线的选中趋势线的图像图标。使用鼠标把十字准线放在选中的图表上。点击鼠标，按住不放进行移动鼠标来调整趋势线的大小。
              线研究的快捷方式可通过点击“浏览”&gt; “工具栏” &gt; “线研究”快速访问，让图标刚好在菜单栏下显现。 您也可以选择出现在屏幕顶端的其他选项，包括点击趋势线、十字准线、斐波纳契回调线等。
            </p>
          </dd>
        </transition>
        <dt @click="expandClick(4)">MT4有用户指南吗？怎样在MT4上选择使用语言？</dt>
        <transition name="fade">
          <dd v-show="expand[4]">
            <div class="line"></div>
            <p>
              MT4有用户指南，需在平台上选择“帮助” &gt; “帮助主题”
              例如中文
              在顶端菜单栏上， 选择 view —&gt; languages —&gt; Chinese(simplified)，然后重启MT4软件，显示语言便是中文界面了
            </p>
          </dd>
        </transition>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expand: [true, false, false, false, false]
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    expandClick(index) {
      // this.expand = [false, false, false, false, false];
      this.expand.splice(index, 1, !this.expand[index]);
    }
  },
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.fade-enter-active {
  transition: all .5s ease-out;
}
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter, .fade-leave-to {
  transform: translateY(10px);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  height: 0;
}
.mt4 {
  width: 100%;
  .bar {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    .title {
      display: block;
      margin: 100px auto;
      margin-bottom: 30px;
      @include animation(bounceInUps);
    }
    .tip {
      display: block;
      margin: 0px auto;
      font-size: 24px;
      text-align: center;
      opacity: 0;
      @include animation(fade-left, 1s, 200ms);
    }
  }
  .trading {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 20px;
    position: relative;
    .clearfix {
      @include clearfix();
      .headertitle {
        width: 100%;
        text-align: center;
        font-size: 40px;
        color: #000000;
        font-family: montserratse;
        float: left;
        @include clearfix();
      }
    }
    .tipstit {
      font-size: 18px;
      text-align: left;
      line-height: 30px;
      margin-bottom: 60px;
      @include clearfix();
    }
    .meifenacco {
      font-size: 12px;
      line-height: 29px;
      margin: 0 auto 40px;
      width: 500px;
      @include clearfix();
      img {
        float: left;
        width: 114px;
      }
      .searchserv {
        float: left;
        margin-left: 60px;
        p {
          font-size: 16px;
          box-sizing: border-box;
        }
        a {
          p {
            color: #206097;
            text-decoration: underline;
            font-size: 16px;
          }
        }
      }
    }
    > a {
      .downbtn {
        width: 450px;
        height: 60px;
        border-radius: 5px;
        margin: 0 auto;
        background: #5b0eb2;
        margin-bottom: 100px;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        img {
          margin-top: 0px;
          vertical-align: middle;
        }
        span {
          margin-left: 10px;
          font-size: 18px;
          line-height: 60px;
          color: #fff;
        }
      }
    }
  }
  .downloadtit {
    font-family: montserratse;
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
    margin-bottom: 40px;
  }
  .downtip {
    display: block;
    margin: 0px auto;
    font-size: 18px;
    text-align: center;
    @include animation(fade-left);
  }
  .macdown {
    width: 100%;
    height: 570px;
    position: relative;
    .leftimg {
      float: left;
      width: 557px;
      margin-left: 5%;
      height: 600px;
      background: #f8f7f7;
      position: relative;
      overflow: hidden;
      vertical-align: middle;
    }
    .downinfo {
      float: left;
      margin-left: 5%;
      .infotite {
        margin-top: 200px;
        font-size: 24px;
      }
      .infoart {
        margin-top: 30px;
        font-size: 18px;
        width: auto;
        line-height: 40px;
        box-sizing: border-box;
      }
      > a {
        .garybtn {
          width: 400px;
          height: auto;
          background: #000;
          border-radius: 5px;
          margin-top: 50px;
          box-sizing: border-box;
          text-align: center;
          padding-bottom: 20px;
          margin-bottom: 70px;
          img {
            margin-top: 10px;
            width: 30px;
            text-align: center;
          }
          .downfont {
            text-align: center;
            .big {
              font-family: montserratse;
              font-size: 20px;
              line-height: 20px;
              color: #fff;
              margin-top: 10px;
            }
            .se {
              font-family: montserrat;
              font-size: 14px;
              line-height: 30px;
              color: #fff;
            }
          }
          .downloqr {
            margin-top: 10px;
            img {
              width: 130px;
            }
          }
        }
      }
    }
  }
  .androiddown {
    width: 100%;
    height: auto;
    position: relative;
    // margin-top: -100px;
    background-image: url("./../../../public/images/MT4_18.png");
    background-repeat: no-repeat;
    background-position: right center;
    overflow: hidden;
    top: -100px;
    .bg {
      display: none;
      height: auto;
      width: 90%;
      margin-left: 5%;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .warp {
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
      @include clearfix();
      .downinfo {
        .infotite {
          margin-top: 180px;
          font-size: 24px;
        }
        .infoart {
          margin-top: 30px;
          font-size: 18px;
          line-height: 40px;
        }
        > a {
          .garybtn {
            width: 400px;
            background: #d4dced;
            border-radius: 5px;
            margin-top: 50px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            box-shadow: #999 0px 1px 1px;
            text-align: center;
            padding-bottom: 20px;
            .downimg {
              margin-top: 10px;
              width: 30px;
            }
            .downfont {
              .big {
                font-family: montserratse;
                font-size: 20px;
                line-height: 30px;
                color: #585f6b;
                margin-top: 10px;
              }
              .se {
                font-family: montserrat;
                font-size: 14px;
                line-height: 20px;
                color: #585f6b;
              }
            }
            .downloqr {
              margin-top: 10px;
              img {
                width: 130px;
              }
            }
          }
          > p {
            margin-top: 10px;
            margin-left: 10px;
            font-size: 16px;
            color: #000;
            span {
              color: #5b0eb2;
            }
          }
        }
      }
    }
  }
  .que {
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
      margin-top: 50px;
    }
  }
  .anq {
    width: 1200px;
    font: 14px/21px "Open Sans", Arial, sans-serif;
    color: #666;
    background-color: white;
    padding: 20px;
    margin: 40px auto;
    border-radius: 5px;
    margin-bottom: 60px;
    dt {
      font-size: 19px;
      color: #953399;
      margin-bottom: 20px;
      margin-left: 26px;
      cursor: pointer;
      &:before {
        content: "";
        border-color: transparent #ccc;
        border-style: solid;
        border-width: 5px 0 5px 8px;
        display: block;
        height: 0;
        width: 0;
        left: -16px;
        top: 17px;
        position: relative;
      }
    }
    dd {
      padding: 20px;
      background: #fdfcfa;
      border-radius: 5px;
      border: 1px solid #f2eee6;
      margin: 20px 0 30px;
      position: relative;
      &:before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        padding: 0;
        margin-top: -54px;
        border-bottom: 17px solid #fdfcfa;
        border-top: 17px solid transparent;
        border-left: 17px solid transparent;
        border-right: 17px solid transparent;
        display: block;
        content: "";
        z-index: 12;
      }
      .line {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        &:before{
          box-sizing: content-box;
          width: 0px;
          height: 0px;
          position: absolute;
          padding:0;
          margin-left: 19px;
          margin-top: -37px;
          border-bottom:18px solid  #f2eee6;
          border-top:18px solid transparent;
          border-left:18px solid transparent;
          border-right:18px solid transparent;
          display: block;
          content:'';
          z-index:11;
        }
      }
    }
  }
}
</style>