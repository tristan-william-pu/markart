<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 12:42:19
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 15:31:54
 * @ Description:关于
 -->

<template>
  <div class="foot">
    <footer>
      <div class="warp footMain">
        <div class="footernav pc " :class="ftBool == false ?'enPadding':''">
          <ul>
            <li>
              <router-link to="/about">{{$t('footer.about')}}</router-link>
            </li>
            <li>
              <router-link to="/product">{{$t('footer.product')}}</router-link>
            </li>
            <li>
              <router-link to="/platform">{{$t('footer.platform')}}</router-link>
            </li>
            <li>
              <router-link to="/suport">{{$t('footer.support')}}</router-link>
            </li>
            <li>
              <router-link to="/partners">{{$t('footer.partner')}}</router-link>
            </li>
            <li>
              <router-link to="/contantus">{{$t('footer.contact')}}</router-link>
            </li>
          </ul>
        </div>
        
        <div class="lianxi clearfix">
          <img src="../assets/moible_05.png" alt />
          <span>
            <a href="mailto:cs@cptmarkets.com" class="Cptmail">cs@cptmarkets.com</a>
          </span>
        </div>

         

        <div class="lianxi clearfix">
          <img src="../assets/moible_03.png" alt />
          <span>400-1001-103</span>
        </div>
        
        <div class="wxercode pc" v-if="ftBool">
          <img src="../assets/ercode_07.png" alt />
          <img class="ercode" src="../assets/ercode_03.png" alt />
        </div>

        <div class="clearfix"></div>
        <div class="footer_follow clearfix" v-if="!ftBool">
          <p class="fl pc">Follow us</p>
          <a href="https://www.facebook.com/cptmarketslimited/">
            <img src="@/assets/facebook.png" alt/>
          </a>
          <a href="https://www.instagram.com/cptmarkets/">
            <img src="@/assets/instagram.png" alt/>
          </a>
          <a href="https://www.youtube.com/channel/UCBFFLYCjE8KKU9x7AghbtEA">
            <img src="@/assets/Youtube.png" alt/>
          </a>
          <a href="https://twitter.com/cptmarketsglobe">
            <img src="@/assets/twitter.png" alt/>
          </a>
          <a href="https://t.me/CPTMarketsglobetraders">
            <img src="@/assets/telegram.png" alt/>
          </a>
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
            <router-link class="pup" to="/">{{$t('footer.href')}}</router-link>
            {{$t('footer.lastName')}}
          </p>
          <p class="art">
            {{$t('footer.wales')}}
            <router-link class="pup" to="/">{{$t('footer.hrefSecond')}}</router-link>
            {{$t('footer.walesMail')}}
          </p>
          <div class="line"></div>
          <p class="art">
            {{$t('footer.risk')}}
            <a
              class="pup"
              href="/pdf/ys.pdf"
              download="隐私政策"
            >{{$t('footer.Privacy')}}</a>,
            <a
              class="pup"
              href="/pdf/CPTMarketsv2.pdf"
              download="风险提示"
            >{{$t('footer.prompt')}}</a>,
            <a
              class="pup"
              href="/pdf/fx.pdf"
              download="风险披露"
            >{{$t('footer.Disclosure')}}</a>
            ,{{$t('footer.And')}}
            <a
              class="pup"
              href="/pdf/mz.pdf"
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
  name: "Footer",
  data(){
    return{
      ftBool:true,
    }
  },
  methods:{
    changeLang(){
      if(this.$i18n.locale == 'en'){
      this.ftBool = false
      }else{
        this.ftBool = true
      }
    },
  },
  mounted(){
    this.changeLang();
  },
  updated(){
    this.changeLang();
  },
};
</script>
<style lang="scss">
.foot{
  footer {
    height: auto;
    width: 100%;
    background: #282828;
    padding-bottom: 50px;
    .footer_follow{
      margin: 20px 0 0;
      >p{
        float: left;
        margin-right: 10px;
        color: #fff;
      }
      a{
         color:#fff;
        img{
          width: 27px;
          margin: 0 10px;
          opacity: 0.5;
         
        }
      }
    }
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
  .lianxi span,.Cptmail {
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
.enPadding{
  ul{
    li{
      padding-right:20px !important;
    }
  }
}
</style>