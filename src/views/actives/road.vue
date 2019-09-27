<template>
	<div class="road"  :class="lang=='vn'?'vitnam':null">
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
					<button class="tit" :class="lang=='vn'?'vitnam':null">{{langData.college}}</button>
					<button class="tit" :class="lang=='vn'?'vitnam':null">{{langData.wisdom}}</button>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.crawl}}</p>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.course}}</p>
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
		<!--Forex Beginner Education-->
		<div class="educa">
			<div class="center">
				<p :class="lang=='vn'?'vitnam':null">{{langData.education}}</p>
				<div class="eduCon clear">
					<div class="fl flImg">
						<img src="@/assets/analysts/Redu.png"/>
					</div>
					<div class="fl flCon">
						<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.new}}<span>{{langData.beginner}}</span>{{langData.are}}<span>{{langData.loss}}</span> {{langData.key}}<span>{{langData.profit}}</span></p>
						<a href="#header"><button class="btn">{{langData.learn}}</button></a>
					</div>
				</div>
			</div>
		</div>
		<!--Video Center-->
		<div class="video">
			<div class="center clear">
				<div class="fl">
					<p class="tit">{{langData.center}}</p>
					<p class="line"></p>
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.uploading}}</p>
				</div>
				<div class="fr">
					<router-link to="/school"><img src="@/assets/analysts/Rvideo.jpg"/></router-link>
				</div>
			</div>
		</div>
		<!--FOREX FOUR-->
		<div class="fouPeo">
			<div class="center clear">
				<div class="fl flImg">
					<img src="@/assets/analysts/fourPeo.png"/>
				</div>
				<div class="fl flCon">
					<p class="con" :class="lang=='vn'?'vitnam':null">{{langData.gathering}}<br>{{langData.over}}<br>{{langData.success}}</p>
					<a href="#header"><button class="btn">{{langData.register}}</button></a>
				</div>
				<p class="fr">FOREX<br>FOUR</p>
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
			data:require('./road'),
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
.clear::after {
	content: "";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}

.iconSer{
	position: fixed;
	top:50%;
	right:0%;
	z-index: 100;
}
.iconSer img{
	width: 4em;
}
.vitnam{
	font-family: calibri !important;
}
@media screen and (min-width:768px){
.road{
            
    ::-webkit-input-placeholder { 
        color: #b1b1b1;
        font-size: 16px;
        font-family:SEMIBOLD;
    }
    ::-moz-placeholder { 
        color: #b1b1b1;
        font-size: 16px;
        font-family:SEMIBOLD;
    }
    :-ms-input-placeholder { 
        color: #b1b1b1;
        font-size: 16px;
        font-family:SEMIBOLD;
    }
    :-moz-placeholder {  
        color: #b1b1b1;
        font-size: 16px;
        font-family:SEMIBOLD;
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
		background:url(../../assets/analysts/Rban.jpg) no-repeat center;
		background-size: 100%;
	}
	.banBig .center {
		width: 1207px;
		margin: 0 auto;
		padding: 5% 0 4%;
	}
	.banBig .center>div.fl{
		width: 60%;
		margin-top:50px;
	}
	.banBig .center>div.fl button.tit{
        font-family: Oswald;
		font-size: 46px;
		color: #ffffff;
		background-color: #520daa;
		text-align: left;
		padding: 28px 18px;
        margin-top: 33px;
        outline: none;
        border:none;
	   }
	.banBig .center>div.fl p.con{
         font-family: Oswald;
		font-size: 41px;
	    color: #520daa;
	    margin-top: 54px;
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
	/*Forex Beginner Education*/
	.educa {
		background-color: #fafafa;
	}
	.educa .center{
		width: 1207px;
		margin: 0 auto;
		padding: 60px 0 120px;
	}
	.educa .center>p{
		font-family: Oswaldbold;
		font-size: 38px;
		color: #550dad;
		text-align: right;
		text-shadow: 3px -1px 0px #f7ce09;
	}
	.educa .center .eduCon{
		margin-top:33px;
	}
	.educa .center .eduCon .flImg{
		width: 40%;
	}
	.educa .center .eduCon .flImg img{
		width: 100%;
	}
	.educa .center .eduCon .flCon{
		width: 49%;
		margin-left: 70px;
	}
	.educa .center .eduCon .flCon .con{
		margin-top:17px;
		font-size: 24px;
		color: #5b5b5b;
		font-family: Oswald;
		line-height: 46px;
	}
	.educa .center .eduCon .flCon .con span{
		font-size: 36px;
		color: #520da1;
	}
	.educa .center .eduCon .flCon .btn{
		font-size: 24px;
		font-weight: bolder;
		color: #520da1;
		text-align: center;
		background-color: #f7ce09;
		margin-top: 24px;
		border-radius: 32px;
		padding:10px 20px;
		outline:none;
		border:none;
	}
	.educa .center .eduCon .flCon a{
		color: #520da1;
	}
	/*video center*/
	.video {
		background-color: #efe8f7;
	}
	.video .center{
		width: 1207px;
		margin: 0 auto;
		padding: 160px 0 170px;
	}
	.video .center .fl{
		width: 48%;
	}
	.video .center .fl p.tit{
		font-family: Oswaldbold;
		font-size: 48px;
		color: #f7ce09;
		text-shadow: 3px -1px 0px #550dad;
	}
	.video .center .fl p.line{
		width: 161px;
		height: 8px;
		background-color: #520daa;
		margin: 36px 0 45px;
	}
	.video .center .fl p.con{
		font-size: 24px;
		color: #696969;
		font-family: Oswald;
		line-height: 50px;
	}
	.video .center .fr{
		width: 50%;
	}
	.video .center .fr img{
		width: 100%;
	}
	/*FOREX FOUR*/
	.fouPeo{
		background-color: #f7f7f7;
	}
	.fouPeo .center{
		width: 1207px;
		margin: 0 auto;
		padding-top:110px;
	}
	.fouPeo .center .flImg{
		width: 40%;
	}
	.fouPeo .center .flImg img{
		width: 100%;
	}
	.fouPeo .center .flCon{
		width: 30%;
		margin-left: 5%;
	}
	.fouPeo .center .flCon p.con{
		font-size: 24px;
		line-height: 42px;
		color: #5b5b5b;
		font-family: Oswald;
	}
	.fouPeo .center .flCon .btn{
		font-size: 19px;
		font-weight: bolder;
	    color: #520da1;
	    text-align: center;
	    background-color: #f7ce09;
	    margin-top: 24px;
		border-radius: 32px;
		padding:10px 20px;
		outline:none;
		border:none;
	}
	.fouPeo .center .flCon  a{
		color: #520da1;
	}
	.fouPeo .center .fr{
		width: 20%;
		font-family: Oswaldbold;
	    font-size: 56px;
	    color: #550dad;
	    text-align: right;
	    margin-top: -5%;
	    text-shadow: 3px -1px 0px #f7ce09;
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
		font-family: OSWALD;
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
	.footer{
		height: 140px;
		width: 100%;
		background-color: #313131;
	}
	.footer .center{
		width: 60%;
		margin:0 auto;
		color: #b4b4b4;	
		padding: 1% 0 0;	
	}
	.footer .center>p.line{
		width: 100%;
		height: 10px;
		border-bottom:1px solid #b4b4b4;
		margin-bottom:15px;
	}
	.footer .center>p{
		font-size: 13px;
		line-height: 27px;
	}
	.footer .center>span{
		font-size: 10px;
		line-height: 25px;
	}
	@media screen and (max-width:1200px) and (min-width:768px){
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
		.banImg .center>div.fl button.tit {
    		font-size: 35px;
    		padding: 14px 18px;
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
		.educa .center,.video .center,.fouPeo .center,.follow .center{
			width: 800px;
		}
		.video .center .fl {
		    margin-top: -5%;
    	}
		.video .center .fl p.line {
		    margin: 20px 0;
    	}
    	.fouPeo .center .flCon {
    		width: 35%;
    	}
    	.fouPeo .center .flCon p.con {
		    font-size: 17px;
		    line-height: 31px;
    	}
	}
	@media screen and (min-width:1200px) and (max-width:1700px){
		
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
    	.follow .center>.fr{
			width: 687px;
		}
    }
}
}
@media screen and (max-width:768px){

	html{
		font-size:62.5%;
    }
.road{
::-webkit-input-placeholder { 
	color: #b1b1b1;
	font-size: 1rem;
	font-family:SEMIBOLD;
}
::-moz-placeholder { 
	color: #b1b1b1;
	font-size: 1rem;
	font-family:SEMIBOLD;
}
:-ms-input-placeholder {  
	color: #b1b1b1;
	font-size: 1rem;
	font-family:SEMIBOLD;
}
:-moz-placeholder { 
	color: #b1b1b1;
	font-size: 1rem;
	font-family:SEMIBOLD;
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
		background:url(../../assets/analysts/Rban.jpg) no-repeat center;
		background-size: 100%;
	}
	.banBig .center {
		width: 95%;
		margin: -1px auto 0;
		padding: 2% 0 4%;
	}
	.banBig .center button.tit{
        font-family: Oswald;
		font-size: 2rem;
	    color: #ffffff;
	    background-color: #520daa;
	    text-align: left;
        padding: 0.8rem 1rem;
        margin-top:0.8rem;
        outline: none;
        border: none;
	}
	.banBig .center p.con{
        font-family: Oswald;
		font-size: 1.8rem;
	    color: #520daa;
	    margin-top: 0.5rem;
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
    /*Forex Beginner Education*/
	.educa {
		background-color: #fafafa;
	}
	.educa .center{
		width: 95%;
		margin: 0 auto;
		padding: 2rem 0 3rem;
	}
	.educa .center>p{
		font-family: Oswaldbold;
		font-size: 2rem;
		color: #550dad;
		line-height: 7rem;
		text-align: right;
		text-shadow: 3px -1px 0px #f7ce09;
	}
	.educa .center .eduCon{
		margin-top:2rem;
	}
	.educa .center .eduCon .flImg{
		width: 40%;
		margin-top: -9rem;
	}
	.educa .center .eduCon .flImg img{
		width: 100%;
	}
	.educa .center .eduCon .flCon{
		width: 88%;
		margin-left: 2rem;
	}
	.educa .center .eduCon .flCon .con{
		margin-top: 1rem;
		font-size: 1.5rem;
		color: #5b5b5b;
		font-family: Oswald;
		line-height: 2rem;
	}
	.educa .center .eduCon .flCon .con span{
		font-size: 2rem;
		color: #520da1;
	}
	.educa .center .eduCon .flCon .btn{
		font-weight: bold;
		padding:1rem ;
		font-size: 1.8rem;
		color: #520da1;
		text-align: center;
		background-color: #f7ce09;
		margin-top: 1.5rem;
		border-radius: 2rem;
		outline:none;
		border:none;

	}
	.educa .center .eduCon .flCon .btn a{
		color: #520da1;
	}
	/*video center*/
	.video {
		background-color: #efe8f7;
	}
	.video .center{
		width: 95%;
		margin: 0 auto;
		padding: 3rem 0 ;
	}
	.video .center .fl{
		width: 48%;
		margin-top: 2rem;
	}
	.video .center .fl p.tit{
		font-family: Oswaldbold;
		font-size: 2.2rem;
		color: #f7ce09;
		text-shadow: 3px -1px 0px #550dad;
	}
	.video .center .fl p.line{
		width: 10rem;
		height: 0.5rem;
		background-color: #520daa;
		margin: 1rem 0 ;
	}
	.video .center .fl p.con{
	    font-size: 1.8rem;
	    color: #696969;
	    font-family: Oswald;
	    line-height: 2rem;
	    width: 30rem;
	    margin-top: 5rem;
	}
	.video .center .fr{
		width: 50%;
	}
	.video .center .fr img{
		width: 100%;
	}
	/*FOREX FOUR*/
	.fouPeo{
		background-color: #f7f7f7;
	}
	.fouPeo .center{
		width: 95%;
		margin: 0 auto;
		padding: 3rem 0;
	}
	.fouPeo .center .flImg{
		width: 40%;
	}
	.fouPeo .center .flImg img{
		width: 100%;
	}
	.fouPeo .center .flCon{
	    width: 97%;
	    margin: 3% 0 0 0;
	}
	.fouPeo .center .flCon p.con{
		font-size: 1.8rem;
		line-height: 2.2rem;
		color: #5b5b5b;
		font-family: Oswald;
	}
	.fouPeo .center .flCon .btn{
		padding:1rem;
		font-weight: bold;
	    font-size: 1.5rem;
	    color: #520da1;
	    text-align: center;
	    background-color: #f7ce09;
	    margin-top: 1.5rem;
		border-radius: 2rem;
		border:none;
		outline:none;
	}
	.fouPeo .center .flCon .btn a{
		color: #520da1;
	}
	.fouPeo .center .fr{
		width: 20%;
		font-family: Oswaldbold;
	    font-size: 2rem;
	    color: #550dad;
	    text-align: right;
	    margin: -56% 24% 0 0;
	    text-shadow: 3px -1px 0px #f7ce09;
	}
	/*Follow us*/
	.follow {
		width: 100%;
		height: 8rem;
		background-color: #6d11e7;
	}
	.follow .center {
		width: 80%;
		margin: 0 auto;
	}
	.follow .center>p.fl {
		font-size: 2rem;
		color: #ffffff;
		line-height: 1rem;
		font-family: OSWALD;
		padding-top: 2rem;
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
	/*底部*/
	.footer{
		height: 12rem;
		width: 100%;
		background-color: #313131;
	}
	.footer .center{
		width: 89%;
		margin:0 auto;
		color: #b4b4b4;	
		padding: 2rem 0 0;
	}
	.footer .center>p.line{
		width: 100%;
		height: 1rem;
		border-bottom:1px solid #b4b4b4;
		margin-bottom:1rem;
	}
	.footer .center>p{
		font-size: 1.3rem;
		line-height: 1.5rem;
	}
	.footer .center>span{
		font-size: 1rem;
		line-height: 2.5rem;
	}
	@media screen and (max-width:320px){
		.nav .center>a>img {
			margin: 1.5rem 3rem;
		}
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
        .banBig .center{
            padding:1% ;
        }
	    .banBig .center button.tit {
		    padding: 0.5rem;
    	}
    	.banBig .center p.con {
    		font-size: 1.5rem;
    	}
    	.video .center .fl p.con {
		    font-size: 1.5rem;
		    width: 24rem;
    	}
    	.fouPeo .center .fr {
		    margin: -65% 24% 0 0;
    	}
    	.tabPho select {
		    width: 22.2rem;
    	}
    	.tabPho .numDiv .select {
    		width: 7rem;
    	}
    	.tabPho .inp input.phoNum {
		    width: 9rem;
		}
    	.tabPho .numDiv input {
    		width: 11.8rem;
    	}
    	
    }
    @media screen and (width:768px){
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
    	.banBig .center > div.fr{
		display: none;
	}
	.banBig .center {
		width: 95%;
		margin: -1px auto 0;
		padding: 2% 0 4%;
	}
	.banBig .center >div.fl button.tit{
		font-size: 2rem;
        padding: 0.8rem 1rem;
        margin-top:0.8rem;
	}
	.banBig .center > div.fl p.con{
		font-size: 1.8rem;
	    margin-top: 0.5rem;
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
	    .educa .center .eduCon .flImg {
		    margin-top: 0;
    	}
    	.educa .center .eduCon .flCon {
		    width: 55%;
		    margin-left: 2rem;
    	}
    	.educa .center>p {
		    line-height: 0;
    	}
    	.educa .center {
		    padding: 5rem 0 4rem;
    	}
    	.video .center .fl p.con {
		    margin-top: 2rem;
    	}
    	.fouPeo .center .flCon {
		    width: 55%;
		    margin: 3% 0 0 5%;
		}
		.fouPeo .center {
		    padding: 3rem 0 0;
    	}
    	.fouPeo .center .fr {
		    margin: -24% 1% 0 0;
    	}
	}
}
}
</style>

