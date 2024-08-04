<template>

  <div class="flex-box">
    <div class="text-box">
      <h1 style="margin-top: 45px">四、农村女性自媒体助力三农发展</h1>
      <h2>1、 农村生活经验分享</h2>
      <p>农村女性自媒体主体通过自媒体平台分享自己的农村生活经验，帮助其他农村用户解决生活问题，提高生活质量。</p>
      <p>例如，一些农村女性自媒体主体通过分享种植技巧、养殖经验等，帮助农民提高农业生产效益，增加收入
        农村女性自媒体助力三农</p>
      <div class="show-exp-box">
        <div class="exp-img">
          <img class="e-i-img"  rel="preload" src="../assets/picture/蜀中桃子姐.jpg" alt="蜀中桃子姐"/>
        </div>
        <div class="text-box" style="margin-left: 5px">
          <h3>蜀中桃子姐</h3>
          <p>桃子姐的“她”力量:没有止步于带货，更要反哺乡土，为家乡献出自己的一份力。</p>
          <p>
            蜀中桃子姐火了以后，一年粉丝增长3500万，成为中国十大乡村视频博主，一年可销2亿以上，带动了荣县经济发展，小乡村变成奔富村。为两百余人提供就业机会。
          </p>
          <p>
            5000余农户种植大头菜2万亩。40多款农特产品年销售200万袋。也带动了我们当地的一些妇女同胞就业发展。以我微光，筑家乡之荣光。
          </p>
        </div>
      </div>
    </div>
    <div>
      <h2>2、 农产品推广</h2>
      <div class="People-case text-box">
        <div class="case-image">
          <img rel="preload"  src="../assets/picture/李云溪.png" alt="李云溪抖音账号截图"/>
        </div>
        <div class="case-text" style="margin-right: 10%">
          <p>农村女性自媒体主体通过自媒体平台推广农产品，帮助农民销售农产品，提高农民收入。根据调研数据显示，一些农村女性自媒体主体通过自媒体平台推广农产品，销售额增长了30%以上，为农民带来了可观的经济收益。
          </p>
          <h4 style="margin-top: 30px">你好新农人——李云溪</h4>
          <p>“茶叶西施”李云溪辞掉一线城市的工作，回到农村。难道是没有前途吗？
            采茶姑娘李云溪不这样想，一年帮家乡卖茶叶12万斤。
            务实为农，佳品助农，与其说她是一个网红，不如说她是一个95后回乡创业青年。
            小舞台成就大梦想，李云溪回家乡为家乡办实事，推动家乡农产品销售，让农产品获得新活力。
          </p>
        </div>
      </div>


      <!--      <img src="../assets/picture/李云溪.png" height="404" width="554" alt="李云溪"/>-->
    </div>


  </div>
</template>
<script setup>

</script>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
}

.text-box {
  margin-top: 1em;
  margin-left: 2em;

  p {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
  }

  h1 {
    margin: 0 0 1em -1em
  }

  h2 {
    margin: 0 0 1em -.6em
  }
}

.show-exp-box {
  width: 60%;
  padding-bottom: 20px;
  background-color: rgba(7, 7, 7, 0.2) !important;
  border-radius: 8px; /* 添加圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  float: right;
  margin-right: 20%;

  .exp-img {
    float: right;

    .e-i-img {
      width: 150px;
      height: auto;
    }
  }

  h3 {
    text-align: center;
  }

  p {
    text-indent: 2em;
    margin-bottom: 4px;
    position: relative;
  }
}


.People-case {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0 10px 10%;

  .case-text {
    width: 50%;
    margin: auto;
    line-height: 22px;
    font-size: 18px;
    padding-top: 40px;
    padding-right: 10px;
    padding-bottom: 30px;
    background-color: rgba(7, 7, 7, 0.2) !important;
    border-radius: 8px; /* 添加圆角 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    p {
      text-indent: 2em;
    }

    h4 {
      margin: 0 0 1em 2em
    }
  }

  .case-image {
    width: 50%;
    margin: auto 0;

    img {
      width: 80%;
      height: auto;
    }
  }
}
</style>