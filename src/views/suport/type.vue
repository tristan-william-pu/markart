<template>
  <div  class="payment clearfix">
      <table/>
      <div class="tit warp emergingType">支付方式</div>
      <div class="art warp emergingTypeCont">
        作为老牌外汇及差价合约经纪商，CPT Markets 多年来一直为交易者提供多途径的出入金方式，使您的交易过程更加的高效便捷。您可以根据自身需求，自由的选择交易支付方式。
      </div>
      <!-- 轮播 -->
       <div class="swiper-container1 warp slider">
        <div class="swiper-wrapper ">
          <div v-for='(el,index) in banner1' :key="index" class="swiper-slide ">
            <div class="divImg">
              <img class="img" :src="el.img">
            </div>
            <p class="bankTit">{{el.tit}}</p>
            <p class="bankCOnt">{{el.cont}}</p>
            
          </div>
        </div>
        <div class="checkBtn ">
          <button class="swiper-button-prev1">上一页</button>
          <button>查看</button>
          <button class="swiper-button-next1">下一页</button>
        </div>
         
      </div>
      
       <div class="swiper-container2 warp slider">
        <div class="swiper-wrapper ">
          <div v-for='(el,index) in banner2' :key="index" class="swiper-slide ">
            <div class="divImg">
              <img class="img" :src="el.img">
            </div>
            <p class="bankTit">{{el.tit}}</p>
            <p class="bankCOnt">{{el.cont}}</p>
            
          </div>
         
        </div>
        <div class="checkBtn">
          <button class="swiper-button-prev2">上一页</button>
          <button>查看</button>
          <button class="swiper-button-next2">下一页</button>
        </div>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.css';
export default {
  data(){
    return{
      banner1:[
        {img: require("../../../public/images/tb_03.png"),tit:'入金',cont:'中国银联'},
        {img: require("../../../public/images/tb_07.png"),tit:'入金',cont:"电汇"},
        {img: require("../../../public/images/tb_09.png"),tit:'入金',cont:"信用卡/借记卡（仅限海外用户）"},
        {img: require("../../../public/images/tb_12.png"),tit:'入金',cont:"SSAC"},
        {img: require("../../../public/images/tb_14.png"),tit:'入金',cont:"USDT"},
      ],
      banner2:[
        {img: require("../../../public/images/tb_03.png"),tit:'出金',cont:'中国银联'},
        {img: require("../../../public/images/tb_07.png"),tit:'出金',cont:"电汇"},
      ],
    }
  },
  mounted(){
      let mySwiper1 = new Swiper('.swiper-container1', {
        loop: true, // 循环模式选项
        navigation:{
          nextEl : '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        
        autoplay:false,
      })
      let mySwiper2 = new Swiper('.swiper-container2', {
        loop: true, // 循环模式选项
        navigation:{
          nextEl : '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        
        autoplay:false,
      })
  },

}
</script>
<style lang="scss">
.payment{
  width: 100%;
  min-height: 500px;
  background:linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
  .tit{
    font-family: montserratse;
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
  }
  .art{
    font-family: montserrat;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    margin-top: 50px;
  }
  .slider{
    position: relative;
    z-index: 200;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 7em;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 700px;
    padding-top: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    .divImg{
      height:360px;
      display: flex;
      align-items: center;
      
    }
    .bankTit{
        font-size: 26px;
        font-weight: bold;
        display: block;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #35303d;
      }
      .bankCOnt{
        font-size: 1.75em;
        font-weight: normal;
        margin: 0 auto;
      }
      .checkBtn{
        margin-top:20px;
        button{
          font-size: 18px;
          width:80px;
          height:40px;
          // position: relative;
          display: inline-block;
          // overflow: hidden;
          margin: 0 25px;
          padding: 0;
          cursor: pointer;
          color: #5c5edc;
          border: none;
          background: none;
        }
      }
  }
  
}

.img{
    display: block;
    border-radius: inherit;
    margin:0 auto;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    width: 200px;
}
.emergingType {
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
}
.emergingTypeCont {
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) .5s;
  animation-fill-mode: forwards;
}

.checkBtn{
  button.swiper-button-prev{
    position: inherit
  }
  button.swiper-button-next{
    position: inherit
  }
} 
.swiper-container1,.swiper-container2{
  overflow: hidden;
}

</style>
