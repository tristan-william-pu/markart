<!--
 * @Autor: Diskfan
 * @Date: 2019-09-07 15:13:12
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 18:26:18
 * @Description: 
 -->
<template>
  <div class="about">
    <div class="banner pc">
      <div class="img">
        <p class="banerfont animated fadeInLeft">欢迎来到 CPTMarkets</p>
      </div>
    </div>
    <img class="mobbaner mb" src="images/aboutban.jpg" alt="">
    <div class="bannertips">
      <div class="warp aboutli">
        <ul>
          <li>
            <p class="num">3</p>
            <p class="txt">大洲</p>
            <p class="jjian">业务覆盖亚洲、欧洲和美洲</p>
          </li>
          <li>
            <p class="num">
              <span style="font-size: 58px;vertical-align: middle">∞</span> : 1
            </p>
            <p class="txt">杠杆</p>
            <p class="jjian">投资门槛最低</p>
          </li>
          <li>
            <p class="num">350+</p>
            <p class="txt">线下主题讲座</p>
            <p class="jjian">抢占市场先机</p>
          </li>
          <li>
            <p class="num">$13,000,000</p>
            <p class="txt">优惠活动</p>
            <p class="jjian">等您来拿</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="aboutart">
      <div class="tit">关于我们</div>
      <div
        class="art"
      >CPT Markets是一家领先的国际金融衍生品及相关服务供应商。公司的宗旨是通过监管和透明的交易价格以及杰出的客户支持服务使投资者进入世界金融市场.多年的深耕累积，足够丰富的经验为对全球金融衍生品市场感兴趣的投资人打造一个安全、透明的交易环境。与顶尖的流动性供应商强强联合，通过在线交易平台实时交易各种金融衍生品，为投资者提供极具竞争力的交易点差，降低交易中的风险。竭诚为世界各地的介绍服务经纪商、金融以及银行机构提供一站式的金融服务。</div>
      <div
        class="art"
      >因为外汇市场是一个24小时不间断的交易市场。所以为了解决亚太地区交易者以及全球华语客户交易中出现的各类疑难问题，为其提供无时差无语言障碍的卓越的交易体验，CPT Markets台湾亚太客户服务中心正式投入运营，给予交易者每周5*24小时的优质客户服务。</div>
      <div
        class="art"
      >CPT Markets采用先进的在线交易系统涵盖专业的外汇和差价合约市场，帮助客户通过坚实的风险管理体系获得快速准确的报价。CPT Markets与机构、专业客户和经验丰富的零售客户合作，一起创造量身定制的解决方案，进而可以使他们能够以积极的、稳健的方式构建和管理业务。CPT Markets团队成员具备多年的交易和合规经验，从交易者和销售双方获得经纪商业界知识，结合敏锐的市场洞察力，使我们能够在不断变化的市场中了解客户的需求和更好的接受挑战。</div>
      <div class="art">深耕行业多年的业内精英，结合高水平的IT服务团队作为后备力量，以为交易者提供安全、稳定、透明的交易平台为己任，我们不断的创新突破。</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.about {
  .pc {
    display: block;
  }
  .mb {
    display: none;
  }
  width: 100%;
  .banner {
    width: 100vw;
    .img {
      background: url("/images/baners.png") no-repeat;
      height: 437px;
      width: 100%;
      p {
        color: #fff;
        font-family: montserratse;
        font-size: 66px;
        width: 100%;
        text-align: center;
        line-height: 437px;
        @include animation(bounceInUps);
      }
    }
  }
  .mobbaner {
    width: 100%;
    height: auto;
  }
  .bannertips {
    width: 1300px;
    margin: 0 auto;
    height: 285px;
    box-shadow: #999 0px 0px 20px;
    margin-top: -50px;
    position: relative;
    z-index: 12;
    background: #fff;
    @include animation(bounceInUps, 1s, 300ms);
    .aboutli {
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
      ul {
        @include flex();
        li {
          width: 20%;
          @include flex(center, flex-start, column);
          .num {
            font-size: 42px;
            font-family: montserratse;
            margin-top: 70px;
            color: #000;
          }
          .txt {
            font-size: 24px;
            font-family: montserratse;
            margin-top: 15px;
            color: #000;
          }
          .jjian {
            font-size: 14px;
            font-family: montserrat;
            margin-top: 10px;
            color: #686868;
          }
        }
      }
    }
  }
  .aboutart {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
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
  }
}
</style>