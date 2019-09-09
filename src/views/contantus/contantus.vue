<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-02 14:20:33
 * @ Modified by: Your name
 * @ Modified time: 2019-09-02 14:20:55
 * @ Description: 联系我们
 -->
<template>
  <div class="about">
    <div class="word">
      <div class="map-contain">
        <div class="concat">
          {{$t('contact.contactUs')}}
        </div>
        <div class="map-list">
          <ul>
            <li
              v-for="(item, key) in mapList"
              :key="key"
              @click="clickHandle(key)"
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
          <div class="deg90">
            <!-- <div class="img" :style="{transform: `translateY(-50px) rotateZ(${roateZ}deg) scale(0.9)`}" style="width: 100%; heigh: 100%; background: red"></div> -->
            <img class="img" :style="{transform: `translateY(-50px) rotateZ(${roateZ}deg) scale(0.9)`}" src="images/maps.png" alt="">
          </div>
        </div>
        <transition name="slide-down">
          <img class="pointe" v-show="showPointer" :style="pStyle" src="images/local_04.png" alt="">
        </transition>
      </div>
      <div class="service">
        <div class="online">
           {{$t('contact.onlineCus')}}
        </div>
        <div class="tip">
           {{$t('contact.assistance')}}
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
      active: 0,
      roateZ: 0,
      position: [
        {
          left: '484px',
          top: '547px'
        }, {
          left: '269px',
          top: '615px'
        }, {
          left: '767px',
          top: '627px'
        }, {
          left: '637px',
          top: '587px'
        }, {
          left: '803px',
          top: '591px'
        }
      ],
      pStyle: {},
      showPointer: false,
      timmer: null
    }
  },
  methods: {
    clickHandle(key) {
      // this.active = key;
      // this.roateZ -= 360;
      this.showPointer = false;
      this.timmer = setTimeout(() => {
        this.active = key;
        this.roateZ -= 360;
        this.pStyle = this.position[this.active];
        this.timmer = setTimeout(() => {
          this.showPointer = true;
        }, 2000)
      }, 1200);
    }
  },
  activated() {
    this.pStyle = this.position[this.active];
    this.timmer = setTimeout(() => {
      this.roateZ -= 360;
      this.timmer = setTimeout(() => {
        this.showPointer = true;
      }, 2000)
    }, 1200);
  },
  beforeDestroy() {
    clearTimeout(this.timmer);
  }
}
</script>
<style lang="scss">
.slide-down-enter-active {
  transition: all 1.4s ease;
  opacity: 1;
}
.slide-down-leave-active {
  transition: all 1.4s ease;
  opacity: 1;
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
  @import '@/styles/mixin.scss';
  .about {
    @include full(100%, auto);
    .word {
      width: 100vw;
      background: #242424;
      height: 1360px;
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
          @include animation(bounceInUps);
        }
        .map-list {
          @include flex();
          height: 40px;
          border-radius: 10px;
          border: 1px solid #6714ba;
          margin: 0 auto;
          overflow: hidden;
          @include animation(bounceInUps, 1s, 300ms);
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
        transform-style: preserve-3d;
        perspective: 1000;
        .map {
          @include full(100%, 600px);
          margin-top: -40px;
          z-index: 2s;
          transition: 1s;
          transform: rotateX(90deg) translateY(100px);
          transform-style: preserve-3d;
          .deg90 {
            width: 100%;
            height: 100%;
            transform: rotateX(-30deg);
            .img {
              transition: 2s;
              width: 100%;
              height: 100%;
            }
          }
        }
        .pointe {
          width: 40px;
          position: absolute;
          // transition: 0.6s;
          z-index: 100;
          left: 484px;
          top: 547px;
        }
      }
      .service {
        @include full(100%, 360px);
        background: #fff;
        .online {
          padding-top: 80px;
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