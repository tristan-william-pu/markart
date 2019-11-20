<!--
 * @Autor: Diskfan
 * @Date: 2019-09-09 10:59:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:29:55
 * @Description: 注册
 -->
<template>
  <div class="regist">
    <div class="banner">
      <div class="img">
        <div class="warp clearfix">
          <p class="bannerfont animated">{{$t('regist.create')}}</p>
          <p class="bannertipsfont animated">{{$t('regist.happy')}}</p>
        </div>
      </div>
    </div>
    <div class="accountwarp">
      <div class="titleaccout">
        <div class="accounttype">
          <div @click="step=0,active=0">
            <span :class="{active: active==0}">{{$t('regist.title1')}}</span>
          </div>
        </div>
        <div class="accounttype">
          <div @click="active=1">
            <span :class="{active: active==1}">{{$t('regist.title2')}}</span>
          </div>
        </div>
        <div class="accounttype enaccounttype" v-show="!lang">
          <div @click="active=2">
            <span :class="{active: active==2}">QUICK ACCOUNT</span>
          </div>
        </div>
      </div>
      <div class="art" v-show="active == 1">{{$t('regist.free')}}</div>
      <div class="left" v-show="active == 1">
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.userName')}}
          </p>
          <input v-model="regForm.first_name" type="text" name="user_name" id="user_name" :placeholder="$t('regist.plName')" />
          <p class="tips">{{errors.first_name}}</p>
        </div>
        <!-- <div class="inputbox">
                  <p class="titles"><span style="color:#5b0eb2">* </span> 图形验证码</p>
                  <div class="input">
                      <input type="text"  name="v_code" id="v_code" placeholder="输入图形中的数字">
                      <img class="yaimg" src="/simulation_register/verify" name="sim_code" id="sim_code" onclick="imgsrc(this)">
                  </div>
                  <p class="tips" name="v_code_t" id="v_code_t"></p>
        </div>-->
        <div class="clear"></div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>{{$t('regist.phone')}}
          </p>

          <select name="user_cell_zd" class="sel">
            <option v-for="(item, key) in $store.state.countries" :key="key" :value="key">{{item}}</option>
          </select>
          <input class="inputtt" v-model="regForm.user_cell_zd" @input="checkInputInRemote('user_cell_zd')" type="text" name="user_cell" :placeholder="$t('regist.plPhone')" />
          <div class="clear"></div>
          <p class="tips" name="user_cell_tips" id="user_cell_tips">{{errors.user_cell_zd}}</p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.code')}}
          </p>
          <input
            class="inputtt"
            type="text"
            name="simulation_code"
            id="simulation_code"
            :placeholder="$t('regist.six')"
          />
          <input
            class="codebtn"
            type="button"
            name="sms_code"
            id="sms_code"
            
            onclick="check_code();"
          />
          <div class="clear"></div>
          <p class="tips" name="sms_code_t" id="sms_code_t" style="display: block;">{{errors.sms_code}}</p>
        </div>

        <div class="clear"></div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>{{$t('regist.new')}}
          </p>
          <select v-model="regForm.balance" name="balance" id="balance">
            <option value>{{$t('regist.USDT')}}</option>
            <option value="3000">3000</option>
            <option value="5000">5000</option>
            <option value="10000">10000</option>
            <option value="25000">25000</option>
            <option value="50000" selected="selected">50000</option>
            <option value="100000">100000</option>
            <option value="500000">500000</option>
            <option value="1000000">1000000</option>
            <option value="5000000">5000000</option>
          </select>
          <p class="tips">{{errors.balance}}</p>
        </div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.leverage')}}
          </p>
          <select name="leverage" id="leverage">
            <option value="500">1:500</option>
            <option value="400">1:400</option>
            <option value="300">1:300</option>
            <option value="200">1:200</option>
            <option value="175">1:175</option>
            <option value="150">1:150</option>
            <option value="125">1:125</option>
            <option value="100" selected="selected">1:100</option>
            <option value="75">1:75</option>
            <option value="66">1:66</option>
            <option value="50">1:50</option>
            <option value="33">1:33</option>
            <option value="25">1:25</option>
            <option value="20">1:20</option>
            <option value="15">1:15</option>
            <option value="10">1:10</option>
            <option value="5">1:5</option>
            <option value="3">1:3</option>
            <option value="2">1:2</option>
            <option value="1">1:1</option>
          </select>
          <p class="tips">{{errors.leverage}}</p>
        </div>
        <div class="clear"></div>

        <a>
          <div class="sumbtn" id="simulation_register_btn">{{$t('regist.post')}}</div>
        </a>
      </div>
      <div class="left standac" v-show="active == 0 && step == 0" id="one">
        <div class="conTit">
          <div class="bgdcloo rigP" :class="{active: step == 0 , enSpacing : lang == false}"  id="public1">{{$t('regist.basic')}}</div>
          <div class="bgdcloo leftP" :class="{active: step == 1 ,enSpacing : lang == false}" id="public2">{{$t('regist.perfect')}}</div>
          <div class="clear"></div>
        </div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.email')}}
          </p>
          <input type="text" v-model="regForm.user_email" @input="checkInputInRemote('check_email')" name="user_email" id="user_email" :placeholder="$t('regist.info')" />
          <p class="tips">{{errors.user_email}}</p>
        </div>
        <!--<div class="inputbox">
              <p class="titles">* 图形验证码</p>
              <div class="input">
                  <input type="text"  name="v_code" id="v_code" placeholder="输入图形中的数字">
                  <img class="yaimg" src="/register/verify" name="v_code_1" id="v_code_1" onclick="imgsrc(this)">
              </div>
              <p class="tips" name="v_code_t" id="v_code_t"></p>
        </div>-->

        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>{{$t('regist.setPWD')}}
          </p>
          <input
            type="password"
            name="user_password"
            v-model="regForm.user_password"
            id="user_password"
            :placeholder="$t('regist.plWritePWD')"
            onkeyup="this.value=this.value.replace(/^[A-Za-z0-9]{16}/,'');"
          />
          <p class="tips"></p>
        </div>
        <!-- <div class="inputbox">
             <p class="titles">* 确认密码</p>
             <input type="password" name="confirm_password" id="confirm_password" placeholder="确认您的登录密码" onkeyup="this.value=this.value.replace(/^[A-Za-z0-9]{16}/,'');">
             <p class="tips"></p>
        </div>-->
        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>{{$t('regist.phone')}}
          </p>

          <select name="user_cell_zd" v-model="regForm.user_cell_zd" id="user_cell_zd" class="sel">
            <option v-for="(item, key) in $store.state.countries" :key="key" :value="key">{{item}}</option>
          </select>
          <input class="inputtt" type="text" v-model="regForm.user_cell" name="user_cell" id="user_cell" :placeholder="$t('regist.plPhone')" />
          <div class="clear"></div>
          <p class="tips" id="user_cell_tishi" name="user_cell_tishi"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.code')}}
          </p>
          <input class="inputtt" v-model="regForm.sim_code" type="text" :placeholder="$t('regist.six')" />
          <input
            class="codebtn"
            type="button"
            name="sim_code_1"
            id="sim_code_1"
            @click="sendSimCode"
            :value="$t('regist.get')"
          />
          <div class="clear"></div>
          <p class="tips" id="sim_code_tishi" name="sim_code_tishi">{{errors.sim_code}}</p>
        </div>

        <div class="inputbox" style="position: relative">
          <p class="titles">
            <span style="color:#5b0eb2;">*</span>&nbsp;{{$t('regist.station')}}
          </p>
          <select name="mct" style="opacity: 0;" v-model="regForm.trade_type" @change="consoel">
            <option value="mt4" class="mt4">MT4</option>
            <option value="ct" class="ctrader">cTrader</option>
          </select>
          <div class="replay">
            <p id="hide-sel" class="MTactive" @click="Show" :style="{background: 'url('+bgImg+') no-repeat center'}">
              {{name}}
              <span class="sanjiao_down" />
            </p>
            <ul id="chooseUL" class="MTCT" v-show="selectShow">
              <li id="chooseMT" class="chooseMT" @click="choose(1)">{{liImg[1].name}}</li>
              <li id="chooseCT" class="choose" @click="choose(2)">{{liImg[0].name}}</li>
            </ul>
          </div>

          <p class="tips"></p>
        </div>

        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>&nbsp;{{$t('regist.money')}}
          </p>
          <select v-model="regForm.currency_type" id="currency_type" name="currency_type">
            <option value="USD">{{$t('regist.dollor')}}</option>
            <option value="USC" id="Quater" style="display: block;" v-if="selectChooese == 'mt4'? true :false">{{$t('regist.cents')}}</option>
          </select>
          <p class="tips">{{errors.currency_type}}</p>
        </div>

        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">{{$t('regist.Referee')}}</p>
          <input type="text" name="account_ib" id="account_ib" />
          <p class="tips"></p>
        </div>

        <div class="clear"></div>
        <div class="center clearfix" :class="lang == false ?'enMargin':''">
          <ul>
            <li>
              <input type="checkbox" name="type" v-model="regForm.agreement1" id="agreement1" checked />
              <a class="pup" @click="$util.downloadPdf('/pdf/fx.pdf', '风险披露')">{{$t('regist.Iread')}}</a>
            </li>
            <li>
              <input type="checkbox" name="type" v-model="regForm.agreement2" id="agreement2" checked />
              <a
                @click="$util.downloadPdf('/pdf/CPTMarketsv2.pdf', '自动调整杠杆说明')"
                class="pup"
              >{{$t('regist.say')}}</a>
            </li>
            <li>
              <input type="checkbox" name="type" v-model="regForm.agreement3" id="agreement3" checked />
              <a
                class="pup"
                @click="$util.downloadPdf('/pdf/malicious.pdf', 'CPT Markets流动性指南')"
              >{{$t('regist.agree')}}</a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="sumbtn" @click="nextOne" id="btndk">{{$t('regist.nextOne')}}</div>
      </div>
      <div class="yanzheng" v-show="active == 0 && step == 1 ">
        <div class="left" id="two" style>
          <div class="inputbox">
            <p class="titles">{{$t('regist.country')}}</p>
            <select name="user_nation" v-model="regForm.user_nation" id="user_nation">
              <option v-for="(item, key) in $store.state.countriesShort" :key="key" :value="key">{{item}}</option>
            </select>
            <p class="tips"></p>
          </div>

          <div class="inputbox">
            <p class="titles">{{$t('regist.ChineseName')}}</p>
            <input type="text" name="first_name" v-model="regForm.first_name" id="first_name" />
            <p class="tips" style="display: block;">{{$t('regist.PlChinese')}}</p>
          </div>
          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.enName')}}</p>
            <input type="text" v-model="regForm.last_name" name="last_name" id="last_name" />
            <p class="tips" style="display: block;">{{errors.last_name}}</p>
          </div>
          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.CardID')}}</p>
            <select name="user_certificate_type" v-model="regForm.user_certificate_type" id="user_certificate_type">
              <option value="1">{{$t('regist.IDcard')}}</option>
              <option value="2">{{$t('regist.passport')}}</option>
            </select>
            <p class="tips">{{$t('regist.WordingCard')}}</p>
          </div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.IDnum')}}</p>
            <input type="text" v-model="regForm.user_certificate_no" id="user_certificate_no" name="user_certificate_no" />
            <p class="tips" style="display: block;">{{errors.user_certificate_no}}</p>
          </div>
          <div class="clear"></div>

          <div class="inputbox">
            <div class="perid">
              {{$t('regist.CardPhoto')}}
              <span>{{$t('regist.photoSize')}}</span>
            </div>
            <div class="kuang">
              <div class="upload" @click="$refs.idCard0.value = '',$refs.idCard0.click()">
                <div class="select">
                  <img v-if="files.idCard0" :width="files.idCard0.width + 'px'" :height="files.idCard0.height + 'px'" :src="files.idCard0.base64" alt="">
                  <input type="file" ref="idCard0" @change="fileChange($event, 'idCard0')" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">{{$t('regist.certificate')}}</span>
              </div>
              <div class="upload" @click="$refs.idCard1.value ='' ,$refs.idCard1.click()">
                <div class="select">
                  <img v-if="files.idCard1" :width="files.idCard1.width + 'px'" :height="files.idCard1.height + 'px'" :src="files.idCard1.base64" alt="">
                  <input type="file" ref="idCard1" @change="fileChange($event, 'idCard1')" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">{{$t('regist.reverse')}}</span>
              </div>
              <!-- <iframe frameborder="0" style="width:700px;height:200px;" src="/register/addidcard"></iframe> -->
            </div>

            <div class="clear"></div>
            <!--<div class="bankpho" style="display: none"><iframe frameborder="0" style="width:300px;height:200px;" src="/register/addpassport"></iframe>-->

            <!--</div>-->
          </div>

          <div class="clear"></div>
          <div class="perid txcenter">{{$t('regist.BankCard')}}</div>

          <div class="inputbox">
            <p class="titles">{{$t('regist.cardholder')}}</p>
            <input type="text" v-model="regForm.bank_user_name" id="bank_user_name" name="bank_user_name" :placeholder="$t('regist.need')" />
            <p class="tips">{{errors.bank_user_name}}</p>
          </div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.BankNum')}}</p>
            <input type="text" v-model="regForm.bank_no" id="bank_no" name="bank_no" />
            <p class="tips">{{errors.bank_no}}</p>
          </div>

          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.BankName')}}</p>
            <input type="text" id="bank_name" v-model="regForm.bank_name" name="bank_name" />
            <p class="tips">{{errors.bank_name}}</p>
          </div>
          <div class="inputbox">
            <p class="titles">{{$t('regist.branchBank')}}</p>
            <input type="text" v-model="regForm.bank_address" id="bank_address" name="bank_address" />
            <p class="tips">{{errors.bank_address}}</p>
          </div>
          <div class="clear"></div>

          <div class="inputbox">
            <div class="perid">
              {{$t('regist.BankPhoto')}}
              <span>{{$t('regist.BankPhotoSize')}}</span>
            </div>
            <div class="kuang">
              <div class="upload" @click="$refs.bankCard.value = '',$refs.bankCard.click()">
                <div class="select">
                  <img v-if="files.bankCard" :width="files.bankCard.width + 'px'" :height="files.bankCard.height + 'px'" :src="files.bankCard.base64" alt="">
                  <input type="file" ref="bankCard" @change="fileChange($event, 'bankCard')" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">{{$t('regist.BankImage')}}</span>
              </div>
              <!-- <iframe frameborder="0" style="width:700px;height:200px;" src="/register/addidcard"></iframe> -->
            </div>
            <!-- <div class="bankpho">
              <iframe frameborder="0" style="width:300px;height:200px;" src="/register/addbankcard"></iframe>
            </div> -->
          </div>

          <!--<div class="inputbox">
               <div class="perid">居住证明（选填）：<span>（上传图片须小于2M）</span></div>
                <div><iframe frameborder="0" style="width: 800px;height:200px;" src="/register/addresidence"></iframe></div>
          </div>-->
          <div class="clear"></div>
          <!--<div class="sumbtn Previouspage" onclick="retwo()">Previous page</div>-->
          <div class="sumbtn" @click="submit">{{$t('regist.post')}}</div>
        </div>

        <div id="three" style="display: none;">
          <div class="complete-regis">
            <h3>{{$t('regist.welcome')}}</h3>
            <h1>CPT Markets</h1>
            <h2>{{$t('regist.success')}}</h2>
            <p>
              {{$t('regist.review')}}(
              <a
                href="/p/login"
              >{{$t('regist.skip')}}</a>)
            </p>

            <!-- <div class="regis-btn">
                     <a href="/index.php?m=UcLogin&a=login" class="btn btn-primary ">完成注册</a>
            </div>-->
          </div>
        </div>
      </div>
      <div class="left" v-show="active == 2">
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> Verification mode
          </p>
          <select name="Verification" id="Verification">
            <option value="Phone">Phone</option>
            <option value="E-mail">E-mail</option>
          </select>
          <p class="tips"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>{{$t('regist.phone')}}
          </p>

          <select name="user_cell_zd" class="sel">
            <option v-for="(item, key) in $store.state.countries" :key="key" :value="key">{{item}}</option>
          </select>
          <input class="inputtt" type="text" name="user_cell" :placeholder="$t('regist.plPhone')" />
          <div class="clear"></div>
          <p class="tips" name="user_cell_tips" id="user_cell_tips"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> {{$t('regist.code')}}
          </p>
          <input class="inputtt" type="text" name="sim_code" id="sim_code" :placeholder="$t('regist.six')" />
          <input
            class="codebtn"
            type="button"
            name="sim_code_1"
            id="sim_code_1"
            onclick="sendSimCode()"
            :value="$t('regist.get')"
          />
          <div class="clear"></div>
          <p class="tips" id="sim_code_tishi" name="sim_code_tishi"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> Graphic verification code
          </p>
          <input type="text"  />
          <p class="tips">{{$t('regist.eMailworing')}}</p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> Name
          </p>
          <input type="text" :placeholder="$t('regist.info')" />
          <p class="tips">{{$t('regist.eMailworing')}}</p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> Country of citizenship
          </p>
          <input type="text" :placeholder="$t('regist.info')" />
          <p class="tips">{{$t('regist.eMailworing')}}</p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> Account type
          </p>
          <input type="text" :placeholder="$t('regist.info')" />
          <p class="tips">{{$t('regist.eMailworing')}}</p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> IB account(optional)
          </p>
          <input type="text" :placeholder="$t('regist.info')" />
          <p class="tips">{{$t('regist.eMailworing')}}</p>
        </div>

        <div class="clear"></div>
        <div class="center clearfix" :class="lang == false ?'enMargin':''">
          <ul>
            <li>
              <input type="checkbox" checked />
              <a class="pup" @click="$util.downloadPdf('/pdf/fx.pdf', '风险披露')">{{$t('regist.Iread')}}</a>
            </li>
            <li>
              <input type="checkbox" checked />
              <a
                @click="$util.downloadPdf('/pdf/CPTMarketsv2.pdf', '自动调整杠杆说明')"
                class="pup"
              >{{$t('regist.say')}}</a>
            </li>
            <li>
              <input type="checkbox" checked />
              <a
                class="pup"
                @click="$util.downloadPdf('/pdf/malicious.pdf', 'CPT Markets流动性指南')"
              >{{$t('regist.agree')}}</a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="sumbtn">{{$t('regist.nextOne')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      step: 1,
      selectShow:false,
      selectChooese:'mt4',
      bgImg:require('@/assets/MT4B.png'),
      name:'MT4',
      liImg:[
        {img:require('@/assets/ctB.png'),name:'cTrader'}, 
        {img:require('@/assets/MT4B.png'),name:'MT4'}, 
      ],
      files: {
        idCard1: '',
        idCard0: '',
        bankCard: '',
      },
      regForm: {
        user_email:'',		
        user_password:'',		
        user_cell_zd:'86',		
        user_cell:'',		
        account_ib:'',		
        user_nation:'CN',		
        first_name:'',		
        last_name:'',		
        user_certificate_type:'1',		
        user_certificate_no:'',		
        bank_user_name:'',		
        bank_no:'',		
        bank_name:'',		
        bank_address:'',		
        currency_type:'',		
        trade_type:'',
        user_name:'',
        simulation_code:'',
        balance:'',	
        leverage:'',
      },
      errors: {},
      lang:true,
    };
  },
  methods:{
    Show(){
      this.selectShow = !this.selectShow;
    },
    choose(index){
      if( index == 1){
        this.bgImg = this.liImg[1].img;
        this.name = 'MT4';
        this.selectChooese = 'mt4';
      }else{
        this.bgImg = this.liImg[0].img;
        this.name = 'cTrader',
        this.selectChooese = 'ct';
      }
       this.selectShow = false;
    },
    consoel(){
      console.log(this.selectChooese);
    },
    changeLang(){
       if(this.$i18n.locale == 'en'){
          this.lang = false
        }else{
          this.lang = true
        }
    },
    checkInputInRemote(type) {
      const form = this.regForm;
      const urls = {
        check_email: 'register/check_email',
        check_cell: 'register/check_cell',
        check_account_ib: 'register/check_account_ib',
        check_certificate_no: 'register/check_certificate_no',
        check_sim_code: 'register/check_sim_code',
      };
      const params = {
        user_email: form.user_email,
        user_cell_zd: form.user_cell,
        account_ib: form.account_ib,
        user_certificate_type: form.user_certificate_type,
        user_certificate_no: form.user_certificate_no,
        check_sim_code: form.check_sim_code,
      };
      this.$http.post(urls[type], {
        
      }).then((res) => {
        const data = res.body;
        if (data.code === 200) {
          this.errors[type] = '';
        } else {
          this.errors[type] = '已被占用';
        }
      }).catch(e => {

      });
    },
    sendSimCode() {},
    nextOne() {
      const values = Object.values(this.errors).filter(el => el);
      if (values.length) {
        return
      }
      this.step = 1;
    },
    async fileChange(e, type) {
      const file = this.$refs[type].files[0];
      if (!/\.jpg$|\.jpeg$|\.png$|\.bmp$/.test(file.name)) {
        this.$util.error('图片格式不正确');
        return;
      }
      const result = await this.$util.readImage(file);
      if (!result) {
        this.$util.error('读取失败');
        return;
      }
      const resize = this.$util.autoImgSize(result.width, result.height, 200, 139);
      this.files[type] = {
        width: resize.width,
        height: resize.height,
        base64: result.base64
      };
    },
    submit() {
      
    },
  },
  created(){
    this.selectChooese = 'mt4'
    this.changeLang();
  },
  updated(){
    this.changeLang();
  },
  activated() {
    this.active = this.$route.params.active || 0;
  }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.regist {
  .banner {
    width: 100%;
    .img {
      max-width: 100%;
      height:auto;
      display: block;
      background: url(/images/E-mail_02.png) no-repeat center;
      .warp {
        width: 1200px;
        display: block;
        margin: 0 auto;
        margin-top: -20px;
        margin-bottom: 20px;
        @include clearfix();
        .bannerfont {
          line-height: 100px;
          color: #fff;
          font-size: 48px;
          text-align: center;
          margin-top: 40px;
          letter-spacing: 9px;
          font-weight: bold;
          @include animation(bounceInUps);
        }
        .bannertipsfont {
          color: #fff;
          text-align: center;
          font-size: 24px;
          padding-bottom: 35px;
          @include animation(bounceInUps, 1s, 200ms);
        }
      }
    }
  }
  .titleaccout {
    display: flex;
    align-items: center;
    margin: 0 auto;
    
    .accounttype {
      width: 49%;
      margin: 10% 0 7% 0;
      display: inline-block;
      border-right: 4px solid #757575;
      text-align: center;
      div {
        color: #757575;
        span {
          font-weight: 600;
          letter-spacing: 5px;
          font-size: 34px;
        }
        .active {
          color: #5b0eb2;
        }
      }
    }

    .accounttype:nth-child(2) {
      border-right: none;
    }
    .enaccounttype{
      border-left: 4px solid #757575;
      border-right: none;
    }
  }
  .art {
    font-size: 18px;
    color: #000;
    font-weight: 900;
    margin-top: 0px;
    text-align: center;
  }

  .accountwarp {
    width: 800px;
    display: block;
    margin: 0 auto;
    margin-top: -20px;
    margin-bottom: 20px;
    .conTit {
      margin-left: -15%;
      @include flex();
      .bgdcloo {
        width: 50%;
        font-size: 24px;
        line-height: 60px;
        text-align: center;
        letter-spacing: 3px;
        font-weight: 900;
        float: left;
        background: url(./../../assets/RigBg.png) no-repeat;
        background-size: 100% 100% !important;
        color: #fff;
      }
      .active {
        background: url(./../../assets/LeBg.png) no-repeat;
      }
    }
    .left {
      margin-left: 15%;
      .inputbox {
        width: 100%;
        padding: 20px 0;
        .titles {
          font-size: 18px;
          color: #000;
          margin-bottom: 10px;
          span {
            color: #5b0eb2;
          }
        }
        input {
          width: 80%;
          border: 1px solid #b4b4b4;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          padding-left: 20px;
          background: #f0f0f0;
        }
        .inputtt {
          width: 50%;
          float: left;
          border: 1px solid #b4b4b4;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          background: #f0f0f0;
          position: relative;
        }
        .codebtn {
          width: 25%;
          margin-left: 5%;
          float: left;
          border: 1px solid #5b0eb2;
          border-right: none;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          background: #5b0eb2;
          color: #fff;
          border-radius: 0px;
        }
        select {
          width: 80%;
          border: 1px solid #b4b4b4;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
          box-sizing: border-box;
          background: #f0f0f0;
          border-radius: 0px;
          option {
            line-height: 40px;
            font-size: 16px;
          }
        }
        .sel {
          width: 30%;
          display: inline-block;
          border: 1px solid #b4b4b4;
          border-right: none;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          background: #f0f0f0;
          border-radius: 0px;
          font-size: 16px;
          float: left;
          option {
            font-weight: normal;
            display: block;
            white-space: pre;
            min-height: 1.2em;
            padding: 0px 2px 1px;
            font-size: 16px;
          }
        }
        .tips {
          margin-top: 5px;
          color: red;
          font-size: 14px;
          height: 20px;
          box-sizing: border-box;
        }
        .replay {
          width: 100%;
          position: absolute;
          top: 54px;
          left: 0;
          #hide-sel {
            width: 80%;
            border: 1px solid #b4b4b4;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
            background: #f0f0f0;
            border-radius: 0px;
            margin: 0;
            position: relative;
            padding-left: 5px;
            img {
              position: absolute;
              top: 15px;
              right: 6px;
            }
          }
          .MTactive {
            background-color: #f0f0f0 !important;
            background: url(./../../assets/MT4B.png) no-repeat center ;
          }
          .MTCT {
            width: 80%;
            border: 1px solid #b4b4b4;
            height: auto;
            line-height: 40px;
            margin: 0;
            background: #fff;
            #chooseMT {
              padding-left: 5px;
              background: #f0f0f0 url(./../../assets/MT4B.png) no-repeat center;
              &:hover{
                color:#fff;
                background: #5b0eb2  url(./../../assets/MT4W.png) no-repeat center;
              }
            }
            #chooseCT {
              padding-left: 5px;
              background: #f0f0f0 url(./../../assets/ctB.png) no-repeat center;
              &:hover{
                color:#fff;
                background: #5b0eb2  url(./../../assets/ctW.png) no-repeat center;
              }
            }
          }
        }
        .perid {
          margin: 30px 0;
          font-size: 22px;
          font-weight: bold;
          color: #333333;
          span {
            font-size: 16px;
            color: #9270c8;
            font-weight: normal;
          }
        }
        .kuang {
          width: 100%;
          height: 180px;
          margin-bottom: 5px;
          @include flex();
            margin-left: -80px;
          .upload {
            width: 40%;
            height: 180px;
            @include flex();
            flex-direction: column;
            .select {
              width: 200px;
              height: 150px;
              border: 1px dashed #ccc;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .text {
              margin-top: 15px;
              width: 100%;
              color: #0099ff;
              font-size: 18px;
              font-weight: bold;
              text-decoration: underline;
              text-align: center;
            }
          }
        }
      }
      .clear {
        clear: both;
        @include clearfix();
      }
      > .perid {
        margin: 30px 0;
        font-size: 22px;
        font-weight: bold;
        color: #333333;
      }
      .center {
        margin-top: 20px;
        margin-left: 16%;
        ul {
          li {
            margin: 10px 0;
            input {
              vertical-align: middle;
              margin-right: 5px;
            }
            a {
              vertical-align: middle;
              font-size: 14px;
              color: #5b0eb2;
              text-align: left;
              margin-bottom: 10px;
            }
          }
        }
      }
      .sumbtn {
        width: 43%;
        height: 40px;
        background: #5b0eb2;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin-top: 10%;
        margin-bottom: 100px;
        margin-left: 20%;
      }
    }
  }
}
// 三角
.sanjiao_down{
    width:0;
    height:0;
    overflow:hidden;
    font-size: 0;     /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
    line-height: 0;  /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
    border-width:5px;
    border-style:solid dashed dashed dashed;/*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
    border-color:black transparent transparent transparent;
    float: right;
    display: block;
    margin:15px;
}
.enMargin{
  margin-left:0 !important;
}
.enSpacing{
  letter-spacing: 0 !important;
}
</style>