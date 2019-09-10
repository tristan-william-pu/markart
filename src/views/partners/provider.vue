<template>
  <div class="provider">
    <div class="banner pc">
      <div class="img">
        <div class="warp clearfix bannerimg">
          <p class="banerfont emerging">{{$t('provider.liquidity')}}</p>
        </div>
      </div>
    </div>
   <img class="bannerimg mob mb" src="../../../public/images/Provider_mob_03.jpg" alt=""> 

    <div class="warp">
      <div class="tit">CFH Clearing</div>
      <div class="art leftart">
          {{$t('provider.works')}}</div>
      <img class="rightimg" src="@/assets/Provider_05.png" alt/>
      <div class="clearfix"></div>
      <div class="lastart">{{$t('provider.technology')}}</div>
    </div>
  </div>
</template>
<script>

export default {
 
}
</script>
<style lang="scss">
.provider{
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
      background: url(../../../public/images/Provider_02.png);
      width: 100%;
      z-index: 10;
    }
  }
  .banerfont {
    color: #fff;
    font-family: montserratse;
    font-size: 66px;
    width: 100%;
    text-align: center;
    line-height: 437px;
  }
  .leftart {
    width: 850px;
    float: left;
  }
  .rightimg{
    float: right;
    width: 300px;
    margin-right: 40px;
    margin-top: 20px
  }
  .lastart{
    font-family: montserrat;
    line-height: 35px;
    font-size: 16px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 200px
  }
  .tit{
    font-family: montserratse;
    font-size: 40px;
    text-align: left;
    margin-top: 150px;
    text-align: left;
  }
  .art {
    font-family: montserrat;
    line-height: 35px;
    font-size: 16px;
    text-align: left;
    margin-top: 50px;
  }
} 
</style>
