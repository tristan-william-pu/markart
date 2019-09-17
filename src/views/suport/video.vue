<template>
    <div>
        <!--大图-->
		<div class="Videobody">
            <div class="vidImg">
                <p>{{$t('video.education')}}</p>
            </div>
            <!--tit-->
            <div class="titVidcon clear">
                <span class="fl">“</span>
                <p class="fl" v-html="$t('video.simple')"></p>
                <span class="fl">”</span>
            </div>
            <!--con-->
            <div class="tabs">
                <nav class="clear">
					<span class="span">
                    <!-- <a href="javascript:;" data-con="local">{{$t('video.course')}}</a> -->
                    <span>{{$t('video.course')}}</span>
                    </span>
                </nav>
                <!--第一页-->
                <!--第一页-->
                <section class="cont" id="local">
                    <ol class="clear">
                        <li>
                            <a href="https://www.bilibili.com/video/av56763628" target="_blank">
                                <img src="../../../public/images/sch/1.jpg"/>
                                <p>{{$t('video.what')}}</p>
                                <div class="vidTim clear">
                                    <img src="../../../public/images/sch/vidTime.png" class="fl" />
                                    <p class="fl">2019-03-28</p>
                                </div>
                            </a>
                        </li>
					<li>
						<a href="https://www.bilibili.com/video/av56778940" target="_blank">
							<img src="../../../public/images/sch/2.jpg"/>
							<p>{{$t('video.why')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-02</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56779263" target="_blank">
							<img src="../../../public/images/sch/3.jpg"/>
							<p>{{$t('video.time')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-04</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56781519" target="_blank">
							<img src="../../../public/images/sch/4.jpg"/>
							<p>{{$t('video.terms')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-09</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56784098" target="_blank">
							<img src="../../../public/images/sch/5.jpg"/>
							<p>{{$t('video.terms2')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-11</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56784272" target="_blank">
							<img src="../../../public/images/sch/6.jpg"/>
							<p>{{$t('video.terms3')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-16</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56784345" target="_blank">
							<img src="../../../public/images/sch/7.jpg"/>
							<p>{{$t('video.terms4')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-18</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56784470" target="_blank">
							<img src="../../../public/images/sch/8.jpg"/>
							<p>{{$t('video.chart')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-23</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56784542" target="_blank">
							<img src="../../../public/images/sch/9.jpg"/>
							<p>{{$t('video.bear')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-25</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798006/?p=1" target="_blank">
							<img src="../../../public/images/sch/10.jpg"/>
							<p>{{$t('video.line')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-04-30</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798006/?p=2" target="_blank">
							<img src="../../../public/images/sch/11.jpg"/>
							<p>{{$t('video.bar')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-02</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798006/?p=3" target="_blank">
							<img src="../../../public/images/sch/12.jpg"/>
							<p>{{$t('video.candlestacks')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-07</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798484/?p=1" target="_blank">
							<img src="../../../public/images/sch/13.jpg"/>
							<p>{{$t('video.frame')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-09</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798484/?p=2" target="_blank">
							<img src="../../../public/images/sch/14.jpg"/>
							<p>{{$t('video.tread')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-14</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798649" target="_blank">
							<img src="../../../public/images/sch/15.jpg"/>
							<p>{{$t('video.forex')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-16</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798879" target="_blank">
							<img src="../../../public/images/sch/16.jpg"/>
							<p>{{$t('video.pros')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-21</p>
							</div>
						</a>
					</li>
					<li>
						<a href="https://www.bilibili.com/video/av56798971" target="_blank">
							<img src="../../../public/images/sch/17.jpg"/>
							<p>{{$t('video.choose')}}</p>
							<div class="vidTim clear">
								<img src="../../../public/images/sch/vidTime.png" class="fl" />
								<p class="fl">2019-05-23</p>
							</div>
						</a>
					</li>
				</ol>
			</section>
			
			
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
.clear::after{
	content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

	/*大图*/
	.vidImg{
		background:url(../../../public/images/sch/vidBigImg.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		font-size: 66px;
		color: #ffffff;
		padding:11% 0;
	}
	.vidImg P{
		font-size: 66px;
		font-weight: bold;
	}
	.titVidcon{
		width: 1093px;
		margin:10% auto 0;
		font-size: 26px;
		color: #000;
		text-align: center;
		line-height: 32px;
	}
	.titVidcon span{
		font-weight: bold;
		font-size: 220px;
		color: #5b0eb2;
	}
	.titVidcon p{
		margin-top:-4%;
		font-size: 26px;
		font-weight: 900;
		width:73%;
	}
	.titVidcon span:last-child{
		margin-top:8%;
	}

	/*con*/
	.tabs{
		width: 80%;
		margin:0px auto 200px;
	}
	.tabs>nav{
		text-align: center;
	}
	.tabs>nav .span{
		margin: 0 auto;
		padding:22px 0;
		border-radius: 45px;
		box-shadow: 0px 0px 7px 5px #f3f3f3, 0px 0px 1px 0px #f3f3f3, 0px 0px 0px 0px #f3f3f3, 0px 0px 0px 0px #f3f3f3;
	}
	.tabs>nav>span>span{
		padding:9px 23px;
		font-size: 22px;
		font-weight: bold;
		color: #fff;
		line-height: 50px;
		margin:0 16px;
		border-radius: 25px;
		background-color: #5b0eb2;
	}
	.tabs>section{
		width: 99%;
		margin:0 auto;
	}
	.tabs>section>ol>li{
		float: left;
		width: 30%;
		margin:60px 1.5% 0;
		background-color: #fff;
		border-radius: 15px;
		box-shadow: 0px 0px 7px 10px #f2f2f2, 0px 0px 1px 0px #f2f2f2, 0px 0px 0px 0px #f2f2f2, 0px 0px 0px 0px #f2f2f2; 
		padding-left: 0;
		padding-right: 0;  
	}
	
	.tabs>section>ol>li>a>p{
		font-size: 18px;
		color: #000;
		line-height: 25px;
		margin:10px 0 15px 5%;
	}
	.tabs>section>ol>li>a>.vidTim{
		margin-left:5%;
		padding-bottom:25px;
	}
	.tabs>section>ol>li>a>.vidTim>p{
		font-size: 14px;
		margin-left:9px;
		color: #000;
		line-height: 26px;
	}
	.tabs>section>ol>li>a>img{
		width: 100%;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
@media screen and (min-width:768px){

	@media screen and (max-width:1200px){
		.tabs {
    		width: 96%;
    	}
    	.titVidcon{
    		width: 100%;
    	}
    	.titVidcon span {
    		font-size: 215px;
		}
	}
}
@media screen and (max-width:768px){
	html{
		font-size:62.5%;
	}
	.vidImg{
		background:url(../../../public/images/sch/vidBigImg.jpg) no-repeat;
		background-size: 100%;
		text-align: center;
		font-size: 1.5rem;
		color: #ffffff;
		padding: 9% 0;
	}
	.vidImg p{
		font-size: 1.5rem;
	}
	.titVidcon{
	    width: auto;
	    margin: 10% auto 0;
	    font-size: 1.8rem;
	    color: #000;
	    text-align: center;
	    line-height: 2.3rem;
	}
	.titVidcon span{
		font-size: 6rem;
	    color: #5b0eb2;
	}
	.titVidcon p{
		width: 73%;
		margin:0;
		font-size: 1rem;
		text-align: center;
	}
	.titVidcon span:last-child{
	    margin-top:30%;
	}

	/*con*/
	.tabs{
		width: 80%;
		margin:0px auto 10rem;
	}
	.tabs>nav .span{
		padding:14px 0;
	}
	.tabs>nav>span>span{
		padding:5px 15px;
		font-size: 0.9rem;
	}
	.tabs>section{
		width: 99%;
		margin:0 auto;
	}
	.tabs>section>ol>li{
		float: left;
		width: 100%;
		margin:3rem 1% 0;
		background-color: #fff;
		border-radius: 1rem;
		box-shadow: 0px 0px 7px 10px #f2f2f2, 0px 0px 1px 0px #f2f2f2, 0px 0px 0px 0px #f2f2f2, 0px 0px 0px 0px #f2f2f2;
		padding-left:0;
		padding-right:0;   
	}
	
	.tabs>section>ol>li>a>p{
		font-size: 1.2rem;
		color: #000;
		line-height: 1.8rem;
		margin:1rem 0 1rem 5%;
	}
	.tabs>section>ol>li>a>.vidTim{
		margin-left:5%;
		padding-bottom: 1.5rem;
	}
	.tabs>section>ol>li>a>.vidTim>p{
		font-size: 1rem;
		margin-left: 0.5rem;
		color: #000;
		line-height: 2rem;
	}
	.tabs>section>ol>li>a>img{
		width: 100%;
		/*height: 14rem;*/
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}
	
	@media screen and (max-width:320px){
		.titVidcon span {
		    font-size: 11rem;
		    margin: 11% 0 0 -18%;
    	}
    	.tabs>nav {
    		width: 7rem;
    	}
    	.tabs>nav>a {
		    font-size: 1.2rem;
		    line-height: 2rem;
		}
		
	}
	@media screen and (width:768px){
		.tabs>section>ol>li {
    		width: 47%;
		}
		.titVidcon {
			padding:0 20px;
		}
		.titVidcon p{
			width: 80%;
		}
		.titVidcon span:last-child{
	    margin-top:10%;
		}
	}
}
</style>