<template>
    <div class="Basis">
		<!-- 主体 -->
		<div class="bascontent">
			<div class="center">
				<h1 v-html="list[num].name[locale]"></h1>
				<div class="basisMain" v-for="(item,index) in list[num].contents" :key="index">
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
			   num:0,
            }
		},
		computed: {
			locale() {
				return this.$i18n.locale
			},
			carry(){
				let data = this.list[this.num];
				return data;
			},
		},
        created(){
			console.log(this.$route.params.num)
			if(this.$route.params.num !== undefined){
				this.num = this.$route.params.num;
			}else{
				this.num = 0;
			}
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

@media (max-width:1200px) {
	.Basis{
      .bascontent{
        .center{
          width: 90%;
          margin-left:5%;
          
          >h1{
            font-size: 1rem;
          }
          div.basisMain{
            >*{
              margin: 2.13rem 0 0 0 ;
            }
            >h3{
              font-size: 0.9rem;
              line-height: 1.8rem;
            }
            .basisCont{
              font-size: 0.47rem;
			  line-height:1.2rem;
            }
          }
        }
      }
    }
}

</style>
