<template>
  <div class="IB">
    <div class="banner pc">
      <div class="img">
        <div class="warp clearfix">
          <p class="bannerfont emerging">{{$t('IB.broker')}}</p>
        </div>
      </div>
    </div>

    <!-- <img class="bannerimg mob" src="@/assets/white-label_mob_03.jpg" alt=""> -->

    <div class="warp" >
      <div class="tit">{{$t('IB.broker')}}</div>
      <img class="lcimg lcfirst" src="@/assets/IB_05.png" alt/>
      <img class="lcimg" src="@/assets/IB_09.png" alt/>
      <img class="lcimg" src="@/assets/IB_13.png" alt/>
      <div class="art" style="text-align:center">{{$t('IB.solutions')}}</div>
    </div>

    <div class="warp sixtype">
      <div class="tit">
        {{$t('IB.feature')}}<br>
        {{$t('IB.accelerate')}}<br>
        {{$t('IB.acceleratebr')}}
      </div>
      <div class="warp anlist clearfix">
        <ul>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('IB.settlement')}}</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('IB.ownership')}}</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('IB.report')}}</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('IB.experience')}}</p>
          </li>
          <!-- <li class="clearfix">
              <img src="@/assets/Oil10.png" alt="">
              <p>In-Depth Market Strong Advantage</p>
          </li> -->
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt/>
              <p>{{$t('IB.innovative')}}</p>
          </li>
          <li class="clearfix">
              <img src="@/assets/Oil10.png" alt="">
              <p>{{$t('IB.empowerment')}}</p>
          </li>
          <!-- <li class="clearfix">
              <img src="@/assets/Oil10.png" alt="">
              <p>24H Real-Time Monitoring</p>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.IB{
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
      background: url(../../../public/images/IB_02.png);
      width: 100%;z-index: 10;
    }
  }
  .bannerfont{
    line-height: 100px;
    color: #fff;
    font-size: 66px;
    text-align: center;
    margin-top: 100px;
    font-weight: bold
  }
  .bannerfont{
    margin-top: 180px
  }
  .lcimg{
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 10px
  }
  .lcimg:first-child{
    margin-top: 50px
  }
  .lcfirst{
    margin-top: 80px
  }
  .titse{
    margin-top: 130px;
    line-height: 80px
  }
  .titse{
    .yelow{color: #ffcb00}
  } 
  .page-section-main{
    margin-top: 100px
  }
  .sixtype{
    margin-top: 150px;
    line-height: 60px; 
    margin-bottom: 80px;
  }
  .tablep{
    font-size: 14px;
    color: #ccc;
    font-size: 14px;
    margin-top: 20px
  }
  .anlist{
    margin-top: 100px;
    ul li{
      width: 50%;
      float: left;
      height: 70px;
      line-height: 30px;
      margin-bottom: 20px;
      box-sizing: border-box;
      padding-left: 5%;
      img{
        width: 10px;
        float: left;
        margin-top: 10px;
      }
      p{
        width: 92%;
        float: left;
        margin-left: 20px;
        line-height: 40px;
      }
    }
  }
  .center{text-align: center}
}
.tit {
    font-family: montserratse;
    margin-top: 100px;
    font-size: 40px;
    text-align: center;
}
.art {
    font-family: montserrat;
    line-height: 30px;
    font-size: 16px;
    text-align: left;
    margin-top: 50px;
}
</style>