<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 12:42:19
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 07:00:47
 * @ Description:关于
 -->

<template>
  <div class="about">
    <!-- <Header /> -->
    <div class="word">
      <div class="map-contain">
        <div class="concat">
          联系我们
        </div>
        <div class="map-list">
          <ul>
            <li
              v-for="(item, key) in mapList"
              :key="key"
              @click="active = key"
              :class="{active: key === active}">
                {{item.name}}
              </li>
          </ul>
        </div>
        <div class="info">
          <span class="title">
            {{mapList[active].title}}
          </span>
          <span class="content" v-html="mapList[active].contents.join('<br \/>')"></span>
        </div>
        <div class="map">
          <img class="img" src="./../../../public/images/maps.png" alt="">
          <img class="pointe" src="./../../../public/images/local_04.png" alt="">
        </div>
      </div>
      <div class="service">
        <div class="online">
          在线客服
        </div>
        <div class="tip">
          5*24小时在线客服提供在线支持与帮助
        </div>
        <div class="connect">
          <div class="">
            <img src="@/assets/mobile_03.png" alt="">
            400 1001 103
          </div>
          <div class="">
            <img src="@/assets/mobile_05.png" alt="">
            cs@cptmarkets.com
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
      mapList: [{
        name: 'CPT Markets UK',
        title: 'CPT Markets UK ',
        contents: [
          '（Citypoint Trading Ltd的交易名称）',
          '伦敦'
        ]
      }, {
        name: 'CPT Markets 伯利兹',
        title: 'CPT Markets ',
        contents: [
          '伯利兹'
        ]
      }, {
        name: 'CPT Markets 马来西亚',
        title: 'CPT Markets',
        contents: [
          '马来西亚'
        ]
      }, {
        name: 'CPT Markets 迪拜',
        title: 'CPT Markets',
        contents: [
          '迪拜'
        ]
      }, {
        name: 'CPT Markets 台湾',
        title: 'CPT Markets',
        contents: [
          '台湾'
        ]
      }],
      active: 0
    }
  }
}
</script>
<style lang="scss">
  @import '@/styles/mixin.scss';
  .about {
    @include full(100%, auto);
    .word {
      position: absolute;
      width: 100vw;
      background: #242424;
      height: 1000px;
      .map-contain {
        width: 1080px;
        margin: 0 auto;
        .concat {
          height: 165px;
          font-size: 40px;
          line-height: 220px;
          color: #ffffff;
          width: 100%;
          text-align: center;
        }
        .map-list {
          @include flex();
          height: 40px;
          border-radius: 10px;
          border: 1px solid #6714ba;
          margin: 0 auto;
          overflow: hidden;
          ul {
            @include flex();
            padding: 0;
            margin: 0;
            list-style: none;
            cursor: pointer;
            li {
              width: 214.8px;
              text-align: center;
              font-size: 18px;
              font-family: montserrat;
              border-right: 1px solid #6714ba;
              float: left;
              height: 40px;
              line-height: 40px;
              color: #fff;
              background: none;
              transition: 0.6s;
              cursor: pointer;
              list-style: none;
            }
            .active {
              background: #6714ba;
            }
            li:last-child {
              border-right: none;
            }
          }
        }
        .info {
          @include full(100%, 100px);
          text-align: center;
          margin-top: 100px;
          color: #ffffff;
          font-size: 24px;
          font-family: montserratse;
          text-size-adjust: 100%;
          .title {
            display: block;
            font-weight: 900;
            line-height: 40px;
          }
          .content {
            display: block;
            line-height: 40px;
            font-weight: 500;
          }
        }
        .map {
          @include full(100%, 600px);
          margin-top: 30px;
          transform: translateZ(0px);
          -webkit-transform-style: preserve-3d;
          // transform-style: preserve-3d;
          z-index: 10;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          .img {
            width: 90%;
            height: 100%;
            transform-style: preserve-3d;
            transform: rotateX(50deg);
            margin-left: 5%;
          }
          .pointe {
            width: 40px;
            position: absolute;
            transition: 0.6s;
            z-index: 100;
          }
        }
      }
      .service {
        @include full(100%, 360px);
        .online {
          font-family: montserratse;
          margin-top: 42px;
          font-size: 40px;
          text-align: center;
          color: #6714ba;
        }
        .tip {
          text-align: center;
          width: 100%;
          color: #000000;
          margin-top: 30px;
          font-family: montserrat;
          font-size: 16px;
          box-sizing: border-box;
        }
        .connect {
          width: 100%;
          font-size: 14px;
          @include flex();
          height: 100px;
          >div {
            margin-left: 20px;
            color: #6714ba;
            text-align: center;
            font-weight: 700;
            font-family: montserratse;
            width: 370px;
            font-weight: 800;
            @include flex();
          }
          img {
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>