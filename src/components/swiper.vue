
<template>
	<div id="banner" class="sildewarp">
		<div class="swiper-container"  style="z-index:100">
			<div class="swiper-wrapper" >
 
				<div class="swiper-slide">
					<div class="cnBanner" v-if="locale == 'cn'">
						<img  :src="banner[0][locale].img"  />
						<div class="emerging">
							<!-- <button class="action"><svg class="icon icon--rewind">
								<use xlink:href="#icon-rewind"></use>
							</svg></button> -->
							<router-link :to="banner[0][locale].url">
								<button class="nowBtn emergingBtn">立即开始交易</button>
							</router-link>
						</div>
					</div>
					<div class="cnBanner" v-if="locale == 'tc'">
						<img  :src="banner[0][locale].img"  />
						<div class="emerging">
							<!-- <button class="action"><svg class="icon icon--rewind">
								<use xlink:href="#icon-rewind"></use>
							</svg></button> -->
							<router-link :to="banner[0][locale].url">
								<button class="nowBtn emergingBtn">立即开始交易</button>
							</router-link>
						</div>
					</div>
                    <div v-if="locale == 'en'">
						<p class="entitle emerging">WE ARE THE MARKET LEADER</p>
						<p class="enBnnerCon emerging pc">AT CPTMARKETS, TRADE THE MARKETS YOU WANT, <br>TO PROVIDE THE BEST EXPERIENCE POSSIBLE TO YOU</p>
						<div class="enBtn emergingBtn">
							<router-link :to="banner[0][locale].url">
								<button class="nowBtn enBtns">START YOUR TRANSACTION</button>
							</router-link>
						</div>
						
					</div>
					
                </div>
				<div class="swiper-slide">
					<router-link to="">
						<img class="" :src="banner[1][locale].img" />
					</router-link>
                    
                </div>
				<div class="swiper-slide">
					<router-link :to="banner[2][locale].url">
						<img class="" :src="banner[2][locale].img" />
					</router-link>
                </div>
				
				
			</div>
			<div class="swiper-button-prev pc"></div>
			<div class="swiper-button-next pc"></div>
			<!-- <div class="swiper-pagination"></div> -->
		</div>
 
	</div>
 
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';       

  export default {
 
	name: 'banner',
		data() {
			return {
				enBool:false,
				banner:[
					{
						cn:{
							img:require("@/assets/bannerfont_03.png"),url:'/regist'
						},
						tc:{
							img:require("@/assets/bannerfont_03.png"),url:'/regist'
						},
						en:{
							img:require("@/assets/bannerfont_03.png"),url:'/regist'
						},
					},
					{
						cn:{
							img: "images/banner2cn.jpg",url:''
						},
						tc:{
							img: "images/banner2cn.jpg",url:''
						},
						en:{
							img:"images/banner2.jpg",url:''
						},
					},
					{
						cn:{
							img: "images/banner.jpg",url:'/plan'
						},
						tc:{
							img: "images/banner2.jpg",url:''
						},
						en:{
							img: "images/bannerEn.jpg",url:'/plan'
						},
					}
				],
			}
		},
		computed:{
			locale(){
				return this.$i18n.locale
			},
		},
	
	mounted: function() {

		//配置Swiper  建议关于Swiper配置方面可以前往Swiper官网
		new Swiper('.swiper-container', {
			pagination: {
				el: '.swiper-pagination',
			},
			
			loop: true,
			autoplay: {
				delay: 4000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			  navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
			},
			
		})
	}
}
</script>

<style lang="scss">

.swiper-container {
  width: 100%;
  height:100%;
}
.swiper-slide{
  text-align: center;
  color: #fff
}
.swiper-slide img {
	width: 100%;
}
.swiper-slide .cnBanner img{
	width: 45% ;
	font-family: Oswald;
    text-align: center;
    font-size: 68px;
    letter-spacing: 10px;
    margin-top: 185px;
	line-height: 200px;
	opacity: 0;
	transform: translate(0, 50px);
	animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
	animation-fill-mode: forwards;
}
.particles-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;

}
.nowBtn {
    position: relative;
    border-radius: 5px;
    border-radius: vb0eb2ar(--radius-button);
    background: #5b0eb2;
    color: #fff;
    border: 0;
    margin: 0;
    padding: 1.5rem 3rem;
    padding: var(--button-padding);
    width: 300px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    line-height: 0px !important;
    font-weight: bold;
    font-size: 16px;
}
.entitle{
    text-align: center;
	font-size: 50px;
	font-weight: bold;
    letter-spacing: 10px;
    margin-top: 100px;
    line-height: 100px;
}
.enBnnerCon{
    text-align: center;
    width: 100%;
    font-size: 24px;
    letter-spacing: 4px;
    line-height: 42px;
}
.enBtn{
	width: 300px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    margin: 80px auto;
    font-family: Oswaldbold;
    border-radius: 30px;
}
.emergingBtn {
  text-align: center;
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
  animation-fill-mode: forwards;
}
</style>