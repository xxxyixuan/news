<!--背景调查-->
<template>
  <div class="flex-box">
    <div class="text-box">
      <h1 style="margin-top: 70px;margin-left: -1em;margin-bottom: 1em">一、背景</h1>
      <p>自媒体平台用户增长迅速，根据第53次中国互联网络发展状况统计报告发布的数据</p>
      <p>截至2023年12月，我国网民规模达10.92亿人。</p>
      <p>截至2023年12月，我国农村网民规模达3.62亿人，占整体网民的29.8%。</p>
      <p> 截止2023年12月，我国网络视频用户规模为10.67亿人，较2022年12月增长3613万人，占网民整体的97.7%。</p>
      <p> 其中，短视频用户规模为10.53亿人，较2022年12月增长4145万人，占网民整体的96.4%。</p>
    </div>
    <div class="D_line" style="margin-left: 30px;margin-right: 50px"/>
    <div class="chart-box">
      <el-header>
        <div class="title-box">
          <el-menu
              class="menu-box"
              mode="horizontal"
              :ellipsis="false"
          >
            <el-menu-item
                v-for="c in chartData"
                :key="c.id"
                :index="`${c.id}`"
                @click="scrollTo(c.id)"
                :type="currentNav===c.id ? 'line' : 'bar'"
            >
              {{ c.name }}
            </el-menu-item>
          </el-menu>

        </div>
      </el-header>
      <el-main>
        <div class="chart-box">
          <div class="chart-canvas">
            <component :is="currentChart"></component>
          </div>
          <div class="text-box" v-html="currentText"></div>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script setup>
import {markRaw, ref} from "vue";


import InternetUsersSize from "@/components/chart/internetUsersSize.vue";
import InternetPenetration from "@/components/chart/internetPenetration.vue";
import InternetUsersStructure from "@/components/chart/internetUsersStructure.vue";

const Size_text = '            <p>从2020年3月至2023年12月的图表显示，网民规模和互联网普及率均呈现出明显的增长趋势。</p>\n' +
    '            <p>尽管具体数值未给出，但可以观察到网民规模随着时间的推移而增加，互联网普及率也从较低水平稳步上升，接近80%。</p>\n' +
    '            <p>这表明在这段时间内，互联网的普及和接受度在持续提高。</p>'
const Penetration_text = '<p>从2020年3月至2023年12月，城乡地区的互联网普及率均显示出显著增长。</p>\n' +
    '<p>城镇地区的互联网普及率从76.50%增长至90%，而乡村地区的普及率也从55.90%上升至83.30%。</p>\n' +
    '<p>这一趋势表明，在这段时间内，中国的城乡地区互联网接入水平有了显著提高，尤其是城镇地区的增长更为迅猛，普及率几乎达到了全覆盖。</p>\n' +
    '<p>乡村地区虽然起步较低，但普及率的提升速度也相当快，显示出互联网基础设施的快速发展和普及。</p>';
const Structure_text = '<p>从2022年12月到2023年12月，中国网民的城乡结构发生了变化。2022年12月时，城镇网民占网民总数的比例为71.10%，而乡村网民占29.80%。</p>\n' +
    '<p>到了2023年12月，城镇网民的比例略有下降至70.20%，乡村网民的比例则上升至29.80%。</p>\n' +
    '<p>这表明虽然城镇网民依然占据了网民总数的大部分，但乡村网民的比例在一年内保持稳定，显示出城乡网民结构的相对平衡。</p>';

const chartData = [
  {id: 1, name: '网民规模和互联网普及率', chart: markRaw(InternetUsersSize), text: Size_text},
  {id: 2, name: '城乡地区互联网普及率', chart: markRaw(InternetPenetration), text: Penetration_text},
  {id: 3, name: '网民城乡结构', chart: markRaw(InternetUsersStructure), text: Structure_text},
];

// 当前导航项
let currentNav = ref(chartData[0].id);

// 当前图表组件和文本
let currentChart = ref(chartData[0].chart);
let currentText = ref(chartData[0].text);

// 切换导航的方法
const scrollTo = (id) => {
  currentNav.value = chartData[id - 1].id;
  currentChart.value = chartData[id - 1].chart;
  currentText = chartData[id - 1].text;
}


</script>

<style scoped>

.flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
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

.chart-box {
  min-height: 400px;
  min-width: 400px;
  overflow-x: hidden;
}


.menu-box {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3); /* 导航栏背景色 */
  color: #fff; /* 导航栏文字颜色 */
  display: flex;
  flex-direction: row;
}

.chart-canvas {
  min-height: 400px;
  min-width: 800px;
  margin: auto;
}

.D_line {
  width: 100%;
  height: auto;
  margin: 30px 0;
  border: none;
  border-top: 2px solid #0056b3; /* 分割线颜色 */
  filter: blur(2px);
}

.title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* 使菜单项均匀分布在标题栏中 */
}

</style>
