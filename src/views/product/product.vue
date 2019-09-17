<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-12 14:15:55
 * @Description: 交易产品
 -->
 
<template>
  <div class="products ">
    <div class="banner pc">
      <div class="title">{{$t('product.trading')}}</div>
      <div class="desc">{{$t('product.want')}}</div>
      <div class="list-wrap">
        <div class="item">
          <img src="@/assets/proicons1.png" alt />
          {{$t('product.forign')}}
        </div>
        <div class="item">
          <img src="@/assets/proicons2.png" alt />
          {{$t('product.metal')}}
        </div>
        <div class="item">
          <img src="@/assets/proicons3.png" alt />
          {{$t('product.oil')}}
        </div>
        <div class="item">
          <img src="@/assets/proicons5.png" alt />
          {{$t('product.index')}}
        </div>
        <div class="item">
          <img src="@/assets/proicons4.png" alt />
        {{$t('product.contract')}}
        </div>
        <div class="item">
          <img src="@/assets/proicons6.png" alt />
          {{$t('product.currency')}}
        </div>
      </div>
    </div>

    <img class="mobbaner mb" src="../../../public/images/Productbanner.jpg" alt="">

    <Regist ref="regist" :class="{fadeIn: show.regist}" />
    <div class="wrap">
      <div class="tit">{{$t('product.markets')}}</div>
      <div class="welcome">{{$t('product.welcome')}}</div>
    </div>
    <div ref="imgbox" class="imgbox">
      <div class="partleft">
        <div class="part1" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading5.jpg" alt />
          <div class="info">
            <span>{{$t('product.forign')}}</span>
            <a href="/p/exchange">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
        <div class="part2" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading14.jpg" alt />
          <div class="info">
            <span>{{$t('product.metal')}}</span>
            <a href="/p/Metal">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
        <div class="part3" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading16.jpg" alt />
          <div class="info">
            <span>{{$t('product.index')}}</span>
            <a href="/p/tradeindex">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="partrights">
        <div class="part4" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading7.jpg" alt />
          <div class="info">
            <span>{{$t('product.currency')}}</span>
            <a href="/p/Currency">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
        <div class="part5" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading10.jpg" alt />
          <div class="info">
            <span>{{$t('product.oil')}}</span>
            <a href="/p/oil">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
        <div class="part6" style="opacity: 1;" :class="{fadeIn: show.imgbox}">
          <img src="images/trading12.jpg" alt />
          <div class="info">
            <span>CFD</span>
            <a href="/p/CFD">
              <div class="readerbtn">{{$t('product.more')}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="imgbox"></div>
    <div class="choose">
      <div class="tit">{{$t('product.first')}}</div>
      <div class="choiceicon" ref="choiceicon">
        <ul>
          <li class="iconone animated" style="opacity: 1;" :class="{fadeIn: show.choiceicon}">
            <img src="@/assets/tradinicon2.png" alt />
            <p>{{$t('product.flexible')}}</p>
          </li>
          <li class="icontwo animated" style="opacity: 1;" :class="{fadeIn: show.choiceicon}">
            <img src="@/assets/tradinicon3.png" alt />
            <p>{{$t('product.cost')}}</p>
          </li>
          <li class="iconthe animated" style="opacity: 1;" :class="{fadeIn: show.choiceicon}">
            <img src="@/assets/tradinicon1.png" alt />
            <p>{{$t('product.limit')}}</p>
          </li>
          <li class="iconfour animated" style="opacity: 1;" :class="{fadeIn: show.choiceicon}">
            <img src="@/assets/tradinicon4.png" alt />
            <p>{{$t('product.option')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Regist from "./regist.vue";
export default {
  components: { Regist },
  data() {
    return {
      show: {
        regist: false,
        imgbox: false,
        choiceicon: false
      }
    }
  },
  mounted(){
    console.log(this.$refs.imgbox);
  },
  methods: {
    setShow() {
      const show = this.show
      for (let i in show) show[i] = false;
      window.onscroll = (e) => {
        let react;
        let height = this.$util.getClientHeight();
        if (!show.regist) {
          react = this.$refs.regist.$el.getClientRects()[0]; // bounceInUps
          if (height > react.top) {
            show.regist = true
          }
        }
        if (!show.imgbox) {
          react = this.$refs.imgbox.getClientRects()[0]; // bounceInUps
          if (height > react.top) {
            show.imgbox = true
          }
        }
        if (!show.choiceicon) {
          react = this.$refs.choiceicon.getClientRects()[0]; // bounceInUps
          if (height > react.top) {
            show.choiceicon = true
          }
        }
        if (show.regist && show.imgbox && show.choiceicon) {
          window.onscroll = null
        }
      }
      window.onscroll();
    }
  },
  activated() {
    this.setShow();
  },
  deactivated() {
    window.onscroll = null;
  }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
@mixin part($width, $height, $info) {
  width: $width;
  height: $height;
  // @include animation(bounceInUps);
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
  .fadeIn {
    @include animation(bounceInUps, 1s, 300ms);
  }
  .banner {
    width: 100%;
    height: 437px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: url("../../../public/images/trading.jpg");
    .title {
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: montserratse;
      font-size: 40px;
      margin-top: 80px;
      @include animation(bounceInUps, 1s, 200ms);
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
      width: 1200px;
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
  >.wrap {
    @include animation(bounceInUps, 1s, 300ms);
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
        animation-delay: 0ms;
      }
      .part2 {
        margin-top: 20px;
        float: left;
        @include part(355px, 318px, 60px);
        animation-delay: 300ms;
      }
      .part3 {
        margin-top: 20px;
        float: left;
        margin-left: 20px;
        @include part(355px, 318px, 100px);
        animation-delay: 400ms;
      }
    }
    .partrights {
      width: 549px;
      float: left;
      margin-left: 19px;
      .part4 {
        @include part(550px, 380px, 130px);
        animation-delay: 200ms;
      }
      .part5 {
        float: left;
        margin-top: 20px;
        @include part(264px, 570px, 210px);
        animation-delay: 500ms;
      }
      .part6 {
        float: left;
        margin-top: 20px;
        margin-left: 19px;
        @include part(264px, 570px, 210px);
        animation-delay: 600ms;
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
        li:nth-child(1) {
          animation-delay: 0;
        }
        li:nth-child(2) {
          animation-delay: 350ms;
        }
        li:nth-child(3) {
          animation-delay: 500ms;
        }
        li:nth-child(4) {
          animation-delay: 750ms;
        }
      }
    }
  }
}
</style>