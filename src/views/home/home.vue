<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 09:52:20
 * @Description: 首页
 -->

 
<template>
  <div class="home">
    <!-- 视频 -->
    <div class="videowarp">
      <div class="videomask"></div>
      <video class="video" id="video" autoplay loop width="100%" muted poster>
        <source src="images/video/gp.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- 轮播图 -->
    <Banner style="z-index:1000;"></Banner>
    <!-- 主体 -->
    <div class="warp whycpt clearfix cn">
      <div class="top clearfix">
        <div class="headertitle clearfix">{{$t('home.why')}}</div>
        <div class="grid pupradio clearfix" id="abouts">
          <router-link to="/about">
          <button class="particles-button">{{$t('home.readMore')}}</button>
          </router-link>
        </div>
        <div class="line pc"></div>
      </div>
      <div class="partleft">
        <p class="tit">{{$t('home.success')}}</p>
        <p class="artlic">{{$t('home.group')}}</p>

        <p class="tit">{{$t('home.safe')}}</p>
        <p class="artlic">{{$t('home.CPT')}}</p>

        <p class="tit">{{$t('home.perfect')}}</p>
        <p class="artlic">{{$t('home.large')}}</p>
      </div>

      <!-- 右边栏电脑端 -->
      <div class="partright pc">
        <div class="numcount">
          <span class="num onenum">3</span>
          <span class="tips">{{$t('home.continents')}}</span>
        </div>
        <div class="numcount">
          <span class="num">
            <span class="thenum">{{count}}</span>+
          </span>
          <span class="tips">{{$t('home.lineOut')}}</span>
        </div>
        <div class="numcount">
          <span class="num">
            <span class="binum" style="font-size: 70px;vertical-align: middle;">∞&nbsp;</span>:&nbsp;1
          </span>
          <span class="tips">{{$t('home.leverage')}}</span>
        </div>
        <div class="numcount">
          <span class="num">
            $
            <span class="monnum">{{count1}}</span>,000,000
          </span>
          <span class="tips">{{$t('home.activities')}}</span>
        </div>
      </div>
    </div>

    <!-- 交易市场 -->
    <div class="warp gupao clearfix cn" ref="regist"  :class="{fadeIn: show.regist}">
      <div class="top clearfix">
        <div class="headertitle">{{$t('home.want')}}</div>
        <div class="grid pupradio" id="abouts">
          <router-link to="/product">
          <button class="particles-button">{{$t('home.readMore')}}</button>
          </router-link>
        </div>
        <div class="line pc"></div>
      </div>
      <div class="partleft">
        <p class="art">
          {{$t('home.more')}}
          <br />
          {{$t('home.mainstream')}}
          <span class="pupcolor">{{$t('home.financial')}}</span>
          {{$t('home.chooese')}}
        </p>
        <div class="btnbox cn">
          <div class="btn" @click="regist(1)">
            <p >{{$t('home.simulation')}}</p>
          </div>
          <div class="btn active" @click="regist(0)">
            <p>{{$t('home.tureth')}}</p>
          </div>
        </div>
      </div>
      <div class="pad cn pc">
        <div class="gupiao"></div>
      </div>
      <img class="mobpad " src="images/padimg.jpg" alt />
    </div>
    <img class="imgnav pc" src="images/imgnav.jpg" alt />

    <!-- 交易平台 -->
    <div class="warp trading clearfix" ref="trading" :class="{fadeIn: show.trading}">
      <div class="top clearfix">
        <div class="headertitle">{{$t('home.station')}}</div>
      </div>
      <div class="tipstit">{{$t('home.ship')}}</div>
      <div class="grid btn pupradio2" id="tardingp">
        <div class="grid__item theme-1" style="width: 250px">
          <router-link to="/MT4"><button class="particles-button" style="width: 250px">{{$t('home.open')}}</button></router-link>
        </div>
      </div>
      <!-- <div class="btn">start trading now</div> -->
      <div class="imgboxs clearfix" >
        <img class="pcpng " src="images/pc.png" alt />
        <div class="cloud pc">
          <MClound />
        </div>
      </div>
    </div>
    <!-- 邀请 -->
    <div class="navbanner" ref="navbanner" :class="{fadeIn: show.navbanner}">
      <div class="title">
        <span class="blod">{{$t('home.friend')}}</span>
        <br />
        {{$t('home.invit')}}
        <span class="yel">{{$t('home.makeMoney')}}</span>
      </div>
      <div class="grid btn pupradio2" id="join">
        <div class="grid__item theme-1">
          <!-- <button class="action"><svg class="icon icon--rewind">
                <use xlink:href="#icon-rewind"></use>
          </svg></button>-->
          <router-link to="/ib">
              <button class="particles-button">{{$t('home.jionUs')}}</button>
          </router-link>
        
        </div>
      </div>
      <!-- <div class="btn">JOIN US</div> -->
    </div>

    <!-- 工具 -->
    <div class="indSch">
      <div class="center">
        <ul class="clearfix">
          <li>
            <img src="images/sch/indTopLe.png" />
          </li>
          <li class="schCen">
            <span>{{$t('home.tools')}}</span>
            <p class="linTop"></p>
            <p class="con">{{$t('home.videoCenter')}}</p>
            <p class="con">{{$t('home.knowledge')}}</p>
            <p class="con">{{$t('home.webninar')}}</p>
            <p class="three">{{$t('home.education')}}</p>
            <p class="linBot"></p>
          </li>
          <li class="rigLi">
            <p>
              TRADING
              <span>COLLEGE</span>
            </p>
            <h6>{{$t('home.tradeCollege')}}</h6>
            <img src="images/sch/indTopRig.png" class="indSchImg" />
          </li>
        </ul>
      </div>
    </div>

    <div class="schBot">
        <div class="center clearfix">
            <p class="fl">{{$t('home.improve')}}</p>
            <div class="fl">
                <router-link to="/school">
                    <p>+</p>
                    <span>{{$t('home.seemore')}}</span>
                </router-link>
            </div>
        </div>
    </div>

    <!-- 注册流程 -->
    <div class="step warp clearfix emerging">
      <div class="top clearfix">
        <div class="headertitle">{{$t('home.steps')}}</div>
      </div>
      <div class="stepbox">
        <ul>
          <li>
            <div class="radio">
              <img src="@/assets/setp1.png" alt />
            </div>
            <p>1. {{$t('home.register')}}</p>
          </li>
          <li class="pc">
            <img class="stepicon" src="@/assets/step5.png" alt />
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp2.png" alt />
            </div>
            <p>2. {{$t('home.verify')}}</p>
          </li>
          <li class="pc">
            <img class="stepicon" src="@/assets/step5.png" alt />
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp3.png" alt />
            </div>
            <p>3. {{$t('home.deposit')}}</p>
          </li>
          <li class="pc">
            <img class="stepicon" src="@/assets/step5.png" alt />
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp4.png" alt />
            </div>
            <p>4. {{$t('home.tradeStep')}}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="payway warp clearfix emerging">
      <div class="top clearfix">
        <div class="headertitle">{{$t('home.accept')}}</div>
      </div>
      <div class="paywaybox">
        <ul>
          <li>
            <img src="@/assets/pay1.png" alt />
          </li>
          <li>
            <img src="@/assets/pay2.png" alt />
          </li>
          <li>
            <img src="@/assets/pay3.png" alt />
          </li>
          <li>
            <img src="@/assets/pay4.png" alt />
          </li>
          <li>
            <img src="@/assets/pay5.png" alt />
          </li>
          <li>
            <img src="@/assets/pay8.png" alt />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/swiper";
import MClound from "@/components/m-clound.vue";
export default {
  data() {
    return {
     
      count: 0,
      count1: 1,
      show:{
        regist:false,
        trading:false,
        navbanner:false,
      },
      scroll: '',

    };
  },
  components: { Banner, MClound },
  mounted() {
    setTimeout(() => {
      let flag = 0;
      let timmer = setInterval(() => {
        if (this.count < 350) ++this.count;
        if (this.count1 < 13) this.count1 += Number(flag++ % 15 === 0);
        if (this.count >= 350 && this.count1 >= 13) clearInterval(timmer);
      }, 5);
    }, 200);
  },
  methods: {
    
    menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        const show = this.show
        // console.log(this.scroll)
        let reacts;
        if(document.documentElement.clientWidth > 1200){
          reacts = [1300,2100,2900];
        }else{
          reacts = [1000,1400,1800];
        }
        let height = this.scroll;
        if (!show.regist) {
          let react = reacts[0]

          if ( height > react ) {
            show.regist = true
            console.log(height)
          }
        }
        if (!show.trading) {
          let react = reacts[1]
          if (height  > react) {
            show.trading = true
            console.log(height)
          }
        }
        if (!show.navbanner) {
          // react = this.$refs.navbanner.getClientRects()[0]; 
          let react = reacts[2]
          if (height > react) {
            show.navbanner = true
            console.log(height)
          }
        }
        if (show.regist && show.trading && show.navbanner) {
          window.onscroll = null
        }
      },
      regist(type) {
        this.$router.push({
          name: 'regist',
          params: {
            active: type
          }
        })
      }
  },
  activated() {
    // this.setShow();
    window.addEventListener('scroll', this.menu)
  },
  deactivated() {
    // window.onscroll = null;
    window.removeEventListener("scroll",this.menu)
  }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.cloud {
  float: left;
  margin-left: 30px;
  width: 60%;
  height: 500px;
}
.videowarp {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0px;
  z-index: 8;
}
.videomask {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
}
.video {
  width: 100%;
  vertical-align: middle;
}
.whycpt {
  margin-top: 80px !important;
  position: relative;
}
.whycpt .top {
  margin-bottom: 70px;
}
.partleft {
  float: left;
  width: 710px;
}
.whycpt .partleft {
  box-sizing: border-box;
  padding-left: 40px;
}
.pupradio2 {
  width: 150px;
  height: 40px;
  font-family: Oswald;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.whycpt .tit {
  font-family: montserrat;
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: left;
  margin-top: 0px;
}
.whycpt .artlic {
  font-family: montserrat;
  font-size: 14px;
  color: #6a6a6a;
  margin-top: 5px;
  line-height: 30px;
  margin-bottom: 60px;
}
.whycpt.cn .tit {
  font-family: montserrat;
  font-size: 20px;
  color: #000;
  font-weight: bold;
  text-align: left;
  margin-top: 0px;
}
.whycpt.cn .artlic {
  font-family: montserrat;
  font-size: 16px;
  color: #6a6a6a;
  margin-top: 5px;
  line-height: 30px;
  margin-bottom: 115px;
  margin-top: 20px;
}
.headertitle {
  font-size: 40px;
  color: #000000;
  font-family: montserratse;
  float: left;
}
.pupradio {
  width: 150px;
  height: 40px;
  float: right;
  font-family: Oswald;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.mob {
  display: none;
}
.numcount .tips {
  font-family: montserrat;
  font-size: 18px;
  color: #6a6a6a;
  display: block;
}
.numcount {
  margin-bottom: 90px;
}
.num {
  font-family: montserratse;
  font-size: 56px;
  display: block;
}
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
.partright {
    position: absolute;
    right: 0;
    top: 116px;
}

.gupao {
  margin-top: 100px;
  position: relative;
  background-image: url(./../../../public/images/bgs.png);
  padding-bottom: 200px;
  background-repeat: no-repeat;
}
.gupao .top {
  margin-bottom: 70px;
}
.gupao .art {
  width: 450px;
  line-height: 40px;
  font-size: 20px;
}
.cn .gupao .art {
  width: 450px;
  line-height: 40px;
  font-size: 20px;
}
.headertitle {
  font-size: 40px;
  color: #000000;
  font-family: montserratse;
  float: left;
}
.pupcolor {
  color: #5b0eb2;
}
.btnbox .btn p {
  color: #000;
  display: block;
}
.btnbox .btn p:hover {
  color: #fff;
}
.gupao .btnbox {
  width: 100%;
  text-align: left;
  margin-top: 20px;
}
.gupao.cn .btnbox {
  width: 100%;
  text-align: left;
  margin-top: 80px;
}
.btnbox > .btn {
  border-radius: 20px;
  width: 200px;
  height: 40px;
  border: 1px solid #5b0eb2;
  font-family: montserratse;
  background: none;
  color: #5b0eb2;
  text-align: center;
  line-height: 40px;
  font-size: 12px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-right: 20px;
  margin-top:10px;
}
.cn .btnbox > .btn {
  border-radius: 20px;
  width: 200px;
  height: 40px;
  border: 1px solid #5b0eb2;
  font-family: montserratse;
  background: none;
  color: #5b0eb2;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-right: 20px;
}
.btnbox > .btn.active {
  background: #eee8f6;
}
.btnbox > .btn.active:hover {
  background: #5b0eb2;
}
.btnbox > .btn::before {
  content: "";
  z-index: -1;
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
  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
  transition-timing-function: cubic-bezier(0.7, 0, 0.9, 1);
}
.btnbox > .btn:hover {
  color: #fff;
}
.btnbox > .btn:hover::before {
  -webkit-transform: scale3d(9, 9, 1);
}
/* .btnbox > .btn.active{background: #5b0eb2;color: #fff;margin-left: 10px} */
.gupao .partleft {
  padding-left: 50px;
}
.pad {
  position: absolute;
  background-image: url(./../../../public/images/pad.png);
  width: 736px;
  height: 519px;
  position: absolute;
  right: -50px;
  box-sizing: border-box;
  padding: 33px 64px;
}
.pad .gupiao {
  width: 604px;
  height: 453px;
  background: url(./../../../public/images/table.jpeg);
  background-size: 100% 100%;
}
.pad.cn .gupiao {
  width: 604px;
  height: 453px;
  background: url(./../../../public/images/accountbg.jpg);
  background-size: 100% 100%;
}
.imgnav {
  width: 100%;
}
.mobpad {
  display: none;
}
.trading {
  margin-top: 100px;
  position: relative;
}
.trading .headertitle {
  width: 100%;
  text-align: center;
}
.trading .tipstit {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
}
.trading .btn {
  width: 260px !important;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  margin: 20px auto;
}
.trading .imgboxs {
  height: 705px;
  position: relative;
}
.trading .imgboxs .pcpng {
  position: absolute;
  right: -100px;
  width: 1100px;
  top: 0px;
  opacity: 0.8;
}
.icons {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 650px;
  height: 530px;
}
.icons .icon {
  border-radius: 10px;
  background: #5b0eb2;
  height: 200px;
  width: 200px;
  text-align: center;
  position: absolute;
}
.icons img {
  margin-top: 40px;
  display: inline-block;
}
.icons span {
  text-align: center;
  margin-top: 10px;
  display: inline-block;
  color: #fff;
  width: 160px;
  margin: 0px auto;
  margin-top: 30px;
}
.navbanner {
  width: 100%;
  height: 420px;
  background-size: cover;
  background-image: url(./../../../public/images/sebanner.jpg);
  overflow: hidden;
}
.navbanner .title {
  width: 100%;
  font-size: 40px;
  font-family: montserrat;
  text-align: center;
  color: #fff;
  margin-top: 100px;
  line-height: 80px;
}
.yel {
  color: #d2a908;
}
.navbanner .btn {
  width: 160px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  margin: 30px auto;
  color: #fff;
}

.step {
  margin-top: 100px;
  position: relative;
}
.step .headertitle {
  width: 100%;
  text-align: center;
}
.step .stepbox {
  margin-top: 60px;
}
.step .stepbox ul li {
  float: left;
  margin-right: 30px;
}
.step .stepbox ul li:last-child {
  margin-right: 0px;
}
.step .stepbox ul li p {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 28px;
}
.stepbox .radio {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}
.stepbox .radio img {
  transition: 1s;
}
.stepbox .radio img:hover {
  transform: scale(1.2);
}
.stepicon {
  margin-top: 60px;
}
.payway {
  margin-top: 100px;
  margin-bottom: 60px;
}
.payway .headertitle {
  width: 100%;
  text-align: center;
}
.payway .paywaybox {
  width: 100%;
  margin-top: 50px;
}
.payway .paywaybox ul li {
  width: 16.6%;
  float: left;
  text-align: center;
}
.payway .paywaybox ul li img {
  height: 40px;
  display: inline-block;
}
.indSch .center{
    width: 1200px;
    margin:130px auto 0;
  }
  .indSch .center ul li{
    float: left;
    width: 19%;
    margin-right:4%;
  }
  .indSch .center ul li:first-child{
      width: 46%;
      margin-right: 12%;
  }
  .indSch .center ul li.schCen span{
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    color: #767678;
  }
  .indSch .center ul li.schCen p.linTop{
    width: 79px;
    height: 6px;
    background-color: #5b0eb2;
    margin:96px 0 43px;
  }
  .indSch .center ul li.schCen p.con{
    font-size: 24px;
    line-height: 40px;
    color: #333333;
  }
  .indSch .center ul li.schCen p.three{
    font-size: 16px;
    color: #5b0eb2;
    margin:153px 0 32px;
  }
  .indSch .center ul li.schCen p.linBot{
    width: 14px;
    height: 35px;
    background-color: #5b0eb2;
  }
  .indSch .center ul li.rigLi{
    margin-right:0;
  }
  .indSch .center ul li.rigLi p{
    font-size: 58px;
    color: #989898;
    line-height: 56px;
    font-weight: 900;
  }
  .indSch .center ul li.rigLi p span{
    display: block;
    color: #5b0eb2;
  }
  .indSch .center ul li.rigLi h6{
    font-size: 45px;
    color: #000;
    margin:125px 0 85px;
  }
  .schBot{
    width: 100%;
    height: 167px;
    background:url(../../../public/images/sch/indBotBg.png) no-repeat;
    background-size: 100% 100%;
  }
  .schBot .center{
    width: 63%;
    margin:0 auto;
  }
  .schBot .center p.fl{
    font-size: 32px;
    color: #fff;
    line-height: 40px;
    margin-top:4%;
    width: 61%;
  }
  .schBot .center div.fl{
    margin-left: 17%;
  }
  .schBot .center div.fl p{
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border:2px solid #fff;
    margin:35% 0 6%;
    text-align: center;
    font-weight: 900;
  }
  .schBot .center div.fl span{
    font-size: 27px;
    color: #fff;
    font-weight: 900;
  }
  .schBot .center div.fl a{
    color: #fff;
  }
  .fadeIn {
    @include animation(bounceInUps, 1s, 300ms);
  }
</style>
