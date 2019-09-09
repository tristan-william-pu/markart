<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 11:54:33
 * @Description: 
 -->
<template>
  <div class="apply">
    <div class="registerWrap">
      <p>{{$t('regist.now')}}</p>
      <div class="btn yels">
        <a href="/register/register" onclick="ga('send', 'event', 'TR', 'play', 'OPEN');">{{$t('regist.real')}}</a>
      </div>
      <div class="btn blue">
        <a
          href="/simulationRegister/simulationRegister"
          onclick="ga('send', 'event', 'DR', 'play', 'OPEN');"
        >{{$t('regist.demo')}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.apply {
  height: 90px;
  width: 100%;
  background: #5b0eb2;
  margin-top: 120px;
  transition: 0.5s;
  box-sizing: border-box;
  padding-top: 20px;
  .registerWrap{
    max-width: 1200px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    p {
      line-height: 90px;
      color: #fff;
      font-size: 21px;
      float: left;
    }
    .btn {
      width: 230px;
      height: 40px;
      line-height: 40px;
      float: right;
      margin-left: 30px;
      border-radius: 40px;
      text-align: center;
      margin-top: 25px;
      font-family: Oswaldbold;
      font-size: 18px;
      font-weight: bold;
    }
    a {
      border-radius: 10px;
      background-color: transparent;
      text-decoration: none !important;
      outline: none;
    }
    .yels {
      background: #fde428;
      a {
        color: #450d85;
      }
    }
    .blue {
      background: #319bd6;
      color: #fff;
      a {
        color: #ffffff;
      }
    }
  }
}
</style>