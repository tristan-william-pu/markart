<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 19:03:37
 * @ Modified by: Your name
 * @ Modified time: 2019-09-04 10:05:16
 * @ Description: CPT常见问题
 -->


<template>
  <div class="cptanq">
    <div class="img">
      <h3>
        <span>{{$t('question.title')}}</span>
      </h3>
    </div>
    <div class="proCon">
      <div class="center">
        <!--CPT cTrader是什么？-->
        <div class="what clear">
          <div class="fl leDiv">
            <p>{{$t('question.number')}}</p>
          </div>
          <div class="fl rigFl">
            <img src="@/assets/ctLogo.png" />
            <p>
              <span>CPT cTrader</span>{{$t('question.what')}}
            </p>
          </div>
        </div>
        <!--什么是CPT cTrader ID，我如何创建它?-->
        <div class="proCre">
          <div class="clear">
            <div class="fl">
              <img src="@/assets/proWhat1.png" alt />
              <p>{{$t('question.creat')}}</p>
            </div>
            <div class="fr clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p>
                {{$t('question.login')}}
                <span>{{$t('question.info')}}</span>
              </p>
            </div>
          </div>
          <div class="clear twoCre">
            <div class="fl">
              <img src="@/assets/proWhat2.png" alt />
              <p>{{$t('question.howto')}}</p>
            </div>
            <div class="fr clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p
                class="frCon"
              >{{$t('question.use')}}</p>
            </div>
          </div>
          <div class="clear">
            <div class="fl">
              <img src="@/assets/proWhat3.png" alt />
              <p>{{$t('question.order')}}</p>
            </div>
            <div class="fr clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p>
                {{$t('question.list')}}
                <span>{{$t('question.click')}}</span>
              </p>
            </div>
          </div>
        </div>
        <!--如何修改持仓？-->
        <div class="listDiv">
          <!--如何修改持仓？-->
          <div class="botOne firQue">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.hold')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.line')}}</p>
            </div>
          </div>
          <!--我如何在CPT cTrader平仓？-->
          <div>
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.ping')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.see')}}
                <br />{{$t('question.setting')}}
              </p>
            </div>
          </div>
          <!--在CPT cTrader中怎么查看我的账户历史？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.account')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.history')}}</p>
            </div>
          </div>
          <!--如何在CPT cTrader中进行挂单？-->
          <div>
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.hang')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.hangqa')}}
                <br />{{$t('question.market')}}
              </p>
            </div>
          </div>
          <!--如何在CPT cTrader修改或删除一个挂单?-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.delete')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.need')}}</p>
            </div>
          </div>
          <!--如何设置单击或双击来执行交易？-->
          <div>
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.trade')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.platform')}}
                <br />{{$t('question.forbidden')}}
                <br />{{$t('question.window')}}
              </p>
            </div>
          </div>
          <!--怎样打开新的图表？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.newChart')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.choose')}}</p>
            </div>
          </div>
          <!--我在哪里查看账户余额和交易历史?-->
          <div class="botLoo">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.where')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.balance')}}
                <br />{{$t('question.level')}}
                <br />{{$t('question.show')}}
                <br />{{$t('question.all')}}
              </p>
            </div>
          </div>
          <!--如何创建CPT cTrader交易报表?-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.report')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.export')}}</p>
            </div>
          </div>
          <!--如何在单位数和手数之间进行切换？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.swicth')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.lable')}}</p>
            </div>
          </div>
          <!--如何修改一键交易模式？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.model')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.between')}}</p>
            </div>
          </div>
          <!--怎样定制自己的图表？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.custom')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.right')}}</p>
            </div>
          </div>
          <!--什么是市场的深度？-->
          <div class="botLoo">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.marketDepth')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.depthqa')}}
                <br />&nbsp;&nbsp;•&nbsp;&nbsp;{{$t('question.wap')}}
                <br />&nbsp;&nbsp;•&nbsp;&nbsp;{{$t('question.standard')}}
                <br />&nbsp;&nbsp;•&nbsp;&nbsp;{{$t('question.price')}}
              </p>
            </div>
          </div>
          <!--为什么不能登录到CPT cTrader？-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.notLogin')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.enter')}}</p>
            </div>
          </div>
          <!--如何按照图表交易？-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.according')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.code')}}</p>
            </div>
          </div>
          <!--什么是市场情绪指标？-->
          <div class="botThr">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.target')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.targetqa')}}</p>
            </div>
          </div>
          <!--如何恢复我的CPT cTrader ID？-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.recovery')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>{{$t('question.stips')}}</p>
            </div>
          </div>
          <!--如何安装CPT cTrader桌面版本?-->
          <div>
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.install')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
               {{$t('question.webLink')}} 
                <a href="/p/ctIndex">https://www.cptmarkets.com</a>{{$t('question.desk')}}
                <br />{{$t('question.mac')}}
                <a href="/p/ctIndex">{{$t('question.clickto')}}</a>
                <br />{{$t('question.error')}}
              </p>
            </div>
          </div>
          <!--当我关闭平台后，我的EA还会继续工作吗?-->
          <div class="botOne">
            <div class="listTop clear">
              <img src="@/assets/proSjx.png" class="fl" />
              <p class="fl">{{$t('question.ea')}}</p>
            </div>
            <div class="listBot">
              <img src="@/assets/sTop.jpg" />
              <p>
                {{$t('question.app')}}
                <br />{{$t('question.booking')}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/styles/mixin.scss";
.cptanq {
  width: 100%;
  .img {
    width: 100%;
    background: url("./../../../public/images/proBigImg.png") no-repeat center;
    background-size: 100%;
    font-size: 60px;
    color: #fff;
    text-align: center;
    font-family: FZLTZHK;
    padding: 10% 0;
    h3 {
      font-size: 1.17em;
      font-weight: bold;
      span {
        font-family: MONBOLD;
      }
    }
  }
  .proCon {
    .center {
      width: 1207px;
      margin: 135px auto 215px;
      .what {
        @include clearfix();
        @include flex();
        .leDiv {
          width: 40%;
          margin: 0 3% 0 9%;
          background: url("./../../assets/proWhat.png") no-repeat center;
          background-size: 100%;
          p {
            font-size: 15px;
            line-height: 28px;
            color: #535353;
            font-family: LTH;
            width: 82%;
            margin: 0 0 0 5%;
            padding: 7% 0;
          }
        }
        .rigFl {
          width: 30%;
          margin: 3% 0 0 5%;
          img {
            vertical-align: middle;
          }
          p {
            font-family: FZLTZHK;
            font-size: 40px;
            color: #231815;
            text-decoration: underline;
            padding-bottom: 3px;
            margin-top: 38px;
            font-weight: 600;
          }
        }
      }
      .proCre {
        margin: 90px auto 120px;
        > .clear {
          @include flex();
          > .fl {
            width: 30%;
            text-align: center;
            img {
              margin: 40px auto 38px;
              vertical-align: middle;
            }
            p {
              font-family: Light;
              font-size: 20px;
              color: #5a0db2;
              text-align: center;
            }
          }
          > .fr {
            width: 64%;
            img {
              margin: 13% 0;
              vertical-align: middle;
            }
            p {
              font-size: 18px;
              color: #535353;
              font-family: Light;
              line-height: 36px;
              margin-left: 8%;
              span {
                display: block;
                font-size: 14px;
                color: #737373;
                line-height: 28px;
                margin-top: 8px;
              }
            }
          }
        }
      }
      .listDiv {
        > div {
          width: 98%;
          margin: 30px auto 0;
          .listTop {
            @include flex(flex-start, flex-start);
            img {
              margin: 0.7% 1% 0 1%;
            }
            p {
              font-size: 24px;
              color: #5a0db2;
            }
          }
          .listBot {
            width: 100%;
            font-size: 17px;
            color: #535353;
            font-family: Light;
            line-height: 34px;
            position: relative;
            img {
              top: -15%;
              left: 5%;
              z-index: 5;
              margin-left: 40px;
            }
            p {
              margin: 2% auto 0;
              padding: 28px 27px;
              background-color: #fdfcfa;
              border: 1px solid #f5f2eb;
              margin-top: -1px;
            }
          }
        }
      }
    }
  }
}
</style>