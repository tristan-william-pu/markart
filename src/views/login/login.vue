<template>
    <div class="login">
        <div class="warp clearfix">
            <p class="lefftit">
                欢迎来到CPT Markets 交易<br/>
                让世界近在咫尺
            </p>
            <div class="loginBox">
                <div class="header clearfix">
                    <p>登录账户</p>
                    <p>×</p>
                </div>
                <div class="inputbox clearfix">
                    <input type="text" placeholder="邮箱/MT4">
                    <img src="@/assets/login_07.png" alt/>
                </div>
                <div class="inputbox clearfix">
                    <input type="passward" placeholder="密码">
                    <img src="@/assets/login_10.png" alt/>
                </div>
                <div class="inputbox code clearfix">
                    <input type="text"  placeholder="验证码">
                    <img src="@/assets/login_13.png" alt/>
                </div>
                <div class="btnfooter">
                    <div class="purbtn">登录</div>
                        <p>
                            <a href="#">忘记密码</a> 
                            <br/>
                            <a href="#">没有账户? 点击开户</a> 
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
        },
        created:function () {
            this.$emit('footer', false);
        }
    }
</script>

<style lang="scss" scoped>
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
        right: 0px;
        box-sizing: border-box;
        padding: 30px;
        padding-bottom: 40px;
        .header{
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
            width: 80%;
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