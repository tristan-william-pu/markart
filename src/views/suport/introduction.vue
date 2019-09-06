<!--
 * @Autor: Diskfan
 * @Date: 2019-09-06 18:03:03
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-09-06 19:56:16
 * @Description: 支持  文章预览
 -->
<template>
  <div class="introduction">
    <div class="name">
      <h1>
        {{current.name[locale]}}
      </h1>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="(item, key) in current.contents"
          :key="key">
          <template v-if="item[locale].icon">
            <div>
              <div class="icon">
                <!--图标-->
                <img :src="item[locale].icon" alt="">
              </div>
              <div class="text">
                <h3>
                  {{item[locale].title}}
                </h3>
                <p>
                  {{item[locale].content}}
                </p>
              </div>
            </div>
          </template>
          <template v-else>
            <h2>
              {{item[locale].title}}
            </h2>
            <p v-html="item[locale].content"></p>
          </template>
        </li>
      </ul>
    </div>
    <div class="page" v-if="current.page">
      <ul>
        <li
          :class="{active: index == pageidx}"
          v-for="index in Math.ceil(data[index].contents.length / page) "
          :key="index"
          @click="pageidx = index">
          {{index}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      data:  require('./introduceData.js'),
      page: 7,
      pageidx: 1
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
    index() {
      return this.$route.params.idx || 0;
    },
    current() {
      const data = this.data[this.index];
      let res = {
        name: data.name,
        page: data.page
      };
      if (data.page) {
        let start = this.pageidx * this.page - this.page;
        res.contents = data.contents.slice(start, start + this.page);
        return res;
      }
      return data
    }
  }
}
</script>
<style lang="scss">
  @import '@/styles/mixin.scss';
  .introduction {
    .name {
      margin-top: 80px;
      h1 {
        text-align: center;
        font-size: 36px;
      }
    }
    .content {
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      ul {
        li {
          h2 {
            margin-top: 50px;
            font-size: 22px;
            line-height: 65px;
          }
          p {
            font-size: 17px;
            margin-top: 16px;  
            color: #676767;          
          }
          >div {
            margin: 30px 0 60px 0;
            .icon {
              width: 160px;
              display: inline-block;
            }
            .text {
              display: inline-block;
              width: calc(100% - 163px);
              h3 {
                font-size: 18px;
              }
              p {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
    .page {
      margin: 0 auto;
      max-width: 1200px;
      width: 100%;
      @include flex();
      ul {
        @include flex();
        li {
          width: 20px;
          height: 20px;
          margin: 0 10px;
          background: #fff;
          border: 1px solid #000;
          @include flex();
        }
        .active {
          background: #000;
          color: #fff;
        }
      }
    }
  }
</style>