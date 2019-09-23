<template>
<div class="overSea">
<!--导航-->
        <div class="nav">
            <div class="center clearfix">
                <a href="/p/index"><img src="@/assets/sep_oversea/logo.png" class="fl" /></a>
                <p class="fl clearfix">
                    <span class="fl">
                        <img src="@/assets/sep_oversea/tel.png" />&nbsp;&nbsp;400-100-1103
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="fr">
                        <img src="@/assets/sep_oversea/xf.png"/>&nbsp;&nbsp;cs@cptmarkets.com
                    </span>
                </p>
                <div class="fr downbox">
                    <div class="topShow">
                        <img src="@/assets/sep_oversea/united-kingdom.png" class="topImg" />
                        <img src="@/assets/sep_oversea/pula.png" class="pula" />
                    </div>
                    
                    <div class="box">
                        <div class="arrows"></div>
                        <ul>
                            <li class="clearfix">
                                <a href="/p/sep_Chinese">
                                    <img src="@/assets/sep_oversea/china.png"/>
                                    <span>中文</span>
                                </a>	
                            </li>
                            <li class="clearfix">
                                <a href="/p/sep_Vietnam">
                                    <img src="@/assets/sep_oversea/vietnam.png"/>
                                    <span>Tiếng Việt</span>
                                </a>
                            </li>
                            <li class="clearfix">
                                <a href="/p/sep_Indonesia">
                                    <img src="@/assets/sep_oversea/indonesia.png"/>
                                    <span>Indonesia</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
		
		<!--大图-->
		<div class="bigBanner">
			<div class="center">
				<h3>CPT Markets <span>Welcome Bonus</span></h3>
				<h4>1st Sep. 2019 - 30th Sep. 2019</h4>
				<h5><router-link to="/regist">Register now!</router-link></h5>
				<svg width="0" height="0"> 
					<filter id="filter">
						<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="6" />
						<feDisplacementMap in="SourceGraphic" scale="100" />
					</filter>
				</svg>
				<div class="wrapper">
					<div class="button _1">
						<span><router-link to="/regist">Register now!</router-link></span><div class="back"></div>
					</div>
				</div>	
			</div>
		</div>
		<!--Best Deposit Bonus-->
		<div class="best">
			<div class="center clearfix">
				<div class="fl example-box green" id="example-yellow">
					<img src="@/assets/sep_oversea/leBox.png"/>
				</div>
				<div class="fr">
					<div class="beTop clearfix">
						<p class="fl">Up to</p>
						<img src="@/assets/sep_oversea/num.png" class="fl"/>
					</div>
					<p>Best Deposit Bonus</p>
					<div class="boxTab">
						<p>Personal Information</p>
						<input type="text" placeholder="First Name" name = 'first_name' id = 'first_name'/>
						<input type="text" placeholder="Last Name"  name = 'last_name' id = 'last_name'/>
						<select id="queryType"  name="queryType" v-model="cmd" @change="doChange()">
							<option value="1"  name="queryType">Indonesia</option>  
							<option value="2"  name="queryType">Vietnam</option>   
							<option value="3" name="queryType">Thailand</option>   
							<option value="4" name="queryType">Singapore</option>  
							<option value="5" name="queryType">Malaysia</option>  
							<option value="6" name="queryType">Philippines</option> 
							<option value="7" name="queryType">Cambodia </option> 
							<option value="8" name="queryType">Burma</option>   
							<option value="9" name="queryType">Laos </option> 
							<option value="10" name="queryType">Brunei </option> 
							<option value="11" name="queryType">Timor-Leste </option> 
						</select>
						<div class="numDiv clearfix">
                            <div  class="fl select">
                                +{{countryNum}}
                            </div>
							<input type="text" placeholder="Phone number" class="phoNum fl" name = 'user_cell' id = 'user_cell' />
						</div>
						
						<input type="email" placeholder="Email" class="mail" name = 'user_email' id ='user_email'/>
						<div class="check clearfix">
							<input type="checkbox" checked="checked" class="fl" />
							<p class="fl">I've read and accept the <span><a href="/Public/sep_overseas/CPT Markets Welcome Bonus 2019 Terms and Conditions.pdf" download="Terms and Conditions">Terms & Conditions</a></span></p>
						</div>
						<div class="btnDiv" name ='save_btn' id ='save_btn'>Register Now</div>
						<p class="tit">Already registered ? <span><router-link to="/login">Login now!</router-link></span></p>
					</div>
				</div>
			</div>
		</div>
		<!--How to claim bonus?-->
		<div class="claim">
			<div class="center">
				<h3>How to claim bonus?</h3>
				<ul class="clearfix">
					<li>
						<img src="@/assets/sep_oversea/claim1.png"/>
						<p>Register</p>
					</li>
					<li>
						<img src="@/assets/sep_oversea/claim2.png"/>
						<p>Deposit</p>
					</li>
					<li>
						<img src="@/assets/sep_oversea/claim3.png"/>
						<p>Trade</p>
					</li>
					<li>
						<img src="@/assets/sep_oversea/claim4.png"/>
						<p>Bonus</p>
					</li>
				</ul>
			</div>
		</div>
		<!--Valid deposit-->
		<div class="valDep">
			<div class="depTop clearfix">
				<div class="topLe">
					<p class="titDep">Valid deposit: $500≤X<$2,000</p>
					<p class="boxTit">Minimum transaction volume:<span>30</span>lots</p>
					<div class="boxBot clearfix">
						<p class="fl leP">Bonus</p>
						<p class="fl num">$60</p>
					</div>
				</div>
				<div class="topRig">
					<p class="titDep">Valid deposit: $2,000≤X<$5,000</p>
					<p class="boxTit">Minimum transaction volume:<span>100</span>lots</p>
					<div class="boxBot clearfix">
						<p class="fl leP">Bonus</p>
						<p class="fl num">$<span>200</span></p>
					</div>
				</div>
			</div>
			<div class="depBot clearfix">
				<div class="topLe">
					<p class="titDep">Valid deposit: $5,000≤X<$10,000 </p>
					<p class="boxTit">Minimum transaction volume:<span>250</span>lots</p>
					<div class="boxBot clearfix">
						<p class="fl leP">Bonus</p>
						<p class="fl num">$<span>1000</span></p>
					</div>
				</div>
				<div class="topRig">
					<p class="titDep">Valid deposit: X≥$10,000</p>
					<p class="boxTit">Minimum transaction volume:<span>500</span>lots</p>
					<div class="boxBot clearfix">
						<p class="fl leP">Bonus</p>
						<p class="fl num">$<span>2500</span></p>
					</div>
				</div>
			</div>
		</div>
		<!--Newly register customers?-->
		<p class="newlyReg">Newly register customers?<br>Then you can get  <span>$99</span> additional bonus!</p>
		<!--Terms and Conditions-->
		<div class="rulers">
			<div class="center">
				<h6>Terms and Conditions</h6>
				<img src="@/assets/sep_oversea/rul.png" alt="" @click="showToggle"/>
				<div class="conRul" v-if="isShow">
					<p>1. All CPT Markets real retail USD accounts can apply for this promotion by sending email to cs@cptmarkets.com for registration after the deposit from 1st September, 2019 to 30th September, 2019.</p>
					<p>2. All registered CPT Markets real retail USD accounts can claim the corresponding bonus after the required transaction volume is done before 31st December, 2019. </p>
					<p>3. When the “valid deposit” of all newly registered retail customers during the registration period is greater than or equal to $2,000, an additional $99 welcome bonus will be awarded to customer’s account after the required transaction volume is done. </p>
					<p>4. The “valid deposit” is calculated based on the total amount of deposits from 1st September , 2019 to the date of registration via email.</p>
					<p>5. The US cent account cannot participate in this promotion.</p>
					<p>6. This promotion is only available to customers of Southeast Asia countries and regions. Each account ID can only be used once and is not allowed to participate in other promotions at the same time. </p>
					<p>7. If CPT Markets detects that the customer has abused the terms of this promotion, CPT Markets reserves the right to withdraw the trading bonus or terminate the customer access to the services provided by CPT Markets.</p>
					<p>8. The transaction volume will not be counted when customers violate the “CPT Markets Liquidity Guidelines”or make other malicious transactions. </p>
					<p>9. CPT Markets reserves all rights for final explanation.</p>
				</div>
			</div>
		</div>
		<!--Follow us-->
		<div class="fllow">
			<div class="center">
				<p class="tit">Follow us</p>
				<ul class="clearfix">
					<li>
						<a href="https://www.youtube.com/channel/UCBFFLYCjE8KKU9x7AghbtEA"><img src="@/assets/sep_oversea/you.png"/></a>
					</li>
					<li>
						<a href="https://www.instagram.com/cptmarkets/"><img src="@/assets/sep_oversea/ins.png"/></a>
					</li>
					<li>
						<a href="https://twitter.com/cptmarketsglobe"><img src="@/assets/sep_oversea/Twitter.png" alt="" /></a>
					</li>
					<li>
						<a href="https://www.facebook.com/cptmarketslimited/"><img src="@/assets/sep_oversea/Facebook-Logo.png"/></a>
					</li>
					<li>
						<a href="https://t.me/CPTMarketsglobetraders"><img src="@/assets/sep_oversea/telegram.png"/></a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/cpt-markets-official/"><img src="@/assets/sep_oversea/linkedin.png"/></a>
					</li>
					<li>
						<a href="https://weibo.com/u/7073771810?refer_flag=1001030103_"><img src="@/assets/sep_oversea/weibo.png"/></a>
					</li>
					<li class="wxLi">
						<img src="@/assets/sep_oversea/weixin.png" class="wxIcon" />
						<img src="@/assets/sep_oversea/wx.jpg" class="wxEwm"/>
					</li>
				</ul>
				<p class="btn"><router-link to="/regist">Register now!</router-link></p>
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
            isShow:true,
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
       
        
    },
    
}
</script>

<style lang="scss">
@import "@/styles/mixin.scss";


:root {
  --height: 66px;
  --width: 240px;
}
.wrapper {
  width: calc(4 * var(--width));
  height: calc(4 * var(--height));
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.button {
  position: relative;
  width: calc(0.8 * var(--width));
  height: calc(0.7 * var(--height));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
  
  background: #fcc22d;  /*按钮原本的颜色*/
 border-radius: 20em;
}
.button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.button span {
  color: #fff;
  font-size: 1rem;
  z-index: 10;
  letter-spacing: 2px;
}
.button .back {
  position: absolute;
  width: 0;
  height: 0;
  filter: url(#filter);
  border-radius: 50%;
  z-index: 5;
  transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
  
  left: -50%;
  top: -50%;
  background: #f15f00;  /*鼠标经过的颜色*/
}
.button:hover .back {
  width: calc(2 * var(--width));
  height: calc(2 * var(--height));
}

@media only screen and (max-width: 750px) {
  .wrapper {
    flex-direction: column;
  }

  .button {
    margin: 0.8rem 0;
  }
}
.support {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 10px;
  display: flex;
}

@media screen and (min-width:768px){
::-webkit-input-placeholder { 
	color: #202020;
    font-size: 16px;
    font-weight: bold;
}
::-moz-placeholder { 
	color: #202020;
    font-size: 16px;
     font-weight: bold;
}
:-ms-input-placeholder { 
	color: #202020;
    font-size: 16px;
     font-weight: bold;
}
:-moz-placeholder {  
	color: #202020;
    font-size: 16px;
     font-weight: bold;
}
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
	    display: none;
	   	top:40px;
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
	/*大图*/
	.bigBanner{
		background:url(../../assets/sep_oversea/bigImg.png) no-repeat center;
		background-size: 100%;
	}
	.bigBanner .center{
		width: 80%;
		margin: 0 auto;
        font-weight:800;
		
		padding: 12% 0 8%;
	}
	.bigBanner .center h3{
		font-size: 56px;
		color: #ffffff;
        line-height: 68px;
        text-align: left;
	}
	.bigBanner .center h3 span{
		color: #fcc12d;
		display: block;
	}
	.bigBanner .center h4{
		margin:56px 0 35px;
		font-size: 28px;
		color: #ffffff;
	}
	.bigBanner .center h5{
		display: none;
	}
	.bigBanner .center .wrapper{
		font-size: 20px;
		color: #ffffff;
		text-align: center;
		width: 240px;
		height: 66px;
		line-height: 53px;
	}
	.bigBanner .center .wrapper a{
		color: #ffffff;
	}
	.bigBanner .center p{
		font-size: 14px;
		color: #ffffff;
		margin-top:23px;
	}
	/*Best Deposit Bonus*/
	.best .center{
		width: 1207px;
		margin: 95px auto 0;
	}
	.best .center>.fl{
		width: 51%;
	}
	.best .center>.fl img{
	    width: 122%;
    	margin: -9% 0 0 -31%;
	}
	.best .center>.fr{
		width: 40%;
	}
	.best .center>.fr .beTop{
		font-size: 68px;
		color: #5b00c3;
		font-weight:800;
		width: 727px;
		margin:0 auto;
	}
	.best .center>.fr .beTop p{
        margin-right: 52px;
        font-size: 68px;
	}
	.best .center>.fr>p{
		font-size: 38px;
		color: #000000;
		font-weight:bold;
		text-align: center;
		margin: 21px auto 34px; 
	}
	.best .center>.fr .boxTab{
		width: 92%;
		margin: 0 auto;
		background-color: #f7ce09;
		border-radius: 15px;
		box-shadow:1px 2px 14px 0px #dadada;
	}
	.best .center>.fr .boxTab>p{
		font-size: 32px;
		color: #202020;
		font-weight:bold;
		text-align: center;
		padding:34px 0 6px;
	}
	.best .center>.fr .boxTab>input{
		color: #202020;
        font-size: 16px;
        font-weight: 800;
		width: 80%;
		margin: 26px 5% 0;
		background-color: #f0eef0;
		border-radius: 5px;
		border:1px solid #e1dbc1;
		line-height: 60px;
		padding: 0 24px;
	}
	.best .center>.fr .boxTab .phoNum{
		background: url(../../assets/sep_oversea/phone.png) no-repeat 92% center #f0eef0;
		background-size: 4%;
	}
	.best .center>.fr .boxTab .mail{
		background:url(../../assets/sep_oversea/mail.png) no-repeat 94% center #f0eef0;
		background-size: 6%;
	}
	
	.best .center>.fr .boxTab select { 
		color: #202020;
        font-size: 16px;
		font-weight:700;
		width: 91%;
		margin: 34px 5% 0;
		border-radius: 5px;
		border:1px solid #e1dbc1;
		line-height: 60px;
		padding: 0 24px;
		appearance:none;   
		-moz-appearance:none;   
		-webkit-appearance:none; 
		background: url(../../assets/sep_oversea/sel.png) no-repeat scroll 92% center #f0eef0; 
	}
	.best .center>.fr .boxTab select::-ms-expand { display: none; }
	.best .center>.fr .boxTab .check{
		width: 84%;
		margin: 25px auto 33px;
	}
	.best .center>.fr .boxTab .check input{
		border:1px solid #e0dabe;
		border-radius: 5px;
		width: 12px;
		height: 12px;
		background-color: #f0eef0;
	}
	.best .center>.fr .boxTab .check p{
		margin-left:10px;
		line-height: 14px;
		font-size: 14px;
		color: #202020;
		font-weight:800;
	}
	.best .center>.fr .boxTab .check p span{
		color: #5b00c3;
	}
	.best .center>.fr .boxTab .check p span a{
		color: #5b00c3;
		text-decoration: underline;
	}
	.best .center>.fr .boxTab .btnDiv{
		width: 84%;
		margin: 0 auto 12px;
		font-size: 18px;
		color: #ffffff;
		font-weight:800;
		text-align: center;
		line-height: 60px;
		background:url(../../assets/sep_oversea/reg.png) no-repeat center;
		background-size: 100%;
	}
	.best .center>.fr .boxTab .btnDiv a{
		color: #ffffff;
	}
	.best .center>.fr .boxTab>p.tit{
		font-size: 12px;
		color: #202020;
		font-weight:800;
		text-align: center;
		padding:12px 0 16px;
	}
	.best .center>.fr .boxTab>p.tit span{
		color: #5b00c3;
	}
	.best .center>.fr .boxTab>p.tit span a{
		color: #5b00c3;
	}
	
	
	.best .center>.fr .boxTab .numDiv{
		width: 95%;
		margin: 26px 5% 0;
	}	
	.best .center>.fr .boxTab .numDiv .select{
		width: 30%;
		color: #202020;
			font-size: 16px;
			font-weight:700;
			margin: 0;
			border-radius: 5px;
			border:1px solid #e1dbc1;
			line-height: 60px;
			height: 60px;
			background-color: #f0eef0;
			text-align: center;
			display: none;
	}	
	.best .center>.fr .boxTab .numDiv .select:first-child{
		display: inline-block;
	}
	.best .center>.fr .boxTab .numDiv input{
		width: 54%;
		color: #202020;
			font-size: 16px;
			font-weight:800;
			margin:  0;
			background-color: #f0eef0;
			border-radius: 5px;
			border:1px solid #e1dbc1;
			line-height: 60px;
			padding: 0 24px;
	}	
	.best .center>.fr .boxTab .numDiv .phoNum {
	    background: url(../../assets/sep_oversea/phone.png) no-repeat 89% center #f0eef0;
	    background-size: 5%;
	}	
	
	/*How to claim bonus?*/
	.claim{
		background:url(../../assets/sep_oversea/claimBg.png) no-repeat top #5b00c3;
	}
	.claim .center{
		width: 1207px;
		margin: -8% auto 0;
	}
	.claim .center>h3{
		font-size: 40px;
		color: #ffd926;
		text-align: center;
		font-weight:bold;
		
		text-shadow:5px 2px 6px #000;
		padding-top: 19%;
	}
	.claim .center ul{
		margin-top:143px;
	}
	.claim .center ul li{
		float: left;
		width: 19%;
		margin: 0 3%;
		font-size: 26px !important;
		color: #ffffff;
		text-align: center;
		font-weight:800;
        padding-bottom: 115px;
	}
	.claim .center ul li img{
		margin: 0 auto 40px;
	}
	/*Valid deposit*/
	.valDep>div>div{
		float: left;
		width: 50%;
		padding:89px 0 83px;
	}
	.valDep>div>div p.titDep{
		font-size: 30px;
		color: #ffffff;
		font-weight:800;
		text-align: center;
	}
	.valDep>div>div p.boxTit{
		font-size: 18px;
		color: #ffffff;
		font-family:MONMEDIUM;
		text-align: center;
		margin-top: 14%;
	}
	.valDep>div>div p.boxTit span{
		font-size: 36px;
	}
	.valDep>div>div div.boxTit span{
		font-size: 36px;
	}
	.valDep>div>div div.boxBot{
		font-size: 56px;
		text-align: center;
		color: #fff;
		font-weight:800;
		text-shadow:5px 2px 6px #be5600;
		margin: 3% auto 0;
		font-style: italic;
	}
	.valDep>div>div div.boxBot p.num{
		display: inline-block;
		font-size: 120px;
	    margin: 0% 0 0 6%;
	}
	.valDep>div>div div.boxBot p.num span{
		font-size: 83px;
	}
	.valDep>div>div div.boxBot p.leP{
	    margin: 2% 0 0 30%;
	}
	.valDep>div>div div.boxBot p.lepReset{
	    margin: 2% 0 0 13%;
	}
	.valDep div.depTop div.topLe{
		background:url(../../assets/sep_oversea/bg1.jpg) no-repeat center #f26d00;
		background-size: 100%;
	}
	.valDep div.depTop div.topRig{
		background:url(../../assets/sep_oversea/bg2.jpg) no-repeat center #094dcc;
		background-size: 100%;
	}
	.valDep div.depBot div.topLe{
		background:url(../../assets/sep_oversea/bg3.jpg) no-repeat center #1d6035;
		background-size: 100%;
	}
	.valDep div.depBot div.topRig{
		background:url(../../assets/sep_oversea/bg4.jpg) no-repeat center #cd2652;
		background-size: 100%;
	}
	/*Newly register customers?*/
	p.newlyReg{
		margin:128px auto 140px;
		font-size: 52px;
		color: #000000;
		text-align: center;
		font-weight:bold;
		line-height: 111px;
	}
	p.newlyReg span{
		font-weight:800;
		font-size: 100px;
		color: #cd2652;
		font-style: italic;
	}
	/*Terms and Conditions*/
	.rulers .center{
		width: 1207px;
        margin: 0 auto 96px;
	}
	.rulers .center h6{
		font-size: 36px;
		color: #000000;
		font-weight:bold;
		
		text-align: center;
		margin-bottom: 38px;
	}
	.rulers .center img{
        margin: 0 auto 80px;
        display: block;
	}
	.rulers .center img:hover{
		cursor: pointer;
	}
	.rulers .center .conRul p{
		margin-top: 40px;
		font-size: 26px;
		line-height: 38px;
		color: #000000;
		font-weight:800;
	}
	/*Follow us*/
	.fllow{
		padding: 41px 0 51px;
		background:url(../../assets/sep_oversea/fllowBg.png) no-repeat center ;
		background-size: 100%;
	}
	.fllow .center{
		width: 1207px;
		margin: 0 auto;
	}
	.fllow .center p.tit{
		font-size: 46px;
		color: #f1e8fa;
		text-align: center;
		font-weight:800;
	}
	.fllow .center ul{
		width: 800px;
		margin: 60px auto 53px;
	}
	.fllow .center ul li{
		float: left;
		width: 6%;
		margin: 0 3%;
	}
	.fllow .center ul li img{
		width: 100%;
	}
	.fllow .center ul li img.wxEwm{
		display: none;
	}
	.fllow .center ul li.wxLi{
		position: relative;
	}
	.fllow .center ul li.wxLi img.wxEwm{
		position: absolute;
	    top: 127%;
	    left: -43%;
	    width: 227%;
	}
	.fllow .center ul li.wxLi:hover img.wxEwm{
		display: block;
	}
	.fllow .center p.btn{
		background:url(../../assets/sep_oversea/floBtn.png) no-repeat center;
		background-size: 100%;
		font-weight:800;
		text-align: center;
		font-size: 26px;
		color: #ffffff;
		width: 303px;
		height: 80px;
		line-height: 67px;
		margin: 0 auto;
	}
	.fllow .center p.btn a{
		color: #ffffff;
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
		.nav .center{
			width: 90%;
		}
		.bigBanner .center{
			width: 800px;
		    padding: 4% 0 3%;
    	}
    	.bigBanner .center h4 {
    		margin: 35px 0 0px;
    	}
    	.best .center,.claim .center,.rulers .center,.fllow .center {
			width: 800px;
    	}
    	.best .center>.fr .beTop{
    		width: auto;
    		font-size: 57px;
    	}
    	.best .center>.fr .beTop p {
		    margin-right: 52px;
		}
		.best .center>.fr .beTop img{
		    width: 62%;
    		margin: -19% 0 0 53%;
		}
		.best .center>.fr>p {
    		font-size: 30px;
    	}
    	.best .center>.fr .boxTab>p {
    		font-size: 20px;
		}
		.best .center>.fr .boxTab>input {
		    width: 75%;
		    margin: 34px 4% 0;
    	}
    	.best .center>.fr .boxTab .check p {
		    width: 217px;
		}
		.valDep>div>div div.boxBot p.leP {
		    margin: 2% 0 0 2%;
		}
		.valDep>div>div div.boxBot p.lepReset {
			margin: 2% 0 0 2%;
			font-size: 37px;
		}
		.valDep>div>div div.boxBot p.numReset {
			font-size: 62px !important;
		}
		.valDep>div>div div.boxBot p.num {
		    font-size: 96px;
		    margin: 0% 0 0 5%;
		}
		.valDep>div>div p.titDep {
    		font-size: 27px;
		}
		.valDep>div>div p.titReset {
			width: 312px;
			margin:0 auto
		}
		.valDep>div>div div.boxBot p.numReset span {
		    font-size: 52px !important;
		}
    	.valDep>div>div div.boxBot p.num span {
		    font-size: 79px;
		}
		p.newlyReg {
	    	font-size: 33px;
    	}
    	.fllow {
		    background-size: auto;
		}
		.best .center>.fr .boxTab .numDiv input {
    		width: 47%;
    	}
    	.best .center>.fr .boxTab .numDiv .phoNum {
		    background: url(../../assets/sep_oversea/phone.png) no-repeat 93% center #f0eef0;
		    background-size: 7%;
		}
		.best .center>.fl img {
		    width: 142%;
		    margin: -9% 0 0 -25%;
		}
		.claim .center {
		    margin: -32% auto 0;
    	}
    	.claim .center>h3 {
		    padding-top: 50%;
    	}
    	.nav .center>p {
		    margin-left: 18%;
		}

	}
	@media screen and (min-width:1200px) and (max-width:1700px){
		.nav .center {
    		width: 80%;
    	}
    	.bigBanner .center {
		    padding: 5% 0 4%;
    	}
    	.best .center>.fr .beTop img{
	    	width: 46%;
	    	margin-top: 3%;
    	}
    	.best .center>.fr .beTop {
		    width: 535px;
    	}
    	.valDep>div>div div.boxBot p.leP {
		    margin: 2% 0 0 12%;
		}
		.valDep>div>div div.boxBot p.lepReset {
		    margin: 2% 0 0 12%;
		}
		.fllow {
		    background-size: auto;
		}
		.claim .center {
		    margin: -20% auto 0;
		}
		.claim .center>h3 {
		    padding-top: 29%;
    	}
    	.best .center>.fl img {
    		width: 106%;
		    margin: -14% 0 0 -3%;
    	}
    	.nav .center>p {
		    margin-left: 30%;
		}
		.best .center>.fr .beTop p {
		    margin-right: 12px;
		}
    }
}

@media screen and (max-width:768px){
	html{
		font-size:62.5%;
	}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
	color: #202020;
	font-size: 1rem;
	font-weight:800;
}
::-moz-placeholder { /* Firefox 19+ */  
	color: #202020;
	font-size: 1rem;
	font-weight:800;
}
:-ms-input-placeholder { /* IE 10+ */ 
	color: #202020;
	font-size: 1rem;
	font-weight:800;
}
:-moz-placeholder { /* Firefox 18- */ 
	color: #202020;
	font-size: 1rem;
	font-weight:800;
}
	.nav .center{
		width: 98%;
		margin:0 auto;
	}
	.nav{
		width:100%;
		height: 4.8rem;
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
	    clearfix: both;
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
	/*大图*/
	.bigBanner{
		background:url(../../assets/sep_oversea/bigImg.png) no-repeat center;
		background-size: 100%;
	}
	.bigBanner .center{
		width: 90%;
	    margin: 0 auto;
	    font-weight: bold;
	    padding: 2% 0 0%;
	}
	.bigBanner .center h3{
	    font-size: 2rem;
        color: #ffffff;
        text-align: left;
	}
	.bigBanner .center h3 span{
		color: #fcc12d;
		display: block;
	}
	.bigBanner .center h4{
		margin: 1rem 0 1rem;
		font-size: 1.5rem;
		color: #ffffff;
	}
	.bigBanner .center .wrapper,.bigBanner .center svg{
		display: none;
	}
	.bigBanner .center h5{
	    background: url(../../assets/sep_oversea/btnBg.png) no-repeat center;
	    background-size: 100%;
	    font-size: 1.5rem;
	    color: #ffffff;
	    text-align: center;
	    width: 13rem;
	    height: 4rem;
	    line-height: 3.2rem;
	}
	.bigBanner .center h5 a{
		color: #ffffff;
	}
	.bigBanner .center p{
		font-size: 1rem;
		color: #ffffff;
		margin-top: 1.5rem;
	}
	/*Best Deposit Bonus*/
	.best .center{
		width: 90%;
		margin: 3rem auto 0;
	}
	.best .center>.fl{
		width: 37%;
	}
	.best .center>.fl img{
	    width: 100%;
    	margin: -10% 0 0 -2%;
	}
	.best .center>.fr{
		width: 55%;
	}
	.best .center>.fr .beTop{
		font-size: 2rem;
		color: #5b00c3;
		
		font-weight:800;
		margin:4rem auto 0;
	}
	.best .center>.fr .beTop p{
		margin-right: 1rem;
	}
	.best .center>.fr .beTop img{
		width: 61%;
	}
	.best .center>.fr>p{
		font-size: 1.5rem;
	    color: #000000;
	    font-weight:bolder;
	    text-align: center;
	    margin: 1.5rem auto 2rem;
	}
	.best .center>.fr .boxTab{
	    width: 169%;
	    margin: 20% 0 0 -72%;
	    background-color: #f7ce09;
	    border-radius: 1rem;
	    box-shadow: 1px 2px 14px 0px #dadada;
	}
	.best .center>.fr .boxTab>p{
		font-size: 1.5rem;
		color: #202020;
		font-weight:bold;
		text-align: center;
		padding:2rem 0 0.2rem;
	}
	.best .center>.fr .boxTab>input{
		color: #202020;
		font-size: 1.5rem;
		font-weight:800;
		width: 80%;
		margin: 2rem 5% 0;
		background-color: #f0eef0;
		border-radius: 0.2rem;
		border:1px solid #e1dbc1;
		line-height: 3rem;
		padding: 0 1.5rem;
	}
	.best .center>.fr .boxTab .phoNum{
		background: url(../../assets/sep_oversea/phone.png) no-repeat 92% center #f0eef0;
		background-size: 4%;
	}
	.best .center>.fr .boxTab .mail{
		background:url(../../assets/sep_oversea/mail.png) no-repeat 94% center #f0eef0;
		background-size: 6%;
	}
	.best .center>.fr .boxTab select { 
		color: #202020;
		font-size: 1.5rem;
		font-weight:700;
		width: 92%;
		margin: 2rem 5% 0;
		border-radius: 0.2rem;
		border:1px solid #e1dbc1;
		line-height: 3rem;
		padding: 0 1.5rem;
		appearance:none;   
		-moz-appearance:none;   
		-webkit-appearance:none; 
		background: url(../../assets/sep_oversea/sel.png) no-repeat scroll 95% center #f0eef0; 
	}
	.best .center>.fr .boxTab select::-ms-expand { display: none; }
	.best .center>.fr .boxTab .check{
		width: 84%;
		margin: 1.5rem auto 2rem;
	}
	.best .center>.fr .boxTab .check input{
		border:1px solid #e0dabe;
		border-radius: 5px;
		width: 1rem;
		height: 1rem;
		background-color: #f0eef0;
	}
	.best .center>.fr .boxTab .check p{
		width: 89%;
		margin-left: 0.5rem;
		line-height: 1rem;
		font-size: 1rem;
		color: #202020;
		font-weight:800;
	}
	.best .center>.fr .boxTab .check p span{
		color: #5b00c3;
	}
	.best .center>.fr .boxTab .check p span a{
		color: #5b00c3;
		text-decoration: underline;
	}
	.best .center>.fr .boxTab .btnDiv{
		width: 84%;
		margin: 0 auto 1rem;
		font-size: 18px;
		color: #ffffff;
		font-weight:800;
		text-align: center;
		line-height: 3rem;
		background:url(../../assets/sep_oversea/reg.png) no-repeat center;
		background-size: 100%;
	}
	.best .center>.fr .boxTab .btnDiv a{
		color: #ffffff;
	}
	.best .center>.fr .boxTab>p.tit{
		font-size: 1rem;
		color: #202020;
		font-weight:800;
		text-align: center;
		padding: 1rem 0 ;
	}
	.best .center>.fr .boxTab>p.tit span{
		color: #5b00c3;
	}
	.best .center>.fr .boxTab>p.tit span a{
		color: #5b00c3;
	}
	
.best .center>.fr .boxTab .numDiv{
	width: 95%;
	margin: 2rem 5% 0;
}	
.best .center>.fr .boxTab .numDiv .select{
	width: 30%;
	color: #202020;
		font-size: 1.5rem;
		font-weight:700;
		margin: 0;
		border-radius: 0.2rem;
		border:1px solid #e1dbc1;
		line-height: 3rem;
		height: 3rem;
    	background-color: #f0eef0;
		display: none;
		text-align: center;
}	
.best .center>.fr .boxTab .numDiv .select:first-child{
	display: inline-block;
}
.best .center>.fr .boxTab .numDiv input{
	width: 54%;
	color: #202020;
		font-size: 1.5rem;
		font-weight:800;
		margin:0;
		background-color: #f0eef0;
		border-radius: 0.2rem;
		border:1px solid #e1dbc1;
		line-height: 3rem;
		padding: 0 1.5rem;
}	
.best .center>.fr .boxTab .numDiv .phoNum {
    background: url(../../assets/sep_oversea/phone.png) no-repeat 89% center #f0eef0;
    background-size: 5%;
}	
	

	
	/*How to claim bonus?*/
	.claim{
		background-color: #5b00c3;
	}
	.claim .center{
		width: 90%;
		margin: 5rem auto 0;
	}
	.claim .center>h3{
		font-size: 2rem;
		color: #ffd926;
		text-align: center;
		font-weight:bold;
		text-shadow:5px 2px 6px #000;
		padding-top: 10%;
	}
	.claim .center ul{
		margin-top: 3rem;
	}
	.claim .center ul li{
		float: left;
		width: 19%;
		margin: 0 3%;
		font-size: 1.5rem;
		color: #ffffff;
		text-align: center;
		font-weight:800;
		padding-bottom: 5rem;
	}
	.claim .center ul li img{
		width: 100%;
		margin: 0 auto 2rem;
	}
	/*Valid deposit*/
	.valDep>div>div{
		float: left;
		width: 50%;
		padding: 3rem 0 3rem;
	}
	
	.valDep>div>div p.titReset{
		font-size: 1.5rem !important;
	}
	.valDep>div>div p.titDep{
		font-size: 2rem;
		color: #ffffff;
		font-weight:800;
		text-align: center;
	}
	.valDep>div>div p.boxTit{
		font-size: 1.5rem;
		color: #ffffff;
		font-family:MONMEDIUM;
		text-align: center;
		margin-top: 14%;
	}
	.valDep>div>div div.boxTit span{
		font-size: 2rem;
	}
	.valDep>div>div div.boxReset{
		font-size: 2.5rem !important;
	}
	.valDep>div>div div.boxBot{
		font-size: 3rem;
		text-align: center;
		color: #fff;
		font-weight:800;
		text-shadow:5px 2px 6px #be5600;
		margin: 3% auto 0;
		font-style: italic;
	}
	.valDep>div>div div.boxBot p.num{
		display: inline-block;
		font-size: 5rem;
	    margin: 0% 0 0 6%;
	}
	.valDep>div>div div.boxBot p.num span{
		font-size: 3rem;
	}
	.valDep>div>div div.boxBot p.leP{
	    margin: 2% 0 0 30%;
	}
	.valDep>div>div div.boxBot p.lepReset{
	    margin: 2% 0 0 8%;
	}
	.valDep div.depTop div.topLe{
		background:url(../../assets/sep_oversea/bg1.jpg) no-repeat center #f26d00;
		background-size: 100%;
	}
	.valDep div.depTop div.topRig{
		background:url(../../assets/sep_oversea/bg2.jpg) no-repeat center #094dcc;
		background-size: 100%;
	}
	.valDep div.depBot div.topLe{
		background:url(../../assets/sep_oversea/bg3.jpg) no-repeat center #1d6035;
		background-size: 100%;
	}
	.valDep div.depBot div.topRig{
		background:url(../../assets/sep_oversea/bg4.jpg) no-repeat center #cd2652;
		background-size: 100%;
	}
	/*Newly register customers?*/
	p.newlyReg{
		margin:5rem auto 3rem;
		font-size: 2.2rem;
		color: #000000;
		text-align: center;
		font-weight:bold;
		line-height: 3rem;
	}
	p.newlyReg span{
		font-weight:800;
		font-size: 3rem;
		color: #cd2652;
		font-style: italic;
	}
	/*Terms and Conditions*/
	.rulers .center{
		width: 90%;
        margin: 0 auto 3rem;
	}
	.rulers .center h6{
		font-size: 2rem;
		color: #000000;
		font-weight:bold;
		
		text-align: center;
		margin-bottom: 2rem;
	}
	.rulers .center img{
		margin: 0 auto;
        width: 16%;
        display: block;
	}
	.rulers .center img:hover{
		cursor: pointer;
	}
	.rulers .center .conRul p{
		margin-top: 2rem;
		font-size: 1.5rem;
		line-height: 2rem;
		color: #000000;
        font-weight: 800;
	}
	/*Follow us*/
	.fllow{
		padding: 3rem 0;
		background:url(../../assets/sep_oversea/fllowBg.png) no-repeat center ;
	}
	.fllow .center{
		width: 90%;
		margin: 0 auto;
	}
	.fllow .center p.tit{
		font-size: 2rem;
		color: #f1e8fa;
		text-align: center;
		font-weight:800;
	}
	.fllow .center ul{
		width: 100%;
		margin: 2rem auto 3rem;
	}
	.fllow .center ul li{
		float: left;
		width: 19%;
		margin: 0 3%;
	}
	.fllow .center ul li img{
	    width: 61%;
    	margin: 1rem auto;
	}
	.fllow .center ul li img.wxEwm{
		display: none;
	}
	.fllow .center ul li.wxLi{
		position: relative;
	}
	.fllow .center ul li.wxLi img.wxEwm{
	    position: absolute;
	    top: 70%;
	    left: 0%;
	    width: 105%;
	}
	.fllow .center ul li.wxLi:hover img.wxEwm{
		display: block;
	}
	.fllow .center p.btn{
		background: url(../../assets/sep_oversea/floBtn.png) no-repeat center;
	    background-size: 100%;
	    font-family: MONBOLD;
	    text-align: center;
	    font-size: 1.5rem;
	    color: #ffffff;
	    width: 13rem;
	    height: 4rem;
	    line-height: 3.2rem;
	    margin: 0 auto;
	}
	.fllow .center p.btn a{
		color: #ffffff;
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
		    margin: 1.5rem 7rem;
		}
		.footer .center>p {
    		font-size: 1rem;
    	}
    	.footer .center {
    		width: 93%;
    	}
    	.bigBanner .center {
		    padding: 0 0 0%;
		    clearfix:both;
		}
		.bigBanner .center h4 {
    		margin: 0;
    	}
    	.best .center>.fr .beTop img {
		    width: 56%;
		}
		.best .center>.fr .boxTab>input {
		    width: 77%;
		}
		.valDep>div>div p.titReset{
			font-size: 1.2rem !important;
		}
    	.valDep>div>div p.titDep{
			font-size: 1.5rem;
		}
		.best .center>.fr .boxTab .numDiv input {
	    	width: 51%;
	    }
	    .nav .center>a>img {
		    margin: 1.5rem 3rem;
		}
    }
    @media screen and (width:768px){
    	.nav .center>a>img {
		    width: 30%;
		    margin: 1.3rem 14.5rem;
		}
		.bigBanner .center .wrapper,.bigBanner .center svg{
			display: none;
		}
		.bigBanner .center h5{
			display: block;
		}
		.bigBanner .center h3 {
            line-height: 2rem;
            text-align: left;
    	}
    	.bigBanner .center {
		    padding: 10% 0 5%;
    	}
    	.best .center>.fr .beTop {
    		font-size: 5rem;
    	}
    	.best .center>.fr .beTop img {
		    margin: -19% 0 0 42%;
    	}
    	.best .center>.fr>p {
		    font-size: 2.5rem;
		    margin: 1.5rem auto 0rem;
    	}
    	.best .center>.fr .boxTab {
		    width: 90%;
		    margin: 4% 0 0 8%;
    	}
    	.best .center>.fl {
		    width: 45%;
		}
		.claim .center ul li img {
    		width: 66%;
    	}
    	.best .center>.fl img {
		    margin: 60% 0 0 -2%;
		}
		.best .center>.fr .boxTab select {
		    width: 91%;
    	}
    	.fllow .center ul li{
			width: 6%;
			margin: 0 3%;
		}
		.fllow .center ul li img{
			width: 100%;
		}
		.fllow .center ul li.wxLi img.wxEwm{
			position: absolute;
		    top: 80%;
		    left: -43%;
		    width: 227%;
		}
	}
}
</style>