<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 10:34:46
 * @Description:  cpt
 -->
<template>
  <div class="cpt">
    <div class="big-img">
      <div class="center">
        <h6>CPT cTrader</h6>
        <p>
          <a href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe">{{$t('cTrader.downctrader')}}</a>
        </p>
      </div>
    </div>
    <div class="nav" :class="{fixed: posStatic}">
      <ul class="clear">
        <li :class="{active: active == 0}" @click="active=0">
          <a href="javascript:void(0)" @click="scrollTo('introduction')">{{$t('cTrader.introduction')}}</a>
        </li>
        <li :class="{active: active == 1}" @click="active=1">
          <a href="javascript:void(0)" @click="scrollTo('web')">{{$t('cTrader.web')}}</a>
        </li>
        <li :class="{active: active == 2}" @click="active=2">
          <a href="javascript:void(0)" @click="scrollTo('ctPc')">{{$t('cTrader.ctPc')}}</a>
        </li>
        <li :class="{active: active == 3}" @click="active=3">
          <a href="javascript:void(0)" @click="scrollTo('ios')">CPT cTrader IOS</a>
        </li>
        <li :class="{active: active == 4}" @click="active=4">
          <a href="javascript:void(0)d" @click="scrollTo('android')">CPT cTrader Android</a>
        </li>
      </ul>
    </div>
    <div class="replace" v-show="posStatic"></div>
    <div class="introduction">
      <div class="center">
        <h3>{{$t('cTrader.introduction')}}</h3>
        <div class="intCon">
          <div class="fl">
            <h6>CPT cTrader</h6>
            <p>{{$t('cTrader.base')}}</p>
            <p>{{$t('cTrader.depth')}}</p>
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
          <span>CPT cTrader</span>{{$t('cTrader.main')}}
        </h3>
        <p class="ctLine"></p>
      </div>
      <div class="bot">
        <div class="tabs">
          <nav class="clear">
            <div data-con="local" :class="{active: funActive == 0}" @click="funActive = 0">
              <img src="@/assets/indFunction1.png" />
              <p>{{$t('cTrader.fastOrder')}}</p>
            </div>
            <div data-con="global" :class="{active: funActive == 1}" @click="funActive = 1">
              <img src="@/assets/indFunction2.png" />
              <p>{{$t('cTrader.secondary')}}</p>
            </div>
            <div data-con="sports" :class="{active: funActive == 2}" @click="funActive = 2">
              <img src="@/assets/indFunction3.png" />
              <p>{{$t('cTrader.stable')}}</p>
            </div>
            <div data-con="funny" :class="{active: funActive == 3}" @click="funActive = 3">
              <img src="@/assets/indFunction4.png" />
              <p>{{$t('cTrader.chart')}}</p>
            </div>
          </nav>
          <div class="cont clear" v-show="funActive == 0">
            <p class="fl le">&gt;</p>
            <p class="word fl">
              {{$t('cTrader.troublesome')}}</p>
          </div>
          <div class="cont clear" v-show="funActive == 1">
            <p class="fl le">&gt;</p>
            <p class="word fl">
              {{$t('cTrader.unique')}}</p>
          </div>
          <div class="cont clear" v-show="funActive == 2">
            <p class="fl le">&gt;</p>
            <p class="word fl">
              {{$t('cTrader.multiple')}}</p>
          </div>
          <div class="cont clear" v-show="funActive == 3">
            <p class="fl le">&gt;</p>
            <p class="word fl">
              {{$t('cTrader.timeframes')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="acqTop">
      <h3>
        <span>{{$t('cTrader.caccount')}}</span><span>{{$t('cTrader.get')}}</span>
      </h3>
      <p class="ctLine"></p>
    </div>
    <div class="tabs">
      <div class="navList">
        <div class="oneDiv" :class="{active: getActive == 0}" @click="getActive=0">
          <div class="num">01</div>
          <dl>
            <dt>{{$t('cTrader.simplify')}}</dt>
            <dd>{{$t('cTrader.easy')}}</dd>
            <dd>{{$t('cTrader.compatible')}}</dd>
            <dd>{{$t('cTrader.ability')}}</dd>
            <dd>{{$t('cTrader.second')}}</dd>
            <dd>{{$t('cTrader.volume')}}</dd>
          </dl>
        </div>
        <div data-con="two" class="twoDiv" :class="{active: getActive == 1}" @click="getActive=1">
          <div class="num fl">02</div>
          <dl>
            <dt>{{$t('cTrader.analysis')}}</dt>
            <dd>{{$t('cTrader.allsize')}}</dd>
            <dd>{{$t('cTrader.advanced')}}</dd>
            <dd>{{$t('cTrader.visual')}}</dd>
            <dd>{{$t('cTrader.screenshots')}}</dd>
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
            <dt>{{$t('cTrader.portable')}}</dt>
            <dd>{{$t('cTrader.reverse')}}</dd>
            <dd>{{$t('cTrader.double')}}</dd>
            <dd>{{$t('cTrader.close')}}</dd>
          </dl>
        </div>
        <div data-con="four" class="fourDiv" :class="{active: getActive == 3}" @click="getActive=3">
          <div class="num fl">04</div>
          <dl>
            <dt>{{$t('cTrader.customer')}}</dt>
            <dd>{{$t('cTrader.many')}}</dd>
            <dd>{{$t('cTrader.autoUpdate')}}</dd>
            <dd>{{$t('cTrader.demo')}}</dd>
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
        <h3>{{$t('cTrader.webVersion')}}</h3>
        <p class="con">
          {{$t('cTrader.offers')}}</p>
        <div class="btn clear">
          <a href="https://ct.cptmarkets.com">
            <img src="images/XZ1.png" class="fl" :class="enBool == false ? 'enImg':''" />
            <p class="fl">{{$t('cTrader.webpage')}}</p>
          </a>
        </div>
        <h6>
          <span>{{$t('cTrader.anytime')}}</span>{{$t('cTrader.access')}}
        </h6>
        <p class="ctLine"></p>
      </div>
      <div class="webBot">
        <div class="con clear">
          <div class="fl">
            <div :class="enBool == false ? 'enWidth':''">{{$t('cTrader.Features')}}</div>
            <p class="black">{{$t('cTrader.anywhere')}}</p>
            <p class="black">{{$t('cTrader.usefull')}}</p>
            <p class="black">{{$t('cTrader.restriction')}}</p>
            <p class="black">{{$t('cTrader.minimum')}}</p>
            <p class="black">{{$t('cTrader.pricing')}}</p>
            <p>{{$t('cTrader.click')}}</p>
            <p>{{$t('cTrader.orderType')}}</p>
            <p>{{$t('cTrader.report')}}</p>
            <p>{{$t('cTrader.analysis')}}</p>
          </div>
          <div class="fr">
            <div :class="enBool == false ? 'enWidth':''">{{$t('cTrader.good')}}</div>
            <p>{{$t('cTrader.interfere')}}</p>
            <p>{{$t('cTrader.save')}}</p>
            <p>{{$t('cTrader.enjoy')}}</p>
            <p>{{$t('cTrader.through')}}</p>
            <p>{{$t('cTrader.transfer')}}</p>
            <p>{{$t('cTrader.borwers')}}</p>
            <p>{{$t('cTrader.allVersion')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ctPc">
      <div class="center">
        <h3>{{$t('cTrader.pcVersion')}}</h3>
        <div class="pcCon">
          <div class="fl">
            <p>{{$t('cTrader.suitable')}}</p>
            <div class="btn clear">
              <a href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe">
                <img :class="enBool == false ?'enImg':''" src="images/XZ.png" />
                <p>{{$t('cTrader.dowpcVison')}}</p>
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
          <p>{{$t('cTrader.apple')}}</p>
          <p>{{$t('cTrader.boot')}}</p>
          <div class="btn clear">
            <div class="leWord">
              <img src="images/IOS.png" />
              <h6>
                {{$t('cTrader.downios')}}
                <span>CPT cTrader iphone/ipad</span>
              </h6>
              <p>
                {{$t('cTrader.scanios')}}
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
          <p>{{$t('cTrader.android')}}</p>
          <p>{{$t('cTrader.interface')}}</p>
          <div class="btn clear">
            <div class="fl leWord">
              <img src="@/assets/andIcon.png" />
              <h6>
                {{$t('cTrader.downios')}}
                <span>CPT cTrader Android</span>
              </h6>
              <p>
                {{$t('cTrader.scanios')}}
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
          <span>{{$t('cTrader.useYour')}}</span>{{$t('cTrader.tradeFo')}}
        </h6>
        <p class="ctLine"></p>
        <ul class="clear">
          <li class="oneLi">
            <p class="tit">{{$t('cTrader.trade')}}</p>
            <p class="ctLine"></p>
            <span>{{$t('cTrader.foreign')}}</span>
            <span>{{$t('cTrader.execution')}}</span>
            <span>{{$t('cTrader.balence')}}</span>
            <span>{{$t('cTrader.list')}}</span>
            <span>{{$t('cTrader.available')}}</span>
          </li>
          <li class="twoLi">
            <p class="tit">{{$t('cTrader.account')}}</p>
            <p class="ctLine"></p>
            <span>{{$t('cTrader.switch')}}</span>
            <span>{{$t('cTrader.history')}}</span>
            <span>{{$t('cTrader.pending')}}</span>
          </li>
          <li class="threeLi">
            <p class="tit">{{$t('cTrader.ipad')}}</p>
            <p class="ctLine"></p>
            <span>{{$t('cTrader.screen')}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      posStatic: true,
      funActive: 0,
      getActive: 0,
      enBool:false,
    };
  },
  mounted(){  
    if( this.$i18n.locale == 'en' ){
      this.enBool = false;
    }else{
      this.enBool = true;
    }
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
<style lang="scss">
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
      // .active {
      //   // background-color: #6714ba;
      // }
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
            margin: 2% 20px 0 119px;
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
      > .fr {
        width: 35%;
        float: right;
        img {
          width: 100%;
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
.enImg{
  margin:2% 0px 0 50px !important;
}
.enImg{
  margin:3% 20px 0 31px !important;
}
.enWidth{
  width: 155px !important;
}
</style>