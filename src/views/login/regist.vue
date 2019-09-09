<!--
 * @Autor: Diskfan
 * @Date: 2019-09-09 10:59:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 14:49:08
 * @Description: 注册
 -->
<template>
  <div class="regist">
    <div class="banner">
      <div class="img">
        <div class="warp clearfix">
          <p class="bannerfont animated">创建交易账户</p>
          <p class="bannertipsfont animated">开设真实账户，开始享受外汇交易乐趣</p>
        </div>
      </div>
    </div>
    <div class="accountwarp">
      <div class="titleaccout">
        <div class="accounttype">
          <div @click="step=0,active=0">
            <span :class="{active: active==0}">标准账户</span>
          </div>
        </div>
        <div class="accounttype">
          <div @click="active=1">
            <span :class="{active: active==1}">模拟账户</span>
          </div>
        </div>
      </div>
      <div class="art" v-show="active == 1">免费开设模拟账户，累积外汇操盘技巧</div>
      <div class="left" v-show="active == 1">
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> 用户名
          </p>
          <input type="text" name="user_name" id="user_name" placeholder="请设置您的用户名" />
          <p class="tips"></p>
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
            <span style="color:#5b0eb2">*</span>手机号码
          </p>

          <select name="user_cell_zd" class="sel">
            <option value="86" selected="selected">86(中国大陆)</option>
            <option value="886">886(台湾)</option>
            <option value="852">852(香港)</option>
            <option value="853">853(澳门)</option>
            <option value="244">244(Angola)</option>
            <option value="93">93(Afghanistan)</option>
            <option value="355">355(Albania)</option>
            <option value="213">213(Algeria)</option>
            <option value="376">376(Andorra)</option>
            <option value="1264">1264(Anguilla)</option>
            <option value="1268">1268(Antigua and Barbuda)</option>
            <option value="54">54(Argentina)</option>
            <option value="374">374(Armenia)</option>
            <option value="61">61(Australia)</option>
            <option value="43">43(Austria)</option>
            <option value="994">994(Azerbaijan)</option>
            <option value="1242">1242(Bahamas)</option>
            <option value="973">973(Bahrain)</option>
            <option value="880">880(Bangladesh)</option>
            <option value="1246">1246(Barbados)</option>
            <option value="375">375(Belarus)</option>
            <option value="32">32(Belgium)</option>
            <option value="501">501(Belize)</option>
            <option value="229">229(Benin)</option>
            <option value="1441">1441(Bermuda)</option>
            <option value="591">591(Bolivia)</option>
            <option value="267">267(Botswana)</option>
            <option value="55">55(Brazil)</option>
            <option value="673">673(Brunei)</option>
            <option value="359">359(Bulgaria)</option>
            <option value="226">226(Burkina Faso)</option>
            <option value="95">95(Myanmar)</option>
            <option value="257">257(Burundi)</option>
            <option value="237">237(Cameroon)</option>
            <option value="1">1(Canada)</option>
            <option value="236">236(Central African Republic)</option>
            <option value="235">235(Chad)</option>
            <option value="56">56(Chile)</option>
            <option value="57">57(Colombia)</option>
            <option value="682">682(Cook Islands)</option>
            <option value="506">506(Costa Rica)</option>
            <option value="242">242(Congo)</option>
            <option value="53">53(Cuba)(Congo)</option>
            <option value="357">357(Cyprus)</option>
            <option value="420">420(Czech Republic)</option>
            <option value="45">45(Denmark)</option>
            <option value="253">253(Djibouti)</option>
            <option value="1890">1890(Dominican Republic)</option>
            <option value="593">593(Ecuador)</option>
            <option value="20">20(Egypt)</option>
            <option value="503">503(El Salvador)</option>
            <option value="372">372(Estonia)</option>
            <option value="251">251(Ethiopia)</option>
            <option value="679">679(Fiji Islands)</option>
            <option value="358">358(Finland)</option>
            <option value="33">33(France)</option>
            <option value="594">594(French Guiana)</option>
            <option value="241">241(Gabon)</option>
            <option value="220">220(Gambia)</option>
            <option value="995">995(Georgia)</option>
            <option value="49">49(Germany)</option>
            <option value="233">233(Ghana)</option>
            <option value="350">350(Gibraltar)</option>
            <option value="30">30(Greece)</option>
            <option value="1809">1809(Grenada)</option>
            <option value="1671">1671(Guam)</option>
            <option value="502">502(Guatemala)</option>
            <option value="224">224(Guinea)</option>
            <option value="592">592(Guyana)</option>
            <option value="509">509(Haiti)</option>
            <option value="504">504(Honduras)</option>
            <option value="36">36(Hungary)</option>
            <option value="354">354(Iceland)</option>
            <option value="91">91(India)</option>
            <option value="62">62(Indonesia)</option>
            <option value="98">98(Iran)</option>
            <option value="964">964(Iraq)</option>
            <option value="353">353(Ireland)</option>
            <option value="972">972(Israel)</option>
            <option value="39">39(Italy)</option>
            <option value="1876">1876(Jamaica)</option>
            <option value="81">81(Japan)</option>
            <option value="962">962(Jordan)</option>
            <option value="855">855(Cambodia)</option>
            <option value="327">327(Kazakhstan)</option>
            <option value="254">254(Kenya)</option>
            <option value="965">965(Kuwait)</option>
            <option value="331">331(Kyrgyzstan)</option>
            <option value="856">856(Laos)</option>
            <option value="371">371(Latvia)</option>
            <option value="266">266(Lesotho)</option>
            <option value="961">961(Lebanon)</option>
            <option value="231">231(Liberia)</option>
            <option value="218">218(Libya)</option>
            <option value="423">423(Liechtenstein)</option>
            <option value="370">370(Lithuania)</option>
            <option value="352">352(Luxembourg)</option>
            <option value="261">261(Madagascar)</option>
            <option value="265">265(Malawi)</option>
            <option value="60">60(Malaysia)</option>
            <option value="960">960(Maldives)</option>
            <option value="223">223(Mali)</option>
            <option value="356">356(Malta)</option>
            <option value="230">230(Mauritius)</option>
            <option value="52">52(Mexico)</option>
            <option value="373">373(Moldova)</option>
            <option value="377">377(Monaco)</option>
            <option value="976">976(Mongolia)</option>
            <option value="1664">1664(Montserrat)</option>
            <option value="212">212(Morocco)</option>
            <option value="258">258(Mozambique)</option>
            <option value="264">264(Namibia)</option>
            <option value="674">674(Nauru)</option>
            <option value="977">977(Nepal)</option>
            <option value="31">31(Netherlands)</option>
            <option value="64">64(New Zealand)</option>
            <option value="505">505(Nicaragua)</option>
            <option value="227">227(Niger)</option>
            <option value="234">234(Nigeria)</option>
            <option value="850">850(South Korea)</option>
            <option value="47">47(Norway)</option>
            <option value="968">968(Oman)</option>
            <option value="92">92(Pakistan)</option>
            <option value="507">507(Panama)</option>
            <option value="675">675(Papua New Guinea)</option>
            <option value="595">595(Paraguay)</option>
            <option value="51">51(Peru)</option>
            <option value="63">63(Philippines)</option>
            <option value="48">48(Poland)</option>
            <option value="689">689(French Polynesia)</option>
            <option value="351">351(Portugal)</option>
            <option value="1787">1787(Puerto Rico)</option>
            <option value="974">974(Qatar)</option>
            <option value="40">40(Romania)</option>
            <option value="7">7(Russia)</option>
            <option value="1758">1758(St. Lucia)</option>
            <option value="1784">1784(St. Vincent and the Grenadines)</option>
            <option value="378">378(San Marino)</option>
            <option value="239">239(Sao Tome and Principe)</option>
            <option value="966">966(Saudi Arabia)</option>
            <option value="221">221(Senegal)</option>
            <option value="248">248(Seychelles)</option>
            <option value="232">232(Sierra Leone)</option>
            <option value="65">65(Singapore)</option>
            <option value="421">421(Slovakia)</option>
            <option value="386">386(Slovenia)</option>
            <option value="677">677(Solomon Islands)</option>
            <option value="27">27(South Africa)</option>
            <option value="252">252(Somalia)</option>
            <option value="82">82(South Korea)</option>
            <option value="249">249(Sultan)</option>
            <option value="963">963(Syria)</option>
            <option value="34">34(Spain)</option>
            <option value="94">94(Sri Lanka)</option>
            <option value="597">597(Suriname)</option>
            <option value="268">268(Swaziland)</option>
            <option value="46">46(Sweden)</option>
            <option value="41">41(Switzerland)</option>
            <option value="992">992(Tajikistan)</option>
            <option value="255">255(Tanzania)</option>
            <option value="66">66(Thailand)</option>
            <option value="228">228(Togo)</option>
            <option value="676">676(Tonga)</option>
            <option value="1809">1809(Trinidad and Tobago)</option>
            <option value="216">216(Tunisia)</option>
            <option value="90">90(Turkey)</option>
            <option value="993">993(Turkmenistan)</option>
            <option value="256">256(Uganda)</option>
            <option value="380">380(Ukraine)</option>
            <option value="971">971(United Arab Emirates)</option>
            <option value="44">44(United Kingdom)</option>
            <option value="001">001(United States)</option>
            <option value="598">598(Uruguay)</option>
            <option value="233">233(Uzbekistan)</option>
            <option value="58">58(Venezuela)</option>
            <option value="84">84(Viet Nam)</option>
            <option value="967">967(Yemen)</option>
            <option value="381">381(Serbia and Montenegro)</option>
            <option value="263">263(Zimbabwe)</option>
            <option value="260">260(Zambia)</option>
            <option value="243">243(Zaire)</option>
          </select>
          <input class="inputtt" type="text" name="user_cell" placeholder="您的手机号码" />
          <div class="clear"></div>
          <p class="tips" name="user_cell_tips" id="user_cell_tips"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> 手机验证码
          </p>
          <input
            class="inputtt"
            type="text"
            name="simulation_code"
            id="simulation_code"
            placeholder="6位数字验证码"
          />
          <input
            class="codebtn"
            type="button"
            name="sms_code"
            id="sms_code"
            value="获取验证码"
            onclick="check_code();"
          />
          <div class="clear"></div>
          <p class="tips" name="sms_code_t" id="sms_code_t" style="display: block;">请输入短信验证码</p>
        </div>

        <div class="clear"></div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>选择初始资金
          </p>
          <select name="balance" id="balance">
            <option value>选择初始资金（USD美金）</option>
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
          <p class="tips"></p>
        </div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> 选择杠杆倍数
          </p>
          <select name="leverage" id="leverage">
            <option value>选择杠杆倍数</option>
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
          <p class="tips"></p>
        </div>
        <div class="clear"></div>

        <a>
          <div class="sumbtn" id="simulation_register_btn">提交注册</div>
        </a>
      </div>
      <div class="left standac" v-show="active == 0 && step == 0" id="one">
        <div class="conTit">
          <div class="bgdcloo rigP" :class="{active: step == 0}" id="public1">基本资料</div>
          <div class="bgdcloo leftP" :class="{active: step == 1}" id="public2">资料完善</div>
          <div class="clear"></div>
        </div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> 电子邮箱
          </p>
          <input type="text" name="user_email" id="user_email" placeholder="账户重要信息将发送至您的邮箱" />
          <p class="tips" style="display: none;">请输入正确的电子邮件地址</p>
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
            <span style="color:#5b0eb2">*</span>设置密码
          </p>
          <input
            type="password"
            name="user_password"
            id="user_password"
            placeholder="请输入6-16位密码"
            onkeyup="this.value=this.value.replace(/^[A-Za-z0-9]{16}/,'');"
          />
          <p class="tips" style="display: none;">密码为6-16个字符</p>
        </div>
        <!-- <div class="inputbox">
             <p class="titles">* 确认密码</p>
             <input type="password" name="confirm_password" id="confirm_password" placeholder="确认您的登录密码" onkeyup="this.value=this.value.replace(/^[A-Za-z0-9]{16}/,'');">
             <p class="tips"></p>
        </div>-->
        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>手机号码
          </p>

          <select name="user_cell_zd" id="user_cell_zd" class="sel">
            <option value="86" selected="selected">86(中国大陆)</option>
            <option value="886">886(台湾)</option>
            <option value="852">852(香港)</option>
            <option value="853">853(澳门)</option>
            <option value="244">244(Angola)</option>
            <option value="93">93(Afghanistan)</option>
            <option value="355">355(Albania)</option>
            <option value="213">213(Algeria)</option>
            <option value="376">376(Andorra)</option>
            <option value="1264">1264(Anguilla)</option>
            <option value="1268">1268(Antigua and Barbuda)</option>
            <option value="54">54(Argentina)</option>
            <option value="374">374(Armenia)</option>
            <option value="61">61(Australia)</option>
            <option value="43">43(Austria)</option>
            <option value="994">994(Azerbaijan)</option>
            <option value="1242">1242(Bahamas)</option>
            <option value="973">973(Bahrain)</option>
            <option value="880">880(Bangladesh)</option>
            <option value="1246">1246(Barbados)</option>
            <option value="375">375(Belarus)</option>
            <option value="32">32(Belgium)</option>
            <option value="501">501(Belize)</option>
            <option value="229">229(Benin)</option>
            <option value="1441">1441(Bermuda)</option>
            <option value="591">591(Bolivia)</option>
            <option value="267">267(Botswana)</option>
            <option value="55">55(Brazil)</option>
            <option value="673">673(Brunei)</option>
            <option value="359">359(Bulgaria)</option>
            <option value="226">226(Burkina Faso)</option>
            <option value="95">95(Myanmar)</option>
            <option value="257">257(Burundi)</option>
            <option value="237">237(Cameroon)</option>
            <option value="1">1(Canada)</option>
            <option value="236">236(Central African Republic)</option>
            <option value="235">235(Chad)</option>
            <option value="56">56(Chile)</option>
            <option value="57">57(Colombia)</option>
            <option value="682">682(Cook Islands)</option>
            <option value="506">506(Costa Rica)</option>
            <option value="242">242(Congo)</option>
            <option value="53">53(Cuba)(Congo)</option>
            <option value="357">357(Cyprus)</option>
            <option value="420">420(Czech Republic)</option>
            <option value="45">45(Denmark)</option>
            <option value="253">253(Djibouti)</option>
            <option value="1890">1890(Dominican Republic)</option>
            <option value="593">593(Ecuador)</option>
            <option value="20">20(Egypt)</option>
            <option value="503">503(El Salvador)</option>
            <option value="372">372(Estonia)</option>
            <option value="251">251(Ethiopia)</option>
            <option value="679">679(Fiji Islands)</option>
            <option value="358">358(Finland)</option>
            <option value="33">33(France)</option>
            <option value="594">594(French Guiana)</option>
            <option value="241">241(Gabon)</option>
            <option value="220">220(Gambia)</option>
            <option value="995">995(Georgia)</option>
            <option value="49">49(Germany)</option>
            <option value="233">233(Ghana)</option>
            <option value="350">350(Gibraltar)</option>
            <option value="30">30(Greece)</option>
            <option value="1809">1809(Grenada)</option>
            <option value="1671">1671(Guam)</option>
            <option value="502">502(Guatemala)</option>
            <option value="224">224(Guinea)</option>
            <option value="592">592(Guyana)</option>
            <option value="509">509(Haiti)</option>
            <option value="504">504(Honduras)</option>
            <option value="36">36(Hungary)</option>
            <option value="354">354(Iceland)</option>
            <option value="91">91(India)</option>
            <option value="62">62(Indonesia)</option>
            <option value="98">98(Iran)</option>
            <option value="964">964(Iraq)</option>
            <option value="353">353(Ireland)</option>
            <option value="972">972(Israel)</option>
            <option value="39">39(Italy)</option>
            <option value="1876">1876(Jamaica)</option>
            <option value="81">81(Japan)</option>
            <option value="962">962(Jordan)</option>
            <option value="855">855(Cambodia)</option>
            <option value="327">327(Kazakhstan)</option>
            <option value="254">254(Kenya)</option>
            <option value="965">965(Kuwait)</option>
            <option value="331">331(Kyrgyzstan)</option>
            <option value="856">856(Laos)</option>
            <option value="371">371(Latvia)</option>
            <option value="266">266(Lesotho)</option>
            <option value="961">961(Lebanon)</option>
            <option value="231">231(Liberia)</option>
            <option value="218">218(Libya)</option>
            <option value="423">423(Liechtenstein)</option>
            <option value="370">370(Lithuania)</option>
            <option value="352">352(Luxembourg)</option>
            <option value="261">261(Madagascar)</option>
            <option value="265">265(Malawi)</option>
            <option value="60">60(Malaysia)</option>
            <option value="960">960(Maldives)</option>
            <option value="223">223(Mali)</option>
            <option value="356">356(Malta)</option>
            <option value="230">230(Mauritius)</option>
            <option value="52">52(Mexico)</option>
            <option value="373">373(Moldova)</option>
            <option value="377">377(Monaco)</option>
            <option value="976">976(Mongolia)</option>
            <option value="1664">1664(Montserrat)</option>
            <option value="212">212(Morocco)</option>
            <option value="258">258(Mozambique)</option>
            <option value="264">264(Namibia)</option>
            <option value="674">674(Nauru)</option>
            <option value="977">977(Nepal)</option>
            <option value="31">31(Netherlands)</option>
            <option value="64">64(New Zealand)</option>
            <option value="505">505(Nicaragua)</option>
            <option value="227">227(Niger)</option>
            <option value="234">234(Nigeria)</option>
            <option value="850">850(South Korea)</option>
            <option value="47">47(Norway)</option>
            <option value="968">968(Oman)</option>
            <option value="92">92(Pakistan)</option>
            <option value="507">507(Panama)</option>
            <option value="675">675(Papua New Guinea)</option>
            <option value="595">595(Paraguay)</option>
            <option value="51">51(Peru)</option>
            <option value="63">63(Philippines)</option>
            <option value="48">48(Poland)</option>
            <option value="689">689(French Polynesia)</option>
            <option value="351">351(Portugal)</option>
            <option value="1787">1787(Puerto Rico)</option>
            <option value="974">974(Qatar)</option>
            <option value="40">40(Romania)</option>
            <option value="7">7(Russia)</option>
            <option value="1758">1758(St. Lucia)</option>
            <option value="1784">1784(St. Vincent and the Grenadines)</option>
            <option value="378">378(San Marino)</option>
            <option value="239">239(Sao Tome and Principe)</option>
            <option value="966">966(Saudi Arabia)</option>
            <option value="221">221(Senegal)</option>
            <option value="248">248(Seychelles)</option>
            <option value="232">232(Sierra Leone)</option>
            <option value="65">65(Singapore)</option>
            <option value="421">421(Slovakia)</option>
            <option value="386">386(Slovenia)</option>
            <option value="677">677(Solomon Islands)</option>
            <option value="27">27(South Africa)</option>
            <option value="252">252(Somalia)</option>
            <option value="82">82(South Korea)</option>
            <option value="249">249(Sultan)</option>
            <option value="963">963(Syria)</option>
            <option value="34">34(Spain)</option>
            <option value="94">94(Sri Lanka)</option>
            <option value="597">597(Suriname)</option>
            <option value="268">268(Swaziland)</option>
            <option value="46">46(Sweden)</option>
            <option value="41">41(Switzerland)</option>
            <option value="992">992(Tajikistan)</option>
            <option value="255">255(Tanzania)</option>
            <option value="66">66(Thailand)</option>
            <option value="228">228(Togo)</option>
            <option value="676">676(Tonga)</option>
            <option value="1809">1809(Trinidad and Tobago)</option>
            <option value="216">216(Tunisia)</option>
            <option value="90">90(Turkey)</option>
            <option value="993">993(Turkmenistan)</option>
            <option value="256">256(Uganda)</option>
            <option value="380">380(Ukraine)</option>
            <option value="971">971(United Arab Emirates)</option>
            <option value="44">44(United Kingdom)</option>
            <option value="001">001(United States)</option>
            <option value="598">598(Uruguay)</option>
            <option value="233">233(Uzbekistan)</option>
            <option value="58">58(Venezuela)</option>
            <option value="84">84(Viet Nam)</option>
            <option value="967">967(Yemen)</option>
            <option value="381">381(Serbia and Montenegro)</option>
            <option value="263">263(Zimbabwe)</option>
            <option value="260">260(Zambia)</option>
            <option value="243">243(Zaire)</option>
          </select>
          <input class="inputtt" type="text" name="user_cell" id="user_cell" placeholder="您的手机号码" />
          <div class="clear"></div>
          <p class="tips" id="user_cell_tishi" name="user_cell_tishi"></p>
        </div>

        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span> 手机验证码
          </p>
          <input class="inputtt" type="text" name="sim_code" id="sim_code" placeholder="6位数字验证码" />
          <input
            class="codebtn"
            type="button"
            name="sim_code_1"
            id="sim_code_1"
            onclick="get_sms_code()"
            value="获取验证码"
          />
          <div class="clear"></div>
          <p class="tips" id="sim_code_tishi" name="sim_code_tishi"></p>
        </div>

        <div class="inputbox" style="position: relative">
          <p class="titles">
            <span style="color:#5b0eb2;">*</span>&nbsp;交易平台
          </p>
          <select id="selCM" style="opacity: 0;">
            <option value="mt4" class="mt4">MT4</option>
            <option value="ct" class="ctrader">cTrader</option>
          </select>
          <div class="replay">
            <p id="hide-sel" class="MTactive">
              MT4
              <img src="@/assets/pullla.png" />
            </p>
            <ul id="chooseUL" class="MTCT" style>
              <li id="chooseMT" class="chooseMT">MT4</li>
              <li id="chooseCT" class="choose">cTrader</li>
            </ul>
          </div>

          <p class="tips"></p>
        </div>

        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">
            <span style="color:#5b0eb2">*</span>&nbsp;账户资金类型
          </p>
          <select id="currency_type" name="currency_type">
            <option value="USD">美元</option>
            <option value="USC" id="Quater" style="display: block;">美分</option>
          </select>
          <p class="tips"></p>
        </div>

        <div class="clear"></div>
        <div class="inputbox">
          <p class="titles">推荐人（选填）</p>
          <input type="text" name="account_ib" id="account_ib" />
          <p class="tips"></p>
        </div>

        <div class="clear"></div>
        <div class="center clearfix">
          <ul>
            <li>
              <input type="checkbox" name="type" id="agreement1" checked />
              <a class="pup" @click="$util.downloadPdf('/pdf/fx.pdf', '风险披露')">我已阅读并接受风险披露与免责声明</a>
            </li>
            <li>
              <input type="checkbox" name="type" id="agreement2" checked />
              <a
                @click="$util.downloadPdf('/pdf/CPTMarketsv2.pdf', '自动调整杠杆说明')"
                class="pup"
              >我已阅读并接受自动调整杠杆说明</a>
            </li>
            <li>
              <input type="checkbox" name="type" id="agreement3" checked />
              <a
                class="pup"
                @click="$util.downloadPdf('/pdf/malicious.pdf', 'CPT Markets流动性指南')"
              >我已阅读并接受CPT Markets流动性指南</a>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="sumbtn" onclick="one()" id="btndk">下一页</div>
      </div>
      <div class="yanzheng" v-show="active == 0 && step == 1 ">
        <div class="left" id="two" style>
          <div class="inputbox">
            <p class="titles">选择国籍</p>
            <select name="user_nation" id="user_nation">
              <option value>请选择国籍</option>
              <option value="CN" selected="selected">中国大陆</option>
              <option value="TW">台湾</option>
              <option value="HK">香港</option>
              <option value="MO">澳门</option>
              <option value="CA">Canada</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia (Hrvatska)</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="TP">East Timor</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Islas Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji Islands</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern and Antarctic Lands</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LV">Latvia</option>
              <option value="LS">Lesotho</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MK">Macedonia</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn Islands</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="YU">Serbia and Montenegro</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="KP">South Korea</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SH">St. Helena</option>
              <option value="KN">St. Kitts and Nevis</option>
              <option value="LC">St. Lucia</option>
              <option value="PM">St. Pierre and Miquelon</option>
              <option value="VC">St. Vincent and the Grenadines</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican City</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VI">Virgin Islands</option>
              <option value="VG">Virgin Islands (British)</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
            <p class="tips"></p>
          </div>

          <div class="inputbox">
            <p class="titles">中文姓名</p>
            <input type="text" name="first_name" id="first_name" />
            <p class="tips" style="display: block;">请输入中文姓名</p>
          </div>
          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">英文姓名</p>
            <input type="text" name="last_name" id="last_name" />
            <p class="tips" style="display: block;">请输入英文姓名</p>
          </div>
          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">选择证件类型</p>
            <select name="user_certificate_type" id="user_certificate_type">
              <option value>请选择证件类型</option>
              <option value="1">身份证</option>
              <option value="2">护照</option>
            </select>
            <p class="tips" style="display: none;">请选择您的证件类型</p>
          </div>
          <div class="inputbox">
            <p class="titles">证件号码</p>
            <input type="text" id="user_certificate_no" name="user_certificate_no" />
            <p class="tips" style="display: block;">请输入证件号码</p>
          </div>
          <div class="clear"></div>

          <div class="inputbox">
            <div class="perid">
              上传证件照片：
              <span>（上传图片须小于2M,格式为.jpg/png）</span>
            </div>
            <div class="kuang">
              <div class="upload" @click="$refs.idCard0.value = '',$refs.idCard0.click()">
                <div class="select">
                  <input type="file" ref="idCard0" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">证件正面（点击选择）</span>
              </div>
              <div class="upload" @click="$refs.idCard1.value ='' ,$refs.idCard1.click()">
                <div class="select">
                  <input type="file" ref="idCard1" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">证件反面（点击选择）</span>
              </div>
              <!-- <iframe frameborder="0" style="width:700px;height:200px;" src="/register/addidcard"></iframe> -->
            </div>

            <div class="clear"></div>
            <!--<div class="bankpho" style="display: none"><iframe frameborder="0" style="width:300px;height:200px;" src="/register/addpassport"></iframe>-->

            <!--</div>-->
          </div>

          <div class="clear"></div>
          <div class="perid txcenter">银行卡资料</div>

          <div class="inputbox">
            <p class="titles">持卡人姓名</p>
            <input type="text" id="bank_user_name" name="bank_user_name" placeholder="需要和真实姓名一致" />
            <p class="tips"></p>
          </div>
          <div class="inputbox">
            <p class="titles">银行卡号</p>
            <input type="text" id="bank_no" name="bank_no" />
            <p class="tips"></p>
          </div>

          <div class="clear"></div>
          <div class="inputbox">
            <p class="titles">银行名称</p>
            <input type="text" id="bank_name" name="bank_name" />
            <p class="tips"></p>
          </div>
          <div class="inputbox">
            <p class="titles">支行名称</p>
            <input type="text" id="bank_address" name="bank_address" />
            <p class="tips"></p>
          </div>
          <div class="clear"></div>

          <div class="inputbox">
            <div class="perid">
              上传银行卡照片：
              <span>（上传图片须小于2M,格式为.jpg/png/）</span>
            </div>
            <div class="kuang">
              <div class="upload" @click="$refs.bankCard.value = '',$refs.bankCard.click()">
                <div class="select">
                  <input type="file" ref="bankCard" style="position: absolute; visibility: hidden" />
                </div>
                <span class="text">银行卡照片（点击选择）</span>
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
          <div class="sumbtn" onclick="two()">提交注册</div>
        </div>

        <div id="three" style="display: none;">
          <div class="complete-regis">
            <h3>欢迎来到</h3>
            <h1>CPT Markets</h1>
            <h2>您已成功注册账号！</h2>
            <p>
              您的资料已提交成功，客服人员会在三个工作日内完成审核。
              资料审核成功后会通过邮件及短信的形式提醒您，请注意查收。(
              <a
                href="/p/login"
              >跳过</a>)
            </p>

            <!-- <div class="regis-btn">
                     <a href="/index.php?m=UcLogin&a=login" class="btn btn-primary ">完成注册</a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      step: 0
    };
  }
};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.regist {
  .banner {
    width: 100%;
    height: 224px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    .img {
      position: absolute;
      left: 50%;
      margin-left: -50%;
      height: 224px;
      background: url(/images/E-mail_02.png);
      width: 100%;
      z-index: 10;
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
          @include animation(bounceInUps, 1s, 200ms);
        }
      }
    }
  }
  .titleaccout {
    display: flex;
    align-items: center;
    width: 550px;
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
          margin-top: 20px;
          color: #5b0eb2;
          font-size: 16px;
          box-sizing: border-box;
        }
        .replay {
          width: 100%;
          position: absolute;
          top: 35px;
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
            background: #f0f0f0 url(./../../assets/MT4B.png) no-repeat center !important;
          }
          .MTCT {
            width: 80%;
            border: 1px solid #b4b4b4;
            height: 82px;
            line-height: 40px;
            margin: 0;
            display: none;
            background: #fff;
            #chooseMT {
              padding-left: 5px;
              background: #f0f0f0 url(./../../assets/MT4B.png) no-repeat center;
            }
            #chooseCT {
              padding-left: 5px;
              background: #f0f0f0 url(./../../assets/ctB.png) no-repeat center;
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
</style>