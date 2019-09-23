<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 19:59:17
 * @Description: 支持
 -->
<template>
  <div class="learnSchool">
    <!--交易学院-->
		<div class="bigImg">
			<div class="center">
				<h6 class="emergingSchool">{{$t('school.academy')}}</h6>
				<p class="emergingBegin"><a href="#">{{$t('school.start')}}</a></p>
			</div>
		</div>
		<!--探索CPT Markets交易学院-->
		<div class="search clearfix">
			<div class="center clearfix">
				<h3>{{$t('school.explore')}}</h3>
				<p class="titCon">{{$t('school.exploreEn')}}</p>
				<ul class="clear">
					<li>
						<p><a href="#video">{{$t('school.video')}}</a></p>
						<span>{{$t('school.check')}}</span>
					</li>
					<li class="line"></li>
					<li>
						<p><a href="#know">{{$t('school.knowledge')}}</a></p>
						<span>{{$t('school.free')}}</span>
					</li>
					<li class="line"></li>
					<li>
						<p><a href="#teaTit">{{$t('school.webinars')}}</a></p>
						<span>{{$t('school.regularly')}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--视频中心-->
		<div class="video clearfix" id="video">
			<div class="center">
				<h3>{{$t('school.video')}}</h3>
				<p class="titCon">{{$t('school.videoEn')}}</p>
				<div class="vidCon clearfix">
					<div class="fl">
						<router-link to="/video"><img src="../../../public/images/sch/video1.png"/></router-link>
						<div class="conBot clear">
							<div class="fl">
								<p class="botTit">{{$t('school.exchange')}}</p>
								<span class="botTitCon">{{$t('school.exchangeEn')}}</span>
							</div>
							<p class="fr num">01</p>
						</div>
					</div>
					<ul class="fr clearfix">
						<li>
							<router-link to="/video"><img src="../../../public/images/sch/video2.png" /></router-link>
							<div class="conBot clear">
								<div class="fl">
									<p class="botTit">{{$t('school.choose')}}</p>
									<span class="botTitCon">{{$t('school.chooseEn')}}</span>
								</div>
								<p class="fr num">02</p>
							</div>
						</li>
						<li>
							<router-link to="/video"><img src="../../../public/images/sch/video3.png" /></router-link>
							<div class="conBot clear">
								<div class="fl">
									<p class="botTit">{{$t('school.time')}}</p>
									<span class="botTitCon">{{$t('school.timeEn')}}</span>
								</div>
								<p class="fr num">03</p>
							</div>
						</li>
					</ul>
				</div>
				<p class="btnMore"><router-link to="/video" style="display:block;width:100%;height:100%">{{$t('school.more')}}</router-link></p>
			</div>
		</div>
		<!--知识库-->
		<div class="know" id="know">
			<div class="center">
				<h3>{{$t('school.knowledge')}}</h3>
				<p class="titCon center">{{$t('school.knowledgeEn')}}</p>
				<ul class="basis clearfix">
					<li class="line"></li>
					<li class="liCen">
						<p class="top">{{$t('school.introduction')}}</p>
						<p class="con">{{$t('school.novice')}}</p>
					</li>
					<li class="liImg">
						<img src="../../../public/images/sch/knowledgeTop.png" alt="" />
					</li>
				</ul>
				<ul class="liConWord clearfix">
					<li>
						<p class="schooltit">{{$t('school.forex')}}</p>
						<p class="titCon">{{$t('school.fastest')}}</p>
						<p class="schcontent clearfix">
							<span class="fl"><router-link :to="{name:'Basis',params: {num: 0}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 0}}">>></router-link></span>
						</p>
					</li>
					<li>
						<p class="schooltit">{{$t('school.learn')}}</p>
						<p class="titCon">{{$t('school.basic')}}</p>
						<p class="schcontent clearfix">
							<span class="fl"><router-link :to="{name:'Basis',params: {num: 1}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 1}}">>></router-link></span>
						</p>
					</li>
					<li>
						<p class="schooltit">{{$t('school.wave')}}</p>
						<p class="titCon">{{$t('school.driving')}}</p>
						<p class="schcontent clearfix">
							<span class="fl"><router-link :to="{name:'Basis',params: {num: 2}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 2}}">>></router-link></span>
						</p>
					</li>
					<li>
						<p class="schooltit">{{$t('school.clearly')}}</p>
						<p class="titCon">{{$t('school.focuse')}}</p>
						<p class="schcontent clearfix">
							<span class="fl"><router-link :to="{name:'Basis',params: {num: 3}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 3}}">>></router-link></span>
						</p>
					</li>
					<li>
						<p class="schooltit">{{$t('school.pairs')}}</p>
						<p class="titCon">{{$t('school.overview')}}</p>
						<p class="schcontent clearfix">
						  <span class="fl"><router-link :to="{name:'Basis',params: {num: 4}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 4}}">>></router-link></span>
						</p>
					</li>
					<li>
						<p class="schooltit">{{$t('school.walk')}}</p>
						<p class="titCon">{{$t('school.key')}}</p>
						<p class="schcontent clearfix">
							<span class="fl"><router-link :to="{name:'Basis',params: {num: 5}}">{{$t('school.detail')}}</router-link></span>
							<span class="fr"><router-link :to="{name:'Basis',params: {num: 5}}">>></router-link></span>
						</p>
					</li>
				</ul>
				<ul class="advanced clearfix">
					<li>
						<img src="../../../public/images/sch/knowledgeCen.png" />
					</li>
					<li>
						<p class="schooltit">{{$t('school.operation')}}</p>
						<p class="line"></p>
						<p class="con">{{$t('school.analysis')}}</p>
					</li>
				</ul>
				<p class="dian">&bull;</p>
				<p class="dian">&bull;</p>
				<p class="dian">&bull;</p>
				<ul class="list clearfix">
          <li class="one" @click="article(0)">
            <a href="javascript:void(0)">
              <p class="top">1</p>
              <p class="cen">{{$t('school.strategy')}}</p>
              <p class="bot">>></p>
            </a>
          </li>
          <li class="two" @click="article(1)">
            <a href="javascript:void(0)">
              <p class="top">2</p>
              <p class="cen">{{$t('school.fund')}}</p>
              <p class="bot">>></p>
            </a>
          </li>
          <li class="three" @click="article(2)">
            <a href="javascript:void(0)">
              <p class="top">3</p>
              <p class="cen">{{$t('school.method')}}</p>
              <p class="bot">>></p>
            </a>
          </li>
          <li class="four" @click="article(3)">
            <a href="javascript:void(0)">
              <p class="top">4</p>
              <p class="cen">{{$t('school.reflexive')}}</p>
              <p class="bot">>></p>
            </a>
          </li>
          <li class="five" @click="article(4)">
           <a href="javascript:void(0)">
              <p class="top">5</p>
              <p class="cen">{{$t('school.candlestick')}}</p>
              <p class="bot">>></p>
            </a>
          </li>
        </ul>
			</div>
		</div>
    <!--A-Z-->
    <div class="az">
      <div class="center">
        <div class="schooltit clearfix">
          <p class="fl eng">A-Z</p>
          <p class="fl chi">{{$t('school.glossary')}}</p>
        </div>
        <ul id="goroute" class="clearfix">
          <li v-for="(list,index) in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')" :key="index">
            <router-link :to="{name:'AZ',params:{freezeMon:index}}" replace>{{list}}</router-link>
          </li>
        </ul>
        <div class="con clearfix">
          <p class="fl">A</p>
          <div class="fr">
            <p>{{$t('school.accrual')}}</p>
            <p>{{$t('school.value')}}A</p>
            <p>{{$t('school.adjustment')}}</p>
            <p class="botDian">&bull;&bull;&bull;&bull;&bull;&bull;</p>
          </div>
        </div>
      </div>
    </div>
    <!--网络讲座-->
    <div class="teaTit" id="teaTit">
      <div class="center">
        <h3>{{$t('school.webinars')}}</h3>
        <p class="titCon">{{$t('school.webinarsEn')}}</p>
      </div>
    </div>
    <!--PC-->
    <div class="teaBg" v-show="enBool == true" >
      <div class="center clearfix">
        <div class="fl">
          <img src="../../../public/images/sch/teaTop.png" alt />
          <p class="sec">纵观行情走势 解读交易密码 尽享行业先机</p>
          <div class="cenWord clearfix">
            <img src="../../../public/images/sch/teaCen.png" class="fl" />
            <p class="fr">
              高级
              <span>分享平台指南</span>
            </p>
          </div>
          <p class="bot">
            TALK
            <span>策略</span>
          </p>
        </div>
        <div class="fr">
          <p class="fl">首席分析师</p>
          <p class="fr">2014-2017年连续3年荣获中国最佳分析师殊荣</p>
        </div>
      </div>
    </div>
    <!--Phone-->
    <div class="teaBgPh" v-show="enBool == true">
      <div class="center">
        <div class="topDiv clearfix">
          <img src="../../../public/images/sch/tea.png" class="fl" />
          <div class="fr">
            <p class="fl">首席分析师</p>
            <p class="fr">2014-2017年连续3年荣获中国最佳分析师殊荣</p>
          </div>
        </div>
        <div class="botDiv">
          <img src="../../../public/images/sch/teaTop.png" alt />
          <p class="sec">纵观行情走势 解读交易密码 尽享行业先机</p>
          <div class="cenWord clearfix">
            <img src="../../../public/images/sch/teaCen.png" class="fl" />
            <p class="fl">
              高级
              <span>分享平台指南</span>
            </p>
          </div>
          <p class="bot">
            TALK
            <span>策略</span>
          </p>
        </div>
      </div>
    </div>

    <!-- enpc -->
    <div class="teaBg enTeacher" v-show="enBool == false" >
      <div class="center clearfix">
        <div class="fl">
          <p class="sec">The voice of <br/> Forex Market</p>
          <div class="cenWord clearfix">
           Throughout market movements, <br>unscramble trading password to enjoy <br> the industry opportunity
          </div>
        </div>
        <div class="fr">
          <p class="fr"></p>
          <p class="fr">In 2014-2017, he won the title of best analyst in China for three consecutive years</p>
        </div>
      </div>
    </div>
    <!--enPhone-->
    <div class="enSysbol mb" v-show="enBool == false">
        <div class="center clearfix">
          <div class="fl">
            <p>The voice of Forex Market</p>
            <span>Throughout market movements, unscramble trading password to enjoy the industry opportunity</span>
          </div>
          <img class="fl" src="/images/sch/tea.png" alt/>
          <div class="fr">
            <p class="line"></p>
            <p class="con">In 2014-2017, he won the title of best analyst in China for three consecutive years</p>
          </div>
        </div>
    </div>

    <div class="teaCon clearfix">
      <div class="fl">
        <p class="name">{{$t('school.ray')}}</p>
        <p class="line"></p>
        <p class="eng">CHIEF ANALYST</p>
      </div>
      <div class="fr">
        <p class="line"></p>
        <p class="con">{{$t('school.canada')}}</p>
        <p class="con">{{$t('school.work')}}</p>
        <p class="con">{{$t('school.invest')}}</p>
        <p class="con">{{$t('school.media')}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data(){
      return{
        enBool:false,
      }
    },
    mounted(){
      if( this.$i18n.locale == 'en' ){
        this.enBool = false;
      }else{
        this.enBool = true;
      }
    },
    methods:{
      goRouter(url){
        this.$router.push({name:'Basis', params: {url: url}})
      },
      article(key) {
        this.$router.push({
          name: 'introduction',
          params: {
            id: key
          }
        })
      }
    },
}
</script>
<style lang="scss">
.fr {
  float: right;
}
.fl {
  float: left;
}

.emergingSchool {
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  animation-fill-mode: forwards;
}
.emergingBegin {
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 500ms;
  animation-fill-mode: forwards;
}
@media screen and (min-width: 768px) {
  /*交易学院*/
  .bigImg {
    width: 100%;
    background: url(../../../public/images/sch/bigImg.png) no-repeat;
    background-size: 100%;
    .center {
      width: 60%;
      margin: 0 auto;
      padding: 10% 0 7%;
      text-align: center;
      color: #fff;
      h6 {
        font-size: 60px;
      }
      p {
        font-size: 20px;
        width: 260px;
        line-height: 48px;
        background-color: #5b0eb2;
        margin: 38px auto 0;
        border-radius: 36px;
        a {
          color: #fff;
        }
      }
    }
  }
  /*探索CPT cTrader交易学院*/
  .search {
    width: 100%;
    background-color: #f9f9f9;
    .center {
      width: 63%;
      margin: 0 auto;
      padding: 8% 0 5%;
      h3 {
        font-size: 40px;
        color: #000000;
        text-align: center;
      }
      p.titCon {
        font-size: 14px;
        color: #aaaaaa;
        text-align: center;
        margin: 25px auto 75px;
      }
      ul{
        li {
          float: left;
          width: 26%;
          p {
            width: 100%;
            line-height: 61px;
            text-align: center;
            border: 1px solid #222222;
            border-radius: 10px;
            color: #222222;
            font-size: 28px;
            font-weight: 800;
            &:hover {
              background-color: #5b0eb2;
              color: #fff;
              border: 1px solid #5b0eb2;
              cursor: pointer;
              a {
                color: #fff;
              }
            }
            a{
              color:#222222;
            }
          }
          span {
            font-size: 14px;
            line-height: 22px;
            color: #7f7f7f;
            text-align: center;
            display: inline-block;
            margin: 24px auto 0;
          }
        }
        li.line {
          width: 2px;
          height: 24px;
          background-color: #222222;
          margin: 1.5% 5% 0 5%;
        }
      } 
    }
  }
  
  /*视频中心*/
  .video{
    .center {
      width: 63%;
      margin: 5% auto 5%;
      h3 {
        font-size: 40px;
        color: #000000;
        text-align: center;
      }
      p.titCon {
        font-size: 14px;
        color: #606060;
        text-align: center;
        margin: 21px auto 47px;
      }
      .vidCon{
        div.fl {
          width: 66%;
          overflow: hidden;
          a{
            img{
              width: 100%;
              cursor: pointer;
              transition: all 0.6s;
              &:hover{
                transform: scale(1.05);
              }
            }
          }
        }
        .conBot{
          .fl {
            width: 70%;
          }
        }
        .botTit {
          font-size: 18px;
          color: #0d0d0d;
          margin: 19px 0 13px;
          margin-left: 10%;
        }
        .botTitCon {
          display: inline-block;
          font-size: 14px;
          color: #a2a2a2;
          margin-left: 10%;
        } 
        p.num {
          font-size: 25px;
          color: #e0e0e0;
          line-height: 71px;
          margin-right: 3%;
        }
        ul {
          width: 30%;
          li {
            overflow: hidden;
            img{
              width: 100%;
              cursor: pointer;
              transition: all 0.6s;
              &:hover{
                transform: scale(1.05);
              }
            }
          }
          li:last-child {
            margin-top: 36px;
          }
        }
      } 
      p.btnMore {
        font-size: 14px;
        color: #222222;
        width: 160px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #222222;
        border-radius: 10px;
        margin: 38px auto 150px;
        a {
          color: #222222;
        }
      }
    }
  }
  /*知识库*/
  .know{
    .center {
      width: 63%;
      margin: 0 auto;
      h3 {
        font-size: 40px;
        color: #000000;
        text-align: center;
      }
      p.titCon {
        font-size: 14px;
        color: #606060;
        margin: 21px auto 47px;
        font-family: Light;
      }
      p.center{
        text-align: center;
      }
      ul.basis{
        li {
          float: left;
          width: 50%;
        }
        li.line {
          width: 84px;
          height: 2px;
          background-color: #5b0eb2;
          margin: 12px 22px 0 57px;
        }
        li.liCen{
          p.top {
            font-size: 28px;
            margin-bottom: 39px;
            color: #000;
            font-family: Light;
          }
          p.con {
            font-size: 18px;
            line-height: 32px;
            color: #707070;
            font-family: Light;
          }
        }
        li.liImg {
          width: 30%;
        } 
      } 
    }
  } 
  .basis{
    li.liImg{
      img {
        margin: 41px 0 0 174px;
      }
    }
  } 
  .know{
    .center{
      > ul.liConWord {
        width: 83%;
        margin: 61px auto 91px;
        li {
          float: left;
          width: 25%;
          margin: 0 8% 39px 0;
          border-top: 1px solid #ececec;
          p.schooltit {
            color: #000000;
            font-size: 18px;
            padding: 19px 0;
            font-family: Light;
          }
          p.titCon {
            color: #8c8c8c;
            font-size: 16px;
            margin-bottom: 26px;
            font-family: Light;
          }
          p.schcontent {
            color: #000000;
            font-size: 14px;
            font-family: Light;
            span.fr {
              margin-right: 15%;
              display: none;
              font-family: Light;
            }
          }
          &:hover {
            border-top: 1px solid #5b0eb2;
            p.schcontent{
              span.fr {
                display: inline-block;
              }
              span a {
                color: #5b0eb2;
              }
            }
          }
        }
      }
      > ul.advanced {
        width: 80%;
        margin: 50px auto;
        li {
          float: left;
          &:last-child {
            width: 56%;
            margin: 9px 0 0 5%;
          }
          p.schooltit {
            font-size: 28px;
            font-family: Light;
          }
          p.line {
            width: 112px;
            height: 2px;
            background-color: #5b0eb2;
            margin: 15px 0 33px;
          }
          p.con {
            font-size: 18px;
            line-height: 32px;
            color: #707070;
          }
        }
      }
      > p.dian {
        font-size: 23px;
        line-height: 10px;
        color: #5b0eb2;
        text-align: center;
      }
      > ul.list{
        li {
          float: left;
          width: 18%;
          height: 174px;
          margin: 43px 1% 151px;
          color: #fff;
          a {
            color: #fff;
          }
          p.top {
            font-size: 20px;
            padding: 20px 0 0 23px;
          }
          p.cen {
            width: 90%;
            font-size: 18px;
            line-height: 25px;
            margin: 23px 0 4px 23px;
          }
          p.bot {
            margin-left: 80%;
          }
         
        }
        li.one {
          background: url(../../../public/images/sch/kno1.png) no-repeat;
          background-size: 100%;
        }
        li.two {
          background: url(../../../public/images/sch/kno2.png) no-repeat;
          background-size: 100%;
        }
        li.three {
          background: url(../../../public/images/sch/kno3.png) no-repeat;
          background-size: 100%;
          p.cen {
            margin: 12px 0 -7px 23px;
          }
        }
        li.four {
          background: url(../../../public/images/sch/kno4.png) no-repeat;
          background-size: 100%;
          p.cen {
            margin: 12px 0 -7px 23px;
          }
        }
        li.five {
          background: url(../../../public/images/sch/kno5.png) no-repeat;
          background-size: 100%;
        }
        li:hover {
            background: url(../../../public/images/sch/know.png) no-repeat;
            background-size: 100%;
          }
      }
    } 
  } 

  /*A-Z*/
  .az{
    .center {
      width: 63%;
      margin: 0 auto;
      > div.schooltit{
        .eng {
          width: 20%;
          font-size: 28px;
          color: #000;
          font-style: italic;
          margin: 2% 0 0 10%;
        }
        .chi {
          width: 70%;
          font-size: 40px;
          color: #000;
          padding-bottom: 70px;
          border-bottom: 1px solid #171717;
          font-weight: 900;
        }
      }
      > ul {
        margin-top: 30px;
        li {
          float: left;
          width: 45px;
          line-height: 45px;
          text-align: center;
          border-right: 1px solid #f4f5f7;
          border-bottom: 1px solid #f4f5f7;
          border-top: 1px solid #f4f5f7;
          color: #c9c9c9;
          font-family: MON;
          font-weight: 900;
          a {
            color: #c9c9c9;
            font-size: 16px;
          }
          &:first-child {
            color: #000;
            border-left: 1px solid #f4f5f7;
            a {
              color: #000;
            }
          }
        }
      } 
      > .con {
        margin-top: 77px;
        > p.fl {
          font-family: ALB;
          font-size: 73px;
          color: #5b0eb2;
          font-style: italic;
          margin-left: 10%;
        }
        > div.fr {
          width: 77%;
          font-size: 17px;
          line-height: 48px;
          color: #333333;
          margin-left: 5%;
        }
        p{
          font-size: 16px;
        }
        p.botDian {
          letter-spacing: 21px;
          font-weight: bold;
        }
      }
    }
  } 
  /*网络讲座*/
  .teaTit{
    .center {
      width: 63%;
      margin: 8% auto;
      > h3 {
        font-size: 40px;
        color: #000000;
        text-align: center;
      }
      > p.titCon {
        font-size: 14px;
        color: #606060;
        text-align: center;
        margin: 21px auto 47px;
      }
    }
  } 

  .teaBgPh {
    display: none;
  }
  .teaBg {
    width: 100%;
    background: url(../../../public/images/sch/teacher.png) no-repeat;
    background-size: 100%;
    .center {
      width: 50%;
      margin: 0 auto;
      padding: 5% 0 4%;
      > div.fl {
        border: 1px solid #f9f9f9;
        padding: 30px 23px 21px;
        p.sec {
          font-size: 12px;
          margin: 7px auto 13px;
          color: #fffefc;
        }
        .cenWord{
          p {
            font-size: 49px;
            color: #fffefc;
            margin-bottom: 8px;
            span {
              display: block;
              font-size: 16px;
            }
          }
        } 
        > p.bot {
          font-size: 45px;
          color: #fffefc;
          span {
            font-size: 49px;
          }
        }
      }
      > div.fr {
        position: relative;
        right: 5%;
        top: 20%;
        > p.fl {
          font-size: 20px;
          color: #fffefc;
          writing-mode: tb-rl;
          position: absolute;
          right: 155%;
          top: 59%;
        }
        > p.fr {
          font-size: 12px;
          color: #c5c5c5;
          writing-mode: tb-rl;
          margin-top: 18%;
        }
      }
    }
  }
  .teaCon {
    width: 60%;
    margin: 5% auto 8%;
    > div.fl{
      > p.name {
        font-size: 70px;
        color: #8b8b8b;
        margin-top: 49px;
      }
      > p.line {
        width: 131px;
        height: 17px;
        background-color: #5b0eb2;
        margin-bottom: 37px;
      }
      > p.eng {
        font-size: 64px;
        color: #5b5b5b;
        font-family: MON;
      }
    } 
    > div.fr {
      width: 50%;
      > p.line {
        width: 42px;
        height: 1px;
        background-color: #4a4a4a;
        margin-bottom: 27px;
      }
      > p.con {
        font-size: 14px;
        color: #606060;
        line-height: 28px;
      }
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px) {
    .bigImg .center {
      padding: 5% 0 7%;
    }
    .search .center {
      width: 90%;
    }
    .video .center {
      width: 84%;
    }
    .video .center > .vidCon > ul li:last-child {
      margin-top: 25px;
    }
    .know .center {
      width: 90%;
    }
    .know .center > ul.list li {
      width: 19%;
      margin: 43px 0% 151px;
    }
    .know .center > ul.list li p.cen {
      width: 82%;
    }
    .know .center > ul.advanced {
      width: 90%;
    }
    .az .center {
      width: 100%;
    }
    .az .center > div.schooltit .eng {
      margin: 2% 0 0 21%;
    }
    .az .center > div.schooltit .chi {
      width: 40%;
    }
    .az .center > ul {
      margin: 30px 3% 0;
    }
    .teaBg .center {
      width: 64%;
      padding: 1% 0;
    }
    .teaCon {
      width: 90%;
    }
  }
  
}
.teaBg.enTeacher{
  .center{
    .fl{
      border:none;
      p.sec{
        color: #fffefc;
        font-size: 40px;
        font-family: MNJ;
        margin-bottom: 43px;
      }
      div.cenWord{
        color: #dedede;
        font-size: 16px;
        font-family: MONLig;
        line-height: 31px;
      }
    }
    div.fr{
      width: 30%;
      margin: 4% 12% 0 0;
      right:-25%;
      p{
        width:100%;
        writing-mode: horizontal-tb;
        font-size: 14px;
        line-height: 26px;
        color: #c4c4c4;
        font-family: MONLig;
        &:first-child{
          width: 139px;
          height: 1px;
          background-color: #6a2eaf;
          margin: 33% 0 0 0%;
          float: none;
        }
      }
      
    }
  }
}
.learnSchool{
  .enSysbol{
    width: 100%;
    height:309px;
    color:#fff;
    background: url(../../../public/images/sch/teaBg.png) no-repeat;
    .center{
      width: 100%;
      margin: 0 auto;
      padding: 5% 0 6%;
      >div.fl{
        width: 43%;
        margin-left: 4%;
        p{
          color: #fffefc;
          font-size: 20px;
          font-family: MNJ;
          line-break: 30px;
          margin-bottom: 30px;
        }
        span{
          color: #dedede;
          font-size: 13px;
          font-family: MONLig;
          line-height: 15px;
        }
      }
      >img{
        width: 49%;
      }
      >div.fr{
        width: 69%;
        margin: -23% 3% 0 0;
        p.line{
          width: 100%;
          height: 0.1rem;
          background-color: #6a2eaf;
          margin: 33% 0 8px 0%;
          display: block;
        }
        p.con{
            font-size: 10px;
          line-height: 15px;
          color: #c4c4c4;
          font-family: MONLig;
        }
      }
    }
  }
}
</style>