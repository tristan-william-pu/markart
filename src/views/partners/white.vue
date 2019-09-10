<template>
  <div class="white">
    <!-- banner -->
    <div class="banner pc">
      <div class="img">
        <div class="warp clearfix">
            <p class="bannerfont emerging">{{$t('white.cooperation')}}</p>
        </div>
      </div>
    </div>
  
    <img class="bannerimg mob mb" src="../../../public/images/white-label_mob_03.jpg" alt="">

    <div class="warp">
      <div class="tit">{{$t('white.cooperation')}}</div>
      <p class="art arttext">
        {{$t('white.quality')}}<br>
        {{$t('white.qualityb')}}<br>
        {{$t('white.qualitybr')}}<br>
        {{$t('white.qualitybrb')}}<br>
        {{$t('white.qualitybrbr')}}
      </p>
    </div>
    <div class="QShare warp clearfix pc">
      <div class="left">
        <img src="@/assets/white-label_11.png" alt/>
        <p>{{$t('white.clients')}}</p>
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
          <p>{{$t('white.CRM')}}</p>
        </div>
      </div>
      <img class="arrowicon" src="@/assets/step5.png" alt="">
      <div class="left">
        <img src="@/assets/white-label_08.png" alt/>
        <p>{{$t('white.label')}}</p>
      </div>
    </div>

    <div class="warp anlist clearfix">
      <ul>
        <li class="clearfix">
            <img src="@/assets/Oil10.png" alt/>
            <p>{{$t('white.competitive')}}</p>
        </li>
        <li class="clearfix">
            <img src="@/assets/Oil10.png" alt/>
            <p>{{$t('white.systerm')}}</p>
        </li>
         <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('white.top')}}</p>
          </li>
         
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('white.depth')}}</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('white.support')}}<br>
              {{$t('white.supportbr')}}
              </p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('white.monitoring')}}</p>
          </li>
        </ul>
      </div>

      <div class="warp bottomtips">
        {{$t('white.questions')}}<br>
        {{$t('white.send')}}<a href="mailto:cs@cptmarkets.com" class="wblue">cs@cptmarkets.com</a>{{$t('white.glad')}}
      </div>
  </div>
</template>
<script>

export default {
 
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
    line-height:60px;
    font-size: 16px;
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
        font-family: montserrat;
      }
    }
  }
  .bottomtips{
    margin-top: 100px;
    text-align: center;
    color: #606060;
    line-height: 30px;
    margin-bottom: 140px;
    font-size: 16px;
  }
  .wblue{
    color: #0073d4
  }
  .tit{font-family: montserratse;margin-top: 100px;font-size: 40px;text-align: center}
p {
    font-size: 16px;
    box-sizing: border-box;
}
}




</style>