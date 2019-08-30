<template>
  <div class="head">
    <!-- <span>{{$t('m.music')}}</span>
    <select name="changeLang" v-model="lang" @change="changeLangEvent">
     <option selected value="">--请选择--</option>
     <option value="zh-CN" v-text="$t('m.language.cn')"></option>
     <option value="en-US"  v-text="$t('m.language.en')"></option>
   </select>
    <h1 v-if="bool">{{$t('m.language.en')}}</h1>
    <h1 v-else>{{$t('m.language.cn')}}</h1>
    <div class="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, officiis? Asperiores distinctio neque harum non aperiam consectetur dolorum ab, nostrum excepturi magni molestiae, alias velit blanditiis, optio molestias voluptatibus commodi?</div> -->
    <header>
      <div class="warp">
         <img class="logo" src="../assets/images/logo.png" alt="">
         <div class="rf register countryselect">
           <el-dropdown placement="bottom-start">
            <span >
              <img src="../assets/images/country.png" alt=""><i class="el-dropdown-link el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" size="medium">
              <el-dropdown-item :command="changeLangEvent"><img class="flag" src="../assets/images/chinese.png" alt=""><span>{{$t('m.language.cn')}}</span></el-dropdown-item>
              <el-dropdown-item><img class="flag" src="../assets/images/chinese.png" alt=""><span>{{$t('m.language.zh')}}</span></el-dropdown-item>
              <el-dropdown-item><img class="flag" src="../assets/images/country.png" alt=""><span>{{$t('m.language.en')}}</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </div>
         <div class="rf">
           <el-button class="hd-btn">注册</el-button>
           <el-button class="hd-btn">登录</el-button>
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
    }
  },
  methods:{
    changeLangEvent() {
      console.log(123);
      //  if ( this.lang === 'zh-CN' ) {
      //         console.log(1)
      //         this.lang = 'zh-CN';
      //         this.$i18n.locale = this.lang; // 关键语句
      //         this.bool = false;
      //         console.log(this.lang)
      //     }else if(this.lang === 'en-US'){
      //       console.log(2)
      //       this.lang = 'en-US';
      //       this.$i18n.locale = this.lang; // 关键语句
      //       this.bool = true;
      //       console.log(this.lang)
      //     }
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
</style>
