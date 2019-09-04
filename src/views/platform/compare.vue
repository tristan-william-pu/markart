<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 19:42:53
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 21:44:14
 * @ Description: 软件对比
 -->

<template>
  <div class="compare">
    <div class="img">
      <div class="center">
        <h6>交易软件对比</h6>
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
              <p class="title">MT4 - 非常适合那些刚刚开始在线交易以及更有经验的交易者，寻找操作简约而配置多元化的平台。</p>
              <ul>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">简单明了的导航界面</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">内置的智能交易和自定义指标商店</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">交互式可定制图表</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">可靠的虚拟专用服务器服务</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">差价合约交易</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">加密货币交易</p>
                </li>
              </ul>
              <p class="btn">
                <a
                  href="https://download.mql5.com/cdn/web/10957/mt4/cptmarkets4setup.exe"
                  download="cptmarkets-MT4"
                >下载MT4</a>
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
              <p class="title">CPT cTrader - 方便的功能多元的交易环境，允许更多的灵活性执行交易; 高度可定制平台，可以满足任何交易者的需求。</p>
              <ul>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">完整市场深度的二级报价</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">市场领先的点差以及低佣金</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">服务器移动止损</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">云服务将所有帐户和模板保存在一个地方</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">一键交易和高级图表交易</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">FIX API</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">LD5 IBX Equinix数据中心服务器</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">多种订单类型</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">扩展符号显示</p>
                </li>
                <li class="clear">
                  <img src="@/assets/sjx.png" class="fl" />
                  <p class="fl">实时市场报告</p>
                </li>
              </ul>
              <p class="btn">
                <a
                  href="http://cptmarkets.ctrader.com/ctrader-cptmarkets-setup.exe"
                  download="cptmarkets-cTrader"
                >下载CPT cTrader</a>
              </p>
            </div>
            <div class="fr">
              <img src="images/tableCTrader.png" />
            </div>
          </div>
        </div>
        <!--性能对比-->
        <div class="contrast">
          <h4>性能对比</h4>
          <p>显示差异</p>
          <div class="tab clear">
            <ul class="firUl">
              <li class="first">市场执行</li>
              <li class="ctLine"></li>
              <li>网页交易（MACOS兼容）</li>
              <li class="ctLine"></li>
              <li>IOS和Android APPS</li>
              <li class="ctLine"></li>
              <li>套期保值</li>
              <li class="ctLine"></li>
              <li>二级市场深度</li>
              <li class="ctLine"></li>
              <li>交易量以手数计算</li>
              <li class="ctLine"></li>
              <li>数量计算单位</li>
              <li class="ctLine"></li>
              <li>信号交易</li>
              <li class="ctLine"></li>
              <li>自动交易</li>
              <li class="ctLine"></li>
              <li class="pcLi">完整尺寸跳动点图</li>
              <li class="ctLine"></li>
              <li>一键交易</li>
              <li class="ctLine"></li>
              <li>自动创建和共享图表截图</li>
              <li class="ctLine"></li>
              <li>一键反向交易</li>
              <li class="ctLine"></li>
              <li>一键建立双倍头寸</li>
              <li class="ctLine"></li>
              <li>加仓</li>
              <li class="ctLine"></li>
              <li>一键平掉所有仓位</li>
              <li class="ctLine"></li>
              <li class="firLin">时间表格</li>
              <li class="ctLine"></li>
              <li>可自定义平台时间偏移</li>
              <li class="ctLine"></li>
              <li>部分填充</li>
              <li class="ctLine"></li>
              <li>价差合约交易</li>
              <li class="ctLine"></li>
              <li class="dcha">点差</li>
              <li class="ctLine"></li>
              <li class="addc">佣金 /点差加码</li>
              <li class="ctLine"></li>
              <li class="gang">杠杆</li>
              <li class="ctLine"></li>
              <li>追加保证金/强制止损水平</li>
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
              <li class="leZe">9个时间表格</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li>
                浮动，从0.4点起
                <br />固定，2点起
              </li>
              <li class="ctLine"></li>
              <li>无佣金，无加点</li>
              <li class="ctLine"></li>
              <li>
                外汇&nbsp;&nbsp;1：无限
                <br />贵金属&nbsp;&nbsp;1：无限
                <br />原油指数&nbsp;&nbsp;1：100
                <br />加密货币对&nbsp;&nbsp;1：10
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
              <li class="leZe">21个时间表格</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="cuoLi">×</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="flo">浮动，从0.2点起</li>
              <li class="ctLine"></li>
              <li>无佣金，无加点</li>
              <li class="ctLine"></li>
              <li>
                货币&nbsp;&nbsp;1：无限
                <br />贵金属&nbsp;&nbsp;1：无限
                <br />原油指数&nbsp;&nbsp;1：100
                <br />加密货币对&nbsp;&nbsp;1：10
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
              <li class="leZe">26个时间表格</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="duiLi">√</li>
              <li class="ctLine"></li>
              <li class="flo">浮动，从0点起</li>
              <li class="ctLine"></li>
              <li>无佣金，无加点</li>
              <li class="ctLine"></li>
              <li class="duih">
                货币对高达1:1000
                <br />贵金属高达1:1000
              </li>
              <li class="ctLine"></li>
              <li class="bot">100% / 20%</li>
            </ul>
          </div>
          <!-- <table>
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
          </table>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
        font-family: FZLTZHK;
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
    .center {
      width: 1207px;
      margin: 134px auto 229px;
      .mt4,
      .ctrader {
        box-shadow: 5px 5px 5px #fbfbfb, 5px -5px 5px #fbfbfb,
          -5px 5px 5px #fbfbfb, -5px -5px 5px #fbfbfb;
        h3 {
          font-size: 40px;
          color: #000000;
          font-family: SEMIBOLD;
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
            p {
              color: #0e0e0c;
              font-size: 16px;
              font-family: SEMIBOLD;
              line-height: 36px;
              font-weight: 900;
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
                  font-family: Light;
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
                font-family: SEMIBOLD;
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
        .btn {
          width: 185px !important;
        }
      }
      .contrast {
        h4 {
          font-size: 40px;
          color: #000000;
          font-family: FZLTZHK;
          text-align: center;
        }
        > p {
          font-size: 18px;
          color: #000000;
          margin: 19px auto 66px;
          text-align: center;
          font-family: LTH;
        }
        .tab {
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
          }
          .border {
            box-shadow: 5px 5px 5px #f4f4f4, 5px -5px 5px #f4f4f4,
              -5px 5px 5px #f4f4f4, -5px -5px 5px #f4f4f4;
            li {
              text-align: center;
            }
            .title {
              text-align: center;
              font-family: SEMIBOLD;
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
      }
    }
  }
}
</style>