
<template>
    <div class="analysts" :class="lang=='vn'?'vitnam':null">
		<!--右边聊天-->
		<div class="main">
			<a href="#wheel8" class="wheel-button w"><img src="@/assets/analysts/rig1.png"/></a>
			<ul id="wheel8" data-angle="W" class="wheel">
				<li class="item"><a href="http://wpa.qq.com/msgrd?v=3&uin=1797460464&site=qq&menu=yes" target="_blank"><img src="@/assets/analysts/iconQQ.png"/></a></li>
				<li class="item"><a href="https://t.me/cptmarkets" target="_blank"><img src="@/assets/analysts/telgr.png"/></a></li>
				<li class="item"><a href="https://api.whatsapp.com/send?phone=85266455753" target="_blank"><img src="@/assets/analysts/whatsApp.png"/></a></li>
				<li class="item"><a href="skype:live:a0f3ef5d38e93eff?chat" target="_blank"><img src="@/assets/analysts/iconSKYPE.png"/></a></li>
				<li class="item wxRig"><a><img src="@/assets/analysts/iconWX.png"/></a><img src="@/assets/analysts/wxRig.png" class="wxEw" /></li>
			</ul>
		</div>
		<!--导航-->
		<div class="nav">
            <div class="center clearfix">
                <router-link to="/home"><img src="@/assets/analysts/logo.png" class="fl" /></router-link>
                <p class="fl clearfix">
                    <span class="fl">
                        <img src="@/assets/analysts/tel.png" />&nbsp;&nbsp;400-100-1103
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="fr">
                        <img src="@/assets/analysts/xf.png"/>&nbsp;&nbsp;cs@cptmarkets.com
                    </span>
                </p>
                <div class="fr downbox" @mouseenter="bool = true" @mouseleave="bool = false">
                    <div class="topShow" >
						<img :src="langImgSrc" class="topImg" alt />
                        <img src="@/assets/analysts/pula.png" class="pula" />
                    </div>
                    
                    <div class="box" v-show="bool">
                        <div class="arrows"></div>
                        <ul>
							<li class="clearfix" @click="changeLang('en')">
                                    <img src="@/assets/analysts/UK.png"/>
                                    <span>English</span>
                            </li>
                            <li class="clearfix" @click="changeLang('cn')">
                                    <img src="@/assets/analysts/china.png"/>
                                    <span>中文</span>
                            </li>
                            <li class="clearfix" @click="changeLang('vn')">
                                    <img src="@/assets/analysts/vietnam.png"/>
                                    <span>Tiếng Việt</span>
                            </li>
                            <li class="clearfix" @click="changeLang('in')">
                                    <img src="@/assets/analysts/Indonesia.png"/>
                                    <span>Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		<!--PC端显示ban-->
		<div class="banBig">
			<div class="center clear">
				<div class="fl">
					<p :class="lang=='vn'?'vitnamFont':null">{{langData.team}}<br>{{langData.help}}<br><span>{{langData.know}}</span></p>
					<ul>
						<li class="clear">
							<img src="@/assets/analysts/duihao.png" class="fl"/>
							<p :class="lang=='vn'?'vitnam':null" class="fl">{{langData.daily}}</p>
						</li>
						<li class="clear">
							<img src="@/assets/analysts/duihao.png" class="fl"/>
							<p :class="lang=='vn'?'vitnam':null" class="fl">{{langData.regular}}</p>
						</li>
						<li class="clear">
							<img src="@/assets/analysts/duihao.png" class="fl"/>
							<p :class="lang=='vn'?'vitnam':null" class="fl">{{langData.online}}</p>
						</li>
					</ul>
				</div>
				<div class="fr" id="header">
					<p>{{langData.apply}}</p>
					<input type="text" :placeholder="langData.FirstName" name = 'first_name' id = 'first_name'/>
						<input type="text" :placeholder="langData.LastName"  name = 'last_name' id = 'last_name'/>
						<select id="queryType"  name="queryType" v-model="cmd" @change="doChange()">
							<option value="1"  name="queryType">{{langData.Indonesia}}</option>  
							<option value="2"  name="queryType">{{langData.Vietnam}}</option>   
							<option value="3" name="queryType">{{langData.Thailand}}</option>   
							<option value="4" name="queryType">{{langData.Singapore}}</option>  
							<option value="5" name="queryType">{{langData.Malaysia}}</option>  
							<option value="6" name="queryType">{{langData.Philippines}}</option> 
							<option value="7" name="queryType">{{langData.Cambodia}} </option> 
							<option value="8" name="queryType">{{langData.Burma}}</option>   
							<option value="9" name="queryType">{{langData.Laos}} </option> 
							<option value="10" name="queryType">{{langData.Brunei}} </option> 
							<option value="11" name="queryType">{{langData.Timor}} </option> 
						</select>
						<div class="numDiv clearfix">
                            <div  class="fl select">
                                +{{countryNum}}
                            </div>
							<input type="text" :placeholder="langData.phone" class="phoNum fl" name = 'user_cell' id = 'user_cell' />
						</div>
						
						<input type="email" :placeholder="langData.Email" class="mail" name = 'user_email' id ='user_email'/>
					<div class="numDiv clear inp">
						<select class="fl">
							<option value="">Skype</option>
							<option value="">Telegram</option>
							<option value="">Messenger</option>
							<option value="">WhatsApp</option>
							<option value="">Line</option>
							<option value="">Wechat</option>
						</select>
						<input type="text" placeholder="Account ID" class="phoNum fl" />
					</div>
					<div class="btnDiv">{{langData.register}}</div>
				</div>
			</div>
		</div>
		<!-- 移动端显示ban -->
			<div class="banBigTable" id="header">
					<p>{{langData.apply}}</p>
					<input type="text" :placeholder="langData.FirstName" name = 'first_name' id = 'first_name'/>
						<input type="text" :placeholder="langData.LastName"  name = 'last_name' id = 'last_name'/>
						<select id="queryType"  name="queryType" v-model="cmd" @change="doChange()">
							<option value="1"  name="queryType">{{langData.Indonesia}}</option>  
							<option value="2"  name="queryType">{{langData.Vietnam}}</option>   
							<option value="3" name="queryType">{{langData.Thailand}}</option>   
							<option value="4" name="queryType">{{langData.Singapore}}</option>  
							<option value="5" name="queryType">{{langData.Malaysia}}</option>  
							<option value="6" name="queryType">{{langData.Philippines}}</option> 
							<option value="7" name="queryType">{{langData.Cambodia}} </option> 
							<option value="8" name="queryType">{{langData.Burma}}</option>   
							<option value="9" name="queryType">{{langData.Laos}} </option> 
							<option value="10" name="queryType">{{langData.Brunei}} </option> 
							<option value="11" name="queryType">{{langData.Timor}} </option> 
						</select>
						<div class="numDiv clearfix">
                            <div  class="fl select">
                                +{{countryNum}}
                            </div>
							<input type="text" :placeholder="langData.phone" class="phoNum fl" name = 'user_cell' id = 'user_cell' />
						</div>
						
						<input type="email" :placeholder="langData.Email" class="mail" name = 'user_email' id ='user_email'/>
					<div class="numDiv clear inp">
						<select class="fl">
							<option value="">Skype</option>
							<option value="">Telegram</option>
							<option value="">Messenger</option>
							<option value="">WhatsApp</option>
							<option value="">Line</option>
							<option value="">Wechat</option>
						</select>
						<input type="text" placeholder="Account ID" class="phoNum fl" />
					</div>
					<div class="btnDiv">{{langData.register}}</div>
				</div>
		<!--forex four-->
		<div class="fourBox">
			<div class="center clear">
				<div class="fl">
					<img src="@/assets/analysts/fourPeo.png"/>
					<div class="ma">
						<div class="name"><p>MA LONG</p></div>
						<p>{{langData.ten}}</p>
					</div>
					<div class="shen">
						<div class="name"><p>RAY SHEN</p></div>
						<p>{{langData.twenty}}</p>
					</div>
					<div class="DEREK">
						<div class="name"><p>DEREK BAKER</p></div>
						<p>{{langData.thirty}}</p>
					</div>
					<div class="MARIUS">
						<div class="name"><p>MARIUS PAUN</p></div>
						<p>{{langData.twenty}}</p>
					</div>
				</div>
				<div class="fr">
					<p class="frFour">FOREX FOUR</p>
					<h6 :class="lang=='vn'?'vitnam':null">{{langData.most}}<br>{{langData.analysts}}</h6>
					<div class="clear">
						<p class="fl"></p>
						<span class="fl">CPT Markets</span>
					</div>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.malong}}<br>{{langData.ray}}<br>{{langData.daker}}<br>{{langData.marius}}</p>
					<span class="btn"><router-link to="/regist">{{langData.learn}}</router-link></span>
				</div>
			</div>
		</div>
		<!--education-->
		<div class="education">
			<ul class="center clear">
				<li>
					<img src="@/assets/analysts/education1.png" />
					<h6 :class="lang=='vn'?'vitnam':null">{{langData.any}}</h6>
					<p :class="lang=='vn'?'vitnam':null">{{langData.all}}</p>
				</li>
				<li>
					<img src="@/assets/analysts/education2.png" />
					<h6 :class="lang=='vn'?'vitnam':null">{{langData.webinar}}</h6>
					<p :class="lang=='vn'?'vitnam':null">{{langData.hot}}</p>
				</li>
				<li>
					<img src="@/assets/analysts/education3.png" />
					<h6 :class="lang=='vn'?'vitnam':null">{{langData.offline}}</h6>
					<p :class="lang=='vn'?'vitnam':null">{{langData.support}}</p>
				</li>
			</ul>
		</div>
		<!--profit-->
		<div class="profit">
			<div class="center clear">
				<div class="slider slider_circle_10 fl">
					<div>
						<p class="line"></p>
						<img src="@/assets/analysts/pro2.png"/>
						<div class="country clear">
							<img src="@/assets/analysts/pro2Cou.png" class="fl"/>
							<p class="fl">{{langData.viet}}</p>
						</div>
						<h3>Mai Thanh Hien</h3>
						<h4>{{langData.yield}}</h4>
						<h5>+ 693.52%</h5>
						<p class="bot">{{langData.more}}</p>
					</div>
					<div>
						<p class="line"></p>
						<img src="@/assets/analysts/pro1.png"/>
						<div class="country clear">
							<img src="@/assets/analysts/pro1Cou.png" class="fl"/>
							<p class="fl">{{langData.maly}}</p>
						</div>
						<h3>Mikhail Ingram</h3>
						<h4>{{langData.yield}}</h4>
						<h5>+ 1736.65%</h5>
						<p class="bot">{{langData.more}}</p>
					</div>
					<div>
						<p class="line"></p>
						<img src="@/assets/analysts/pro3.png"/>
						<div class="country clear">
							<img src="@/assets/analysts/pro3Cou.png" class="fl"/>
							<p class="fl">{{langData.indo}}</p>
						</div>
						<h3>Mahyadi Panggabean</h3>
						<h4>{{langData.yield}}</h4>
						<h5>+ 1164.03%</h5>
						<p class="bot">{{langData.more}}</p>
					</div>
					<!--<div class="next_button"></div>
					<div class="prev_button"></div>-->
				</div>
				<div class="fr">
					<p class="tit" :class="lang=='vn'?'vitnam':null">{{langData.profit}}</p>
					<div class="clear">
						<p class="fl"></p>
						<span class="fl">CPT Markets</span>
					</div>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.professional}}</p>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.create}}</p> 
				</div>
			</div>
		</div>
		<!--Follow us-->
		<div class="follow">
			<div class="center clear">
				<p class="fl">Follow us</p>
				<div class="fr">
					<a href="https://www.youtube.com/channel/UCBFFLYCjE8KKU9x7AghbtEA"><img src="@/assets/analysts/1.png" /></a>
					<a href="https://www.instagram.com/cptmarkets/"><img src="@/assets/analysts/2.png" /></a>
					<a href="https://twitter.com/cptmarketsglobe"><img src="@/assets/analysts/3.png" /></a>
					<a href="https://www.facebook.com/cptmarketslimited/"><img src="@/assets/analysts/4.png" /></a>
					<a href="https://t.me/CPTMarketsglobetraders"><img src="@/assets/analysts/5.png" /></a>
					<a href="https://www.linkedin.com/company/cpt-markets-official/"><img src="@/assets/analysts/linyin.png"/></a>
					<a href="https://weibo.com/u/7073771810?refer_flag=1001030103_"><img src="@/assets/analysts/6.png"/></a>
					<div class="wx">
						<img src="@/assets/analysts/7.png" class="iconWx"/>
						<img src="@/assets/analysts/wx.jpg" class="bot" />
					</div>
				</div>
			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<div class="center">
				<p>For more information, please contact: 400-100-1103, send an email to cs@cptmarkets.com</p>
				<p class="line"></p>
				<p>CPT Markets reserves all rights for final explanation.</p>
				<span>Copyright © 2019 CPTMarkets All Rights Reserved</span>
			</div>
		</div>

    </div>
</template>

<script>

export default {
    data(){
        return{
            country:['62','84','66','65','60','63','855','95','856','673','670'],
            cmd:1,
			isShow:false,
			lang:'en',
			langImgSrc:require("@/assets/analysts/UK.png"),
			bool:false,
			data:require('./analysts'),
			langData:{},
        }
    },
    computed:{
        countryNum(){
            let data = this.country[this.cmd - 1];
            return data;
        },
    },
    methods:{
        showToggle(){
			this.isShow = !this.isShow; 
        },
        changeLang(lang){
			if( lang == 'en' ){
				this.langData = this.data[0].en;
				this.langImgSrc = require("@/assets/analysts/UK.png");
			}else if( lang == 'cn' ){
				this.langData = this.data[0].cn;
				this.langImgSrc = require("@/assets/analysts/china.png");
			}else if( lang == 'vn' ){
				this.langData = this.data[0].vn;
				this.langImgSrc = require("@/assets/analysts/vietnam.png");
			}else{
				this.langData = this.data[0].in;
				this.langImgSrc = require("@/assets/analysts/Indonesia.png");
			}
         this.lang = lang;
		},
	},
	mounted(){
	},
	created(){
		let lang = 'en';
			if( lang == 'en' ){
				this.langData = this.data[0].en;
			}else if( lang == 'cn' ){
				this.langData = this.data[0].cn;
			}else if( lang == 'vn' ){
				this.langData = this.data[0].vn; 	
			}else{
				this.langData = this.data[0].in;
			}
		
	},
   
}
</script>

<style lang="scss">
@import "@/styles/mixin.scss";


.clear::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
.iconSer {
	position: fixed;
	top: 50%;
	right: 0%;
	z-index: 100;
}

.iconSer img {
	width: 4em;
}	
.vitnamFont{
	font-family: calibri !important; 
	font-size: 2rem !important;
}
.vitnam{
font-family: calibri !important;
}
@media screen and (min-width:768px) {
.analysts{
	::-webkit-input-placeholder {
		color: #b1b1b1;
		font-size: 16px;
		
	}
	::-moz-placeholder {
		color: #b1b1b1;
		font-size: 16px;
		
	}
	:-ms-input-placeholder {
		color: #b1b1b1;
		font-size: 16px;
		
	}
	:-moz-placeholder {
		color: #b1b1b1;
		font-size: 16px;
		
	}
	
	/*右边*/
	.wheel-button {
		position: fixed;
		left: 95%;
		top: 50%;
	}
	.wheel {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 200px;
		height: 200px;
		position: relative;
		display: none;
	}
	.wheel li {
		float: left;
	}
	.wheel li a {
		display: block;
	}
	.wheel li a,
	.wheel li a:visited {
		-moz-transition: all 0.25s ease;
		-webkit-transition: all 0.25s ease;
		-o-transition: all 0.25s ease;
		transition: all 0.25s ease;
	}
	.wheel-button {
		width: 68px;
		height: 68px;
	}
	.wheel-button img {
		width: 100%;
	}
	.main ul li img {
		width: 45px;
		height: 45px;
	}
	.main ul li img.wxEw {
		display: none;
		position: absolute;
		top: -250%;
		right: 2%;
		width: 70px;
		height: 100px;
	}
	.main ul li.wxRig:hover img.wxEw {
		display: block;
	}
	/*nav*/
	.nav{
		width:100%;
		height: 68px;
		background-color: #010e21;
	}
	.nav .center{
		width: 1076px;
		margin:0 auto;
	}
	.nav .center>a>img{
		margin-top:16px;
	}
	.nav .center>p{
		display: inline-block;
		font-size:16px;
		color:#ffffff;
		margin-left:37%;
	}
	.nav .center>p>span{
		display:inline-block;
		line-height: 68px;
	}
	.nav .center>p>span>img{
        display:inline-block;
        vertical-align: middle;
	}
	.nav .center div.fr{
	    margin-left: 30px;
	    margin-top: 20px;
	    position: relative;
	}
	.nav .center div.fr .topShow{
		height: 34px;
		cursor: pointer;
	}
	.nav .center div.fr .box{
		width: 136px;
	    height: auto;
	    background: #fff;
	    border: 1px solid #cfcfcf;
	    z-index: 100;
	    position: absolute;
    	left: -48%;
	    z-index: 1111;
	   	top:35px;
	}
	
	.nav .center div.fr .topShow .topImg{
		float: left;
    	width: 35px;
	}
	.nav .center div.fr .topShow .pula {
	    float: left;
	    margin-top: 8px;
	    margin-left: 10px;
	    width: 1em;
	}
	.nav .center div.fr .box .arrows {
	    width: 10px;
	    height: 10px;
	    border: #cfcfcf solid;
	    border-width: 1px 1px 0 0;
	    transform: rotate(-45deg);
	    margin-bottom: 10px;
	    position: absolute;
	    left: 50%;
	    margin-left: -5px;
	    top: -6px;
	    background: #fff;
    }
    .nav .center div.fr .box  ul li {
	    background: #fff;
	    padding: 8px;
	    line-height: 33px;
    }
    .nav .center div.fr .box  ul li img {
	    float: left;
	    width: 35px;
	}
	.nav .center div.fr .box  ul li span {
	    font-size: 14px;
	    float: left;
	    margin-left: 10px;
	}
	/*banBig*/
	.banBig {
		background:url(../../assets/analysts/banBg.gif) no-repeat center;
		background-size: 100%;
	}
	.banBig .center {
		width: 1207px;
		margin: 0 auto;
		padding: 5% 0 4%;
	}
	.banBig .center>div.fl {
		width: 55%;
	}
	.banBig .center>div.fl>p {
		font-family: MNJH;
		font-size: 47px;
		line-height: 90px;
		color: #fffefe;
		padding-top: 18%;
	}
	.banBig .center>div.fl>p span {
		color: #f7ce09;
	}
	.banBig .center>div.fl ul {
		margin-top: 100px;
	}
	.banBig .center>div.fl ul li {
		color: #fffefe;
		font-family: Oswaldbold;
		line-height: 34px;
		margin-top: 20px;
	}
	.banBig .center>div.fl ul li img {
		width: 6%;
	}
	.banBig .center>div.fl ul li p {
		margin-left: 9px;
		font-size: 27px;
	}
	.banBig .center>div.fr {
		width: 35%;
		margin: 0 auto;
		background-color: #f7ce09;
		border-radius: 15px;
		box-shadow: 1px 2px 14px 0px #dadada;
	}
	.banBig .center>div.fr>p {
		font-weight: 900;
		font-size: 32px;
		color: #520daa;
		text-align: center;
		padding: 34px 0 6px;
	}
	.banBig .center>div.fr>input {
		color: #202020;
		font-size: 16px;
		
		width: 69%;
		margin: 20px 10% 0;
		background-color: #f0eef0;
		border-radius: 5px;
		border: 1px solid #e1dbc1;
		line-height: 60px;
		padding: 0 24px;
	}
	.banBig .center>div.fr .phoNum {
		background:url("../../assets/analysts/phone.png") no-repeat 90% center #f0eef0;
		background-size: 5%;
	}
	.banBig .center>div.fr .mail {
		background:url("../../assets/analysts/mail.png") no-repeat 94% center #f0eef0;
		background-size: 6%;
		width: 69.5%;
	}
	.banBig .center>div.fr select {
		color: #202020;
		font-size: 16px;
		
		width: 81%;
		margin: 20px 10% 0;
		border-radius: 5px;
		border: 1px solid #e1dbc1;
		line-height: 60px;
		padding: 0 24px;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background:url("../../assets/analysts/sel.png") no-repeat scroll 92% center #f0eef0;
	}
	.banBig .center>div.fr select::-ms-expand {
		display: none;
	}
	.banBig .center>div.fr .btnDiv {
		width: 81%;
		margin: 50px 11% 65px;
		font-size: 18px;
		color: #ffffff;
		font-weight: bolder;
		text-align: center;
		line-height: 60px;
		background:url(../../assets/analysts/reg.png) no-repeat center;
		background-size: 100%;
	}
	.banBig .center>div.fr .btnDiv a {
		color: #ffffff;
	}
	.banBig .center>div.fr .numDiv {
		width: 100%;
		margin: 20px 10% 0;
	}
	.banBig .center>div.fr .numDiv .select {
		width: 23%;
		color: #202020;
		font-size: 16px;
		
		margin: 0;
		border-radius: 5px;
		border: 1px solid #e1dbc1;
		line-height: 60px;
		height: 60px;
		background-color: #f0eef0;
		text-align: center;
		display: none;
	}
	.banBig .center>div.fr .numDiv .select:first-child {
		display: inline-block;
	}
	.banBig .center>div.fr .numDiv input {
		width: 46%;
		color: #202020;
		font-size: 16px;
		
		margin: 0;
		background-color: #f0eef0;
		border-radius: 5px;
		border: 1px solid #e1dbc1;
		line-height: 60px;
		padding: 0 24px;
	}
	.banBig .center>div.fr .numDiv select {
		width: 33%;
		color: #202020;
		font-size: 16px;
		
		margin: 0;
		border-radius: 5px;
		border: 1px solid #e1dbc1;
		line-height: 60px;
		height: 60px;
		background-color: #f0eef0;
		padding: 0 15px;
		text-align: center;
	}
	.banBig .center>div.fr .inp input {
		width: 36.5%;
		line-height: 59px;
		background: #f0eef0;
	}
	.banBigTable{
		display: none;
	}
	/*forex four*/
	.fourBox {
		background-color: #f7f7f7;
		padding-top: 93px;
	}
	.fourBox .center {
		width: 1207px;
		margin: 0 auto;
		background:url(../../assets/analysts/fourBg.png) no-repeat top right #f7f7f7;
		background-size: 63%;
	}
	.fourBox .center>div.fl {
		width: 60%;
		position: relative;
	}
	.fourBox .center>div.fl>img {
		width: 100%;
	}
	.fourBox .center>div.fl>div {
		position: absolute;
        width: 209px;
        p{
            font-family: Oswaldbold;
        }
	}
	.fourBox .center>div.fl>div div.name {
		transform: skewX(-29deg);
		background-color: #370984;
		width: 109px;
		margin-left: 22%;
	}
	.fourBox .center>div.fl>div div.name p {
		transform: skewX(29deg);
		color: #f7ce09;
		font-size: 22px;
		line-height: 35px;
		text-align: center;
	}
	.fourBox .center>div.fl>div>p {
		font-size: 16px;
		color: #370984;
		margin-top: 3px;
		font-weight: 900;
	}
	.fourBox .center>div.fl>div.ma {
		left: -16%;
		top: 63%;
	}
	.fourBox .center>div.fl>div.ma .name {
		margin-left: 42%;
	}
	.fourBox .center>div.fl>div.shen {
		left: 20%;
		top: 80%;
	}
	.fourBox .center>div.fl>div.shen>p {
		color: #f7ce09;
	}
	.fourBox .center>div.fl>div.DEREK {
		left: 55%;
		top: 65%;
	}
	.fourBox .center>div.fl>div.DEREK div.name,
	.fourBox .center>div.fl>div.MARIUS div.name {
		width: 142px;
		margin-left: 11%;
	}
	.fourBox .center>div.fl>div.MARIUS {
		left: 81%;
		top: 80%;
	}
	.fourBox .center>div.fl>div.MARIUS>p {
		color: #f7ce09;
	}
	.fourBox .center>div.fr {
		width: 35%;
		margin-top: -3%;
	}
	.fourBox .center>div.fr .frFour {
		font-size: 28px;
		color: #ededed;
		width: 166px;
		line-height: 46px;
		text-align: center;
		background-color: #370984;
		font-family: imp;
		font-style: italic;
		letter-spacing: 1px;
	}
	.fourBox .center>div.fr h6 {
		font-family: Oswaldbold;
		font-size: 24px;
		color: #323232;
		line-height: 31px;
		margin: 13px 0 11px;
	}
	.fourBox .center>div.fr div p {
		width: 118px;
		height: 4px;
		background-color: #370984;
		margin: 4% 25px 0 0;
	}
	.fourBox .center>div.fr div span {
		font-size: 25px;
		color: #323232;
		font-family: Oswaldbold;
	}
	.fourBox .center>div.fr p.con {
		
		font-size: 18px;
		color: #2e2e2e;
		line-height: 30px;
		margin: 11px 0 23px;
	}
	.fourBox .center>div.fr span.btn {
		padding:10px 20px;
		font-size: 18px;
		color: #510caa;
        text-align: center;
        font-weight: 700;
		line-height: 40px;
		background-color: #f7ce09;
		border-radius: 20px;
		box-shadow: 0px 0 0px 0px #370984, 0 0px 0px 0px #370984, 0 4px 3px -1px #370984, 5px 0 3px -1px #370984;
	}
	.fourBox .center>div.fr span.btn a {
		color: #510caa;
	}
	/*education*/
	.education {
		background:url(../../assets/analysts/EDUCATION.jpg) no-repeat center;
		background-size: 100%;
	}
	.education .center {
		width: 1207px;
		margin: 0 auto;
		padding: 7% 0 6%;
	}
	.education .center li {
		float: left;
		width: 20%;
		margin: 0 6%;
		text-align: center;
		color: #000000;
	}
	.education .center li img {
		margin: 0 auto;
	}
	.education .center li h6 {
		font-family: Oswaldbold;
		font-size: 26px;
		margin: 35px auto 30px;
	}
	.education .center li p {
		
		font-size: 16px;
		line-height: 18px;
		margin: 0 auto;
	}
	/*profit*/
	.profit {
		background-color: #f7f7f7;
		padding-top: 95px;
	}
	.profit .center {
		width: 1207px;
		margin: 0 auto;
		background:url(../../assets/analysts/profit.png) no-repeat top right;
		background-size: 100%;
	}
	.profit .center>div.fl {
		width: 55%;
		height: 400px;
	}
	.profit .center .slider_circle_10 {
		position: relative;
		margin: 0 auto;
		user-select: none;
	}
	.profit .center .slider_circle_10>* {
		transition: ease all 1s;
	}
	.profit .center .slider_circle_10>div,
	.profit .center .slider_circle_10 .hidden {
		opacity: 0;
		position: absolute;
		left: 50%;
		z-index: 0;
		overflow: hidden;
	}
	.profit .center .slider_circle_10>div {
		width: 220px;
		height: 320px;
		background-color: #fff;
		box-shadow: 16px 18px 38px #e8e8e8;
		border-radius: 10px;
	}
	.profit .center .slider_circle_10>div p.line {
		width: 100%;
		height: 1px;
		background-color: #ededed;
		margin-top: 32px;
	}
	.profit .center .slider_circle_10>div>img {
		margin: 16px auto;
	}
	.profit .center .slider_circle_10>div .country {
		width: 102px;
		margin: 0 auto;
	}
	.profit .center .slider_circle_10>div .country p {
		
		font-size: 12px;
		color: #000;
		line-height: 17px;
		margin-left: 14px;
	}
	.profit .center .slider_circle_10>div h3 {
		font-size: 14px;
		color: #000000;
		text-align: center;
		margin: 15px auto 26px;
		font-family: Oswaldbold;
		font-weight: 100;
	}
	.profit .center .slider_circle_10>div h4 {
		font-weight: 100;
		
		font-size: 14px;
		color: #000000;
		text-align: center;
	}
	.profit .center .slider_circle_10>div h5 {
		font-weight: 100;
		
		font-size: 21px;
		color: #420193;
		text-align: center;
		margin: 13px auto 27px;
	}
	.profit .center .slider_circle_10>div p.bot {
		font-weight: 100;
		
		text-align: center;
		font-size: 17px;
		color: #f7ce09;
		background-color: #6834a9;
		line-height: 36px;
	}
	.profit .center .slider_circle_10 .active {
		opacity: 1;
		position: absolute;
		top: -1%;
		left: 60%;
		margin-left: -25%;
		z-index: 10;
		transform: scale(1.1);
		-ms-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-o-transform: scale(1.1);
		box-shadow: none;
	}
	.profit .center .slider_circle_10 .prev1,
	.profit .center .slider_circle_10 .next1 {
		opacity: 1;
		position: absolute;
		left: 50%;
		margin-left: -45%;
		z-index: 9;
	}
	.profit .center .slider_circle_10 .prev1 {
		box-shadow: -7px 18px 38px #e8e8e8;
	}
	.profit .center .slider_circle_10 .next1 {
		margin-left: 15%;
	}
	.profit .center>div.fr {
		width: 40%;
	}
	.profit .center>div.fr p.tit {
		font-size: 36px;
		color: #323232;
		font-family: Oswaldbold;
	}
	.profit .center>div.fr div {
		margin: 24px 0 28px;
	}
	.profit .center>div.fr div p {
		width: 118px;
		height: 4px;
		background-color: #370984;
		margin: 3% 25px 0 0;
	}
	.profit .center>div.fr div span {
		font-size: 25px;
		color: #323232;
		font-family: Oswaldbold;
	}
	.profit .center>div.fr p.con {
		
		font-size: 20px;
		line-height: 24px;
		color: #2e2e2e;
	}
	/*Follow us*/
	.follow {
		width: 100%;
		height: 135px;
		background-color: #6d11e7;
	}
	.follow .center {
		width: 63%;
		margin: 0 auto;
	}
	.follow .center>p.fl {
		font-size: 48px;
		color: #ffffff;
		line-height: 135px;
		font-family: Oswaldbold;
	}
	.follow .center>div.fr>a>img,
	.follow .center>div.fr>div {
		float: left;
		margin-right: 33px;
		margin-top: 6%;
		width: 6%;
	}
	.follow .center>div.fr>a>img:hover {
		transform: scale(1.2);
	}
	.follow .center>div.fr>div img.bot {
		display: none;
	}
	.follow .center>div.fr>div {
		position: relative;
	}
	.follow .center>div.fr>div.wx:hover img.bot {
		position: absolute;
		top: -220%;
		left: -45%;
		display: block;
		width: 200%;
	}
	.follow .center>div.fr>div.wx .iconWx{
		width: 99%;
	}
	/*底部*/
	.footer {
		height: 140px;
		width: 100%;
		background-color: #313131;
	}
	.footer .center {
		width: 60%;
		margin: 0 auto;
		color: #b4b4b4;
		padding: 1% 0 0;
	}
	.footer .center>p.line {
		width: 100%;
		border-bottom: 1px solid #b4b4b4;
		margin: 15px 0;
	}
	.footer .center>p {
		font-size: 13px;
		line-height: 27px;
	}
	.footer .center>span {
		font-size: 10px;
		line-height: 25px;
	}
}
	@media screen and (max-width:1200px) and (min-width:768px) {
	.analysts{
		.nav .center {
			width: 90%;
		}
		.nav .center>p {
			margin-left: 20%;
		}
		.fourBox .center,
		.education .center,
		.profit .center,
		.follow .center {
			width: 800px;
		}
		.banBig .center {
			width: 800px;
			padding: 4% 0 3%;
		}
		.banBig {
			background-size: auto;
		}
		.banBig .center>div.fl>p {
			font-size: 31px;
			line-height: 53px;
		}
		.banBig .center>div.fl ul li {
			font-size: 21px;
			line-height: 22px;
		}
		.banBig .center>div.fr>input {
			margin: 20px 7% 0;
		}
		.banBig .center>div.fr select {
			width: 87%;
			margin: 20px 7% 0;
		}
		.banBig .center>div.fr .numDiv {
			margin: 20px 7% 0;
		}
		.banBig .center>div.fr .numDiv .phoNum {
			background:url(../../assets/analysts/phone.png) no-repeat 92% center #f0eef0;
			background-size: 5%;
		}
		.banBig .center>div.fr .inp .phoNum {
			background: #f0eef0;
		}
		.fourBox .center>div.fl>div.ma .name {
			margin-left: 0%;
		}
		.fourBox .center>div.fl>div.ma {
			left: -10%;
		}
		.fourBox .center>div.fr {
			margin-top: -7%;
		}
		.fourBox .center>div.fr h6 {
			font-size: 17px;
			line-height: 26px;
		}
		.fourBox .center>div.fr div span {
			font-size: 18px;
		}
		.fourBox .center>div.fr p.con {
			font-size: 13px;
			line-height: 22px;
		}
		.fourBox .center>div.fr span.btn {
			padding:10px 20px;
			font-size: 15px;
			margin-left: 22%;
			line-height: 32px;
		}
		.education .center li img {
			margin: 0 auto;
			width: 37%;
		}
		.education .center li h6 {
			margin: 11px auto 18px;
		}
		.education .center {
			padding: 3% 0 1%;
		}
		.profit .center .slider_circle_10>div {
			width: 180px;
		}
		.profit .center>div.fr p.con {
			font-size: 15px;
			line-height: 22px;
		}
		.follow .center>div {
			width: 500px;
    		margin-top: 2%;
		}
		
		.follow .center>div.fr>a>img,
		.follow .center>div.fr>div {
			margin-right: 23px;
			width: 7%;
		}
		.follow .center>div.fr>div.wx img {
			width: 99%;
		}
	}
	}
	@media screen and (min-width:1200px) and (max-width:1700px) {
	.analysts{
		.nav .center {
			width: 80%;
		}
		.nav .center>p {
			margin-left: 29%;
		}
		.follow .center {
			width: 80%;
		}
		.banBig {
			background-size: auto;
		}
		.banBig .center,
		.fourBox .center,
		.education .center,
		.profit .center {
			width: 1100px;
		}
		.banBig .center>div.fl>p {
			font-size: 43px;
			line-height: 66px;
		}
		.banBig .center>div.fr select {
			width: 88%;
			margin: 20px 6% 0;
		}
		.banBig .center>div.fr .numDiv {
			width: 106.5%;
			margin: 20px 6% 0;
		}
		.banBig .center>div.fr .mail {
			width: 75.5%;
		}
		.banBig .center>div.fr select {
			background:url(../../assets/analysts/sel.png) no-repeat scroll 95% center #f0eef0;
		}
		.banBig .center>div.fr .numDiv input {
			width: 47%;
		}
		.banBig .center>div.fr>input {
			margin: 20px 6% 0;
			width: 75%;
		}
		.fourBox .center>div.fl>div.ma {
			left: -5%;
		}
		.fourBox .center>div.fl>div.ma .name {
			margin-left: 0%;
		}
		.fourBox .center>div.fr p.con {
			margin: 11px 0 11px;
		}
		.education .center li {
			width: 22%;
			margin: 0 5%;
		}
		.education .center li img {
			width: 35%;
		}
		.education .center {
			padding: 3% 0 3%;
		}
		.banBig .center>div.fr .inp input {
			width: 37.7%;
		}
		.follow .center>.fr{
			width: 687px;
		}
	}
}
}
@media screen and (max-width:768px) {
	.analysts{
	html {
		font-size: 62.5%;
	}
	::-webkit-input-placeholder {
		color: #b1b1b1;
		font-size: 1rem;
		
	}
	::-moz-placeholder {
		color: #b1b1b1;
		font-size: 1rem;
		
	}
	:-ms-input-placeholder {
		color: #b1b1b1;
		font-size: 1rem;
		
	}
	:-moz-placeholder {
		color: #b1b1b1;
		font-size: 1rem;
		
	}
	/*右边*/
	.wheel-button {
		position: fixed;
		left: 90%;
		top: 50%;
	}
	.wheel {
		margin: 0;
		padding: 0;
		list-style: none;
		width: 8rem;
		height: 8rem;
		position: relative;
		display: none;
	}
	.wheel li {
		float: left;
	}
	.wheel li a {
		display: block;
	}
	.wheel li a,
	.wheel li a:visited {
		-moz-transition: all 0.25s ease;
		-webkit-transition: all 0.25s ease;
		-o-transition: all 0.25s ease;
		transition: all 0.25s ease;
	}
	.wheel-button {
		width: 3rem;
		height: 3rem;
	}
	.wheel-button img {
		width: 100%;
	}
	.main ul li img {
		width: 2rem;
		height: 2rem;
	}
	.main ul li img.wxEw {
		display: none;
		position: absolute;
		top: -400%;
		right: 1%;
		width: 6rem;
		height: 8rem;
	}
	.main ul li.wxRig:hover img.wxEw {
		display: block;
	}
	/*nav*/
	.nav .center{
		width: 98%;
		margin:0 auto;
	}
	.nav{
		width:100%;
		height: 4rem;
		background-color: #010e21;
	}
	.nav .center>a>img{
		width: 46%;
	    margin: 1.3rem 0 0 2rem;
	}
	.nav .center>p{
		display: none;
	}
	.nav .center div.fr{
	    margin: 1.5rem 1rem 0 0;
	    position: relative;
	}
	.nav .center div.fr .topShow{
		height: 3rem;
		margin-right: 2rem;
	}
	.nav .center div.fr .box{
		width: 10rem;
	    height: auto;
	    clear: both;
	    background: #fff;
	    border: 1px solid #cfcfcf;
	    z-index: 100;
	    position: absolute;
    	left: -55%;
	    z-index: 1111;
	    display: none;
	   	top: 3rem;
	}
	
	.nav .center div.fr .topShow .topImg{
		float: left;
    	width: 2rem;
	}
	.nav .center div.fr .topShow .pula {
	    float: left;
	    margin-top: 0.5rem;
	    margin-left: 1rem;
	    width: 1em;
	}
	.nav .center div.fr .box .arrows {
	    width: 1rem;
	    height: 1rem;
	    border: #cfcfcf solid;
	    border-width: 1px 1px 0 0;
	    transform: rotate(-45deg);
	    margin-bottom: 1rem;
	    position: absolute;
	    left: 50%;
	    margin-left: -0.2rem;
	    top: -0.5rem;
	    background: #fff;
    }
    .nav .center div.fr .box  ul li {
	    background: #fff;
	    padding: 0.5rem;
	    line-height: 2rem;
    }
    .nav .center div.fr .box  ul li img {
	    float: left;
	    width: 2rem;
	}
	.nav .center div.fr .box  ul li span {
	    font-size: 1.3rem;
	    float: left;
	    margin-left: 1rem;
	}
	/*ban*/
	.banBig {
		background:url(../../assets/analysts/banBg.gif) no-repeat center;
		background-size: 100%;
	}
	.banBig .center {
		width: 95%;
		margin: -1px auto 0;
		padding: 3% 0 4%;
	}
	.banBig .center div.fl>p {
		font-family: MNJH;
		font-size: 1.1rem;
		line-height: 1.4rem;
		color: #fffefe;
	}
	.banBig .center .fl>p span {
		color: #f7ce09;
	}
	.banBig .center ul {
		margin-top: 1rem;
	}
	.banBig .center ul li {
		font-size: 1.5rem;
		color: #fffefe;
		font-family: Oswaldbold;
		margin-top: 0.2rem;
	}
	.banBig .center ul li img {
		width: 4%;
	}
	.banBig .center ul li p {
		margin-left: 0.5rem;
	}
	.banBig .center > div.fr{
		display: none;
	}
	.banBigTable {
		display: block;
		width:19rem;
		margin: 2rem auto;
		background-color: #f7ce09;
		border-radius: 1rem;
		box-shadow: 1px 2px 14px 0px #dadada;
		padding-bottom: 1rem;
	}
	.banBigTable>p {
		font-size: 1.2rem;
		color: #520daa;
		font-weight: bolder;
		text-align: center;
		padding: 1.5rem 0 0.2rem;
	}
	.banBigTable>input {
		color: #202020;
		font-size: 1rem;
		width: 14rem;
		margin: 1.5rem 5% 0;
		background-color: #f0eef0;
		border-radius: 0.1rem;
		border: 1px solid #e1dbc1;
		line-height: 2.5rem;
		padding: 0 1.5rem;
	}
	.banBigTable .phoNum {
		background:url("../../assets/analysts/phone.png") no-repeat 92% center #f0eef0;
		background-size: 4%;
	}
	.banBigTable .mail {
		background:url("../../assets/analysts/mail.png") no-repeat 94% center #f0eef0;
		background-size: 6%;
	}
	.banBigTable select {
		color: #202020;
		font-size: 1rem;
		box-sizing: border-box;
		width: 17rem;
		margin: 1.5rem 5% 0;
		border-radius: 0.1rem;
		border: 1px solid #e1dbc1;
		line-height: 2.5rem;
		padding: 0 1.5rem;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background:url("../../assets/analysts/sel.png") no-repeat scroll 95% center #f0eef0;
	}
	.banBigTable select::-ms-expand {
		display: none;
	}
	.banBigTable .btnDiv {
		width: 84%;
		margin: 1.5rem auto 1rem;
		font-size: 18px;
		color: #ffffff;
		font-weight: bold;
		text-align: center;
		line-height: 3rem;
		background:url(../../assets/analysts/reg.png) no-repeat center;
		background-size: 100%;
	}
	.banBigTable .btnDiv a {
		color: #ffffff;
	}
	.banBigTable .numDiv {
		width: 18rem;
		margin: 1.5rem 5% 0;
	}
	.banBigTable .numDiv .select {
		width: 5rem;
		color: #202020;
		font-size: 1rem;
		
		margin: 0;
		border-radius: 0.1rem;
		border: 1px solid #e1dbc1;
		line-height: 2.5rem;
		height: 2.5rem;
		background-color: #f0eef0;
		display: none;
		text-align: center;
	}
	.banBigTable .numDiv .select:first-child {
		display: inline-block;
	}
	.banBigTable .numDiv input {
		width: 8.8rem;
		color: #202020;
		font-size: 1rem;
		
		margin: 0;
		background-color: #f0eef0;
		border-radius: 0.1rem;
		border: 1px solid #e1dbc1;
		line-height: 2.5rem;
		padding: 0 1.5rem;
	}
	.banBigTable .numDiv .phoNum {
		background:url(../../assets/analysts/phone.png) no-repeat 89% center #f0eef0;
		background-size: 5%;
	}
	.banBigTable .numDiv select {
		width: 30%;
		color: #202020;
		font-size: 1rem;
		
		margin: 0;
		border-radius: 0.1rem;
		border: 1px solid #e1dbc1;
		line-height: 2.5rem;
		background-color: #f0eef0;
		text-align: center;
	}
	.banBigTable .inp select {
		width: 6rem;
		padding: 0 1rem;
	}
	.banBigTable .inp input.phoNum {
		width: 8rem;
		line-height: 2.5rem;
		background-image: none;
	}
	/*forex four*/
	.fourBox {
		background-color: #f7f7f7;
		padding-top: 5rem;
	}
	.fourBox .center {
		width: 95%;
		margin: 0 auto;
		background:url(../../assets/analysts/fourBg.png) no-repeat top right #f7f7f7;
		background-size: 63%;
	}
	.fourBox .center>div.fl {
		width: 100%;
		position: relative;
	}
	.fourBox .center>div.fl>img {
		width: 100%;
	}
	.fourBox .center>div.fl>div {
		position: absolute;
        width: 15rem;
        p{
		    font-family: Oswaldbold;
        }
	}
	.fourBox .center>div.fl>div div.name {
		transform: skewX(-29deg);
		background-color: #370984;
		width: 6rem;
		margin-left: 7%;
	}
	.fourBox .center>div.fl>div div.name p {
		transform: skewX(29deg);
		color: #f7ce09;
		font-size: 1.2rem;
		line-height: 2rem;
		text-align: center;
	}
	.fourBox .center>div.fl>div>p {
		font-size: 0.9rem;
		color: #370984;
		margin-top: 0.2rem;
		font-weight: 900;
	}
	.fourBox .center>div.fl>div.ma {
		left: -3%;
		top: 63%;
	}
	.fourBox .center>div.fl>div.shen {
		left: 20%;
		top: 89%;
	}
	.fourBox .center>div.fl>div.shen>p {
		color: #f7ce09;
	}
	.fourBox .center>div.fl>div.DEREK {
		left: 44%;
		top: 65%;
	}
	.fourBox .center>div.fl>div.DEREK div.name,
	.fourBox .center>div.fl>div.MARIUS div.name {
		width: 8rem;
		margin-left: 6%;
	}
	.fourBox .center>div.fl>div.MARIUS {
		left: 60%;
		top: 90%;
	}
	.fourBox .center>div.fl>div.MARIUS>p {
		color: #f7ce09;
	}
	.fourBox .center>div.fr {
		width: 93%;
		margin: 3rem 0 2rem;
	}
	.fourBox .center>div.fr .frFour {
		font-size: 1rem;
		color: #ededed;
		width: 8rem;
		line-height: 1.6rem;
		text-align: center;
		background-color: #370984;
		font-family: imp;
		font-style: italic;
		letter-spacing: 0.1rem;
	}
	.fourBox .center>div.fr h6 {
		font-family: Oswaldbold;;
		font-size: 1.2rem;
		color: #323232;
		line-height: 1.8rem;
		margin: 1rem 0;
	}
	.fourBox .center>div.fr div p {
		width: 8rem;
		height: 0.2rem;
		background-color: #370984;
		margin: 3% 1rem 0 0;
	}
	.fourBox .center>div.fr div span {
		font-size: 1.2rem;
		color: #323232;
		font-family: Oswaldbold;
	}
	.fourBox .center>div.fr p.con {
		font-weight: 700;
		font-size: 0.9rem;
		color: #2e2e2e;
		line-height: 1.8rem;
		margin: 1rem 0 2rem;
	}
	.fourBox .center>div.fr span.btn {
		padding:0.6rem 1.5rem;
		font-size: 1.2rem;
		color: #510caa;
        text-align: center;
        font-weight:700;
		line-height: 1.5rem;
		background-color: #f7ce09;
		border-radius: 1.5rem;
		box-shadow: 0px 0 0px 0px #370984, 0 0px 0px 0px #370984, 0 4px 3px -1px #370984, 5px 0 3px -1px #370984;
	}
	.fourBox .center>div.fr span.btn a {
		color: #510caa;
	}
	/*profit*/
	.profit {
		background-color: #f7f7f7;
		padding-top: 3rem;
	}
	.profit .center {
		width: 95%;
		margin: 0 auto;
		background:url(../../assets/analysts/profit.png) no-repeat top right;
		background-size: 100%;
	}
	.profit .center>div.fl {
		width: 100%;
		height: 26rem;
	}
	.profit .center .slider_circle_10 {
		position: relative;
		margin: 0 auto;
		user-select: none;
	}
	.profit .center .slider_circle_10>* {
		transition: ease all 1s;
	}
	.profit .center .slider_circle_10>div,
	.profit .center .slider_circle_10 .hidden {
		opacity: 0;
		position: absolute;
		left: 50%;
		z-index: 0;
		overflow: hidden;
	}
	.profit .center .slider_circle_10>div {
		width: 14rem;
		background-color: #fff;
		border-radius: 10px;
	}
	.profit .center .slider_circle_10>div p.line {
		width: 100%;
		height: 0.1rem;
		background-color: #ededed;
		margin-top: 2rem;
	}
	.profit .center .slider_circle_10>div>img {
		margin: 1rem auto;
	}
	.profit .center .slider_circle_10>div .country {
		width: 11rem;
		margin: 0 auto;
	}
	.profit .center .slider_circle_10>div .country p {
		
		font-size: 1rem;
		color: #000;
		line-height: 1.5rem;
		margin-left: 1rem;
	}
	.profit .center .slider_circle_10>div h3 {
		font-size: 1.2rem;
		color: #000000;
		text-align: center;
		margin: 1rem auto 2rem;
		font-family: Oswaldbold;
		font-weight: 100;
	}
	.profit .center .slider_circle_10>div h4 {
		font-weight: 100;
		
		font-size: 1.2rem;
		color: #000000;
		text-align: center;
	}
	.profit .center .slider_circle_10>div h5 {
		font-weight: 100;
		
		font-size: 1.5rem;
		color: #420193;
		text-align: center;
		margin: 1rem auto 2rem;
	}
	.profit .center .slider_circle_10>div p.bot {
		font-weight: 100;
		
		text-align: center;
		font-size: 1.5rem;
		color: #f7ce09;
		background-color: #6834a9;
		line-height: 2rem;
	}
	.profit .center .slider_circle_10 .active {
		opacity: 1;
		position: absolute;
		top: -1%;
		left: 53%;
		margin-left: -25%;
		z-index: 10;
		transform: scale(1.1);
		-ms-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-o-transform: scale(1.1);
	}
	.profit .center .slider_circle_10 .prev1,
	.profit .center .slider_circle_10 .next1 {
		opacity: 0.9;
		position: absolute;
		left: 50%;
		margin-left: -45%;
		z-index: 9;
	}
	.profit .center .slider_circle_10 .prev1 {
		box-shadow: -7px 18px 38px #e8e8e8;
	}
	.profit .center .slider_circle_10 .next1 {
		margin-left: 0%;
	}
	.profit .center>div.fr {
		width: 90%;
		margin: 0 2% 3rem;
	}
	.profit .center>div.fr p.tit {
		font-size: 1.4rem;
		color: #323232;
		font-family: Oswaldbold;
	}
	.profit .center>div.fr div {
		margin: 1rem 0;
	}
	.profit .center>div.fr div p {
		width: 8rem;
		height: 0.2rem;
		background-color: #370984;
		margin: 3% 2rem 0 0;
	}
	.profit .center>div.fr div span {
		font-size: 1.2rem;
		color: #323232;
		font-family: Oswaldbold;
	}
	.profit .center>div.fr p.con {
		font-weight: 700;
		font-size: 0.9rem;
		line-height: 1.5rem;
		color: #2e2e2e;
	}
	/*Follow us*/
	.follow {
		width: 100%;
		background-color: #6d11e7;
		padding:1rem 0;
	}
	.follow .center {
		width: 80%;
		margin: 0 auto;
	}
	.follow .center>p.fl {
		font-size: 1.5rem;
		color: #ffffff;
		line-height: 1rem;
		font-family: Oswaldbold;
	}
	.follow .center>div.fr>a>img,
	.follow .center>div.fr>div {
		float: left;
		margin-right: 0.5rem;
		margin-top: 6%;
	}
	.follow .center>div.fr>a>img {
		width: 8%;
	}
	.follow .center>div.fr>div img {
		width: 52%;
	}
	.follow .center>div.fr>div.wx img {
		width: 39%;
	}
	.follow .center>div.fr>a>img:hover {
		transform: scale(1.2);
	}
	.follow .center>div.fr>div img.bot {
		display: none;
	}
	.follow .center>div.fr>div {
		position: relative;
	}
	.follow .center>div.fr>div.wx:hover img.bot {
		position: absolute;
		top: -260%;
		left: -26%;
		display: block;
		width: 100%;
	}
	/*education*/
	.education {
		background:url(../../assets/analysts/EDUCATION.jpg) no-repeat center;
	}
	.education .center {
		width: 95%;
		margin: 0 auto;
		padding: 0 0 2%;
	}
	.education .center li {
		float: left;
		width: 80%;
		margin: 3% 6%;
		text-align: center;
		color: #000000;
	}
	.education .center li img {
		margin: 0 auto;
		width: 21%;
	}
	.education .center li h6 {
		font-family: Oswaldbold;
		font-size: 1.2rem;
		margin: 0.8rem auto;
	}
	.education .center li p {
		
		font-size: 0.8rem;
		line-height: 1.2rem;
		margin: 0 auto;
	}
	/*底部*/
	.footer {
		padding:1.5rem 0;
		width: 100%;
		background-color: #313131;
	}
	.footer .center {
		width: 89%;
		margin: 0 auto;
		color: #b4b4b4;
	}
	.footer .center>p.line {
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #b4b4b4;
		margin-bottom: 1rem;
	}
	.footer .center>p {
		font-size: 0.8rem;
		line-height: 1.2rem;
	}
	.footer .center>span {
		font-size: 0.8rem;
		line-height: 1.8rem;
	}
	}
	@media screen and (max-width:320px) {
	.analysts{
		.footer .center>span {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		.follow .center {
			width: 87%;
		}
		.follow .center>div.fr>div img {
			width: 48%;
		}
		.follow .center>div.fr>div.wx img {
			width: 36%;
		}
		.footer .center>p {
			font-size: 1rem;
		}
		.footer .center {
			width: 93%;
		}
		.fourBox .center>div.fl>div.ma {
			top: 50%;
		}
		.fourBox .center>div.fl>div.shen {
			left: 10%;
		}
		.fourBox .center>div.fl>div.DEREK {
			top: 58%;
		}
		.fourBox .center>div.fl>div.MARIUS {
			left: 58%;
		}
		.fourBox .center>div.fr {
			margin: 5rem 0 2rem;
		}
		.profit .center .slider_circle_10 .prev1,
		.profit .center .slider_circle_10 .next1 {
			left: 46%;
		}
		.profit .center .slider_circle_10 .active {
			left: 49%;
		}
		.banBig .center {
			padding: 1% 0 0%;
		}
	}
	}
	@media screen and (width:768px) {
	.analysts{
		.nav .center>a>img {
			width: 30%;
			margin: 1.3rem 13.5rem;
		}
		.follow .center>p.fl {
			line-height: 4rem;
		}
		.follow .center>div.fr>div img {
			width: 79%;
		}
		.follow .center>div.fr>div.wx img.iconWx {
			width: 113% !important;
		}
		.follow .center>div.fr>a>img, .follow .center>div.fr>div {
		    margin-right: 1.5rem;
    	}
		.follow .center>div.fr>div.wx:hover img.bot {
			top: -260%;
		}
		.follow .center>div {
			margin-top: 0;
		}
		.follow .center>div.fr>div {
			position: relative;
		}
		.follow .center>div.fr>div.wx:hover img.bot {
			position: absolute;
		    top: -280%;
		    left: -94%;
		    display: block;
		    width: 305%;
		}
		.fourBox .center>div.fl>div.ma {
			left: -1%;
			top: 67%;
		}
		.fourBox .center>div.fl>div.shen {
			left: 25%;
			top: 92%;
		}
		.fourBox .center>div.fl>div.DEREK {
			left: 54%;
		}
		.fourBox .center>div.fl>div.MARIUS {
			left: 79%;
			top: 92%;
		}
		.fourBox .center>div.fr {
			width: 28rem;
			margin: 3rem 21% 2rem;
		}
		.education {
			background-size: 100%;
		}
		.education .center li {
			width: 27%;
			margin: 0% 3%;
		}
		.profit .center .slider_circle_10>div {
			width: 18rem;
			height: 22.7rem;
		}
		.profit .center>div.fl {
			height: 30rem;
			margin-left: 9%;
		}
		
		.banBigTable .numDiv {
			width: 94.6%;
		}
		.education .center {
			padding: 3% 0 4%;
		}
	}
}
}
</style>