<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 12:42:19
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 21:34:19
 * @ Description:首页
 -->

<template>
  <div>
    <!-- 视频 -->
    <div class="videowarp">
      <div class="videomask"></div>
      <video class="video" id="video" autoplay loop width="100%" muted poster>
        <source src="../../../public/images/video/gp.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- 轮播图 -->
    <Banner :banner="banner"  style="z-index:1000;"></Banner>
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
  <div class="warp gupao clearfix cn emerging">
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
    <img class="mobpad" :src='`${publicPath}/images/padimg.jpg`' alt="">
  </div>
  <img class="imgnav"  :src='`${publicPath}/images/imgnav.jpg`' alt="">

      <!-- 交易平台 -->
      <div class="warp trading clearfix emerging">
        <div class="top clearfix">
          <div class="headertitle">
            {{$t('home.station')}}
          </div>
        </div>
        <div class="tipstit">{{$t('home.ship')}}</div>
        <div class="grid btn pupradio2" id="tardingp">
          <div class="grid__item theme-1" style="width: 250px">
            <!-- <button class="action"><svg class="icon icon--rewind">
                <use xlink:href="#icon-rewind"></use>
              </svg></button> -->
            <button class="particles-button" style="width: 250px">{{$t('home.open')}}</button>
          </div>
        </div>
        <!-- <div class="btn">start trading now</div> -->
        <div class="imgboxs">
          <img class="pcpng" src="../../../public/images/pc.png" alt="">
          <MClound />
          <!-- 漂浮模式 -->
          <!-- <div class="icons">
            <div class="icon">
              <img src="@/assets/icon2.png" alt="">
              <span>{{$t('home.many')}}</span>
            </div>
            <div class="icon">
              <img src="@/assets/icon6.png" alt="">
              <span>{{$t('home.clear')}}</span>
            </div>
            <div class="icon">
              <img src="@/assets/icon1.png" alt="">
              <span>{{$t('home.time')}}</span>
            </div>
            <div class="icon">
              <img src="@/assets/icon3.png" alt="">
              <span>{{$t('home.img')}}</span>
            </div>
            <div class="icon">
              <img src="@/assets/icon4.png" alt="">
              <span>{{$t('home.copy')}}</span>
            </div>
            <div class="icon">
              <img src="@/assets/icon5.png" alt="">
              <span>{{$t('home.AI')}}</span>
            </div>

          </div> -->
          <!-- <div style="text-align:left;">
            <svg :width='width' :height='height' @mousemove='listener($event)'>
                <a :href="tag.href" v-for='(tag,index) in tags' :key="index">
                    <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)' v-html="tag.text"></text>
                </a>
            </svg>
        
          </div> -->
        </div>
      </div>
    <!-- 邀请 -->
      <div class="navbanner emerging">
        <div class="title"><span class="blod">{{$t('home.friend')}}</span> <br>{{$t('home.invit')}}<span class="yel">{{$t('home.makeMoney')}}</span></div>
        <div class="grid btn pupradio2" id="join">
          <div class="grid__item theme-1">
            <!-- <button class="action"><svg class="icon icon--rewind">
                <use xlink:href="#icon-rewind"></use>
              </svg></button> -->
          <button class="particles-button">{{$t('home.jionUs')}}</button>
          </div>
        </div>
        <!-- <div class="btn">JOIN US</div> -->
      </div>

    <!-- 工具 -->
     <div class="indSch">
        <div class="center">
            <ul class="clear">
                <li>
                    <img src="../../../public/images/sch/indTopLe.png"/>
                </li>
                <li class="schCen">
                    <span>一系列免费的外汇学习工具。</span>
                    <p class="linTop"></p>
                    <p class="con">视频中心</p>
                    <p class="con">知识库</p>
                    <p class="con">网络讲座</p>
                    <p class="three">3大教育板块</p>
                    <p class="linBot"></p>
                </li>
                <li class="rigLi">
                    <p>TRADING <span>COLLEGE</span></p>
                    <h6>交易学院</h6>
                    <img src="../../../public/images/sch/indTopRig.png"/>
                </li>
            </ul>
        </div>
    </div>

    <!-- <div class="schBot">
        <div class="center clear">
            <p class="fl">利用我们的全套免费教育工具和资源，提升您的交易技能。</p>
            <div class="fl">
                <a href="index.php?m=P&a=school">
                    <p>+</p>
                    <span>查看更多</span>
                </a>
            </div>
        </div>
    </div> -->

    <!-- 注册流程 -->
    <div class="step warp clearfix emerging">
      <div class="top clearfix">
        <div class="headertitle">
        仅需4步即可在CPT Markets交易
        </div>
      </div>
      <div class="stepbox">
        <ul>
          <li>
            <div class="radio">
              <img src="@/assets/setp1.png" alt="">
            </div>
            <p>1. 注册</p>
          </li>
          <li>
            <img class="stepicon" src="@/assets/step5.png" alt="">
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp2.png" alt="">
            </div>
            <p>2. 认证</p>
          </li>
          <li>
            <img class="stepicon" src="@/assets/step5.png" alt="">
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp3.png" alt="">
            </div>
            <p>3. 入金</p>
          </li>
          <li>
            <img class="stepicon" src="@/assets/step5.png" alt="">
          </li>
          <li>
            <div class="radio">
              <img src="@/assets/setp4.png" alt="">
            </div>
            <p>4. 交易</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="payway warp clearfix emerging">
      <div class="top clearfix">
        <div class="headertitle">
        我们接受
        </div>
      </div>
      <div class="paywaybox">
        <ul>
          <li>
            <img src="@/assets/pay1.png" alt="">
          </li>
          <li>
            <img src="@/assets/pay2.png" alt="">
          </li>
          <li>
            <img src="@/assets/pay3.png" alt="">
          </li>
          <li>
            <img src="@/assets/pay4.png" alt="">
          </li>
          <li>
            <img src="@/assets/pay5.png" alt="">
          </li>
          <!-- <li>
            <img src="@/assets/pay6.png" alt="">
          </li>
          <li>
            <img src="@/assets/pay7.png" alt="">
          </li> -->
          <li>
            <img src="@/assets/pay8.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/swiper';
import MClound from '@/components/m-clound.vue';
export default {
  data(){
    return {
      publicPath: process.env.BASE_URL,
      banner:[
        {
          "img": require('@/assets/bannerfont_03.png')
        },
        {
          "img": require('../../../public/images/banner.jpg')
        },
        {
          "img": require('../../../public/images/banner.jpg')
        },
        {
          "img": require('../../../public/images/banner.jpg')
        },
        {
          "img": require('../../../public/images/banner2cn.jpg')
        },
      ],
      width: 650,
      height: 530,
      tagsNum:10,
      RADIUS:200,
      speedX:Math.PI/360,
      speedY:Math.PI/360,
      tags: [],
      img:require('@/assets/icon5.png'),
    }
  },
  components: { Banner, MClound },
  computed:{
      CX(){
          return this.width/2;
      },
      CY(){
          return this.height/2;
      }
  },
  created(){//初始化标签位置
      let tags=[];
      for(let i = 0; i < this.tagsNum; i++){
          let tag = {};
          let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
          let a = Math.acos(k);
          let b = a * Math.sqrt(this.tagsNum * Math.PI);
          // tag.text = `<span>${this.$t('home.AI')}</span>`
          tag.text = "abc"
          tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
          tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
          tag.z = this.RADIUS * Math.cos(a);
          // tag.href = 'https://imgss.github.io';
          tags.push(tag);
      }
      this.tags = tags;
      console.log(tags);
  },
   mounted(){//使球开始旋转
      setInterval(() => {
          this.rotateX(this.speedX);
          this.rotateY(this.speedY);
      }, 17)
  },
  methods:{
    rotateX(angleX){
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        for(let tag of this.tags){
            var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
            var z1 = tag.z * cos + (tag.y- this.CY) * sin;
            tag.y = y1;
            tag.z = z1;
        } 
    },
    rotateY(angleY){
        var cos = Math.cos(angleY);
        var sin = Math.sin(angleY);
        for(let tag of this.tags){
            var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
            var z1 = tag.z * cos + (tag.x-this.CX) * sin;
            tag.x = x1;
            tag.z = z1;
        } 
    },
    listener(event){//响应鼠标移动
        var x = event.clientX - this.CX;
        var y = event.clientY - this.CY;
        this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.02, x*0.0001) : Math.max(-this.RADIUS*0.002, x*0.0001);
        this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.02, y*0.0001) : Math.max(-this.RADIUS*0.002, y*0.0001); 
    }
  },
}
</script>
<style lang="scss">
.videowarp{width: 100%;height:auto;position: absolute;top: 155px;left: 0px;z-index: 8;}
.videomask{width:100%;height: 100%;position: absolute;background: rgba(0, 0, 0, 0.8);z-index: 10}
.video{width: 100%;vertical-align: middle;}
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

.gupao{margin-top: 100px;position: relative;background-image: url(../../../public/images/bgs.png);padding-bottom: 200px;background-repeat:no-repeat }
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
.pad{position: absolute;background-image:url(../../../public/images/pad.png);width: 736px;height: 519px;position: absolute;right: -50px;box-sizing: border-box;padding: 33px 64px;}
.pad .gupiao{width: 604px;height: 453px;background: url(../../../public/images/table.jpeg) ;background-size: 100% 100%}
.pad.cn .gupiao{width: 604px;height: 453px;background: url(../../../public/images/accountbg.jpg);background-size: 100% 100%}
.imgnav{width: 100%;}
.mobpad{display: none}
.trading{margin-top: 100px;position: relative}
.trading .headertitle{width: 100%;text-align: center;}
.trading .tipstit{width: 100%;margin-top: 20px;text-align: center;font-size: 24px}
.trading .btn{width: 260px !important;height: 40px;line-height: 40px;;color: #fff;border-radius: 20px;text-align: center;margin: 20px auto}
.trading .imgboxs{height: 705px;position: relative;}
.trading .imgboxs .pcpng{position: absolute;right: -100px;width: 1100px;top: 0px;opacity: 0.8;}
.icons{position: absolute;left: 0px;top: 0px;width: 650px;height: 530px;}
.icons .icon{border-radius: 10px;background: #5b0eb2;height: 200px;width: 200px;text-align: center;position: absolute;}
.icons img{margin-top: 40px;display: inline-block;}
.icons span{text-align: center;margin-top: 10px;display: inline-block;color: #fff;width: 160px;margin: 0px auto;margin-top: 30px}
.navbanner{width: 100%;height: 420px;background-size:cover;background-image: url(../../../public/images/sebanner.jpg);overflow: hidden}
.navbanner .title{width: 100%;font-size: 40px;font-family:montserrat;text-align: center;color: #fff;margin-top: 100px;line-height: 80px}
.yel{color: #d2a908}
.navbanner .btn{width: 160px;height: 40px;;text-align: center;line-height: 40px;border-radius: 20px;margin: 30px auto;color: #fff}

.step{margin-top: 100px;position: relative}
.step .headertitle{width: 100%;text-align: center;}
.step .stepbox{margin-top: 60px}
.step .stepbox ul li{float: left;margin-right: 30px}
.step .stepbox ul li:last-child{margin-right: 0px}
.step .stepbox ul li p{width: 100%;text-align: center;margin-top: 30px;font-size: 28px}
.stepbox .radio{width: 200px;height: 200px;border-radius: 50%;overflow: hidden;}
.stepbox .radio img{transition: 1s}
.stepbox .radio img:hover{transform: scale(1.2)}
.stepicon{margin-top: 60px}
.payway{margin-top: 100px}
.payway .headertitle{width: 100%;text-align: center}
.payway  .paywaybox{width: 100%;margin-top: 50px}
.payway  .paywaybox ul li{width: 16.6%;float: left;text-align: center}
.payway  .paywaybox ul li img{height:40px;display: inline-block}
// .emerging {
//   font-size: 75px;
//   color: #000;
//   line-height: 223px;
//   font-family: montserratse;
//   width: 100%;
//   text-align: center;
//   margin-top: 10px;
//   opacity: 0;
//   transform: translate(0, 50px);
//   animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
//   animation-fill-mode: forwards;
// }
</style>