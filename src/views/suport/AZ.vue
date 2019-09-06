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
    export default {
        data(){
            return{
                words:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
                contents:[
                    {big:"A",
                    long:["Accrual：累积，在每一次交易期间内，远期外汇交易所分配的升水或折扣直接关系至利益套汇交易。",
                        "Account balance/account value：账户余额/账户价值在计算所有的进项和贷项后，某个账户在某个时间所持的净额。",
                        "Adjustment：调整，官方行动，用于调整内部经济政策来修正国际收支或货币。",
                        "AIM (Alternative Investment Market) : （另类投资市场）伦敦证券交易所 (LSE) 的子市场，小型企业在此筹资所适用的监管制度相较于伦敦证券交易所的主市场更为灵活。不提供另类投资市场上市股票的差价合约产品。",
                        "Appreciation：增值,当物价应市场需求抬升时,一种货币即被称作增值，资产价值因而增加。",
                        "Arbitrage：套汇，利用不同市场的对冲价格,通过买入或卖出信用工具,同时在相应市场中买入相同金额但方向相反的头寸，以便从细微价格差额中获利。",
                        "Ask(Offer) Price：卖出(买入)价，在一外汇交易合同或交叉货币交易合同中一指定货币的卖出价格。以此价格，交易者可以买进基础货币。在报价中,它通常为报价的右部价格。",
                        "At Best：最佳价格，一指示告诉交易者最好的买进/卖出价格。现价或更好，一交易以一特定或更理想汇率执行。",
                        "AUD-Australian Dollar：澳元",
                    ]},
                    {big:"B",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                        "Balance of trade：国际收支，指一国承认的,在一定时期内对外交易的记录包括商品、服务和资本流动。",
                        "Bar Chart：棒形图表,一种由4个突点组成的图表:最高和最低价格组成垂直棒状，被一小水平线标志于棒形的左端为开市价格,右端的小水平线则为关市价格。",
                        "Base Currency：基础通,其他货币均比照其进行报价的货币。它表示基础货币相对第二种货币的价值。",
                        "Base rate：基准利率某个国家/地区中央银行所确定的贷款利率。",
                        "Basis point：基准点通常为万分之一或0.01%，比如降息50个基准点即为降息0.5%。",
                        "Bear market：熊市，以长时期下跌的价格为特征的市场。",
                        "Bid：买入价。买家愿意购买产品的最高价称为“买入价”。亦请参阅“卖出价”。",
                        "Bid-offer spread：买卖差价。产品购买价（卖出价）及售出价（买入价）之间的差价。",
                        "Bid Price：买入价，该价格是市场在一外汇交易合同或交叉货币交易合同中准备买入一货币的价格。",
                        "Bid/ Ask Spread：差价，买人与卖出价格的差额。",
                        "Big Figure Quote：大数，交易员术语，指汇率的头几位数字。",
                        "Blue chip：蓝筹。蓝筹企业通常地位稳固，财务稳健，更能抵御经济萧条。因此蓝筹股被认为更加稳定。列于某个国家/地区顶级股票指数（如英国富时100指数）的企业被视为蓝筹。",
                        "Book：账本，在专业交易环境中,账本是交易商或者交易柜台全部头寸的总览。",
                        "Bollinger Bands：布林线。在技术分析中用于衡量市场波动的图表指标，由一条移动平均线和两条标准差线组成。",
                        "Bull Market：牛市，以长时期上涨价格为特征的市场。",
                        "Bullion：贵金属。贵金属条或锭，如金、银、铂或钯。",
                        "Bundes bank：联邦银行，德意志联邦银行。",
                        "Buy limit order：买入限价订单该附带条件的交易订单仅可按指定价格或更低的价格购买证券。亦请参阅“止盈订单”。",
                        "Buy position：多头头寸市价上涨时获利或市价下跌时亏损的市场头寸。",
                        "Buy stop-entry order：买入止损挂单。",
                        "Breakout trading：突破交易该交易策略建议一旦价格突破指定的阻力位或支撑位则进行点差交易或差价合约交易。当价格突破阻力位时买入，当价格突破支撑位时卖出。这些策略认为，一旦价格突破支撑或阻力位，很可能开始出现新的趋势。",
                        "Broker： 经纪商为促成买卖双方交易充当中介角色的个人或公司，通常收取小额佣金或费用。",
                    ]},
                    {big:"C",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"D",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"E",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"F",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"G",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"H",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"I",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"J",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"K",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"L",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"M",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"N",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"O",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"P",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"Q",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"R",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"S",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"T",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"U",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"V",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"W",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"X",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"Y",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                    {big:"Z",long:[
                        "Backwardation：现货溢价。该理论指由于期货合约期限将至，将以高于到期后价格的价格进行交易。亦请参阅“期货溢价",
                    ]},
                ],
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
	/*width: 1014px;*/
	margin-top: 30px;
	margin-left: 60px;
    border:1px solid #e8e9ed;
	border-right:none;
	border-bottom:none;
}
.azacontent>.center>ul>li{
	font-weight: 900;
	float:left;
	width: 37px;
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