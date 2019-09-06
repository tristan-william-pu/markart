<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 07:12:57
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:06:15
 * @ Description: 交易产品
 -->

<template>
  <div class="products">
    <div class="banner">
      <div class="title">交易产品</div>
      <div class="desc">在CPT Markets, 交易您想要的市场</div>
      <div class="list-wrap">
        <div class="item">
          <img src="@/assets/proicons1.png" alt />
          外汇
        </div>
        <div class="item">
          <img src="@/assets/proicons2.png" alt />
          贵金属
        </div>
        <div class="item">
          <img src="@/assets/proicons3.png" alt />
          原油
        </div>
        <div class="item">
          <img src="@/assets/proicons4.png" alt />
          指数
        </div>
        <div class="item">
          <img src="@/assets/proicons5.png" alt />
          CFD
        </div>
        <div class="item">
          <img src="@/assets/proicons6.png" alt />
          数字货币
        </div>
      </div>
    </div>
    <Regist />
    <div class="wrap">
      <div class="tit">您想要的市场</div>
      <div class="welcome">欢迎来到CPT Markets</div>
    </div>
    <div class="imgbox">
      <div class="partleft">
        <div class="part1" style="opacity: 1;">
          <img src="images/trading5.jpg" alt />
          <div class="info">
            <span>外汇</span>
            <a href="/p/exchange">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
        <div class="part2" style="opacity: 1;">
          <img src="images/trading14.jpg" alt />
          <div class="info">
            <span>贵金属</span>
            <a href="/p/Metal">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
        <div class="part3" style="opacity: 1;">
          <img src="images/trading16.jpg" alt />
          <div class="info">
            <span>指数</span>
            <a href="/p/tradeindex">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
      </div>
      <div class="partrights">
        <div class="part4" style="opacity: 1;">
          <img src="images/trading7.jpg" alt />
          <div class="info">
            <span>数字货币</span>
            <a href="/p/Currency">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
        <div class="part5" style="opacity: 1;">
          <img src="images/trading10.jpg" alt />
          <div class="info">
            <span>原油</span>
            <a href="/p/oil">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
        <div class="part6" style="opacity: 1;">
          <img src="images/trading12.jpg" alt />
          <div class="info">
            <span>CFD</span>
            <a href="/p/CFD">
              <div class="readerbtn">更多详情</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="choose">
      <div class="tit">CPT Markets, 您的第一选择!</div>
      <div class="choiceicon">
        <ul>
          <li class="iconone animated fadeInLeft" style="opacity: 1;">
            <img src="@/assets/tradinicon2.png" alt />
            <p>杠杆灵活</p>
          </li>
          <li class="icontwo animated fadeInLeft" style="opacity: 1;">
            <img src="@/assets/tradinicon3.png" alt />
            <p>交易成本低</p>
          </li>
          <li class="iconthe animated fadeInLeft" style="opacity: 1;">
            <img src="@/assets/tradinicon1.png" alt />
            <p>无门槛限制</p>
          </li>
          <li class="iconfour animated fadeInLeft" style="opacity: 1;">
            <img src="@/assets/tradinicon4.png" alt />
            <p>交易产品多样</p>
          </li>
        </ul>
      </div>
    </div>
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
@mixin part($width, $height, $info) {
  width: $width;
  height: $height;
  @include animation(bounceInUps);
  filter: grayscale(100%);
  transition: 0.6s;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  &:hover {
    filter: grayscale(0%);
    .info {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
  img {
    position: relative;
    width: 100%;
  }
  .info {
    opacity: 0;
    transition: 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin: 1rem 0;
    color: var(--color-info);
    filter: grayscale(100%);
    transition: 0.6s;
    text-align: center;
    overflow: hidden;
    opacity: 0;
    span {
      font-size: 35px;
      font-family: montserratse;
      text-align: center;
      display: block;
      color: #fff;
      margin-top: $info;
    }
    a {
      .readerbtn {
        width: 220px;
        height: 40px;
        line-height: 40px;
        background: #5b0eb2;
        text-align: center;
        margin: 40px auto;
        border-radius: 30px;
        font-family: montserratse;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
@mixin tit() {
  .tit {
    font-family: montserratse;
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
    letter-spacing: 5px;
  }
}
.products {
  width: 100%;
  .banner {
    width: 100%;
    height: 437px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: url("./../../../public/images/trading.jpg");
    .title {
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: montserratse;
      font-size: 40px;
      margin-top: 80px;
      animation-name: bounceInUps;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
    .desc {
      @include animation(bounceInUps, 1s, 200ms);
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: montserrat;
      font-size: 21px;
      margin-top: 20px;
    }
    .list-wrap {
      width: 96%;
      height: 180px;
      @include flex();
      margin: 0 auto;
      .item {
        width: 20%;
        @include flex(center, center, column);
        @include animation(fadeInLeft, 1s, 400ms);
        color: #fff;
        font-size: 14px;
        margin-top: 30px;
        img {
          margin-bottom: 30px;
        }
      }
      .item:nth-child(2) {
        animation-delay: 500ms;
      }
      .item:nth-child(3) {
        animation-delay: 700ms;
      }
      .item:nth-child(4) {
        animation-delay: 900ms;
      }
      .item:nth-child(5) {
        animation-delay: 1100ms;
      }
      .item:nth-child(6) {
        animation-delay: 1300ms;
      }
    }
  }
  .apply {
    margin-top: 0;
  }
  .wrap {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    @include tit();
    .welcome {
      font-family: montserrat;
      font-size: 21px;
      margin-top: 70px;
      text-align: center;
      letter-spacing: 5px;
    }
  }
  .imgbox {
    width: 1300px;
    margin: 0 auto;
    margin-top: 100px;
    @include clearfix();
    .partleft {
      width: 732px;
      float: left;
      .part1 {
        @include part(732px, 620px, 200px);
      }
      .part2 {
        margin-top: 20px;
        float: left;
        @include part(355px, 318px, 60px);
      }
      .part3 {
        margin-top: 20px;
        float: left;
        margin-left: 20px;
        @include part(355px, 318px, 100px);
      }
    }
    .partrights {
      width: 549px;
      float: left;
      margin-left: 19px;
      .part4 {
        @include part(550px, 380px, 130px);
      }
      .part5 {
        float: left;
        margin-top: 20px;
        @include part(264px, 570px, 210px);
      }
      .part6 {
        float: left;
        margin-top: 20px;
        margin-left: 19px;
        @include part(264px, 570px, 210px);
      }
    }
  }
  .choose {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    @include tit();
    .choiceicon {
      @include clearfix();
      margin-top: 120px;
      margin-bottom: 200px;
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: 120px;
      margin-bottom: 200px;
      ul {
        @include flex();
        li {
          width: 25%;
          @include flex();
          flex-direction: column;
          p {
            margin-top: 20px;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>