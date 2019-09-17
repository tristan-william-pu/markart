<template>
    <div class="plan">
        <header class="nav">
            <div class="center">
                <router-link to="/">
                    <img src="@/assets/logo.png" alt="">
                </router-link>
                <div class="fr">
                   <p> 
                       <img src="@/assets/moible_03.png" alt />
                        <span>&nbsp;&nbsp;&nbsp;400-1001-103</span>
                    </p>
                    <p>
                        <img src="@/assets/moible_05.png" alt />
                        <span>&nbsp;&nbsp;&nbsp;cs@cptmarkets.com</span>
                    </p>
                </div>
            </div>
        </header>
        <!-- 大图 -->
        <div class="bigImg">
            <div class="txtNav">
                <h3>
                    <img src="/images/loyalty/h6.png" alt="">
                </h3>
                <h6>活动时间：2019.7.1 -- 2019.12.31</h6>
                <p>
                    <router-link to="/regist">立即加入</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.plan{
    .nav{
        width: 100%;
        height: 68px;
        background-color: #010e21;
        .center{
            width:80%;
            margin:0 auto;
            a{
                img{
                    margin-top: 16px;
                }
            }
            >div{
                font-size: 16px;
                color: #ffffff;
                p{
                    display: inline-block;
                    line-height: 68px;
                    margin-right:20px;
                    img{
                        display:inline-block;
                        vertical-align: middle;
                    }
                    span{
                        display:inline-block
                    }
                }
            }
        }
    }
    .bigImg{
        height: 895px;
        width: 100%;
        background: url(/images/bigImgPlan.jpg) no-repeat center;
        background-size: 100% ;
        .txtNav{
            width:37%;
            margin:0 auto;
            h3{
                padding-top: 15%;
                font-size: 56px;
                color: #5b0eb2;
                font-weight: 100;
                animation: nam 2s
            }
            h6{
                font-size: 18px;
                color: #5b0eb2;
                font-weight: 100;
                margin: 32px 0 43px;
            }
            p{
                font-size: 34px;
                color: #ffffff;
                width: 192px;
                line-height: 51px;
                background-color: #5b0eb2;
                text-align: center;
                &:hover{
                }
                a{
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>