<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 14:06:01
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:04:59
 * @ Description: 账户类型
 -->

<template>
  <div class="account">
    <div class="name">账户类型</div>
    <div
      class="text"
    >CPT Markets为交易者提供多种交易账户类型，以满足客户的不同需求。您可以根据自身投资初始金额、能够承担的风险范围以及每日有多少时间可以花费在交易市场等因素，来合理选择最为适宜的账户进行注册。</div>
    <div class="table">
      <div class="header column">
        <span>CPT MARKETS</span>
        <span>STD标准账户</span>
        <span>裸点账户</span>
        <span>铂金账户</span>
      </div>
      <div class="column">
        <span>点差</span>
        <span>最低1.8</span>
        <span>最低0.1</span>
        <span>最低0.6</span>
      </div>
      <div class="column">
        <span>点差类型</span>
        <span>浮动</span>
        <span>浮动</span>
        <span>浮动</span>
      </div>
      <div class="column">
        <span>最大可持仓订单笔数</span>
        <span>不限</span>
        <span>不限</span>
        <span>不限</span>
      </div>
      <div class="column">
        <span>最大可持仓交易量（手数）</span>
        <span>不限</span>
        <span>不限</span>
        <span>不限</span>
      </div>
      <div class="column">
        <span>单笔订单最大手数（外汇）</span>
        <span>60</span>
        <span>60</span>
        <span>60</span>
      </div>
      <div class="column">
        <span>最小交易手数（外汇）</span>
        <span>0.01</span>
        <span>0.01</span>
        <span>0.01</span>
      </div>
      <div class="column">
        <span>杠杆</span>
        <span>最高无限倍</span>
        <span>最高无限倍</span>
        <span>最高无限倍</span>
      </div>
      <div class="column">
        <span>账户基准货币</span>
        <span>USD</span>
        <span>USD</span>
        <span>USD</span>
      </div>
      <div class="column">
        <span>交易平台</span>
        <span>MT4（电脑/手机）</span>
        <span>MT4（电脑/手机）</span>
        <span>MT4（电脑/手机）</span>
      </div>
      <div class="column">
        <span>外汇</span>
        <span>36</span>
        <span>36</span>
        <span>36</span>
      </div>
      <div class="column">
        <span>商品</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
      </div>
      <div class="column">
        <span>股指</span>
        <span>9</span>
        <span>9</span>
        <span>9</span>
      </div>
      <div class="column">
        <span>股票</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div class="column">
        <span>加密货币</span>
        <span>5</span>
        <span>5</span>
        <span>5</span>
      </div>
      <div class="column">
        <span>最低入金</span>
        <span>500</span>
        <span>500</span>
        <span>500</span>
      </div>
      <div class="column">
        <span>強制平仓比率</span>
        <span>20%</span>
        <span>20%</span>
        <span>20%</span>
      </div>
    </div>
    <Regist />
  </div>
</template>
<script>
import Regist from './../product/regist.vue';
export default {
  components: { Regist }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.account {
  width: 100%;
  .name {
    font-size: 75px;
    color: #000;
    line-height: 223px;
    font-family: montserratse;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    @include animation(bounceInUps);
  }
  .text {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    font-family: montserrat;
    line-height: 30px;
    font-size: 16px;
    text-align: left;
    @include animation(bounceInUps, 1s, 200ms);
  }
  .table {
    width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: 150px;
    .column {
      @include flex();
      height: 60px;
      span {
        width: 25%;
        @include flex();
      }
      font-size: 16px;
    }
    .column:nth-child(2n) {
      background: #f6f8f9;
    }
    .header {
      height: 100px;
      background: #000;
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>