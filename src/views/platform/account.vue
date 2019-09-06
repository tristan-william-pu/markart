<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 14:06:01
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:04:59
 * @ Description: 账户类型
 -->

<template>
  <div class="account">
    <div class="name">{{$t('account.type')}}</div>
    <div class="text">
      {{$t('account.traders')}}</div>
    <div class="table">
      <div class="header column">
        <span>CPT MARKETS</span>
        <span >{{$t('account.STD')}}<br>{{$t('account.standard')}}</span>
        <span>{{$t('account.PRO')}}<br>{{$t('account.bore')}}</span>
        <span>{{$t('account.platinum')}}<br>{{$t('account.platinumbr')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.spread')}}</span>
        <span>{{$t('account.from')}} 1.8</span>
        <span>{{$t('account.from')}} 0.1</span>
        <span>{{$t('account.from')}} 0.6</span>
      </div>
      <div class="column">
        <span>{{$t('account.spreadType')}}</span>
        <span>{{$t('account.float')}}</span>
        <span>{{$t('account.float')}}</span>
        <span>{{$t('account.float')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.orders')}}</span>
        <span>{{$t('account.unlimited')}}</span>
        <span>{{$t('account.unlimited')}}</span>
        <span>{{$t('account.unlimited')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.position')}}</span>
        <span>{{$t('account.unlimited')}}</span>
        <span>{{$t('account.unlimited')}}</span>
        <span>{{$t('account.unlimited')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.maxTrade')}}</span>
        <span>60</span>
        <span>60</span>
        <span>60</span>
      </div>
      <div class="column">
        <span>{{$t('account.minTrade')}}</span>
        <span>0.01</span>
        <span>0.01</span>
        <span>0.01</span>
      </div>
      <div class="column">
        <span>{{$t('account.leverage')}}</span>
        <span>{{$t('account.upUnlimited')}}</span>
        <span>{{$t('account.upUnlimited')}}</span>
        <span>{{$t('account.upUnlimited')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.CCY')}}</span>
        <span>USD</span>
        <span>USD</span>
        <span>USD</span>
      </div>
      <div class="column">
        <span>{{$t('account.platform')}}</span>
        <span>MT4 {{$t('account.phone')}}</span>
        <span>MT4 {{$t('account.phone')}}</span>
        <span>MT4 {{$t('account.phone')}}</span>
      </div>
      <div class="column">
        <span>{{$t('account.FX')}}</span>
        <span>36</span>
        <span>36</span>
        <span>36</span>
      </div>
      <div class="column">
        <span>{{$t('account.commodities')}}</span>
        <span>4</span>
        <span>4</span>
        <span>4</span>
      </div>
      <div class="column">
        <span>{{$t('account.index')}}</span>
        <span>9</span>
        <span>9</span>
        <span>9</span>
      </div>
      <div class="column">
        <span>{{$t('account.equities')}}</span>
        <span>0</span>
        <span>0</span>
        <span>0</span>
      </div>
      <div class="column">
        <span>{{$t('account.currency')}}</span>
        <span>5</span>
        <span>5</span>
        <span>5</span>
      </div>
      <div class="column">
        <span>{{$t('account.deposit')}}</span>
        <span>500</span>
        <span>500</span>
        <span>500</span>
      </div>
      <div class="column">
        <span>{{$t('account.level')}}</span>
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
        font-family: montserrat;
        text-align: center;
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