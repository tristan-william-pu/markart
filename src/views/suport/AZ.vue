<template>
    <div>
        <!-- <h1>{{$route.params.freezeMon}}</h1> -->
        <div class="az">
			<div class="center">
				<div class="schooltit clearfix">
					<p class="fl eng">A-Z</p>
					<p class="fl chi">外汇交易术语及词汇</p>
				</div>
				<ul id="goroute" class="clearfix">
					<li><a href="/p/AZa/param/A">A</a></li>
					<li><a href="/p/AZa/param/B">B</a></li>
					<li><a href="/p/AZa/param/C">C</a></li>
					<li><a href="/p/AZa/param/D">D</a></li>
					<li><a href="/p/AZa/param/E">E</a></li>
					<li><a href="/p/AZa/param/F">F</a></li>
					<li><a href="/p/AZa/param/G">G</a></li>
					<li><a href="/p/AZa/param/H">H</a></li>
					<li><a href="/p/AZa/param/I">I</a></li>
					<li><a href="/p/AZa/param/J">J</a></li>
					<li><a href="/p/AZa/param/K">K</a></li>
					<li><a href="/p/AZa/param/L">L</a></li>
					<li><a href="/p/AZa/param/M">M</a></li>
					<li><a href="/p/AZa/param/N">N</a></li>
					<li><a href="/p/AZa/param/O">O</a></li>
					<li><a href="/p/AZa/param/P">P</a></li>
					<li><a href="/p/AZa/param/Q">Q</a></li>
					<li><a href="/p/AZa/param/R">R</a></li>
					<li><a href="/p/AZa/param/S">S</a></li>
					<li><a href="/p/AZa/param/T">T</a></li>
					<li><a href="/p/AZa/param/U">U</a></li>
					<li><a href="/p/AZa/param/V">V</a></li>
					<li><a href="/p/AZa/param/W">W</a></li>
					<li><a href="/p/AZa/param/X">X</a></li>
					<li><a href="/p/AZa/param/Y">Y</a></li>
					<li><a href="/p/AZa/param/Z">Z</a></li>
				</ul>
				<div class="con clearfix">
					<p class="fl">A</p>
					<div class="fr">
						<p>Accrual：累积，在每一次交易期间内，远期外汇交易所分配的升水或折扣直接关系至利益套汇交易。</p>
						<p>Account balance/account value：账户余额/账户价值在计算所有的进项和贷项后，某个账户在某个时间所持的净额。</p>
						<p>Adjustment：调整，官方行动，用于调整内部经济政策来修正国际收支或货币。</p>
						<p class="botDian">&bull;&bull;&bull;&bull;&bull;&bull;</p>
					</div>
				</div>

                <!-- <div class="con clearfix">
					<p class="fl">B</p>
					<div class="fr">
						<p>Accrual：累积，在每一次交易期间内，远期外汇交易所分配的升水或折扣直接关系至利益套汇交易。</p>
						<p>Account balance/account value：账户余额/账户价值在计算所有的进项和贷项后，某个账户在某个时间所持的净额。</p>
						<p>Adjustment：调整，官方行动，用于调整内部经济政策来修正国际收支或货币。</p>
						<p class="botDian">&bull;&bull;&bull;&bull;&bull;&bull;</p>
					</div>
				</div> -->
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.fl{
    float:left;
}
.fr{
    float:right;
}
.center{
    max-width: 1024px;
    margin: 0 auto;
}
.az>.center>.schooltit>p.fl {
    font-size: 45px;
    color: #333333;
    margin-left: 46px;
    font-style: italic;
}
/*A-Z*/
	.az .center{
		width: 63%;
		margin: 0 auto;
	}
	.az .center>div.schooltit .eng{
		width: 20%;
		font-family:LTCHK;
		font-size: 28px;
		color: #000;
		font-style: italic;
		margin: 2% 0 0 10%;
	}
	.az .center>div.schooltit .chi{
		width: 70%;
		font-family:LTCHK;
		font-size: 40px;
		color: #000;
		padding-bottom:70px;
		border-bottom:1px solid #171717;
		font-weight: 900;
	}
	.az .center>ul{
		margin-top:30px;
	}
	.az .center>ul li{
		float: left;
		width: 45px;
		line-height: 45px;
		text-align: center;
		border-right:1px solid #f4f5f7;
		border-bottom:1px solid #f4f5f7;
		border-top:1px solid #f4f5f7;
		color: #c9c9c9;
		font-family:MON;
		font-weight: 900;
	}
	.az .center>ul li a{
		color: #c9c9c9;
	}
	.az .center>ul li:first-child{
		color: #000;
		border-left:1px solid #f4f5f7;
	}
	.az .center>ul li:first-child a{
		color: #000;
	}
	.az .center>.con{
		margin-top:77px;
	}
	.az .center>.con>p.fl{
		font-family:ALB;
		font-size: 73px;
		color:#5b0eb2;
		font-style:italic;
		margin-left:10%;
	}
	.az .center>.con>div.fr{
		width: 77%;
		font-size: 17px;
		line-height: 48px;
		color: #333333;
		font-family:LTHK;
		margin-left:5%;
	}
	.az .center>.con>div.fr p.botDian{
		letter-spacing: 21px;
	}	
</style>