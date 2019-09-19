<template>
    <div class="Basis">
		<!-- 主体 -->
		<div class="bascontent">
			<div class="center">
				<h1 v-html="carry.name[locale]"></h1>
				<div class="basisMain" v-for="(item,index) in carry.contents" :key="index">
					<h3 v-html="item[locale].title"></h3>
					<div class="basisCont" v-html="item[locale].content"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { contents,contentEn } from './js/BasisChild.js'
    import {BisisData} from './js/BasisData'
    export default {
        data(){
            return {
			   list:  require('./js/BasisData'),
			 
            }
		},
		computed: {
			locale() {
				return this.$i18n.locale
			},
			numbers(){
				return this.$route.params.num || 0;
			},
			carry(){
				let data = this.list[this.numbers];
				return data;
			},
		},
        
    }
</script>

<style lang="scss" scoped>
.Basis{
	margin-bottom:70px;
	.bascontent{
		.center{
			width: 62%;
			margin:0 auto;
			
			>h1{
				font-size: 36px;
				color: #000000;
				margin: 77px 0 0 0!important;
				text-align: center;
				
			}
			div.basisMain{
				>*{
					margin: 54px 29px 0 29px
				}
				>h3{
					font-size: 22px;
					line-height: 65px;
					color: #000000;
				}
				.basisCont{
					font-size: 17px;
					line-height: 35px;
					color: #676767;
					font-family: jianti;
					margin-top: 16px;
				}
			}
		}
	}
}

</style>
