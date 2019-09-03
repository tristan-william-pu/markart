
<template>
	<div id="banner" >
		<div class="swiper-container"  >
			<div class="swiper-wrapper" >
 
				<div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                    <img   :src="item.img" />
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

</style>