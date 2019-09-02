<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 12:42:19
 * @ Modified by: Your name
 * @ Modified time: 2019-09-02 22:18:12
 * @ Description:关于
 -->

<template>
  <div class="footer-wrap">
    <footer>
      <div class="warp">
        <div class="footernav">
          <ul>
            <li>
              <a href="/p/aboutus">关于我们</a>
            </li>
            <li>
              <a href="/p/products">交易产品</a>
            </li>
            <li>
              <a href="/p/MT4">交易平台</a>
            </li>
            <li>
              <a href="/p/payment">客户支持</a>
            </li>
            <li>
              <a href="/p/white">合作伙伴</a>
            </li>
            <li>
              <a href="/p/contantus">联系我们</a>
            </li>
          </ul>
        </div>
        <div class="lianxi clearfix">
          <img src="../assets/moible_05.png" alt />
          <span>
            <a href="mailto:cs@cptmarkets.com">cs@cptmarkets.com</a>
          </span>
        </div>
        <div class="lianxi clearfix">
          <img src="../assets/moible_03.png" alt />
          <span>400-1001-103</span>
        </div>
        <div class="wxercode">
          <img src="../assets/ercode_07.png" alt />
          <img class="ercode" src="../assets/ercode_03.png" alt />
        </div>
        <div class="clear"></div>
        <div class="pc">
          <p class="art">
            {{$t('footer.statement')}}
            <br />
            {{$t('footer.statementFirst')}}
            <br />
            {{$t('footer.statementSecond')}}
          </p>
          <p class="art">
            {{$t('footer.name')}}
            <a class="pup" href="//p/index">{{$t('footer.href')}}</a>
            {{$t('footer.lastName')}}
          </p>
          <p class="art">
            {{$t('footer.wales')}}
            <a class="pup" href="https://www.cptmarkets.co.uk">{{$t('footer.hrefSecond')}}</a>
            {{$t('footer.walesMail')}}
          </p>
          <div class="line"></div>
          <p class="art">
            {{$t('footer.risk')}}
            <a
              class="pup"
              href="/Public/addheader/pdf/ys.pdf"
              download="隐私政策"
            >{{$t('footer.Privacy')}}</a>,
            <a
              class="pup"
              href="/Public/addheader/pdf/CPTMarketsv2.pdf"
              download="风险提示"
            >{{$t('footer.prompt')}}</a>,
            <a
              class="pup"
              href="/Public/addheader/pdf/fx.pdf"
              download="风险披露"
            >{{$t('footer.Disclosure')}}</a>
            ,{{$t('footer.And')}}
            <a
              class="pup"
              href="/Public/addheader/pdf/mz.pdf"
              download="免责声明"
            >{{$t('footer.disclaimer')}}</a>
            {{$t('footer.money')}}
          </p>
        </div>
        <p class="art">{{$t('footer.copyright')}}</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss">
.footer-wrap {
  footer {
    height: auto;
    width: 100%;
    background: #282828;
    padding-bottom: 50px;
  }
  .footernav {
    float: left;
    padding-top: 30px;
  }
  .footernav ul li {
    float: left;
    padding-right: 35px;
    color: #fff;
    font-size: 16px;
  }
  .lianxi {
    float: left;
    margin-top: 35px;
    margin-left: 20px;
  }
  .lianxi img {
    width: 20px;
    float: left;
  }
  .lianxi span {
    margin-left: 20px;
    float: left;
    color: #565656;
  }
  .clear {
    clear: both;
  }
  .wxercode {
    width: 19px;
    height: 18px;
    float: left;
    margin-top: 35px;
    margin-left: 35px;
    position: relative;
  }
  .wxercode .ercode {
    position: absolute;
    top: -150px;
    left: -33px;
    display: none;
  }
  .wxercode:hover .ercode {
    display: block;
  }
  .pc {
    display: block;
  }
  footer .art {
    line-height: 20px !important;
  }
  footer .art:first-child {
    margin-top: 40px;
  }
  footer .art {
    margin-top: 20px;
    font-size: 12px !important;
    font-family: montserrat;
    color: #565656;
    line-height: 20px;
  }
  .pup {
    color: #766da2;
  }
  footer .line {
    width: 100%;
    height: 1px;
    background: #565656;
    float: none;
    margin-right: 0px;
  }
  footer a:hover {
    color: #565656;
  }
}
</style>