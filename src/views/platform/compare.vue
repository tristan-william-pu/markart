<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 14:02:42
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-07 14:09:23
 * @Description: 软件对比
 -->

<template>
  <div class="compare">
    <div class="img">
      <div class="center">
        <h6>{{$t('compare.software')}}</h6>
        <p>
          <span>Meta Trader 4</span>
          <span class="cen">Meta Trader 5</span>
          <span>CPT cTrader</span>
        </p>
      </div>
    </div>
    <div class="conTab">
      <div class="center">
        <!--MT4-->
        <div class="mt4">
          <h3>Meta Trader 4</h3>
          <div class="mtCon clear">
            <div class="fl">
              <p class="title">{{$t('compare.ideal')}}</p>
              <ul>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.simple')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.built')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.interactive')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.reliable')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.spreed')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.currency')}}</p>
                </li>
              </ul>
              <p class="btn">
                <a
                  href="https://download.mql5.com/cdn/web/10957/mt4/cptmarkets4setup.exe"
                  download="cptmarkets-MT4"
                >{{$t('compare.dlmt')}}</a>
              </p>
            </div>
            <div class="fr">
              <img src="images/tableMT4.png" alt />
            </div>
          </div>
        </div>
        <!--CPT cTrader-->
        <div class="ctrader">
          <h3>CPT cTrader</h3>
          <div class="mtCon clear">
            <div class="fl">
              <p class="title">CPT cTrader - {{$t('compare.convenient')}}</p>
              <ul>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.second')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.leading')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.server')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.cloud')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.chart')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">FIX API</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">LD5 IBX Equinix {{$t('compare.data')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.multiple')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.extend')}}</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">{{$t('compare.realTime')}}</p>
                </li>
              </ul>
              <p class="btn">
                <a
                  href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe"
                  download="cptmarkets-cTrader"
                >{{$t('compare.dlct')}}</a>
              </p>
            </div>
            <div class="fr">
              <img src="images/tableCTrader.png" />
            </div>
          </div>
        </div>
        <!--性能对比-->
        <div class="contrast">
          <h4>{{$t('compare.comparison')}}</h4>
          <p>{{$t('compare.difference')}}</p>
          <div class="tab clear pc">
            <ul class="firUl">
              <li class="first">{{$t('compare.execution')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.web')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.and')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.hedging')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.secondary')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.volume')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.unit')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.signal')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.automatic')}}</li>
              <li class="ctLine"></li>
              <li class="pcLi">{{$t('compare.full')}}</li>
              <li class="ctLine LipcBot"></li>
              <li>{{$t('compare.one')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.creat')}}</li>
              <li class="ctLine liauBot"></li>
              <li>{{$t('compare.reverse')}}</li>
              <li class="ctLine LipcBot"></li>
              <li>{{$t('compare.double')}}</li>
              <li class="ctLine liauBot"></li>
              <li>{{$t('compare.add')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.close')}}</li>
              <li class="ctLine"></li>
              <li class="firLin">{{$t('compare.timet')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.offset')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.filled')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.contract')}}</li>
              <li class="ctLine"></li>
              <li class="dcha">{{$t('compare.spread')}}</li>
              <li class="ctLine"></li>
              <li class="addc">{{$t('compare.plus')}}</li>
              <li class="ctLine"></li>
              <li class="gang">{{$t('compare.lever')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.margin')}}</li>
            </ul>
            <ul class="border">
              <li class="title">
                Meta Trader
                <span>4</span>
              </li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="leZe">{{$t('compare.nine')}}</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li>
                {{$t('compare.floating')}}
                <br />
                {{$t('compare.fixed')}}
              </li>
              <li class="ctLine"></li>
              <li>{{$t('compare.commission')}}</li>
              <li class="ctLine"></li>
              <li>
                {{$t('compare.forex')}}
                <br />
                {{$t('compare.metal')}}
                <br />
                {{$t('compare.oil')}}
                <br />
                {{$t('compare.crypto')}}
              </li>
              <li class="ctLine"></li>
              <li class="bot">100% / 20%</li>
            </ul>
            <ul class="border">
              <li class="title">
                Meta Trader
                <span>5</span>
              </li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="leZe">{{$t('compare.twenty')}}</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="flo">{{$t('compare.floa')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.commission')}}</li>
              <li class="ctLine"></li>
              <li>
                {{$t('compare.huobi')}}
                <br />
                {{$t('compare.metal')}}
                <br />
                {{$t('compare.oil')}}
                <br />
                {{$t('compare.crypto')}}
              </li>
              <li class="ctLine"></li>
              <li class="bot">100% / 20%</li>
            </ul>
            <ul class="border qdui">
              <li class="title">
                <span>CPT</span> cTrader
              </li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="leZe">{{$t('compare.six')}}</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="flo">{{$t('compare.floatfrom')}}</li>
              <li class="ctLine"></li>
              <li>{{$t('compare.commission')}}</li>
              <li class="ctLine"></li>
              <li class="duih">
                {{$t('compare.pairs')}}
                <br />
                {{$t('compare.metalup')}}
              </li>
              <li class="ctLine"></li>
              <li class="bot">100% / 20%</li>
            </ul>
          </div>
          <table class="mb">
            <tbody>
              <tr>
                <th></th>
                <th>
                  Meta Trader
                  <span>4</span>
                </th>
                <th>
                  Meta Trader
                  <span>5</span>
                </th>
                <th>
                  <span>CPT</span> cTrader
                </th>
              </tr>
              <tr>
                <td>市场执行</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>网页交易（MACOS兼容）</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>IOS和Android APPS</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>套期保值</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>二级市场深度</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>交易量以手数计算</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>数量计算单位</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>信号交易</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>自动交易</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>完整尺寸跳动点图</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>一键交易</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>自动创建和共享图表截图</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>一键反向交易</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>一键建立双倍头寸</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>加仓</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>一键平掉所有仓位</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>时间表格</td>
                <td>9个时间表格</td>
                <td>21个时间表格</td>
                <td>26个时间表格</td>
              </tr>
              <tr>
                <td>可自定义平台时间偏移</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>部分填充</td>
                <td class="cuo">×</td>
                <td class="cuo">×</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>价差合约交易</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
                <td class="dui">√</td>
              </tr>
              <tr>
                <td>点差</td>
                <td>
                  浮动，从0.4点起
                  <br />固定，2点起
                </td>
                <td>浮动，从0.2点起</td>
                <td>浮动，从0点起</td>
              </tr>
              <tr>
                <td>佣金 /点差加码</td>
                <td>无佣金，无加点</td>
                <td>无佣金，无加点</td>
                <td>无佣金，无加点</td>
              </tr>
              <tr>
                <td>杠杆</td>
                <td>
                  外汇&nbsp;&nbsp;1：无限
                  <br />贵金属&nbsp;&nbsp;1：无限
                  <br />原油指数&nbsp;&nbsp;1：100
                  <br />加密货币对&nbsp;&nbsp;1：10
                </td>
                <td>
                  货币&nbsp;&nbsp;1：无限
                  <br />贵金属&nbsp;&nbsp;1：无限
                  <br />原油指数&nbsp;&nbsp;1：100
                  <br />加密货币对&nbsp;&nbsp;1：10
                </td>
                <td>
                  货币对高达1:1000
                  <br />贵金属高达1:1000
                </td>
              </tr>
              <tr>
                <td>追加保证金/强制止损水平</td>
                <td>100% / 20%</td>
                <td>100% / 20%</td>
                <td>100% / 20%</td>
              </tr>
            </tbody>
          </table>
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
.compare {
  > .img {
    width: 100%;
    background: url("./../../../public/images/tableBigImg.png") no-repeat center;
    background-size: 100%;
    box-sizing: border-box;
    .center {
      padding: 8% 0 8%;
      width: 90%;
      margin: 0 auto;
      color: #ffffff;
      h6 {
        font-family: montserratse;
        text-align: center;
        font-size: 60px;
        font-weight: 100;
      }
      p {
        width: 335px;
        margin: 40px auto 0;
        font-family: LTH;
        font-size: 14px;
        .cen {
          margin: 0 23px;
        }
      }
    }
  }
  .conTab {
    .pc {
      display: block;
    }
    .mb {
      display: none;
    }
    .center {
      max-width: 1207px;
      margin: 134px auto 229px;
      width: 100%;
      .mt4,
      .ctrader {
        box-shadow: 5px 5px 5px #fbfbfb, 5px -5px 5px #fbfbfb,
          -5px 5px 5px #fbfbfb, -5px -5px 5px #fbfbfb;
        h3 {
          font-size: 40px;
          color: #000000;
          font-family: montserratse;
          text-align: center;
          padding-top: 62px;
          font-weight: 600;
        }
        .mtCon {
          margin-top: 25px;
          @include flex();
          > .fl {
            width: 45%;
            margin: 62px 0 0 5%;
            p.title {
              color: #0e0e0c;
              font-size: 16px;
              font-family: montserratse;
              font-weight: bold;
              line-height: 36px;
            }
            ul {
              margin: 30px 0 0 23px;
              li {
                margin-top: 27px;
                @include clearfix();
                @include flex(flex-start);
                img {
                  margin-top: 0.8%;
                }
                p {
                  margin-left: 28px;
                  font-size: 18px;
                  color: #313131;
                  font-family: Light !important;
                }
              }
            }
            .btn {
              width: 150px;
              line-height: 40px;
              background-color: #fff;
              text-align: center;
              border-radius: 10px;
              margin: 55px 0 62px 23px;
              border: 1px solid #000;
              @include transition();
              user-select: none;
              a {
                font-size: 18px;
                font-family: montserratse;
                color: #000;
                @include transition();
              }
              &:hover {
                border: 1px solid #590bb1;
                background-color: #590bb1;
                a {
                  color: #fff;
                }
              }
            }
          }
          > .fr {
            width: 45%;
            margin: 0 5% 0 0;
            img {
              width: 100%;
            }
          }
        }
      }
      .ctrader {
        margin: 10% auto;
        .btn {
          width: 226px !important;
        }
      }
      .contrast {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h4 {
          font-size: 40px;
          color: #000000;
          font-family: montserratse;
          text-align: center;
        }
        > p {
          font-size: 18px;
          color: #000000;
          margin: 19px auto 66px;
          text-align: center;
          font-family: Light;
        }
        .tab {
          width: 100%;
          @include flex(center, unset);
          > ul {
            width: 23%;
            margin: 0 1%;
            li {
              font-size: 18px;
              color: #231815;
              font-family: LTH;
              margin-left: 9px;
              line-height: 30px;
            }
            li.first {
              margin-top: 181px;
            }
            li.ctLine {
              width: 90%;
              height: 2px;
              background-color: #ededed;
              margin: 24px auto 20px;
            }
            li.LipcBot {
              margin: 19px auto 20px;
            }
            li.flo {
              line-height: 67px;
            }
            li.dcha {
              line-height: 55px;
            }
            li.gang {
              line-height: 118px;
            }
            li.duih {
              padding: 30px 0;
            }
            li.cuoLi {
              font-size: 27px;
              color: #939393;
              font-weight: 900;
            }
          }
          .border {
            box-shadow: 5px 5px 5px #f4f4f4, 5px -5px 5px #f4f4f4,
              -5px 5px 5px #f4f4f4, -5px -5px 5px #f4f4f4;
            li {
              text-align: center;
            }
            .title {
              text-align: center;
              font-family: montserratse;
              font-size: 24px;
              color: #231815;
              margin: 72px 0;
              line-height: 30px;
              font-weight: 600;
              span {
                color: #590bb1;
              }
            }
            .duiLi {
              font-size: 20px;
              color: #590bb1;
              font-weight: 900;
            }
          }
        }
        > table {
          border-collapse: collapse;
          text-align: center;
          font-size: 1rem;
          color: #231815;
          font-family: LTH;
          tbody {
            tr {
              th {
                font-family: SEMIBOLD;
                font-size: 1.2em;
                color: #231815;
                padding: 0.5rem;
                span {
                  color: #590bb1;
                }
              }
              td {
                border: 1px solid #ededed;
                font-size: 1.2em;
                color: #231815;
                line-height: 2rem;
                padding: 0.5rem;
              }
              .dui {
                color: #732cc4;
                font-weight: 900;
              }
            }
          }
        }
      }
    }
  }
}
</style>