<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 14:05:08
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 14:33:09
 * @ Description: 交易杠杆
 -->


<template>
  <div class="leverage">
    <Header />
    <div class="banner">
      <div class="title">交易杠杆</div>
      <div class="wrap">
        <div class="bannerleft" style="opacity: 1;">
          <p class="bannerlefttit">杠杆高达无限</p>
          <p class="banerlefttips">投资门槛更低</p>
          <p class="banerleftatr">CPT Markets为更好的方便客户进行投资，灵活的杠杆机制，极大的降低客户投资门槛的同时也更好的提供客户的资金利用率。</p>
        </div>
      </div>
    </div>
    <div class="tablelist">
      <div class="headers clearfix">
        <p>实时净值（美元）</p>
        <p>杠杆倍数</p>
      </div>
      <div class="clearfix">
        <p>0-500(不含)</p>
        <p>无限*</p>
      </div>
      <div class="clearfix">
        <p>500-2,000(不含)</p>
        <p>1:2000</p>
      </div>
      <div class="clearfix">
        <p>2,000-5,000(不含)</p>
        <p>1:1000</p>
      </div>
      <div class="clearfix">
        <p>5,000-20,000 （不含）</p>
        <p>1:500</p>
      </div>
      <div class="clearfix">
        <p>20,000 （含）- 50,000 （不含）</p>
        <p>1:400</p>
      </div>
      <!-- <div class="clearfix">
      <p>20,000 (include- 50,000 (exclude)</p>
      <p>Maximum 1:400</p>
      </div>-->
      <div class="clearfix">
        <p>50,000 （含） - 100,000 （不含）</p>
        <p>1:300</p>
      </div>
      <div class="clearfix">
        <p>100,000 （含） - 200,000 （不含）</p>
        <p>1:200</p>
      </div>
      <div class="clearfix">
        <p>200,000 （含） - 1000,000 （不含）</p>
        <p>1:100</p>
      </div>
      <div class="clearfix">
        <p>1,000,000以上（含）</p>
        <p>1:50</p>
      </div>
    </div>
    <div class="art">
      <br style="color:red" />注：这里的杠杆是指账户的杠杆，只影响外汇和贵金属的交易。
      <br />客户申请调整杠杆需场上无订单才可操作，通过客户中心功能菜单“交易账户”下的“杠杆管理”自助调整即可。若客户净值与杠杆不匹配，CPT Markets有权调整客户杠杆至规定范围。如需帮助，敬请致电客服热线：400-1001-103，或发送邮件至 cs@cptmarkets.com，我们将竭诚为您服务！
    </div>
    <div class="pubtn">
      <a href="/register/register">开立账户</a>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.leverage {
  width: 100%;
  .banner {
    width: 100%;
    height: 737px;
    position: absolute;
    overflow: hidden;
    position: relative;
    z-index: 1;
    background: url("./../../../public/images/Trading-Leveragebgs.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .title {
      line-height: 40px;
      margin-top: 140px;
      @include animation(bounceInUps);
      color: #fff;
      font-family: montserratse;
      font-size: 66px;
      width: 100%;
      text-align: center;
    }
    .wrap {
      width: 1200px;
      display: block;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
      .bannerleft {
        float: left;
        height: auto;
        width: 600px;
        @include animation(fade-left, 1s, 200ms);
        .bannerlefttit {
          font-size: 42px;
          font-family: montserrat;
          color: #fff;
          margin-top: 200px;
          line-height: 50px;
        }
        .banerlefttips {
          font-size: 28px;
          font-family: montserrat;
          color: #fff;
          line-height: 30px;
          margin-top: 10px;
        }
        .banerleftatr {
          font-size: 18px;
          font-family: montserrat;
          color: #fff;
          margin-top: 40px;
          line-height: 30px;
        }
      }
    }
  }
  .tablelist {
    border: 1px solid #5b0eb2;
    height: auto;
    margin: 0 auto;
    margin-top: 60px;
    width: 70%;
    .headers {
      height: 100px;
      background: #5b0eb2;
      @include flex();
      p {
        color: #fff;
        font-size: 24px;
      }
    }
    > div {
      @include flex();
      p {
        line-height: 100px;
        color: #000;
        font-size: 16px;
        width: 50%;
        text-align: center;
      }
    }
  }
  .art {
    width: 1000px;
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    font-size: 14px;
    font-family: montserrat;
    line-height: 30px;
    text-align: left;
  }
  .pubtn {
    width: 240px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 21px;
    background: #5b0eb2;
    margin: 80px auto;
    cursor: pointer;
    a {
      color: #fff;
    }
  }
}
</style>