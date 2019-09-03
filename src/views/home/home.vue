<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 12:42:19
 * @ Modified by: Your name
 * @ Modified time: 2019-09-02 13:38:15
 * @ Description:首页
 -->

<template>
  <div>
    <Header />
    <!-- 轮播图 -->

    <!-- 主体 -->
    <div class="warp whycpt clearfix cn">
      <div class="top clearfix">
        <div class="headertitle">
          {{$t('home.why')}}
        </div>
        <div class="grid pupradio" id="abouts">
            <button class="particles-button"> {{$t('home.readMore')}}</button>
        </div>
        <div class="line"></div>
      </div>
      <div class="partleft">
       
        <p class="tit"> {{$t('home.success')}}</p>
        <p class="artlic"> {{$t('home.group')}}</p>
         
        <p class="tit"> {{$t('home.safe')}}</p>
        <p class="artlic"> {{$t('home.CPT')}}

  </p>
         
        <p class="tit"> {{$t('home.perfect')}}</p>
        <p class="artlic"> {{$t('home.large')}}</p>
          
      </div>

      <!-- 右边栏电脑端 -->
      <div class="partright">
        <div class="numcount">
          <span class="num onenum">3</span>
          <span class="tips"> {{$t('home.continents')}}</span>
        </div>
        <div class="numcount">
          <span class="num"><span class="thenum">350</span>+</span>
          <span class="tips"> {{$t('home.lineOut')}}</span>
        </div>
        <div class="numcount">
          <span class="num"><span class="binum" style="font-size: 70px;vertical-align: middle;">∞</span>:1</span>
          <span class="tips"> {{$t('home.leverage')}}</span>
        </div>
        <div class="numcount">
          <span class="num">$<span class="monnum">13</span>,000,000</span>
          <span class="tips"> {{$t('home.activities')}}</span>
        </div>
      </div>
    </div>

    <!-- 交易市场 -->
  <div class="warp gupao clearfix cn animated">
    <div class="top clearfix">
      <div class="headertitle">
        {{$t('home.want')}}
      </div>
     <div class="grid pupradio" id="abouts">
            <button class="particles-button"> {{$t('home.readMore')}}</button>
        </div>
      <div class="line"></div>
    </div>
    <div class="partleft">
      <p class="art">{{$t('home.more')}}<br>{{$t('home.mainstream')}}<span class="pupcolor">{{$t('home.financial')}}</span>{{$t('home.chooese')}}</p>
      <div class="btnbox cn">
        <div class="btn">
          <a href="/simulationRegister/simulationRegister" >{{$t('home.simulation')}}</a>
        </div>
        <div class="btn active"><a href="/register/register">{{$t('home.tureth')}}</a></div>
      </div>
    </div>
    <div class="pad cn">
      <div class="gupiao">
      </div>
    </div>
    <img class="mobpad" :src='`${publicPath}/padimg.jpg`' alt="">
  </div>
  <img class="imgnav"  :src='`${publicPath}/imgnav.jpg`' alt="">

    <Footer />
  </div>
</template>
<script>
import Header from '../header.vue';
import Footer from '../footer.vue';
export default {
  data(){
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  components: { Header , Footer}
}
</script>
<style lang="scss">
  .whycpt{margin-top: 80px !important;position: relative}
  .whycpt .top{margin-bottom: 70px}
  .partleft{float: left;width: 710px}
  .whycpt .partleft{box-sizing: border-box;padding-left: 40px}
  .pupradio2{width: 150px;height: 40px;font-family: Oswald;text-align: center;font-weight: bold;cursor: pointer;}
  .whycpt .tit{font-family: montserrat;font-size: 14px;color: #000;font-weight: bold;text-align: left;margin-top: 0px}
  .whycpt .artlic{font-family: montserrat;font-size: 14px;color: #6a6a6a;margin-top: 5px;line-height: 30px;margin-bottom: 60px}
  .whycpt.cn .tit{font-family: montserrat;font-size: 20px;color: #000;font-weight: bold;text-align: left;margin-top: 0px}
  .whycpt.cn .artlic{font-family: montserrat;font-size: 16px;color: #6a6a6a;margin-top: 5px;line-height: 30px;margin-bottom: 115px;margin-top: 20px}
  .headertitle{font-size: 40px;color: #000000;font-family:montserratse;float: left; }
  .pupradio{width: 150px;height: 40px;float: right;font-family: Oswald;text-align: center;font-weight: bold;cursor: pointer;}
  .mob{display: none}
  .numcount .tips{font-family:montserrat;font-size: 18px;color: #6a6a6a;display: block}
  .numcount{margin-bottom: 90px}
  .num{font-family:montserratse;font-size: 56px;display: block }
  .line {
    float: right;
    margin-right: 60px;
    height: 1px;
    margin-top: 25px;
    background: #000000;
    width: 160px;
  }
  .particles-button {
    position: relative;
    border-radius: 5px;
    border-radius: vb0eb2ar(--radius-button);
    background: #5b0eb2;
    color: #fff;
    border: 0;
    margin: 0;
    padding: 1.5rem 3rem;
    padding: var(--button-padding);
    width: 100%;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    line-height: 0px !important;
    font-weight: bold;
    font-size: 16px;
}
.num {
    font-family: montserratse;
    font-size: 56px;
    display: block;
}
.partright{position: absolute;right: -100px}

.gupao{margin-top: 100px;position: relative;background-image: url(../../../public/bgs.png);padding-bottom: 200px;background-repeat:no-repeat }
.gupao .top{margin-bottom: 70px} 
.gupao .art{width: 450px;line-height: 40px;font-size: 20px}
.cn .gupao .art{width: 450px;line-height: 40px;font-size: 20px}
.headertitle{font-size: 40px;color: #000000;font-family:montserratse;float: left; }
.pupcolor{color: #5b0eb2}
.btnbox .btn a {
    color: #000;
    display: block;
}
.btnbox .btn a:hover {
    color: #fff;
}
.gupao .btnbox{width: 100%;text-align: left;margin-top: 20px}
.gupao.cn .btnbox{width: 100%;text-align: left;margin-top: 80px}
.btnbox > .btn{border-radius: 20px;width: 200px;height: 40px;border: 1px solid #5b0eb2;font-family: montserratse;background: none;color:#5b0eb2;text-align: center;line-height: 40px;font-size: 12px;display: inline-block;position: relative;overflow: hidden;margin-right: 20px }
.cn .btnbox > .btn{border-radius: 20px;width: 200px;height: 40px;border: 1px solid #5b0eb2;font-family: montserratse;background: none;color:#5b0eb2;text-align: center;line-height: 40px;font-size: 16px;display: inline-block;position: relative;overflow: hidden;margin-right: 20px }
.btnbox > .btn.active{background: #eee8f6}
.btnbox > .btn.active:hover{background:#5b0eb2 }
.btnbox > .btn::before{content: '';z-index: -1;
  position: absolute;
  top: 50%;
  left: 100%;
  margin: -15px 0 0 1px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #5b0eb2;
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  -webkit-transform: scale3d(1, 2, 1);
  transform: scale3d(1, 2, 1);
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.9,1);
  transition-timing-function: cubic-bezier(0.7,0,0.9,1);}
  .btnbox > .btn:hover{color: #fff}
  .btnbox > .btn:hover::before{-webkit-transform: scale3d(9, 9, 1);}
/* .btnbox > .btn.active{background: #5b0eb2;color: #fff;margin-left: 10px} */
.gupao .partleft{padding-left: 50px}
.pad{position: absolute;background-image:url(../../../public/pad.png);width: 736px;height: 519px;position: absolute;right: -50px;box-sizing: border-box;padding: 33px 64px;}
.pad .gupiao{width: 604px;height: 453px;background: url(../../../public/table.jpeg) ;background-size: 100% 100%}
.pad.cn .gupiao{width: 604px;height: 453px;background: url(../../../public/accountbg.jpg);background-size: 100% 100%}
.imgnav{width: 100%;}
.mobpad{display: none}
</style>