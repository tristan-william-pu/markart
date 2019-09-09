<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 14:18:50
 * @Description: 关于
 -->
<template>
  <div class="cn safty">
    <div class="banner">
      <div class="img">
        <div class="warp">
          <img class="box emergingleft" src="@/assets/bg1_03.png" alt />
          <p class="bannerfont emergingp">{{$t('safety.funds')}}</p>
        </div>
      </div>
    </div>
    <img class="mobbaner" src="images/FundSafetymob.jpg" alt />
    <div class="warp">
      <div class="tit">{{$t('safety.regula')}}</div>
      <div class="art">
        {{$t('safety.aims')}}</div>
      <div class="art">
        {{$t('safety.business')}}</div>
    </div>
    <div class="bottombg">
      <div class="warp">
        <div class="fh emerging">“</div>
        <div class="art emerging">
          {{$t('safety.provide')}}</div>
        <div class="tits emerging">
          ——
          <span>{{$t('safety.commitment')}}</span>——
        </div>
      </div>
    </div>

    <div class="warp">
      <div class="tit">{{$t('safety.account')}}</div>
      <div class="art">
        {{$t('safety.broker')}}</div>
    </div>

    <div class="warp accounticons clearfix">
      <ul class="list-wrap">
        <li id="one" class="item">
          <img src="@/assets/safeicon1.png" alt />
          <p class="title">{{$t('safety.UK')}}</p>
          <p class="arts">{{$t('safety.financial')}}</p>
        </li>
        <li id="two" class="item">
          <img src="@/assets/safeicon2.png" alt />
          <p class="title">{{$t('safety.learn')}}</p>
          <p class="arts">{{$t('safety.update')}}</p>
        </li>
        <li id="three" class="item">
          <img src="@/assets/safeicon3.png" alt />
          <p class="title">{{$t('safety.faster')}}</p>
          <p class="arts">{{$t('safety.latest')}}</p>
        </li>
        <li id="four" class="item">
          <img src="@/assets/safeicon4.png" alt />
          <p class="title">{{$t('safety.premium')}}</p>
          <p class="arts">{{$t('safety.technology')}}</p>
        </li>
      </ul>
    </div>

    <div class="bottomline mb20">
      <div class="warp">
        <p>{{$t('safety.regulated')}}</p>
        <a href="/register/register">
          <div class="yelbtn">{{$t('safety.now')}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showMap: true,
      mapList: [
        {
          name: "CPT Markets UK",
          title: "CPT Markets UK ",
          contents: ["（Citypoint Trading Ltd的交易名称）", "伦敦"]
        },
        {
          name: "CPT Markets 伯利兹",
          title: "CPT Markets ",
          contents: ["伯利兹"]
        },
        {
          name: "CPT Markets 马来西亚",
          title: "CPT Markets",
          contents: ["马来西亚"]
        },
        {
          name: "CPT Markets 迪拜",
          title: "CPT Markets",
          contents: ["迪拜"]
        },
        {
          name: "CPT Markets 台湾",
          title: "CPT Markets",
          contents: ["台湾"]
        }
      ],
      active: 0
    };
  },
  methods: {
    skew() {
      this.showMap = !this.showMap;
    },
    reset() {}
  },
  mounted() {
    window.vm = this;
  }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.skew-map-enter-active {
  @include transition(1s);
  transform: translate(0, 0) skew(0);
}
.skew-map-leave-active {
  @include transition(1s);
  transform: translate(0, 0) skew(0);
}
.skew-map-enter,
.skew-map-leave-to {
  opacity: 0;
  transform: translate3d(0, -60px, 0) skew(180deg, 180deg);
}

.about {
  @include full(100%, auto);
  .word {
    position: absolute;
    width: 100vw;
    background: #242424;
    height: 1000px;
    .map-contain {
      width: 1080px;
      margin: 0 auto;
      .concat {
        height: 165px;
        font-size: 40px;
        line-height: 220px;
        color: #ffffff;
        width: 100%;
        text-align: center;
      }
      .map-list {
        @include flex();
        height: 40px;
        border-radius: 10px;
        border: 1px solid #6714ba;
        margin: 0 auto;
        overflow: hidden;
        ul {
          @include flex();
          padding: 0;
          margin: 0;
          list-style: none;
          cursor: pointer;
          li {
            width: 214.8px;
            text-align: center;
            font-size: 18px;
            font-family: montserrat;
            border-right: 1px solid #6714ba;
            float: left;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background: none;
            transition: 0.6s;
            cursor: pointer;
            list-style: none;
          }
          .active {
            background: #6714ba;
          }
          li:last-child {
            border-right: none;
          }
        }
      }
      .info {
        @include full(100%, 100px);
        text-align: center;
        margin-top: 100px;
        color: #ffffff;
        font-size: 24px;
        font-family: montserratse;
        text-size-adjust: 100%;
        .title {
          display: block;
          font-weight: 900;
          line-height: 40px;
        }
        .content {
          display: block;
          line-height: 40px;
          font-weight: 500;
        }
      }
      .map {
        @include full(100%, 600px);
        margin-top: 30px;
        transform: translateZ(0px);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        z-index: 10;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        .img {
          width: 90%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(50deg);
          margin-left: 5%;
          @include transition();
          img {
            width: 100%;
            height: 100%;
          }
        }
        .pointe {
          width: 40px;
          position: absolute;
          transition: 0.6s;
          z-index: 100;
        }
      }
    }
    .service {
      @include full(100%, 360px);
      .online {
        font-family: montserratse;
        margin-top: 42px;
        font-size: 40px;
        text-align: center;
        color: #6714ba;
      }
      .tip {
        text-align: center;
        width: 100%;
        color: #000000;
        margin-top: 30px;
        font-family: montserrat;
        font-size: 16px;
        box-sizing: border-box;
      }
      .connect {
        width: 100%;
        font-size: 14px;
        @include flex();
        height: 100px;
        > div {
          margin-left: 20px;
          color: #6714ba;
          text-align: center;
          font-weight: 700;
          font-family: montserratse;
          width: 370px;
          font-weight: 800;
          @include flex();
        }
        img {
          margin-right: 20px;
        }
      }
    }
  }
}

.mobbaner {
  display: none;
  width: auto;
  height: auto;
}
.banner {
  width: 100%;
  height: 437px;
  position: absolute;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.safty .banner > .img {
  position: absolute;
  left: 50%;
  margin-left: -50%;
  height: 437px;
  background: url(../../../public/images/Fund-Safety.png);
  width: 100%;
  z-index: 10;
}
.safty .banner .warp {
  position: relative;
}
.safty .banner .box {
  position: absolute;
  right: 30px;
  top: 60px;
}
.safty .banner p {
  position: absolute;
  right: 160px;
  font-family: montserratse;
  color: #fff;
  font-size: 66px;
  width: 300px;
  top: 127px;
  text-align: right;
  opacity: 0;
}
.cn.safty .banner p {
  top: 167px;
}
.safty .tit {
  font-family: montserratse;
  margin-top: 100px;
  font-size: 40px;
  text-align: center;
}
.safty .art {
  font-family: montserrat;
  line-height: 30px;
  font-size: 16px;
  text-align: left;
  margin-top: 20px;
}
.cn.safty .art {
  font-size: 18px;
  line-height: 35px;
}
.safty .bottombg {
  width: 100%;
  height: 489px;
  background-image: url(../../../public/images/Fund-Safetybg.png);
  margin-top: 150px;
  text-align: center;
  overflow: hidden;
}
.safty .bottombg .fh {
  font-size: 120px;
  color: #fff;
  font-family: montserratse;
  margin-top: 40px;
  opacity: 0;
}
.safty .bottombg .art {
  color: #fff;
  font-family: montserrat;
  text-align: center;
  margin-top: 0px;
  opacity: 0;
}
.safty .bottombg .tits {
  color: #fff;
  font-size: 40px;
  margin-top: 40px;
  opacity: 0;
}
.safty .bottombg .tits span {
  font-size: 40px;
  font-family: montserratse;
  color: #fff;
  margin-left: 20px;
  margin-right: 20px;
}
.safty .accounticons {
  margin-top: 100px;
  height: auto;
}
.safty .accounticons ul li {
  width: 25%;
  float: left;
  text-align: center;
  opacity: 0;
  animation: fadeInReight 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
  &:nth-child(2) {
    animation-delay: 500ms;
  }
  &:nth-child(3) {
    animation-delay: 1000ms;
  }
  &:nth-child(4) {
    animation-delay: 1500ms;
  }
}
.safty .accounticons ul li .title {
  font-family: montserratse;
  font-size: 18px;
  margin-top: 20px;
}
.safty .accounticons ul li .arts {
  font-family: montserrat;
  font-size: 14px;
  margin-top: 10px;
  width: 75%;
  margin: 0 auto;
  line-height: 20px;
  margin-top: 20px;
}
.bottomline {
  height: 90px;
  width: 100%;
  background: #5b0eb2;
  line-height: 90px;
  margin-top: 120px;
  transition: 0.5s;
  box-sizing: border-box;
  p {
    line-height: 90px;
    color: #fff;
    font-size: 21px;
    float: left;
  }
  .yelbtn {
    width: 150px;
    height: 40px;
    color: black;
    background: #fde428;
    text-align: center;
    font-family: montserratse;
    float: right;
    line-height: 40px;
    margin-top: 30px;
  }
}

.bottomline .safty footer {
  margin-top: 0px;
}
.emergingleft {
  opacity: 0;
  transform: translate(0, 50px);
  animation: fadeInLeft 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
}
.emergingp {
  opacity: 0;
  transform: translate(0, 50px);
  animation: fadeInLeft 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s;
  animation-fill-mode: forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(-120px);
  }
}
@keyframes fadeInReight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-120px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
</style>
