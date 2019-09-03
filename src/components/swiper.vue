
<template>
	<div id="banner" class="sildewarp">
		<div class="swiper-container"  >
			<div class="swiper-wrapper" >
 
				<div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                    <img class="" :src="item.img" />
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
				// bannerlist:[{
				// 		"img": require('../../../public/images/banner.jpg')
				// 	},
				// 	{
				// 		"img": require('../../../public/images/banner2cn.jpg')
				// 	},
				// ],
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
</style>