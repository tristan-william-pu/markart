<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 22:37:33
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:05:29
 * @ Description: man
 -->

<template>
  <div class="man">
    <div class="banner">
      <div class="img">
        <div class="warp">
          <p class="bannerfont animated bounceInUp">MAM多账户管理</p>
        </div>
      </div>
    </div>
    <div class="warp">
      <div class="tit">MAM多账户管理</div>

      <div
        class="art"
      >CPT Markets MAM 多账户管理系统是特别为专业交易者和资金管理服务团队量身打造的账户管理软件；可以帮助用户同时对2个或以上的交易账户进行操作，极大方便了交易者进行高效交易同时还可以实现同一界面管理多个账户。</div>
      <div
        class="art"
      >CPT Markets MAM多账户管理系统人性化的操作界面、先进而成熟的技术，备受专业资金管理者青睐。它不仅集合了MT4交易软件的所有优势，让交易者使用EA智能交易系统，图表、指标等所有功能外它还是一个综合性集合下单的软件工具，能快速执行大批客户订单，无交易账户数量限制,高效的满足投资者的定制化交易需求。</div>

      <div class="tit">MAM 多账户管理系统优势</div>
      <div class="clelist">
        <ul>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>主账户及时同步操作多个子账户；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>每个账户最小交易手数 0.01；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>每个账户均可生成账户管理报告；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>每个账户持仓、余额、保证金水平一览无遗；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>订单批量成交，瞬时分配多个管理账户；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>支持智能EA运行；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>多种分配类型：可按手数、净值比例分配；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>允许所有下单指令：包括市价单、止盈/止损单、止价/限价挂单；</p>
          </li>
          <li class="clearfix">
            <img src="@/assets/Oil10.png" alt />
            <p>允许单一平仓指令：包括追踪止损，平仓；</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.man {
  width: 100%;
  .banner {
    width: 100%;
    height: 737px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .img {
      position: absolute;
      left: 50%;
      margin-left: -50%;
      height: 737px;
      background: url("./../../assets/MAM_02.jpg");
      width: 100%;
      z-index: 10;
      .warp {
        width: 1200px;
        display: block;
        margin: 0 auto;
        margin-top: -20px;
        margin-bottom: 20px;
        @include animation(bounceInUps);
        p {
          color: #fff;
          font-size: 66px;
          width: 100%;
          text-align: center;
          margin-top: 100px;
        }
      }
    }
  }
  .warp {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    .tit {
      font-family: montserratse;
      margin-top: 100px;
      font-size: 40px;
      text-align: left;
    }
    .art {
      font-family: montserrat;
      line-height: 30px;
      font-size: 16px;
      text-align: left;
      margin-top: 50px;
    }
    .clelist {
      width: 100%;
      margin-top: 80px;
      margin-bottom: 100px;
      ul {
        li {
          display: block;
          margin-bottom: 20px;
          img {
            float: left;
            width: 10px;
          }
          p {
            float: left;
            font-size: 16px;
            width: 90%;
            margin-left: 30px;
            @include clearfix();
          }
        }
      }
    }
  }
}
</style>