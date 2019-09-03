<!--
 * @ Author: Diskfan
 * @ Create Time: 2019-09-03 19:42:53
 * @ Modified by: Your name
 * @ Modified time: 2019-09-03 19:46:37
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
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '@/styles/mixin.scss';
  .compare {
    >.img {
          width: 100%;
      background: url('./../../../public/images/tableBigImg.png') no-repeat center;
      background-size: 100%;
          box-sizing: border-box;
          .center {
                padding: 8% 0 8%;
                    width: 90%;
    margin: 0 auto;
    color: #ffffff;
          }
    }
  }
</style>