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
              default-active='1'
              :ellipsis="false"
          >
            <el-menu-item
                class="menu-box-item"
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

  <div>

  </div>

</template>

<script setup>
import {markRaw, ref} from "vue";


import InternetUsersSize from "@/components/chart/internetUsersSize.vue";
import InternetPenetration from "@/components/chart/internetPenetration.vue";
import InternetUsersStructure from "@/components/chart/internetUsersStructure.vue";
import InternetIndustryTOP10 from "@/components/chart/internetIndustryTOP10.vue";
import InternetPermeabilityIndustryTOP10 from "@/components/chart/internetPermeabilityIndustryTOP10.vue";

const Size_text = '    <h5>中国网民规模：</h5>\n' +
    '    <p>截至2023年12月，中国网民规模已达10.92亿人，较2022年12月新增网民2480万人，互联网普及率为77.5%。这一数字表明，中国互联网用户规模持续扩大，并在中国总人口中占据较高比例。</p>\n' +
    '    <h5>中国互联网普及率：</h5>\n' +
    '    <p> 中国的互联网普及率也在稳步提升，从2023年6月的76.4%增长到12月的77.5%。农村地区互联网普及率的增长尤为显著，这表明中国政府在缩小城乡数字鸿沟方面取得了显著成效。 未来发展趋势</p>\n' +
    '    <h5>缩小数字鸿沟：</h5>\n' +
    '    <p> 政府和企业将加大投入，加强互联网基础设施建设，提高网络覆盖率和接入速度，为更多人提供便捷的互联网服务。同时，也将开展数字技能培训，提升公众数字素养，缩小不同人群之间的数字鸿沟。 </p>\n';

const Penetration_text = '<p>从2020年3月至2023年12月，城乡地区的互联网普及率均显示出显著增长。</p>\n' +
    '<p>城镇地区的互联网普及率从76.50%增长至90%，而乡村地区的普及率也从55.90%上升至83.30%。</p>\n' +
    '<p>这一趋势表明，在这段时间内，中国的城乡地区互联网接入水平有了显著提高，尤其是城镇地区的增长更为迅猛，普及率几乎达到了全覆盖。</p>\n' +
    '<p>乡村地区虽然起步较低，但普及率的提升速度也相当快，显示出互联网基础设施的快速发展和普及。</p>';
const Structure_text =
    '    <h5>1. 城镇网民规模与占比</h5>\n' +
    '    <p>截至2023年12月，我国城镇网民规模达7.66亿人，占网民整体的70.2%。这表明城镇地区仍然是互联网普及的主要区域，拥有庞大的网民基数。</p>\n' +
    '    <h5>2. 农村网民规模与占比</h5>\n' +
    '    <p> 同期，农村网民规模达3.26亿人，占网民整体的29.8%。虽然农村网民占比较低，但近年来随着农村互联网基础设施的不断完善和政策的推动，农村网民规模持续增长，互联网在农村地区的普及率不断提升。</p>\n' +
    '    <h5> 3. 城乡互联网普及率差异</h5>\n' +
    '    <p>城镇地区互联网普及率高于农村地区。截至2023年12月，城镇地区互联网普及率为83.3%，而农村地区为66.5%，两者之间存在一定差距。然而，这一差距正在逐年缩小，反映出农村互联网普及工作的积极成效。</p>\n';
const Industry_text = '<p>数字经济发展驱动下，女性用户在购物消费、生活及娱乐等领域渗透进一步提升，综合电商、网上银行等六大行净增量均超五千万</p>';
const Permeability_text = '<p>女性用户对泛娱乐应用表现出明显的偏好，尤其是在短视频领域，月人均使用时长已达56小时，且依然持续增长中</p>';
const chartData = [
  {id: 1, name: '网民规模和互联网普及率', chart: markRaw(InternetUsersSize), text: Size_text},
  {id: 2, name: '城乡地区互联网普及率', chart: markRaw(InternetPenetration), text: Penetration_text},
  {id: 3, name: '网民城乡结构', chart: markRaw(InternetUsersStructure), text: Structure_text},
  {id: 4, name: '增长TOP10', chart: markRaw(InternetIndustryTOP10), text: Industry_text},
  {id: 5, name: '渗透率TOP10', chart: markRaw(InternetPermeabilityIndustryTOP10), text: Permeability_text}
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
  margin-left: 10%;
  width: 80%;

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
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.3); /* 导航栏背景色 */
  color: #fff; /* 导航栏文字颜色 */
  display: flex;
  flex-direction: row;

  .menu-box-item {
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    width: auto;

  }
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
