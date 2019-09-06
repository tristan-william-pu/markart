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
                    <li v-for="(word,index) in words" :key="index" @click="wordsCHange(index)" :class="index == num ?'wordActive':''">{{word}}</li>
				</ul>
				<div class="con clearfix" v-for="(content,index) in contents" :key="index" v-show="index == num ">
					<p class="fl setfontsize">{{content.big}}</p>
					<div class="fr setfontsizes">
						<p v-for="(sentence,index) in content.long" :key="index">{{sentence}}</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import {contents} from './js/contents'
    export default {
        data(){
            return{
                words:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                contents:contents,
                num:0,
            }
        },
        created(){
            console.log(this.$route.params.freezeMon)
            this.num = this.$route.params.freezeMon;
        },
        methods:{
            wordsCHange(index){
                this.num = index;
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
//     @font-face {
// 	font-family:letter;
// 	src: url(../font/fz/A_ALBIONICEXP.TTF);
// }
// @font-face {
// 	font-family:jianti;
// 	src: url(../font/fz/兰亭黑简.TTF);
// }
.center{
	max-width: 1024px;
	margin:0 auto;
}
.azacontent>.center>.title>span{
	display: inline-block;
	line-height: 80px;
	margin-top: 8%;
	margin-bottom: 4%
}
.azacontent>.center>.title>span.fl{
	font-size: 45px;
	color: #333333;
	margin-left:46px;
	font-style:italic;
}
.azacontent>.center>.title>span.fr{
	font-size: 42px;
	color: #000000;
	font-weight: 900;
	border-bottom: 1px solid #000;
	width: 72%;
}

.azacontent>.center>ul{
	// width: 1014px;
	margin-top: 30px;
	margin-left: 60px;
    border:1px solid #e8e9ed;
	border-right:none;
	border-bottom:none;
}
.azacontent>.center>ul>li{
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
}
.azacontent>.center>ul>li:hover{
	cursor:pointer;
}
.azacontent>.center>ul>li>a{
	color: #c9c9c9;
}
.azacontent>.center>ul>li.weight_le>a{
	color: #000000;
}
.azacontent>.center>.con{
	margin:68px 15px 216px 31px;
}
.azacontent>.center>.con>p.fl{
	font-family:letter;
	font-size: 73px;
	color:#5b0eb2;
	font-style:italic;
}
.azacontent>.center>.con>div.fr{
	width:80%;
	font-size: 17px;
	color: #333333;
	font-family:jianti;
}
.azacontent>.center>.con>div.fr>p{
	margin-top:32px;
	line-height: 33px;
}
.azacontent>.center>.con>div.fr>p:first-child{
	margin-top:0;
}
@media (max-width:768px){
	.azacontent>.center>.title>span.fr {font-size:23px;font-weight: 900;}
	.azacontent>.center>.title>span.fl {margin-left: 0px;}
	.azacontent>.center>ul {margin: 30px 0 0 0;}
	.azacontent>.center>.con {margin: 68px 0;}
}
  
</style>