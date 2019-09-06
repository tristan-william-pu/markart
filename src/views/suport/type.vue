<template>
  <div  class="payment clearfix">
      <div class="tit">支付方式</div>
      <div class="art">
        作为老牌外汇及差价合约经纪商，CPT Markets 多年来一直为交易者提供多途径的出入金方式，使您的交易过程更加的高效便捷。您可以根据自身需求，自由的选择交易支付方式。
      </div>
      <!-- 轮播 -->
       <div class="swiper-container warp slider">
        <div class="swiper-wrapper">
          <div v-for='(el,index) in banner1' :key="index" class="swiper-slide divImg">
            <img class="img" :src="el.img">
          </div>
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
        {img: require("../../../public/images/tb_03.png")},
        {img: require("../../../public/images/tb_07.png")},
        {img: require("../../../public/images/tb_09.png")},
        {img: require("../../../public/images/tb_12.png")},
        {img: require("../../../public/images/tb_14.png")},
      ],
    }
  },
  mounted(){
      new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay:true,
      speed:100,
      
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
</style>