<template>
  <div  class="payment clearfix">
      <table/>
      <div class="tit warp emergingType">{{ $t('type.title') }}</div>
      <div class="art warp emergingTypeCont">
        {{$t('type.discript')}}
      </div>
      <!-- 轮播 -->
       <div class="swiper-container1 warp slider">
        <div class="swiper-wrapper ">
          <div v-for='(el,index) in banner1' :key="index" class="swiper-slide ">
            <div class="divImg">
              <img class="img" :src="el.img">
            </div>
            <p class="bankTit">{{el[local].tit}}</p>
            <p class="bankCOnt">{{el[local].cont}}</p>
            
          </div>
        </div>
        <div class="checkBtn ">
          <button class="swiper-button-prev1"><img src="@/assets/leftBtn.png" alt/></button>
          <button><img src="@/assets/searchBtn.png" alt/></button>
          <button class="swiper-button-next1"><img src="@/assets/rightBtn.png" alt/></button>
        </div>
         
      </div>
      
       <div class="swiper-container2 warp slider">
        <div class="swiper-wrapper ">
          <div v-for='(el,index) in banner2' :key="index" class="swiper-slide ">
            <div class="divImg">
              <img class="img" :src="el.img">
            </div>
             <p class="bankTit">{{el[local].tit}}</p>
            <p class="bankCOnt">{{el[local].cont}}</p>
            
          </div>
         
        </div>
        <div class="checkBtn ">
          <button class="swiper-button-prev1"><img src="@/assets/leftBtn.png" alt/></button>
          <button><img src="@/assets/searchBtn.png" alt/></button>
          <button class="swiper-button-next1"><img src="@/assets/rightBtn.png" alt/></button>
        </div>
      </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
export default {
  data(){
    return{
      banner1:[
        {
          img: require("../../../public/images/tb_03.png"),
          cn:{
            tit:'入金',cont:'中国银联'
          },
          tc:{
           tit:'入金',cont:'中國銀聯'
          },
          en:{
            tit:'DEPOSIT',cont:'China UnionPay'
          },
        },
        {img: require("../../../public/images/tb_07.png"),
          cn:{
            tit:'入金',cont:'电汇'
          },
          tc:{
            tit:'入金',cont:'電匯'
          },
          en:{
            tit:'DEPOSIT',cont:'Wire Transfer'
          },
        },
        {img: require("../../../public/images/tb_09.png"),
          cn:{
            tit:'入金',cont:'信用卡/借记卡（仅限海外用户）'
          },
          tc:{
            tit:'入金',cont:'信用卡/借記卡（僅限海外用戶）'
          },
          en:{
            tit:'DEPOSIT',cont:' Credit Card/ Debit Card'
          },
        },
        {img: require("../../../public/images/tb_12.png"),
          cn:{
            tit:'入金',cont:'SSAC'
          },
          tc:{
            tit:'入金',cont:'SSAC'
          },
          en:{
            tit:'DEPOSIT',cont:'SSAC'
          },
        },
        {img: require("../../../public/images/tb_14.png"),
          cn:{
            tit:'入金',cont:'USDT'
          },
          tc:{
            tit:'入金',cont:'USDT'
          },
          en:{
            tit:'DEPOSIT',cont:'USDT'
          },
        },
      ],
      banner2:[
        {img: require("../../../public/images/tb_03.png"),
          cn:{
            tit:'出金',cont:'中国银联'
          },
          tc:{
             tit:'出金',cont:'中國銀聯'
          },
          en:{
            tit:'WITHDRAWAL',cont:'China UnionPay'
          },
        },
        {img: require("../../../public/images/tb_07.png"),
          cn:{
            tit:'出金',cont:'电汇'
          },
          tc:{
            tit:'出金',cont:'電匯'
          },
          en:{
            tit:'WITHDRAWAL',cont:'Wire Transfer'
          },
        },
      ],
    }
  },
  computed:{
    local(){
      return this.$i18n.locale;
    },
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
      .img{
        width:200px;
      }
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
