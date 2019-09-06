<template>
  <div class="api">
    <div class="banner pc ">
      <div class="img">
        <div class="warp clearfix bannerimg">
<<<<<<< HEAD
          <p class="bannerfont emerging">{{$t('API.interface')}}</p>
=======
          <p class="bannerfont emerging">API 接口</p>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
        </div>
      </div>
    </div>

    <!-- <img class="bannerimg mob" src="../../../public/images/Api_mob.jpg" alt /> -->
    <div class="bgimg">
<<<<<<< HEAD
      <p>{{$t('API.interface')}}</p>
=======
      <p>API 接口</p>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
    </div>

    <div class="warp">
      <div class="tit">Fix Api</div>
<<<<<<< HEAD
      <div class="art">{{$t('API.liquidity')}}</div>
      <div class="art">{{$t('API.agreement')}}</div>
      <div class="art">{{$t('API.goal')}}</div>
      <div class="art">{{$t('API.function')}}</div>
=======
      <div class="art">Fix Api是基于Fix协议而诞生的一种流动性提供服务。在外汇行业中，市场的主要参与者（如银行、经纪商、流动性提供商、机构交易者）都可以使用FIXAPI来进行连接。</div>
      <div class="art">Fix协议在各类参与者之间，包括投资经理、经纪人，买方、卖方建立起实时的电子化通讯协议。目标是把各类证券金融业务需求流程格式化，使之成为一个个可用计算机语言描述的功能流程，并在每个业务功能接口上统一交换格式，方便各个功能模块的连接，以保证交易信息安全准确地传送。这个协议在1992年被提出，初衷是为了解决接口问题。</div>
      <div class="art">目标是把各类证券金融业务(包括证券、外汇、期货等)的需求流程格式化,使之变成可用计算机语言描述的功能流程,并在每个业务功能接口上统一交换格式,方便各个功能模块的连接,从而提高整个行业的应用水平。</div>
      <div class="art">Api（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。</div>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
    </div>


    <div class="warp iconlist clearfix">
<<<<<<< HEAD
      <div class="tit">{{$t('API.advantages')}}</div>
=======
      <div class="tit">使用Fix Api的优势</div>
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
      <ul>
        <li>
          <img src="@/assets/Api_05.png" alt />
          <p>
<<<<<<< HEAD
            {{$t('API.setting')}}<br>
            {{$t('API.settingbr')}}
=======
            设置Fix Api<br>
            连接耗时短
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
          </p>
        </li>
        <li>
          <img src="@/assets/Api_07.png" alt />
          <p>
<<<<<<< HEAD
            {{$t('API.standardized')}}<br>
            {{$t('API.standardizedbr')}}
=======
            标准化语言<br>
            相互沟通
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
          </p>
        </li>
        <li>
          <img src="@/assets/Api_09.png" alt/>
          <p>
<<<<<<< HEAD
            {{$t('API.fast')}}<br>
            {{$t('API.fastbr')}}
=======
            整体执行<br>
            速度快
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
          </p>
        </li>
        <li>
          <img src="@/assets/Api_11.png" alt />
          <p>
<<<<<<< HEAD
            {{$t('API.policies')}}<br>
            {{$t('API.policiesbr')}}
=======
            可隐私交易策略<br>
            避免风险
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
          </p>
        </li>
        <li>
          <img src="@/assets/Api_23.png" alt />>
          <p>
<<<<<<< HEAD
            {{$t('API.design')}}<br>
            {{$t('API.designbr')}}
=======
            个性化<br>
            设计和界面
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
          </p>
        </li>
        <li>
            <img src="@/assets/Api_18.png" alt />
            <p>
<<<<<<< HEAD
              {{$t('API.according')}}<br>
              {{$t('API.accordingbr')}}
=======
              根据交易者需求<br>
              进行定制
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
            </p>
          </li>
          <li>
            <img src="@/assets/Api_20.png" alt="">
            <p>
<<<<<<< HEAD
              {{$t('API.type')}}<br>
              {{$t('API.typebr')}}
=======
              使用多种<br>
              订单类型
>>>>>>> 8498b8599e636b32f2adc667b4302c4d4c108d5d
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
.api .iconlist ul li:nth-child(5){margin-left: 12%}
.tit{font-family: montserratse;margin-top: 100px;font-size: 40px;text-align: center}
.art{font-family: montserrat;line-height: 30px;font-size: 16px;text-align:left;margin-top: 50px}


</style>