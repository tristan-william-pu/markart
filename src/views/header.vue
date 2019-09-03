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
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/assets/chinese.png" alt=""><span>{{$t('language.cn')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeChinese()"><img class="flag" src="@/assets/chinese.png" alt=""><span>{{$t('language.zh')}}</span></el-dropdown-item>
              <el-dropdown-item  @click.native="changeLangEvent()"><img class="flag" src="@/assets/country.png" alt=""><span>{{$t('language.en')}}</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </div>
         <div class="rf">
           <el-button class="hd-btn">{{$t('header.login')}}</el-button>
           <el-button class="hd-btn">{{$t('header.register')}}</el-button>
         </div>
         <div class="nav clearfix">
            <ul :class="classNum == 0 ? 'tabs':'tabs-en'">
                <li v-for="(item,index) in tabsList"
                  :key="index"
                  :class="{active:index == n}"
                  @mouseenter="tap(index)"
                  @mouseleave="tapLeave()"
                >
                  {{item}}
                </li>
                
               
            </ul>
        </div>    
      </div>
      <div class="pullbox clearfix" 
      :class="(n == 0 || n == 6) ? 'show' : ''"  
      v-for="(list,index) in contents" 
      :key="index"  
      v-show="index  == n"  
      @mouseenter="tap(index)"
      @mouseleave="tapLeave()">
            <img :src="tabsImg[index-1]" alt/>
            <ul class="homeTit">
              <li v-for="(abc,index) in list" :key="index">{{abc}}</li>
            </ul>
          </div>
    </header>
  
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      lang:'',
      bool:'',
      langString:'',
      imgSrc: require ('../assets/chinese.png'),
      tabsImg:[
        require('../assets/safe.png'),
        require('../assets/train.png'),
        require('../assets/pla.png'),
        require('../assets/cusSup.png'),
        require('../assets/zr.png'),
      ],
      tabPosition: 'top',
      tabsList:['首页','关于我们','交易产品','交易平台','客户支持','合作伙伴','联系我们'],
      tabsContent:[
        // {},
        // {a:'资金安全'},
        // {a:'外汇',b:'贵金属',c:'原油'}
        // ['资金安全',],
        // ['外汇','贵金属','原油','差价合约','指数','数字货币',],
        // ['MT4','交易杠杆','账户类型','Clearpro','MAM'],
        // ['支付方式','金融学院',],
        // ['白标合作','API接口','流动性供应商','介绍服务经纪商',],
        // ['',]
      ],
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
    this.rote();
  },
  components:{
    
  },
  methods:{
    rote(){
      let items = this.$t('tabs');
      let arr = [];
      this.contents = arr;
      for(let i = 0;i < items.length;i++){
        let lists = items[i].content;
        arr[i] = []
        for(let j = 0;j<lists.length;j++){
          arr[i].push(lists[j]);
        }
      }
      console.log(this.contents)
    },
    tap(i){
        this.n = i
    },
    tapLeave(){
      this.n = 0;
    },
    changeLangEvent() {
      console.log(1)
      this.lang = 'en';
      this.$i18n.locale = this.lang; // 关键语句
      this.bool = false;
      this.imgSrc = require('../assets/country.png');
      this.classNum = 1;
    },
    changeChinese(){
      console.log(2)
      this.lang = 'cn';
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
header {
    width: 100%;
    font-family: montserrat;
    display: block;
    height: 150px;
    position: relative;
    z-index: 10000;
    background: #fff;
}
p{
  font-size: 16px;
}

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
  :hover{
    background:#5b0eb2;
    color:#fff;
  }
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
  +span{
    margin:0 10px;
    display: inline-block;
    vertical-align: middle;
  }
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
.homeTit li{
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

}
   .pullbox {
    width: 100%;
    height: 250px;
    position: absolute;
    top: 150px;
    background: #fff;
    z-index: 9;
    border-top: 1px solid #c0c0c0;
    display: block;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    z-index: 1000;
    ul{
      float:left;    
      margin-top: 30px;
      margin-left: 5%;
      width: 72%;
      li{
        line-height: 40px;
      }
    }
    img{
       float:left;
      margin-left: 13%;
      margin-top: 50px;
      float: left;
      width: 6%;
    }
}
</style>
