<template>
  <div
    class="m-cloud"
    ref="wrapper"
    @mouseenter="mwrapMouseEnterHandle"
    @mouseleave="mwrapMouseLeaveHandle"
  >
    <p
      style="background: #5b0eb2"
      v-for="(item, index) in data"
      :key="index"
      ref="tag"
      @dblclick="dbclickTag(item)"
      @mouseenter="mouseEnterHandle"
      @mouseleave="mouseLeaveHandle"
    >
      <img :src="item.icon" alt />
      <span class="text">{{item.name[$i18n.locale]}}</span>
    </p>
  </div>
</template>
<script>
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  (cb => window.setTimeout(cb, 1000 / 60));
export default {
  data() {
    return {
      radius: 200, // 滚动半径，单位px
      rotateAngleXbase: 2000, // 默认旋转速度基数，数越小速度越快
      rotateAngleYbase: 2000,
      currentHoverTag: null,
      wrapHover: false,
      hover: true, // 是否开启悬浮联动
      pointe: {
        x: 1,
        y: 1
      },
      data: [
        {
          name: {
            cn: "可复制的交易模式",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon4.png")
        },
        {
          name: {
            cn: "多终端系统交易",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon2.png")
        },
        {
          name: {
            cn: "清晰的账户状态",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon6.png")
        },
        {
          name: {
            cn: "即时买卖报价",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon1.png")
        },
        {
          name: {
            cn: "先进的图表工具",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon3.png")
        },
        {
          name: {
            cn: "智能的EA功能",
            en: "en",
            tc: "tc"
          },
          icon: require("@/assets/icon5.png")
        }
      ],
      tagList: []
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this.init();
      });
    }
  },
  methods: {
    mwrapMouseEnterHandle() {
      this.wrapHover = true;
    },
    mwrapMouseLeaveHandle() {
      this.pointe.x = this.rotateAngleX > 0 ? 1 : -1;
      this.pointe.y = this.rotateAngleY > 0 ? 1 : -1;
      this.wrapHover = false;
    },
    mouseEnterHandle(e) {
      e.target.style.zIndex = 100;
      e.target.style.transform = `${e.target.style.transform.replace(
        /scale\([0-9]{1,}[.][0-9]*\)/g,
        "scale(1)"
      )}`;
      this.currentHoverTag = e.target;
    },
    mouseLeaveHandle(e) {
      this.currentHoverTag.style.zIndex = 0;
      this.currentHoverTag = null;
    },
    init() {
      this.rotateAngleX = (Math.PI / this.rotateAngleXbase) * this.pointe.x;
      this.rotateAngleY = (Math.PI / this.rotateAngleYbase) * this.pointe.y;
      // 鼠标悬浮改变转速和方向
      if (this.hover) {
        const _self = this;
        this.$refs.wrapper.onmousemove = function(e) {
          _self.rotateAngleY =
            ((e.x - this.offsetLeft - this.offsetWidth / 2) /
              _self.rotateAngleYbase) *
            0.1;
          _self.rotateAngleX =
            (-(e.y - this.offsetTop - this.offsetHeight / 2) /
              _self.rotateAngleXbase) *
            0.1;
        };
      } else {
        this.$refs.wrapper.onmousemove = null;
      }

      for (var i = 0, length = this.data.length; i < length; i++) {
        // 获取球面上均匀的点的经纬度 θ = arccos( ((2*num)-1)/all - 1); Φ = θ*sqrt(all * π);
        let angleX = Math.acos((2 * (i + 1) - 1) / length - 1);
        let angleY = angleX * Math.sqrt(length * Math.PI);
        // 根据经纬度获取点的坐标，球中心的点坐标是 (0,0,0) x=r*sinθ*cosΦ   y=r*sinθ*sinΦ   z=r*cosθ;
        const x = this.radius * Math.sin(angleX) * Math.cos(angleY);
        const y = this.radius * Math.sin(angleX) * Math.sin(angleY);
        const z = this.radius * Math.cos(angleX);
        // 每个标签对象都有四对值
        var tag = {
          x: x,
          y: y,
          z: z,
          ele: this.$refs.tag[i]
        };
        this.tagList.push(tag);
      }
      const render = () => {
        for (var i = 0; i < this.tagList.length; i++) {
          if (this.tagList[i].ele === this.currentHoverTag) {
            this.tagList[i].ele.style.opacity = 1;
            continue;
          }
          this.rotateX(this.tagList[i], i);
          this.rotateY(this.tagList[i], i);
          this.setPosition(this.tagList[i], this.radius);
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    },
    setPosition(tag, r) {
      // 设置每个标签的坐标位置和字体大小以及透明度
      if (!this.wrapHover) {
        this.rotateAngleX = (Math.PI / this.rotateAngleXbase) * this.pointe.x;
        this.rotateAngleY = (Math.PI / this.rotateAngleYbase) * this.pointe.y;
      }
      if (this.$refs.wrapper) {
        tag.ele.style.transform = `translate(${tag.x +
          this.$refs.wrapper.offsetWidth / 2 -
          tag.ele.offsetWidth / 2}px, ${tag.y +
          this.$refs.wrapper.offsetHeight / 2 -
          tag.ele.offsetHeight / 2}px) scale(${Math.min(
          tag.z / r / 5 + 0.9,
          1
        )})`;
        if (tag.z / r / 5 + 0.9 < 0.8) {
          tag.ele.style.opacity = tag.z / r / 5 + 0.9;
        }
      }
    },
    rotateX(tag, index) {
      var cos = Math.cos(this.rotateAngleX);
      var sin = Math.sin(this.rotateAngleX);
      var y1 = tag.y * cos - tag.z * sin;
      var z1 = tag.y * sin + tag.z * cos;
      tag.y = y1;
      tag.z = z1;
    },
    rotateY(tag, index) {
      var cos = Math.cos(this.rotateAngleY);
      var sin = Math.sin(this.rotateAngleY);
      var x1 = tag.z * sin + tag.x * cos;
      var z1 = tag.z * cos - tag.x * sin;
      tag.x = x1;
      tag.z = z1;
    },
    dbclickTag() {
      const render = () => {
        for (var i = 0; i < this.tagList.length; i++) {
          this.rotateX(this.tagList[i], i);
          this.rotateY(this.tagList[i], i);
          this.setPosition(this.tagList[i], this.radius);
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
.m-cloud {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  text-align: center;
  p {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
    background: #5b0eb2;
    position: absolute;
    width: 160px;
    height: 160px;
    padding: 20px;
    border-radius: 10px;
    transition: 0.2s opacity ease;
    @include flex();
    flex-direction: column;
    .img {
      width: 70px;
      height: 70px;
      background: rgb(19, 18, 18);
    }
    .text {
      height: 40px;
      margin-top: 20px;
      font-size: 16px;
      text-align: center;
      width: 100%;
      line-height: 40px;
      color: #fff;
    }
  }
}
</style>
