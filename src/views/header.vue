<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 10:07:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 17:01:45
 * @Description: Header
 -->
<template>
  <div class="head">
    <header>
      <div class="warp">
        <img class="logo" src="@/assets/logo.png" alt />
        <div class="mbBtn mb" @click="navMobile">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="rf register countryselect" @mouseenter="showLanguageList=!showLanguageList" @mouseleave="showLanguageList=false">
          <div class="language-list">
            <img :src="imgSrc" class="flag" alt />
            <div class="pointe"></div>
            <transition name="slide-fade">
              <div v-show="showLanguageList" class="item-list">
                <span
                  v-for="(item, key) in languageList.names"
                  :key="key"
                  @click.stop="changeLocal(languageList.local[key])">
                  <img :src="languageList.icons[key]" alt/>
                  {{item}}
                </span>
              </div>
            </transition>
          </div>
        </div>
        <div class="rf pc">
          <router-link to="/login">
            <button class="hd-btn">{{$t('header.login')}}</button>
          </router-link>
          <router-link to="/regist">
            <button class="hd-btn">{{$t('header.register')}}</button>
          </router-link>
        </div>
        <div class="nav clearfix pc">
          <ul :class="classNum == 0 ? 'tabs':'tabs-en'">
            <li
              v-for="(item,index) in tabsList.menu"
              :key="index"
              :class="{active:index == n || showSub}"
              @mouseenter="tap(index)"
              @mouseleave="showSub=false"
              @click.stop="showSub=false,$router.push(tabsList.routers[index])"
            >{{item.title}}</li>
          </ul>
        </div>
        <div class="navbar clearfix mb" v-if="navMobileBool">
          <ul >
            <li
              v-for="(item,index) in tabsList.menu"
              :key="index"
              :class="{active:index == n || showSub}"
              @click="listID(index)"
            >
              <p>{{item.title}}</p>
              <ul v-if="index == listNum">
                <li 
                v-for="(list,num) in tabsList.menu[index].content" 
                :key="num" 
                class="mbLi"
                @click="navMobileBool=false , $router.push(tabsList.subRouters[index][num])"
                >
                {{list}}</li>
              </ul>

            </li>
             <li  class="navbarRoute" @click="navMobileBool=false"><router-link to="/login" style="color:black" >登录</router-link></li>
          </ul>
        </div>
      </div>
      <div
        v-if="showSub && tabsList.menu[n].content.filter(e => e).length"
        class="pullbox clearfix"
        @mouseenter="showSub=true"
        @mouseleave="showSub=false"
      >
        <img :src="tabsImg[n-1]" alt />
        <ul class="homeTit">
          <li
            v-for="(item, key) in tabsList.menu[n].content"
            :key="key"
            @click.stop="showSub=false,$router.push(tabsList.subRouters[n][key])"
          >{{item}}</li>
        </ul>
      </div>

    </header>
  </div>
</template>

<script>
import '../store'
export default {
  name: "Header",
  data() {
    return {
      lang: "",
      bool: "",
      langString: "",
      imgSrc: require("../assets/chinese.png"),
      tabsImg: [
        require("../assets/safe.png"),
        require("../assets/train.png"),
        require("../assets/pla.png"),
        require("../assets/cusSup.png"),
        require("../assets/zr.png")
      ],
      showLanguageList: false,
      tabPosition: "top",
      classNum: 0,
      classItem: -1,
      curId: -1,
      title: [],
      n: -1,
      showSub: 0,
      navMobileBool:false,
      listNum:0,
    };
  },
  computed: {
    languageList() {
      const cn = ['中文', '繁体', '英语'];
      const en = ['Chinese', 'Traditional', 'English'];
      const tc = cn.slice();
      const ci = require('@/assets/chinese.png');
      const icons = [ci, ci, require('@/assets/country.png')];
      return {
        names: {cn, en, tc}[this.$i18n.locale],
        local: ['cn', 'tc', 'en'],
        icons
      }
    },
    tabsList() {
      const subRouters = [
        ["/"],
        ["/safety"],
        ["/foreign", "/metal", "/oil", "/contract", "/tradeindex", "/currency"],
        ["/mt4", "/leverage", "/account", "/clearpro","/cpt","/cptanq","/compare" ,"/mam"],
        ["/type", "/school"],
        ["/white", "/api", "/provider", "/ib"],
        ["/contantus"]
      ];
      const cn = [
        { title: "首页", content: [""] },
        { title: "关于我们", content: ["资金安全"] },
        {
          title: "交易产品",
          content: ["外汇", "贵金属", "原油", "差价合约", "指数", "数字货币"]
        },
        {
          title: "交易平台",
          content: ["MT4", "交易杠杆", "账户类型", "Clearpro","CPT cTrader","CPT cTrader 常见问题","交易软件对比", "MAM"]
        },
        { title: "客户支持", content: ["支付方式", "金融学院"] },
        {
          title: "合作伙伴",
          content: ["白标合作", "API接口", "流动性供应商", "介绍服务经纪商"]
        },
        { title: "联系我们", content: [""] }
      ];
      const en = [
        { title: "Home", content: "" },
        { title: "About Us", content: ["Funds Safety"] },
        {
          title: "Trading Product",
          content: ["Foreign Exchange", "Precious Metal", "Crude Oil", "CFD", "Index", "Digital Currency"]
        },
        {
          title: "Trading Platform",
          content: ["MT4", "Trading Leverage", "Account Types", "Clearpro","CPT cTrader","CPT cTrader Q&A","Trading software comparison" ,"MAM"]
        },
        { title: "Customer Support", content: ["Payment Method", "Education"] },
        {
          title: "Partner",
          content: ["White Label", "API Interface", "Liquidity Provider", "IB"]
        },
        { title: "Contact Us", content: [""] }
      ];
      const tc = [
        { title: "首頁", content: "" },
        { title: "關于我們", content: ["資金安全"] },
        {
          title: "交易産品",
          content: ["外匯", "貴金屬", "原油", "差價合約", "指數", "數字貨币"]
        },
        {
          title: "交易平台",
          content: ["MT4", "交易杠杆", "賬戶類型", "Clearpro","CPT cTrader","CPT cTrader 常見問題","交易軟件對比", "MAM"]
        },
        { title: "客戶支持", content: ["支付方式", "金融學院"] },
        {
          title: "合作夥伴",
          content: ["白标合作", "API接口", "流動性供應商", "介紹服務經紀商"]
        },
        { title: "聯系我們", content: [""] }
      ];
      const routers = [
        "/",
        "/about",
        "/product",
        "/platform",
        "/suport",
        "/partners",
        "/contantus"
      ];
      return {
        menu: { cn, en, tc }[this.$i18n.locale],
        routers,
        subRouters
      };
    }
  },
  mounted(){
    this.langChange();
    // let url = 'https://www.cptmarkets.com';
    // let data = {
    //   name:'tata',
    //   age:18
    // }
    // this.$http.post(Url, data).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // });
  },
  methods: {
    tap(i) {
      this.showSub = i;
      this.n = i;
    },
    tapLeave() {
      this.n = -1;
    },
    changeLangEvent() {
      console.log(1);
      this.lang = "en";
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require("../assets/country.png");
    },
    tabs(index) {
      this.curId = index;
    },
    langChange(){
      if(this.$i18n.locale == "cn" || this.$i18n.locale == "tc") {
        this.classNum = 0;
        this.imgSrc = require("../assets/chinese.png");
        if(this.$i18n.locale == "tc"){
          this.$store.commit('storageLang','tc')
        }else{
          this.$store.commit('storageLang','cn')
        }
      }else{
        this.classNum = 1;
        this.imgSrc = require("../assets/country.png");
        this.$store.commit('storageLang','en')
      }
    },
    changeLocal(local) {
      this.$util.local(local);
      this.$i18n.locale = local;
      // console.log(this.$i18n.locale)
      this.langChange()
      this.$router.go(0);
    },
    navMobile(){
      this.navMobileBool = !this.navMobileBool;
    },
    listID(i){
      this.listNum = i;
      console.log(this.listNum);
      if(i == 0){
        this.$router.push({path:'/'});
        this.navMobileBool = false;
      }else if( i==6 ){
        this.$router.push({path:'/contantus'});
        this.navMobileBool = false;
      }
    },
    mbRouter(index,num){
      this.navMobileBool = false;
      this.tabsList.subRouters[index][num];
    },
  }
};
</script>

<style lang="scss">
@import "@/styles/mixin.scss";
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
header {
  width: 100%;
  font-family: montserrat;
  display: block;
  position: relative;
  z-index: 10000;
  background: #fff;
  .countryselect {
    @include flex();
    .language-list {
      vertical-align: middle;
      width: 70px;
      height: 40px;
      @include flex();
      .pointe {
        margin: 10px 0 0 13px;
        width: 0;
        height: 0;
        border-width: 7px;
        border-style: solid;
        border-color: #000 transparent transparent transparent;
      }
      .item-list {
        width: 120px;
        min-height: 120px;
        background: #fff;
        padding: 5px 10px;
        margin-top: 100px;
        position: absolute;
        border: 1px solid #cfcfcf;
        z-index: 1001;
        @include flex(center, flex-start, column);
        &::before {
          content: ' ';
          z-index: 10;;
          width: 0;
          height: 0;
          border-width: 13px;
          border-style: solid;
          position: absolute;
          left: calc(50% - 15px);
          top: -25px;
          border-color: transparent transparent #fff transparent;
        }
        &::after {
          content: ' ';
          z-index: 1;
          width: 0;
          height: 0;
          border-width: 13px;
          border-style: solid;
          position: absolute;
          left: calc(50% - 15px);
          top: -26px;
          border-color: transparent transparent #cfcfcf transparent;
        }
        span {
          margin: 3px 0;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          img {
            margin-right: 10px;
            width: 40px;
            height: 25px;
          }
        }
      }
    }
  }
  .warp{
    .mbBtn{
      border: 1px solid #2a3976;
      float: right;
      padding: 6px;
      margin-top: 20px;
      margin-right: 25px;
      margin-bottom: 8px;
      background-color: transparent;
      border-radius: 4px;
      display: block;
      span{
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background: #2a3976;
        margin:3px 0;
      }
    }
    .navbar{
      .navbarRoute{
        cursor: pointer;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
p {
  font-size: 16px;
}

.logo {
  float: left;
  margin-top: 30px;
  width: 200px;
  margin-right: 80px;
}
.hd-btn {
  width: 120px;
  height: 40px;
  border: 1px solid #5b0eb2;
  border-radius: 20px;
  text-align: center;
  color: #5b0eb2;
  background: #fff;
  float: left;
  margin-top: 25px;
  margin-right: 10px;
  transition:all 0.3s ease-in-out; 
  position: relative;
  overflow: hidden;
  font-size: 16px;
  &:hover {
    background-color: #5b0eb2;
    color: #fff;
  }
}

.register {
  margin-top: 25px;
  margin-right: 10px;
}
.flag {
  width: 35px;
  display: inline-block;
  vertical-align: middle;
  + span {
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }
}

.tabs li {
  width: auto;
  text-align: center;
  line-height: 90px;
  float: left;
  padding-left: 52px;
  padding-right: 52px;
  font-size: 16px;
  transition: color 0.5s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  position: relative;
  color: #000;
}
.tabs-en li {
  width: auto;
  text-align: center;
  line-height: 90px;
  float: left;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 16px !important;
  transition: color 0.5s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  position: relative;
  color: #000;
}
.tabs li::before,
.tabs-en li::before {
  content: "";
  height: 40px !important;
  border-radius: 10px;
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  bottom: 30%;
  opacity: 0.3;
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
  transition: transform 0.5s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  background: #6265fe;
}
.tabs li:hover:before,
.tabs-en li:hover:before {
  transform: scale3d(1, 1, 1);
}
.show {
  display: block !important;
}
.homeTit li {
  float: left;
  text-align: left;
  width: 25%;
  margin-right: 0px;
  margin-bottom: 20px;
  // width: auto;
  display: block;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 100px;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    // height: 20px !important;
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    transform: scale3d(0, 1, 1);
    transform-origin: 0% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    background: #6265fe;
  }
  &:hover:before {
    transform: scale3d(1, 1, 1);
  }
}

.pullbox {
  width: 100%;
  height: 250px;
  position: absolute;
  top: 150px;
  background: #fff;
  z-index: 9;
  border-top: 1px solid #c0c0c0;
  // display: none;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  z-index: 1000;
  ul {
    float: left;
    margin-top: 30px;
    margin-left: 5%;
    width: 72%;
    li {
      line-height: 40px;
       font-size: 16px;
    }
  }
  img {
    float: left;
    margin-left: 13%;
    margin-top: 50px;
    float: left;
    width: 6%;
  }
}
.mbLi{
    cursor: pointer;
    font-size: 14px;
    color: #666;
}
</style>
