<template>
  <div class="m-cloud" ref="wrapper">
    <p
      style="background: #5b0eb2"
      v-for="(item, index) in data"
      :key="index"
      ref="tag"
      @click="clickTag(item)"
      @dblclick="dbclickTag(item)"
      @mouseenter="mouseEnterHandle"
      @mouseleave="mouseLeaveHandle"
    >
      <span class="img"></span>
      <span class="text">{{item}}</span>
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
      option: {
        radius: 250, // 滚动半径，单位px
        rotateAngleXbase: 1000, // 默认旋转速度基数，数越小速度越快
        rotateAngleYbase: 1000,
        currentHoverTag: null,
        hover: true // 是否开启悬浮联动
      },
      data: [
        "可复制的交易模式",
        "多终端系统交易",
        "清晰的账户状态",
        "即时买卖报价",
        "先进的图表工具",
        "智能的EA功能"
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
      this.rotateAngleX = Math.PI / this.option.rotateAngleXbase;
      this.rotateAngleY = Math.PI / this.option.rotateAngleYbase;
      // 鼠标悬浮改变转速和方向
      if (this.option.hover) {
        const _self = this;
        // this.$refs.wrapper.onmousemove = function(e) {
        //   _self.rotateAngleY = (e.pageX - this.offsetLeft - this.offsetWidth / 2) / 10000;
        //   _self.rotateAngleX = -(e.pageY - this.offsetTop - this.offsetHeight / 2) / 10000;
        // };
      } else {
        this.$refs.wrapper.onmousemove = null;
      }

      for (var i = 0, length = this.data.length; i < length; i++) {
        // 获取球面上均匀的点的经纬度 θ = arccos( ((2*num)-1)/all - 1); Φ = θ*sqrt(all * π);
        let angleX = Math.acos((2 * (i + 1) - 1) / length - 1);
        let angleY = angleX * Math.sqrt(length * Math.PI);
        // 根据经纬度获取点的坐标，球中心的点坐标是 (0,0,0) x=r*sinθ*cosΦ   y=r*sinθ*sinΦ   z=r*cosθ;
        const x = this.option.radius * Math.sin(angleX) * Math.cos(angleY * 5);
        const y =
          this.option.radius * Math.sin(angleX) * Math.sin(angleY * 0.8);
        const z = this.option.radius * Math.cos(angleX) * Math.cos(angleY * 2);
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
          this.rotateX(this.tagList[i]);
          this.rotateY(this.tagList[i]);
          this.setPosition(
            this.tagList[i],
            this.option.radius,
            this.option.maxFont
          );
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    },
    setPosition(tag, r, maxFont) {
      // 设置每个标签的坐标位置和字体大小以及透明度
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
    rotateX(tag) {
      var cos = Math.cos(this.rotateAngleX);
      var sin = Math.sin(this.rotateAngleX);
      var y1 = tag.y * cos - tag.z * sin;
      var z1 = tag.y * sin + tag.z * cos;
      tag.y = y1;
      tag.z = z1;
    },
    rotateY(tag) {
      var cos = Math.cos(this.rotateAngleY * 1.2);
      var sin = Math.sin(this.rotateAngleY * -1.3);
      var x1 = tag.z * sin + tag.x * cos;
      var z1 = tag.z * cos - tag.x * sin;
      tag.x = x1;
      tag.z = z1;
    },
    dbclickTag() {
      const render = () => {
        for (var i = 0; i < this.tagList.length; i++) {
          this.rotateX(this.tagList[i]);
          this.rotateY(this.tagList[i]);
          this.setPosition(
            this.tagList[i],
            this.option.radius,
            this.option.maxFont
          );
        }
        console.log('s')
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
  color: #333;
  margin: 0 auto;
  text-align: center;
  p {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #333;
    font-family: Arial;
    text-decoration: none;
    margin: 0 10px 15px 0;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
    padding: 4px 9px;
    display: inline-block;
    position: absolute;
    border-radius: 3px;
    width: 200px;
    height: 200px;
    transition: 0.2s opacity ease;
    .img {
      width: 70px;
      height: 70px;
      background: rgb(19, 18, 18);
    }
    .text {
      height: 60px;
      text-align: center;
      width: 100%;
      line-height: 40px;
      color: #fff;
    }
  }
}
</style>
