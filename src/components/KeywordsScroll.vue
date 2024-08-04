<template>
  <div class="flex-box">
    <img src="../assets/picture/剪影.png" alt="农村女性剪影" class="float-image"/>

    <div class="container" style="--t:10s">
      <div>
        <span>互联网妈替</span>
        <span>勤劳致富</span>
        <span>热爱生活</span>
        <span>狂野美食治愈人心</span>
        <span>狂野版李子柒</span>
        <span>么噶</span>
      </div>
      <div>
        <span>互联网妈替</span>
        <span>勤劳致富</span>
        <span>热爱生活</span>
        <span>狂野美食治愈人心</span>
        <span>狂野版李子柒</span>
        <span>么噶</span>
      </div>

    </div>
    <div class="container" style="--t:12s">
      <div>
        <span>爱人如养花</span>
        <span>苦瓜大队</span>
        <span>割草喂牛</span>
        <span>热爱生活</span>
        <span>勤劳</span>
        <span>致富</span>
      </div>
      <div>
        <span>爱人如养花</span>
        <span>苦瓜大队</span>
        <span>割草喂牛</span>
        <span>热爱生活</span>
        <span>勤劳</span>
        <span>致富</span>
      </div>

    </div>
    <div class="container" style="--t:14s">
      <div>
        <span>互联网</span>
        <span>短视频</span>
        <span>治愈人心</span>
        <span>农村</span>
        <span>女性</span>
        <span>群姐</span>
      </div>
      <div>
        <span>互联网</span>
        <span>短视频</span>
        <span>治愈人心</span>
        <span>农村</span>
        <span>女性</span>
        <span>群姐</span>
      </div>
    </div>
    <div class="container" style="--t:11s">
      <div>
        <span>小英</span>
        <span>自媒体</span>
        <span>蜀中桃子姐</span>
        <span>东北雨姐</span>
        <span>农产品推广</span>
        <span>李云溪</span>
      </div>
      <div>
        <span>小英</span>
        <span>自媒体</span>
        <span>蜀中桃子姐</span>
        <span>东北雨姐</span>
        <span>农产品推广</span>
        <span>李云溪</span>
      </div>

    </div>
    <div class="container" style="--t:13s">
      <div>
        <span>农村女性自媒体</span>
        <span>农村女性</span>
        <span>反哺乡土</span>
        <span>带动经济</span>
        <span>奔富</span>
        <span>小康</span>
      </div>
      <div>
        <span>农村女性自媒体</span>
        <span>农村女性</span>
        <span>反哺乡土</span>
        <span>带动经济</span>
        <span>奔富</span>
        <span>小康</span>
      </div>
    </div>

    <div class="container" style="--t:20s">
      <div>
        <span>农村女性自媒体</span>
        <span>农村女性</span>
        <span>互联网</span>
        <span>短视频</span>
        <span>乡村振兴</span>
        <span>致富</span>
        <span>奔富</span>
        <span>小康</span>
      </div>
      <div>
        <span>农村女性自媒体</span>
        <span>农村女性</span>
        <span>互联网</span>
        <span>短视频</span>
        <span>乡村振兴</span>
        <span>致富</span>
        <span>奔富</span>
        <span>小康</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  min-height: 700px;
  width: 100%;
}

.float-image {
  width: 300px;
  height: auto;
  position: absolute; /* 使图片脱离文档流，可以覆盖到文字之上 */
  z-index: 100; /* 确保图片在所有文字之上 */
}

.container {
  z-index: 0; /* 确保文字在图片之下 */
  position: relative;
  display: flex;
  width: 700px;
  margin-bottom: 38px;
  overflow: hidden;
  mask-image: linear-gradient(
      90deg, transparent, #fff 20%, #fff 80%, transparent
  );
}

.container div {
  white-space: nowrap;
  animation: animate var(--t) linear infinite;
}

.container div:nth-child(2) {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / 2);
}

.container div span {
  display: inline-flex;
  letter-spacing: .2em;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 30px 10px 0 50px;
}

@keyframes animate {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
}

@keyframes animate2 {
  from {
    transform: translate(0);
  }
  to {
    transform: translate(-200%);
  }
}


</style>