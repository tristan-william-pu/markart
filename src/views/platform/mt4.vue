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
      <p class="tip" style="opacity: 1;">{{$t('MT4.value')}}</p>
    </div>
    <div class="trading">
      <div class="clearfix">
        <div class="headertitle">{{$t('MT4.introduction')}}</div>
      </div>
      <div
        class="tipstit"
      >{{$t('MT4.mature')}}</div>

      <div class="clearfix">
        <div class="headertitle">{{$t('MT4.cent')}}</div>
      </div>
      <div
        class="tipstit">{{$t('MT4.low')}}</div>

      <div class="meifenacco">
        <div class="img">
        <img src="@/assets/centAcc.png" />
        </div>
        <div class="searchserv">
          <p>{{$t('MT4.check')}}</p>
          <a href="/pdf/MT4/MT4PC.pdf" download="MT4客户端搜索服务器">
            <p>{{$t('MT4.search')}}</p>
          </a>
          <a href="/pdf/MT4/MT4 IOS.pdf" download="MT4IOS手机端搜索服务器">
            <p>{{$t('MT4.searchios')}}</p>
          </a>
          <a href="/pdf/MT4/MT4 android.pdf" download="MT4安卓手机端搜索服务器">
            <p>{{$t('MT4.searchAndroid')}}</p>
          </a>
        </div>
      </div>

      <a
        href="https://download.mql5.com/cdn/web/10957/mt4/cptmarkets4setup.exe"
        download="cptmarkets"
      >
        <div class="downbtn">
          <img src="@/assets/MT4_07.png" alt />
          <span>{{$t('MT4.downloadPC')}}</span>
        </div>
      </a>
      <div class="imgboxs clearfix" style="">
        <img class="pcpng clearfix" src="images/pc.png" alt="">
        <div class="pc floating">
          <clound style="margin-top:300px;"/> 
        </div>
        
      </div>
      
    </div>
    <div class="downloadtit">{{$t('MT4.download')}}</div>
    <div class="downtip" style="opacity: 1;">{{$t('MT4.popular')}}</div>
    <div class="macdown">
      <img class="leftimg" src="images/MT4mac_07.png" alt />
      <div class="downinfo">
        <p class="infotite">MetaTrader 4 iPhone/iPad</p>
        <p class="infoart">{{$t('MT4.Millions')}}</p>
        <p class="infoart">
          {{$t('MT4.downloadios')}}
          <a
            href="/pdf/MT4/Install Terminal on Mac OS_zh.pdf"
            download="MT4 MacOS"
          >
            <span style="text-decoration: underline;color: #206097;">{{$t('MT4.clickhere')}}</span>
          </a>。
        </p>
        <a
          href="https://itunes.apple.com/us/app/metatrader-4/id496212596?utm_source=www.metatrader4.com&amp;utm_campaign=download"
          download="cptmarkets"
        >
          <div class="garybtn">
            <img class="downimg" src="@/assets/MT4_14.png" alt />
            <div class="downfont">
              <p class="big">{{$t('MT4.downloadipad')}}</p>
              <p class="se">{{$t('MT4.allday')}}</p>
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
          <p class="infoart">{{$t('MT4.computer')}}</p>
          <a
            href="https://download.mql5.com/cdn/mobile/mt4/android?utm_source=www.metatrader4.com&amp;utm_campaign=download"
            download="cptmarkets"
          >
            <div class="garybtn">
              <img class="downimg" src="@/assets/MT4_21.png" alt />
              <div class="downfont clearfix">
                <p class="big">{{$t('MT4.downloadand')}}</p>
                <p class="se">{{$t('MT4.world')}}</p>
              </div>
              <div class="downloqr" style="background-image: block !important;">
                <img src="@/assets/android.jpg" />
              </div>
            </div>
            <p style="margin-top:10px;margin-left:10px;">
              <span style="color:#5b0eb2">{{$t('MT4.attention')}}</span>{{$t('MT4.scan')}}
            </p>
          </a>
        </div>
      </div>
    </div>
    <div class="que">
      <div class="tit">{{$t('MT4.faqs')}}</div>
      <div
        class="art"
      >{{$t('MT4.through')}}</div>
    </div>
    <div class="anq">
      <dl>
        <dt @click="expandClick(0)">{{$t('MT4.view')}}</dt>
        <transition name="fade">
          <dd v-show="expand[0]">
            <div class="line"></div>
            <p>{{$t('MT4.select')}}</p>
          </dd>
        </transition>

        <dt @click="expandClick(1)">{{$t('MT4.login')}}</dt>
        <transition name="fade">
          <dd v-show="expand[1]">
            <div class="line"></div>
            <p>{{$t('MT4.need')}}</p>
          </dd>
        </transition>
        <dt @click="expandClick(2)">{{$t('MT4.password')}}</dt>
        <transition name="fade">
          <dd v-show="expand[2]">
            <div class="line"></div>
            <p>{{$t('MT4.change')}}</p>
          </dd>
        </transition>
        <dt @click="expandClick(3)">{{$t('MT4.insert')}}</dt>
        <transition name="fade">
          <dd v-show="expand[3]">
            <div class="line"></div>
            <p>
              {{$t('MT4.steps')}}</p>
          </dd>
        </transition>
        <dt @click="expandClick(4)">{{$t('MT4.guide')}}</dt>
        <transition name="fade">
          <dd v-show="expand[4]">
            <div class="line"></div>
            <p>
              {{$t('MT4.example')}}
            </p>
          </dd>
        </transition>
      </dl>
    </div>
  </div>
</template>
<script>
import clound from'@/components/m-clound'
export default {
  data() {
    return {
      expand: [true, false, false, false, false]
    }
  },
  components:{
    clound
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
        margin-bottom: 20px;
        text-align: center;
        font-size: 40px;
        color: #000000;
        font-family: montserratse;
        float: left;
        @include clearfix();
      }
      

    }
    .imgboxs{
        height: 705px;
        position: relative;
        width:100%;
        >img{
          position: absolute;
          right: -100px;
          width: 1100px;
          top: 0px;
          opacity: 0.8;
        }
        
      }
    .tipstit {
      font-size: 18px;
      text-align: center;
      line-height: 30px;
      margin-bottom: 60px;
      @include clearfix();
    }
    .meifenacco {
      font-size: 12px;
      line-height: 29px;
      margin: 0 auto 40px;
      width:600px;
      @include clearfix();
      .img{
        float:left;
        width:20%;
      
        img {
          width: 114px;
        }
      }
      .searchserv {
        float: right;
        width:74%;
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
        width: 700px;
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
          width:700px;
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
            width:400px;
            text-align: center;
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
.floating{
  position:absolute;
  top:0;
  left:0;
  min-height:336px;
  min-width:700px;
}
</style>