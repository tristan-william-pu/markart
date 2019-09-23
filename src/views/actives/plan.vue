<template>
    <div class="plan">
        <header class="nav">
            <div class="center">
                <router-link to="/">
                    <img src="/images/loyalty/logo.png" alt="">
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
                <h6>{{list.time}}</h6>
                <p>
                    <router-link to="/regist">{{list.johnNow}}</router-link>
                </p>
            </div>
        </div>

        <!-- pc 奖品 -->
        <div class="gits">
            <!-- 立即加入 -->
            <div class="join clearfix">
                <div class="gitCenter">
                    <div class="gitNow fl">
                        <p>
                            <router-link to="/regist">{{list.johnNow}}</router-link>
                        </p>
                    </div>
                    <div class="gitImg fl">
                        <img src="@/assets/iconX.png" alt/>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="wins fl" >
                        <p :class="{ marginP: locale=='en' }">{{list.gits}}</p>
                    </div>
                </div>
            </div>
            <div class="clearfix gitMain">
                <div class="gitMainCenter">
                    <div class="clearfix gitNum fl" :class="{ gitfixed:isBool }">
                        <p class="tit">{{list.plan}}</p>
                        <img src="/images/loyalty/tiao.png" alt/>
                        <p class="Standard">
                            <span>{{times}}</span>
                            {{list.unit}}
                        </p>
                        <p class="gitGet">
                            {{list.active}}
                        </p>
                        
                        <h6> {{list.obj}}</h6>
                        <p class="gitGet">
                            {{list.IB}}
                        </p>
                        <h6>
                            {{list.mail}}
                        </h6>
                        <p class="gitGet">
                            {{list.send}}
                            <a href="">cs@cptmarkets.com</a>
                            {{list.name}}
                        </p>
                    </div>
                    <div class="gitContent fl">
                        <div v-for="(item,key) in imgList" :key="key">
                            <div class="gitdot fl">
                                <p class="dotTop"></p>
                                <p v-for="(item,key) in dot" :key="key" class="litteDOt"></p>
                            </div>
                            <div class="rigDiv fl">
                                <p>{{item[locale].title}}</p>
                                <img class="tiao" src="/images/loyalty/tiao.png" alt/>
                                <img :class="item.class2" src="/images/loyalty/1bg.png" alt/>
                                <img :class="item.class1" :src="item.img" alt/>
                                <img class="star" src="/images/loyalty/bot.png" alt/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 活动规则 -->
            <div class="clearfix gitruler">
                <div class="rulerCenter">
                    <h5>{{list.ruler}}</h5>
                    <p>{{list.rules1}}</p>
                    <p>{{list.rules2}}</p>
                    <p>{{list.rules3}}</p>
                    <p>{{list.rules4}}</p>
                    <p>{{list.rules5}}</p>
                    <p>{{list.rules6}}</p>
                    <p>{{list.rules7}}</p>
                    <p>{{list.rules8}}</p>
                    <p>{{list.rules9}}</p>
                    <p>{{list.rules10}}</p>
                    <p>{{list.rules11}}</p>
                </div>
            </div>
            <footer class="gitFooter">
                <div class="gitFtCenter">
                    <p class="gitLine"></p>
                    <p class="gitCpt">{{list.all}}</p>
                    <p>Copyright © 2019 CPTMarkets All Rights Reserved</p>
                </div>
            </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lang:require('./plan'),
                dot:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
                isBool:false,
                number:0,
                imgList:[
                    {   img:'/images/loyalty/1.png',
                        cn:{
                            title:'宾利百万跑车',
                        },
                        en:{
                            title:'Bentley Luxury Sports Car',
                        },
                        tc:{
                            title:'賓利百萬跑車',
                        },
                            
                        class1:"car",class2:"bg"
                    },
                    { img:'/images/loyalty/2.png',
                        cn:{
                            title:'保时捷豪华跑车',
                        },
                        en:{
                            title:'Porsche luxury sports car',
                        },
                        tc:{
                            title:'保時捷豪華跑車',
                        },
                        class1:"car",class2:""
                    },
                    { img:'/images/loyalty/3.png',
                        cn:{
                            title:'欧洲游学',
                        },
                        en:{
                            title:'European travel',
                        },
                        tc:{
                            title:'歐洲遊學',
                        },
                        class1:"visit",class2:"visitBg"
                    },
                    { img:'/images/loyalty/4.png',
                        cn:{
                            title:'江诗丹顿传承系列腕表',
                        },
                        en:{
                            title:'Vacheron vacheron succession series wrist watch',
                        },
                        tc:{
                            title:'江詩丹頓傳承系列腕表',
                        },
                        class1:"watch",class2:"watchBg" 
                    },
                    { img:'/images/loyalty/5.png',
                        cn:{
                            title:'豪华房车',
                        },
                        en:{
                            title:'Luxury saloon car',
                        },
                        tc:{
                            title:'豪華房車',
                        },
                        class1:"room",class2:"roomBg" 
                    },
                    { img:'/images/loyalty/6.png',
                        cn:{
                            title:'卡地亚 手镯',
                        },
                        en:{
                            title:'Cartier bracelet',
                        },
                        tc:{
                            title:'卡地亞 手輜',
                        },
                        class1:"bracelet",class2:"braceletBg" 
                    },
                    { img:'/images/loyalty/7.png',
                        cn:{
                            title:'卡地亚 项链',
                        },
                        en:{
                            title:'Cartier necklace',
                        },
                        tc:{
                            title:'卡地亞 項鏈',
                        },
                        class1:"necklace",class2:"necklaceBg" 
                    },
                    { img:'/images/loyalty/8.png',
                        title:'Apple四件套', 
                        cn:{
                            title:'Apple四件套',
                        },
                        en:{
                            title:'Apple 4 times',
                        },
                        tc:{
                            title:'Apple四件套',
                        },
                        class1:"apple",class2:"appleBg"
                    },
                    { img:'/images/loyalty/9.png',
                        cn:{
                            title:'TREK山地越野自行车',
                        },
                        en:{
                            title:'TREK mountain bike',
                        },
                        tc:{
                            title:'TREK山地越野自行車',
                        },
                        class1:"bike",class2:"bikeBg"
                    },
                    { img:'/images/loyalty/10.png',
                        cn:{
                            title:'LV高端行李箱',
                        },
                        en:{
                            title:'LV high-end luggage',
                        },
                        tc:{
                            title:'LV高端行李箱',
                        },
                        class1:"LV",class2:"LVBg"
                    },
                    { img:'/images/loyalty/11.png',
                        cn:{
                            title:'索尼（SONY）家庭影院',
                        },
                        en:{
                            title:'SONY home theater',
                        },
                        tc:{
                            title:'索尼（SONY）家庭影院',
                        },
                        class1:"SONY",class2:"SONYBg"
                    },
                    { img:'/images/loyalty/12.png',
                        cn:{
                            title:'Apple watch 4',
                        },
                        en:{
                            title:'Apple watch 4',
                        },
                        tc:{
                            title:'Apple watch 4',
                        },
                        class1:"AppleWatch",class2:"AppleWatchBg"
                    },
                    { img:'/images/loyalty/13.png',
                        cn:{
                            title:'Onecup 胶囊咖啡机',
                        },
                        en:{
                            title:'Onecup capsule coffee machine',
                        },
                        tc:{
                            title:'Onecup 膠囊咖啡機',
                        },
                        class1:"OneCup",class2:"OneCupBg"
                    },
                    { img:'/images/loyalty/14.png',
                        cn:{
                            title:'NBA 球衣',
                        },
                        en:{
                            title:'NBA jerseys',
                        },
                        tc:{
                            title:'NBA 球衣',
                        },
                        class1:"NBA",class2:"NBABg"
                    },
                ],
                price:['500000','250000','150000','100000','80000','50000','30000','10000','8500','5000','3000','1000','500','200'],
            }
        },
        computed:{
            times(){
                let data = this.price[this.number];
                return data;
            },
            locale(){
                return this.$i18n.locale
            },
            list(){
                let data = this.lang[0][this.locale];
                return data;
            }
        },
        mounted(){
            document.addEventListener('scroll', this.handleScroll, false); 
        },
        methods:{
             handleScroll: function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log( scrollTop )
                if(scrollTop> 1140 && scrollTop < 8240){
                    this.isBool = true;
                    if( scrollTop >  1140  && scrollTop < 1680){
                        this.number = 0
                    }else if( scrollTop >  1680  && scrollTop < 2200){
                        this.number = 1
                    }else if( scrollTop >  2200 && scrollTop < 2760){
                        this.number = 2
                    }else if( scrollTop >  2760 && scrollTop < 3280){
                        this.number = 3
                    }else if( scrollTop >  3280 && scrollTop < 3840){
                        this.number = 4
                    }else if( scrollTop >  3840 && scrollTop < 4360){
                        this.number = 5
                    }else if( scrollTop >  4360 && scrollTop < 4920){
                        this.number = 6
                    }else if( scrollTop >  4920 && scrollTop < 5440){
                        this.number = 7
                    }else if( scrollTop >  5440 && scrollTop < 6000){
                        this.number = 8
                    }else if( scrollTop >  6000 && scrollTop < 6520){
                        this.number = 9
                    }else if( scrollTop >  6520 && scrollTop < 7080){
                        this.number = 10
                    }else if( scrollTop >  7080 && scrollTop < 7600){
                        this.number = 11
                    }else if( scrollTop >  7600 && scrollTop < 8160){
                        this.number = 12
                    }else if( scrollTop >  8160 ){
                        this.number = 13
                    }
                        
                    
                }else{
                    this.isBool = false;
                }
            }
        },
        
        destroyed(){
            document.removeEventListener('scroll', this.handleScroll,false);//监听页面滚动事件
        },
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
    .gits{
        height:auto;
        background:#fff;
        .join{
            .gitCenter{
                width:87%;
                margin:0 auto;
                .gitNow{
                    width:310px;
                    p{
                        width: 190px;
                        line-height: 52px;
                        font-size: 34px;
                        color: #fff;
                        text-align: center;
                        background-color: #5b0eb2;
                        cursor: default;
                        a{
                            color: #fff;
                            width: 190px;
                            line-height: 52px;
                            cursor: pointer;
                        }
                    }
                }
                .gitImg{
                    width:70px;
                    img{
                        margin-bottom: 24px;
                    }
                    p{
                        width: 8px;
                        height: 8px;
                        background-color: #7028bd;
                        border-radius: 50%;
                        margin: 8px auto 0;
                    }
                }
                .wins{
                    p{
                        font-size: 50px;
                        line-height: 62px;
                        color: #5b0eb2;
                        margin-left: 88px;
                    }
                  
                }
            }
        }
        .gitMain{
            .gitMainCenter{
                width:87%;
                margin:0 auto;
                .gitNum{
                    width:310px;
                    >p.tit{
                        font-size: 24px;
                        color: #5b0eb2;
                        margin: 0px 0 33px;
                    }
                    >img{
                        display:block;
                    }
                    .Standard{
                        line-height: 14px;
                        font-size: 14px;
                        color: #464646;
                        span{
                            line-height: 84px;
                            font-size: 46px;
                            color: #464646;
                            margin-right: 5px;
                        }
                    }
                    .gitGet{
                        font-size: 16px;
                        color: #1a1a1a;
                        margin: 28px 0 45px;
                        line-height: 26px;
                        width: 97%;
                    }
                    h6{
                        font-size: 50px;
                        color: #464646;
                    }

                }
                .gitContent{
                    >div{
                        height: 540px;
                    }
                    .gitdot{
                        width:70px;
                        .dotTop{
                            width: 42px;
                            height: 42px;
                            background-color: #7c3ec1;
                            border-radius: 50%;
                            margin: 26px auto;
                        }
                        .litteDOt{
                            width: 8px;
                            height: 8px;
                            background-color: #7c3ec1;
                            margin: 8px auto 0;
                            border-radius: 50%;
                        }
                    }
                    .rigDiv{
                        height: 515px;
                        width: 562px;
                        margin-left: 88px;
                        position: relative;
                        >p{
                            font-size: 42px;
                            color: #464646;
                            text-align: left;
                            line-height: 62px;
                        }
                        img{
                            display: block;
                        }
                        .tiao{
                            margin-top: 9px;
                        }
                        .bg{
                            position: absolute;
                            z-index: 1;
                            left: 57%;
                            top: -17%;
                        }
                        .car{
                            position: absolute;
                            z-index: 2;
                            left: 5%;
                            top: 39%;
                            width: 101%;
                        }
                        .visit{
                            position: relative;
                            top: 8%;
                            z-index: 2;
                            width: 78%;
                        }
                        .visitBg{
                            position: absolute;
                            z-index: 1;
                            left: 57%;
                            top: 0%;
                        }
                        .watch{
                                position: relative;
                                top: 8%;
                                left: 34%;
                                z-index: 2;
                                width: 34%;
                        }
                        .watchBg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .room{
                            position: relative;
                            top: 9%;
                            left: 13%;
                            width: 77%;
                            z-index: 2;
                        }
                        .roomBg{
                            position: absolute;
                            top: 12%;
                            left: 68%;
                            z-index: 1;
                        }
                        .bracelet{
                            position: relative;
                            top: 14%;
                            left: 34%;
                            z-index: 2;
                            width: 40%;
                        }
                        .braceletBg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .necklace{
                            position: relative;
                            top: 8%;
                            left: 40%;
                            z-index: 2;
                            width: 22%;
                        }
                        .necklaceBg{
                            position: absolute;
                            top: 12%;
                            left: 68%;
                            z-index: 1;
                        }
                        .apple{
                            position: relative;
                            top: 16%;
                            z-index: 2;
                            left: 11%;
                            width: 52%;
                        }
                        .appleBg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .bike{
                            position: relative;
                            top: 20%;
                            z-index: 2;
                            left: 11%;
                            width: 66%;
                        }
                        .bikeBg{
                            position: absolute;
                            top: 12%;
                            left: 68%;
                            z-index: 1;
                        }
                        .LV{
                            position: relative;
                            top: 8%;
                            z-index: 2;
                            left: 34%;
                            width: 33%;
                        }
                        .LVBg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .SONY{
                            position: relative;
                            top: 17%;
                            z-index: 2;
                            left: 19%;
                            width: 61%;
                        }
                        .SONYBg{
                            position: absolute;
                            top: 12%;
                            left: 68%;
                            z-index: 1;
                        }
                        .AppleWatch{
                            position: relative;
                            top: 10%;
                            z-index: 2;
                            width: 37%;
                            left: 34%;
                        }
                        .AppleWatchBg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .OneCup{
                            position: relative;
                            top: 12%;
                            z-index: 2;
                            left: 34%;
                            width: 31%;
                        }
                        .OneCupBg{
                            position: absolute;
                            top: 12%;
                            left: 68%;
                            z-index: 1;
                        }
                        .NBA{
                            position: relative;
                            top: 10%;
                            z-index: 2;
                            left: 34%;
                            width: 22%;
                        }
                        .NBABg{
                            position: absolute;
                            top: 12%;
                            left: -11%;
                            z-index: 1;
                        }
                        .star{
                            position: absolute;
                            top: 100%;
                        }
                    }
                }
            }
        }
        
    }
    .gitruler{
            width: 100%;
            background-color: #f6f6f6;
            margin-top: 151px;
            .rulerCenter{
                width:85%;
                margin:0 auto;
                h5{
                    font-size: 50px;
                    color: #464646;
                    text-align: center;
                    padding: 84px 0 70px;
                    font-weight: 100;
                }
                p{
                    margin-top: 23px;
                    line-height: 35px;
                    font-size: 24px;
                    color: #464646;
                    &:last-child{
                        padding-bottom: 200px;
                    }
                }
            }
        }
    .gitFooter{
        height: 159px;
        width: 100%;
        background-color: #313131;
        .gitFtCenter{
            width: 60%;
            margin: 0 auto;
            color: #b4b4b4
        }
        .gitLine{
            width: 100%;
            height: 71px;
            border-bottom: 1px solid #b4b4b4;
            margin-bottom: 15px;
        }
        .gitCpt{
            font-size: 13px;
            line-height: 27px;
        }
        p{
            &:last-child{
                font-size: 10px;
                line-height: 25px;
            }
        }
    }
}
.gitfixed{
    position:fixed;
    top:0;
    // left:0;
}
.gitfixed+.gitContent{
    margin-left:310px;
}
.marginP{
    margin-left:20px !important;
}
</style>