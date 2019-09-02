<template>
  <div class="head">
    <header>
      <div class="warp">
         <img class="logo" src="../assets/images/logo.png" alt="">
         <div class="rf register countryselect">
           <el-dropdown placement="bottom-start" >
            <span>
              <img :src="imgSrc" class="flag" alt=""><i class="el-dropdown-link el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" size="medium">
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/public/static/chinese.png" alt=""><span>{{$t('m.language.cn')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/public/static/chinese.png" alt=""><span>{{$t('m.language.zh')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeLangEvent()"><img class="flag" src="@/public/static/country.png" alt=""><span>{{$t('m.language.en')}}</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </div>
         <div class="rf">
           <el-button class="hd-btn">{{$t('m.header.login')}}</el-button>
           <el-button class="hd-btn">{{$t('m.header.register')}}</el-button>
         </div>
         <!-- <div class="nav clearfix">
           <ul :class="classNum == 0 ? 'tabs':'tabs-en'">
              <li  v-for="(list,index) in lists" :key="index" @mouseover="tabs(index)" @mouseout="function(){curId = -1}">{{$t(list)}}</li>
           </ul>
         </div> -->
         <div class="nav clearfix">
            <ul :class="classNum == 0 ? 'tabs':'tabs-en'">
                <li v-for="(item,index) of $t('m.tabs')" :key="item.title"
                  :class="{active:index == n}"
                  @mouseenter="tap(index)"
                  @mouseleave="tapLeave()"
                >
                {{$t(item.title)}}
            </li>
               
            </ul>
            <div class="content clearfix" :class="n == 0 ? 'show' : ''">
                <!-- <p>{{$t(items[n].content)}}</p> -->
            </div>
        </div>
      </div>
    </header>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      lang:'',
      bool:'',
      langString:'',
      imgSrc: require ('../assets/images/chinese.png'),
      tabPosition: 'top',
      classNum: 0,
      classItem:-1,
      curId:-1,
      title:[],
      contents:[],
      n:0,
    }
  },
  computed:{
    objec(){
      return 1234;
    },
      
  },
  mounted(){
  },
  methods:{
    tap(i){
        this.n = i
    },
    tapLeave(){
      this.n = 0;
    },
    changeLangEvent() {
      console.log(1)
      this.lang = 'en-US';
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require('../assets/images/country.png');
      this.classNum = 1;
    },
    changeChinese(){
      console.log(2)
      this.lang = 'zh-CN';
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require('../assets/images/chinese.png');
      this.classNum = 0;
    },
    tabs(index){
      this.curId = index;
    }

  },
  created(){
   
  },
}
</script>

<style lang="scss" scoped>
    .logo{
      float: left;
      margin-top: 30px;
      width: 200px;
      margin-right: 80px;
    }
    .hd-btn{
      width: 120px;
      height: 40px;
      border:1px solid #5b0eb2;
      border-radius: 20px;
      text-align: center;
      color: #5b0eb2;
      float: left;
      margin-top: 25px;
      margin-right: 10px;
      transition: 0.5s;
      position: relative;
      overflow: hidden;
      font-size: 16px;
    }
    .hd-btn:hover{
      background:#5b0eb2;
      color:#fff;
    }
    .register{
       margin-top: 25px;
      margin-right: 10px;
    }
    .countryselect {
        float: right;
        margin-left: 30px;
        margin-top: 35px;
        position: relative;
    }
    .flag{
      width: 35px;
      display: inline-block;
      vertical-align: middle;
    }
    .flag+span{
      margin:0 10px;
      display: inline-block;
      vertical-align: middle;
    }
    .tabs li{
      width: auto;
      text-align: center;
      line-height: 90px;
      float: left;
      padding-left: 52px;
      padding-right: 52px;
      font-size: 16px;
      transition: color .5s;
      transition-timing-function: cubic-bezier(.2,1,.3,1);
      position: relative;
      color: #000;
    }
    .tabs-en li{
      width: auto;
      text-align: center;
      line-height: 90px;
      float: left;
      padding-left: 32px;
      padding-right: 32px;
      font-size: 16px !important;
      transition: color .5s;
      transition-timing-function: cubic-bezier(.2,1,.3,1);
      position: relative;
      color: #000;
    }
    .tabs li::before,.tabs-en li::before{
        content: '';
        height: 40px !important;
        border-radius: 10px;
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
        bottom: 30%;
        opacity: .3;
        transform: scale3d(0,1,1);
        transform-origin: 0% 50%;
        transition: transform .5s;
        transition-timing-function: cubic-bezier(.2,1,.3,1);
        background: #6265fe;
    }
    .tabs li:hover:before , .tabs-en li:hover:before{transform: scale3d(1, 1, 1);}
    .show{
      display:none;
    }
</style>
