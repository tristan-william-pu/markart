<template>
  <div class="head">
    <header>
      <div class="warp">
         <img class="logo" src="@/assets/logo.png" alt="">
         <div class="rf register countryselect">
           <el-dropdown placement="bottom-start" >
            <span>
              <img :src="imgSrc" class="flag" alt=""><i class="el-dropdown-link el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" size="medium">
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/assets/chinese.png" alt=""><span>{{$t('m.language.cn')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/assets/chinese.png" alt=""><span>{{$t('m.language.zh')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeLangEvent()"><img class="flag" src="@/assets/country.png" alt=""><span>{{$t('m.language.en')}}</span></el-dropdown-item>
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
                <!-- <li class="active">北京</li> -->
                <li v-for="(item,index) of items" :key="index"
                :class="{active:index == n}"
                @mouseenter="tap(index)"
                @mouseleave="tapLeave(index)"
                >
                {{$t(item.title)}}
            </li>
               
            </ul>
            <div class="content clearfix" >
                <p style="background:red">{{items[n].content | show}}</p>
            </div>
        </div>
      </div>
      <!-- <div v-show="index !==0 && index!==6 &&index == curId"  v-for="(content, index) in contents" :key="index" style="color:red">
          <span>{{content.content}}</span>
      </div> -->
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
      imgSrc: require ('../assets/chinese.png'),
      tabPosition: 'top',
      classNum: 0,
      classItem:-1,
      curId:-1,
      items:[
                {title:'m.header.home',content:''},
                {title:'m.header.about',content:'这里是上海'},
                {title:'m.header.product',content:'这里是广州'},
                {title:'m.header.platform',content:'这里是深圳'},
                {title:'m.header.support',content:'这里是武汉'},
                {title:'m.header.partner',content:'这里是武汉'},
                {title:'m.header.contact',content:''},
      ],
      n:0,
      // contents: [
     
      // ],
      lists:["m.header.home","m.header.about","m.header.product","m.header.platform","m.header.support","m.header.partner",
      "m.header.contact"],
    }
  },
  filters:{
    // show(value){
    //   // if(this.value = ){} 
    // },
  },
  computed:{

  },
  mounted(){
    // for(let i = 0;i < this.contents.length ; i++){
    //   this.contents[i] = $t("m.header.tabs"+[i]);
    // }
  },
  methods:{
    tap(i){
        this.n = i
    },
    tapLeave(){
        
    },
    changeLangEvent() {
      console.log(1)
      this.lang = 'en-US';
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require('../assets/country.png');
      this.classNum = 1;
    },
    changeChinese(){
      console.log(2)
      this.lang = 'zh-CN';
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require('../assets/chinese.png');
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
</style>
