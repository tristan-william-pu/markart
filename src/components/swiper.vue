
<template>
	<div id="banner" class="sildewarp">
		<div class="swiper-container"  style="z-index:100">
			<div class="swiper-wrapper" >
 
				<div class="swiper-slide">
                    <img class="" :src="banner[0].img" />
					<div class="grid__item theme-1 emerging">
						<!-- <button class="action"><svg class="icon icon--rewind">
							<use xlink:href="#icon-rewind"></use>
						</svg></button> -->
						<button class="particles-button emergingBtn">立即开始交易</button>
					</div>
                </div>
				<div class="swiper-slide">
                    <img class="" :src="banner[1].img" />
                </div>
				<div class="swiper-slide">
                    <img class="" :src="banner[2].img" />
                </div>
				<div class="swiper-slide">
                    <img class="" :src="banner[3].img" />
                </div>
				<div class="swiper-slide">
                    <img class="" :src="banner[4].img" />
                </div>
				
			</div>
 
			<div class="swiper-pagination"></div>
		</div>
 
	</div>
 
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';       

  export default {
 
	name: 'banner',
    props:['banner'],
		data() {
			return {
			}
		},
 
		methods: {
 
		},
		components: {
 
			
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

			})
		}
	}
</script>

<style lang="scss" scoped>

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
.swiper-slide:nth-child(2) img{
	width: 45% !important;
	font-family: Oswald;
    text-align: center;
    width: 100%;
    font-size: 68px;
    letter-spacing: 10px;
    margin-top: 185px;
	line-height: 200px;
	opacity: 0;
	transform: translate(0, 50px);
	animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1);
	animation-fill-mode: forwards;
}
.swiper-slide:last-child img{
	width: 45% !important;
	font-family: Oswald;
    text-align: center;
    width: 100%;
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
    width: 300px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    line-height: 0px !important;
    font-weight: bold;
    font-size: 16px;
}
.emergingBtn {
  text-align: center;
  opacity: 0;
  transform: translate(0, 50px);
  animation: slide-up 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.8s;
  animation-fill-mode: forwards;
}
</style>