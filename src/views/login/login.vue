<!--
 * @Autor: Diskfan
 * @Date: 2019-09-09 16:27:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-09 16:27:23
 * @Description: 
 -->
<template>
    <div class="login">
        <div class="warp clearfix">
            <p class="lefftit pc">
                {{$t('login.welcome')}}<br/>
                {{$t('login.world')}}
            </p>
            <div class="loginBox">
                <div class="headertit clearfix">
                    <p>{{$t('login.account')}}</p>
                    <p>×</p>
                </div>
                <div class="inputbox clearfix">
                    <input type="text" :placeholder="$t('login.email')">
                    <img src="@/assets/login_07.png" alt/>
                </div>
                <div class="inputbox clearfix">
                    <input type="passward" :placeholder="$t('login.password')">
                    <img src="@/assets/login_10.png" alt/>
                </div>
                <div class="inputbox code clearfix">
                    <input type="text"  :placeholder="$t('login.code')">
                    <img src="@/assets/login_13.png" alt/>
                </div>
                <div class="btnfooter">
                    <div class="purbtn">{{$t('login.login')}}</div>
                        <p>
                            <a href="#">{{$t('login.forget')}}</a> 
                            <br/>
                            <a href="#">{{$t('login.open')}}</a> 
                        </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
             
            }
        }
    }
</script>

<style lang="scss">
.login{
    width: 100%;
    height: 100vh;
    background-image: url(../../../public/images/loginbg_02.jpg);
    background-size: cover;
    .warp {
        position: relative;
        
    }
    .lefftit{
        color: #fff;
        font-size: 40px;
        font-family: montserrat;
        width: 700px;
        text-align: left;
        float: left;
        margin-top: 200px;
        line-height: 60px;
    }
    .loginBox{
        position: absolute;
        width: 470px;
        height: auto;
        border-radius: 5px;
        background: #fff;
        top: 150px;
        right: 3%;
        box-sizing: border-box;
        padding: 30px;
        padding-bottom: 40px;
        .headertit{
            margin-bottom: 30px;
            p{margin: 0 0 10px;}
            & p:first-child{
                float:left;
                font-size: 20px;
                font-family: montserratse;
                line-height: 40px;
            }
            & p:last-child{
                font-size: 40px;
                float: right;
            }

        }
        .inputbox{
            width: 100%;
            height: 50px;
            line-height: 50px;
            background: #f0eef0;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 30px;
            padding-left: 20px;
        }
        input{
            width: 70%;
            float: left;
            background: none;
            border: none;
            height: 100%;
            font-size: 16px;
            opacity: .7;
        }
        img{
            float: right;
            width: 20px;
            margin-right: 10px;
            margin-top: 15px;
        }
        .code img{
            float: right;
            width: 50px;
            margin-right: 10px;
            margin-top: 15px;
        }
        .btnfooter{
            .purbtn {
                width: 160px;
                text-align: center;
                color: #fff;
                font-size: 18px;
                font-family: montserratse;
                height: 50px;
                line-height: 50px;
                background: #4b04a7;
                border-radius: 5px;
                float: left;
            }
            p{
                float: left;
                width: auto;
                font-size: 12px;
                margin-left: 20px;
                line-height: 20px;
                color: #999999;
                margin-top: 5px;
            }
        }
    }
    
}

</style>