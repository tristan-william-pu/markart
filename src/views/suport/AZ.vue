<template>
    <div>
        <!-- <h1>{{$route.params.freezeMon}}</h1> -->
       <!--内容-->
		<div class="azacontent container">
			<div class="center row">
				<div class="title clearfix">
					<span class="fl">A-Z</span>
					<span class="fr">外汇交易术语及词汇</span>
				</div>
				<ul class="clearfix changecolor">
                    <li v-for="(word,index) in words" :key="index" @click="wordsCHange(index)" :class=" index == num ?'wordActive':''">{{word}}</li>
				</ul>
				<!-- <template v-for="(content,index) in carry">
					<div class="con clearfix" :key="index" v-if=" num == index ">
						<p class="fl setfontsize">{{carry[index].big}}</p>
						<div class="fr setfontsizes">
							<p v-for="(sentence,key) in carryLong" :key="key">{{sentence}}</p>
						</div>
					</div>
				</template> -->
				<div>
					<div class="con clearfix" >
						<p class="fl setfontsize">{{carry.big}}</p>
						<div class="fr setfontsizes">
							<p v-for="(sentence,key) in carryLong" :key="key">{{sentence}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                words:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                contents: require('./js/contents'),
				num:0,
				bool:false,
            }
		},
		computed:{
			locale() {
				return this.$i18n.locale
			},
			numbers(){
				return this.$route.params.freezeMon || 0;
			},
			carry(){
				let data;
				if( this.bool ){
					 data = this.contents.contents[this.num];
				}else{
					 data = this.contents.contents[this.numbers];
				}

				return data;
			},
			carryLong(){
				let data;
				if( this.locale == 'en' ){
					data = this.carry.enlong;
				}else if( this.locale == 'cn' ){
					data = this.carry.long;
				}else{
					data = this.carry.zhlong;
				}
				return data;
			},
		},
		mounted(){
			this.num = this.numbers;
		},
        methods:{
            wordsCHange(index){
				this.num = index;
				this.bool = true;
            },
        },

    }
</script>

<style lang="scss" scoped>
.fl{
    float:left;
}
.fr{
    float:right;
}
.wordActive{
    color:#000000 !important;
}

.center{
	max-width: 1024px;
	margin:0 auto;
}
.azacontent{
	.center{
		.title{
			span{
				display: inline-block;
				line-height: 80px;
				margin-top: 8%;
				margin-bottom: 4%
			}
			span.fl{
				font-size: 45px;
				color: #333333;
				margin-left:46px;
				font-style:italic;
			}
			span.fr{
				font-size: 42px;
				color: #000000;
				font-weight: 900;
				border-bottom: 1px solid #000;
				width: 72%;
			}
		}
		ul{
			// width: 1014px;
			margin-top: 30px;
			margin-left: 60px;
			border:1px solid #e8e9ed;
			border-right:none;
			border-bottom:none;
			li{
				font-weight: 900;
				float:left;
				width: 35px;
				height: 37px;
				font-size: 18px;
				color: #c9c9c9;
				text-align: center;
				line-height: 37px;
				border-right:2px solid #e8e9ed;
				font-family:letter;
				border-bottom:1px solid #e8e9ed;
				cursor: pointer;
				&:hover{
					cursor:pointer;
				}
				a{
					color: #c9c9c9;
				}
			}
			li.weight_le{
				a{
					color: #000000;
				}
			}
		}
		.con{
			margin:68px 15px 216px 31px;
			p.fl{
				font-family:letter;
				font-size: 73px;
				color:#5b0eb2;
				font-style:italic;
			}
			div.fr{
				width:80%;
				font-size: 17px;
				color: #333333;
				font-family:jianti;
				p{
					margin-top:32px;
					line-height: 33px;
				
				}
				&:first-child{
					margin-top:0;
				}
			}
		}
	}
}

@media (max-width:768px){
	.azacontent{
		.center{
			.title{
				span.fr {font-size:23px;font-weight: 900;}
				span.fl {margin-left: 0px;}
			}
			ul {margin: 30px 0 0 0;}
			.con {margin: 68px 0;}
		}
	}
}
  
</style>