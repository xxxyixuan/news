<!--背景调查-->
<template>
  <div class="page">
    <div class="text-check text-align-center">
      <h1>一、背景</h1>
      <p>自媒体平台用户增长迅速，根据第53次中国互联网络发展状况统计报告发布的数据</p>
      <p>截至2023年12月，我国网民规模达10.92亿人。</p>
      <p>截至2023年12月，我国农村网民规模达3.62亿人，占整体网民的29.8%。</p>
      <p> 截止2023年12月，我国网络视频用户规模为10.67亿人，较2022年12月增长3613万人，占网民整体的97.7%。</p>
      <p> 其中，短视频用户规模为10.53亿人，较2022年12月增长4145万人，占网民整体的96.4%。</p>
    </div>
    <div class="show-chart">
      <div class="chart">
        <InternetUsersSize class="canvas"/>
      </div>
      <div class="chart chart-text">
        <el-text style="margin-left: 40px" class="white ">
          从2020年3月至2023年12月的图表显示，网民规模和互联网普及率均呈现出明显的增长趋势。<br/>
          尽管具体数值未给出，但可以观察到网民规模随着时间的推移而增加，互联网普及率也从较低水平稳步上升，接近80%。<br/>
          这表明在这段时间内，互联网的普及和接受度在持续提高。<br/>
        </el-text>
      </div>
    </div>
    <div class="show-chart">
      <div class="chart chart-text">
        <el-text class="white ">
          从2020年3月至2023年12月，城乡地区的互联网普及率均显示出显著增长。<br/>
          城镇地区的互联网普及率从76.50%增长至90%，而乡村地区的普及率也从55.90%上升至83.30%。<br/>
          这一趋势表明，在这段时间内，中国的城乡地区互联网接入水平有了显著提高，尤其是城镇地区的增长更为迅猛，普及率几乎达到了全覆盖。<br/>
          乡村地区虽然起步较低，但普及率的提升速度也相当快，显示出互联网基础设施的快速发展和普及。<br/>
        </el-text>
      </div>
      <div class="chart">
        <InternetPenetration class="canvas"/>
      </div>
    </div>
    <div class="show-chart">
      <div class="chart">
        <InternetUsersStructure class="canvas"/>
      </div>
      <div class="chart chart-text">
        <el-text class="white ">
          从2022年12月到2023年12月，中国网民的城乡结构发生了变化。2022年12月时，城镇网民占网民总数的比例为71.10%，而乡村网民占29.80%。<br/>
          到了2023年12月，城镇网民的比例略有下降至70.20%，乡村网民的比例则上升至29.80%。<br/>
          这表明虽然城镇网民依然占据了网民总数的大部分，但乡村网民的比例在一年内保持稳定，显示出城乡网民结构的相对平衡。<br/>
        </el-text>
      </div>
    </div>
    <img src="../assets/picture/增长top10.png" height="284" width="554" alt="增长top10"/>
    <img src="../assets/picture/渗透率.png" height="330" width="554" alt="渗透率"/>
  </div>
</template>

<script setup>
import InternetUsersSize from "@/components/chart/internetUsersSize.vue";
import InternetPenetration from "@/components/chart/internetPenetration.vue";
import InternetUsersStructure from "@/components/chart/internetUsersStructure.vue";
</script>

<style scoped>
.page {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto; /* 允许垂直滚动 */
}

.show-chart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.chart {
  height: 500px;
  width: 35%;
  transition: transform 0.5s ease;
  position: relative;
  left: 0;
  display: flex;
}

.canvas {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.text-check {
  width: 70%;
  text-align: left;
}

.text-align-center {
  text-align: center;
}
.white{
  color: white;
}

</style>
