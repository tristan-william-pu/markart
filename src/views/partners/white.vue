<template>
  <div class="white">
    <Header />
    <!-- banner -->
    <div class="banner pc">
      <div class="img">
        <div class="warp clearfix">
            <p class="bannerfont emerging">白标合作</p>
        </div>
      </div>
    </div>
  
    <!-- <img class="bannerimg mob" src="/Public/addheader/images/white-label_mob_03.jpg" alt=""> -->

    <div class="warp">
      <div class="tit">白标合作</div>
      <p class="art arttext">
        我们为客户量身打造优质的白标解决方案，降低合作伙伴的运营成本；<br>
        我们的商业模式保障客户的交易环境公平、透明； <br>
        我们有竞争力的点差和良好的交易环境让客户获利更便捷；<br>
        我们专为有意创建自己品牌的资本经营者和代理经纪商提供合作方案；<br>
        我们专注于与合作伙伴培养长期稳定的合作关系。
      </p>
    </div>
    <div class="QShare warp clearfix pc">
      <div class="left">
        <img src="@/assets/white-label_11.png" alt/>
        <p>客户</p>
      </div>
      <img class="arrowicon" src="@/assets/step5.png" alt/>
      <div class="centerbox">
        <div class="bbtnpur">Quotes Share</div>
        <div class="imgdet">
          <img src="@/assets/white-label_05.png" alt/>
          <p>MetaTrader 4</p>
        </div>
        <div class="imgdet">
          <img src="@/assets/white-label_16.png" alt/>
          <p>CRM 系统</p>
        </div>
      </div>
      <img class="arrowicon" src="@/assets/step5.png" alt="">
      <div class="left">
        <img src="@/assets/white-label_08.png" alt/>
        <p>白标</p>
      </div>
    </div>

    <div class="warp anlist clearfix">
      <ul>
        <li class="clearfix">
            <img src="@/assets/Oil10.png" alt/>
            <p>极具竞争力的合作方案</p>
        </li>
        <li class="clearfix">
            <img src="@/assets/Oil10.png" alt/>
            <p>量身定做的CRM系统</p>
        </li>
        <li class="clearfix">
            <img src="@/assets/Oil10.png" alt/>
            <p>量身定做的CRM系统</p>
        </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>支持MT4，PC端，网页端，手机端</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>强大优势的市场深度</p>
          </li>
          <!-- <li class="clearfix">
              <img src="/Public/addheader/images/Oil10.png" alt="">
              <p class="pafg">手机端</p>
          </li> -->
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>一线流动性合作伙伴</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>24H 实时监控</p>
          </li>
        </ul>
      </div>

      <div class="warp bottomtips">
        白标合作计划您有任何疑问，<br>
        请发送邮箱至<a href="mailto:cs@cptmarkets.com" class="wblue">cs@cptmarkets.com </a> ，我们将竭诚为您服务！
      </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../header.vue';
import Footer from '../footer.vue';
export default {
  components:{Header , Footer}
}
</script>
<style lang="scss">
.white{
  .banner{
    width: 100%;
    height: 437px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    > .img{
      position: absolute;
      left: 50%;
      margin-left: -50%;
      height: 437px;
      background: url(../../../public/images/white-label_02.png);
      width: 100%;z-index: 10;
    }
  }
  .bannerfont{
    line-height: 437px;
    color: #fff;
    font-size: 66px;
    text-align: center;
    font-weight: bold
  }
  .art{
    line-height: 20px;
    font-size: 18px;
    line-height: 60px;
    margin-top: 50px;
    text-align: center;
  }
  .QShare{
    margin-top: 150px;
    .left{
      margin-top: 300px;
      margin-bottom: 30px;
      text-align: center;
      width: 25%;
      float: left;
      p{
        margin-top: 20px
      }
      img{
        height: 120px;
      }
    }
  }
  .arrowicon{
    float: left;
    margin-top: 330px
  }
  .centerbox{
    width: 30%;
    height: auto;
    box-sizing: border-box;
    padding: 40px;
    border: 1px solid #5b0eb2;
    float: left;
    margin-left:2.5%;
    margin-right: 2.5%;
    .bbtnpur{
      width: 200px;
      background: #5b0eb2;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      display: block;
      margin: 0 auto
    }
    .imgdet{
      text-align: center;
      margin-top: 80px;
      p{
        margin-top: 30px
      }
    }
  }
  .anlist{
    margin-top: 200px;
    ul li{
      width: 50%;
      float: left;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
      box-sizing: border-box;
      padding-left: 5%;
      img{
        width: 10px;
        float: left;
        margin-top: 10px
      }
      p{
        width: 80%;
        float: left;
        margin-left: 20px;
      }
    }
  }
  .bottomtips{
    margin-top: 100px;
    text-align: center;
    color: #606060;
    line-height: 30px;
    margin-bottom: 140px
  }
  .wblue{
    color: #0073d4
  }
  .art {
      line-height: 20px;
      font-size: 18px;
      line-height: 60px;
      margin-top: 50px;
      text-align: center;
  }
}

.tit{font-family: montserratse;margin-top: 100px;font-size: 40px;text-align: center}
p {
    font-size: 16px;
    box-sizing: border-box;
}


</style>