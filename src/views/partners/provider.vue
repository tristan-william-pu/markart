<template>
  <div class="provider">
    <div class="banner pc">
      <div class="img">
          <p class="banerfont emerging">流动性供应商</p>
      </div>
    </div>
    <!-- <img class="mobbaner" src="/Public/addheader/images/Provider_mob_03.jpg" alt=""> -->

    <div class="warp">
      <div class="tit">CFH Clearing</div>
      <div class="art leftart">
          CPT Markets与英国一级流动性提供商CFH Clearing紧密合作。目前，CFH Clearing的业务范围主要集中在现货外汇、贵金属、CFD指数以及大宗商品方面。 众所周知作为世界顶级清算机构，市场上许多STP交易都流向CFH Clearing，而该机构同时又与法国巴黎银行以及Jefferies投资银行有着Prime Broker合作关系，因此在CFH Clearing的CFH Connect技术支持下，机构客户可以凭借Prime Broker与直接流动性提供者的关系很容易就能够连接到</div>
      <img class="rightimg" src="@/assets/Provider_05.png" alt/>
      <div class="clear"></div>
      <div class="art lastart">各种外汇市场报价中。他们能从各种流动性场所包括顶级银行、MTF和ECN交易模式的Hotspot和Currenex平台中获得预期报价。 在CFH Systems所能提供的系统服务中，灵活性是其中最关键的一个环节，同时也是客户能够获得他们翘首企足的流动性资源的重要方式。         </div>
    </div>
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
    margin-top: 0px;
    margin-bottom: 200px
  }
  .tit{
    margin-top: 150px;
    text-align: left
  }
  .art{
    line-height: 35px
  }
} 
</style>
