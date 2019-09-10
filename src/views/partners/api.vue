<template>
  <div class="api">
    <div class="banner pc ">
      <div class="img">
        <div class="warp clearfix bannerimg">
          <p class="bannerfont emerging">{{$t('API.interface')}}</p>
        </div>
      </div>
    </div>

    <img class="bannerimg mob mb" src="../../../public/images/Api_mob.jpg" alt />

    <!-- <div class="bgimg">
      <p>{{$t('API.interface')}}</p>
    </div> -->

    <div class="warp">
      <div class="tit">Fix Api</div>
      <div class="art">{{$t('API.liquidity')}}</div>
      <div class="art">{{$t('API.agreement')}}</div>
      <div class="art">{{$t('API.goal')}}</div>
      <div class="art">{{$t('API.function')}}</div>
    </div>


    <div class="warp iconlist clearfix">
      <div class="tit">{{$t('API.advantages')}}</div>
      <ul>
        <li>
          <img src="@/assets/Api_05.png" alt />
          <p>
            {{$t('API.setting')}}<br>
            {{$t('API.settingbr')}}
          </p>
        </li>
        <li>
          <img src="@/assets/Api_07.png" alt />
          <p>
            {{$t('API.standardized')}}<br>
            {{$t('API.standardizedbr')}}
          </p>
        </li>
        <li>
          <img src="@/assets/Api_09.png" alt/>
          <p>
            {{$t('API.fast')}}<br>
            {{$t('API.fastbr')}}
          </p>
        </li>
        <li>
          <img src="@/assets/Api_11.png" alt />
          <p>
            {{$t('API.policies')}}<br>
            {{$t('API.policiesbr')}}
          </p>
        </li>
        <li>
          <img src="@/assets/Api_23.png" alt />
          <p>
            {{$t('API.design')}}<br>
            {{$t('API.designbr')}}
          </p>
        </li>
        <li>
            <img src="@/assets/Api_18.png" alt />
            <p>
              {{$t('API.according')}}<br>
              {{$t('API.accordingbr')}}
            </p>
          </li>
          <li>
            <img src="@/assets/Api_20.png" alt="">
            <p>
              {{$t('API.type')}}<br>
              {{$t('API.typebr')}}
            </p>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss">
.api{
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
      background: url(../../../public/images/Api_02.png);
      width: 100%;
      z-index: 10;
    }
  }
  .bannerfont{
    line-height: 437px;
    color: #fff;
    font-size: 66px;
    text-align: center;
    font-weight: bold
  }
  .iconlist{
    margin-top: 200px;
    ul{
      margin-top: 120px;
      display: block;
      li{
        text-align: center;
        width: 25%;
        float: left;
        margin-bottom: 50px;
        &:nth-child(5){
          margin-left: 12%
        }
        p{
          margin-top: 30px;
          font-size: 16px;
          font-family: montserrat;
          line-height: 30px
        }
      }
    }
  }
}
.tit{
  font-family: montserratse;
  margin-top: 100px;
  font-size: 40px;
  text-align: center
}
.art{
  font-family: montserrat;
  line-height: 30px;
  font-size: 16px;
  text-align:left;
  margin-top: 50px
}


</style>