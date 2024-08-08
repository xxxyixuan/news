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
      <!--      <el-header>-->
      <!--        <div class="title-box">-->

      <!--          <el-menu-->
      <!--              class="menu-box"-->
      <!--              mode="horizontal"-->
      <!--              default-active='1'-->
      <!--              :ellipsis="false"-->
      <!--          >-->

      <!--            <el-menu-item-->
      <!--                class="menu-box-item"-->
      <!--                v-for="c in chartData"-->
      <!--                :key="c.id"-->
      <!--                :index="`${c.id}`"-->
      <!--                @click="scrollTo(c.id)"-->
      <!--                :type="currentNav===c.id ? 'line' : 'bar'"-->
      <!--            >-->
      <!--              {{ c.name }}-->
      <!--            </el-menu-item>-->
      <!--          </el-menu>-->
      <!--        </div>-->
      <!--      </el-header>-->
      <!--      <el-main class="&#45;&#45;el-main">-->
      <!--        <div class="chart-box">-->
      <!--          <div class="chart-canvas">-->
      <!--            <component :is="currentChart"></component>-->
      <!--          </div>-->
      <!--          <div class="text-box" v-html="currentText"></div>-->
      <!--        </div>-->

      <div class="chart-box"
           v-for="c in chartData"
           :key="c.id"
      >
        <div class="chart-canvas">
          <component :is="c.chart"></component>
        </div>
        <div class="text-box" v-html="c.text"></div>
      </div>
      <!--      </el-main>-->
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

const Size_text = '    <h5>中国网民规模：</h5>' +
    '    <p>截至2023年12月，中国网民规模已达10.92亿人，较2022年12月新增网民2480万人，互联网普及率为77.5%。这一数字表明，中国互联网用户规模持续扩大，并在中国总人口中占据较高比例。</p>' +
    '    <h5>中国互联网普及率：</h5>' +
    '    <p> 中国的互联网普及率也在稳步提升，从2023年6月的76.4%增长到12月的77.5%。农村地区互联网普及率的增长尤为显著，这表明中国政府在缩小城乡数字鸿沟方面取得了显著成效。 未来发展趋势</p>' +
    '    <h5>缩小数字鸿沟：</h5>' +
    '    <p> 政府和企业将加大投入，加强互联网基础设施建设，提高网络覆盖率和接入速度，为更多人提供便捷的互联网服务。同时，也将开展数字技能培训，提升公众数字素养，缩小不同人群之间的数字鸿沟。 </p>';

const Penetration_text =
    "<h3>一、城乡地区互联网普及率现状</h3>" +
    "<h4>1.&nbsp;全国整体互联网普及率</h4>" +
    "<p>截至2023年12月，我国网民规模达10.92亿人，互联网普及率达77.5%。（来源：中国互联网络信息中心（CNNIC）发布的第53次《中国互联网络发展状况统计报告》）</p> " +
    "<h4>2.&nbsp;农村地区互联网普及率</h4>" +
    "<p>农村地区互联网普及率在近年来持续增长。截至2023年12月，农村地区互联网普及率为66.5%，较2022年12月提升4.6个百分点。这一数据表明，农村地区的互联网基础设施建设正在不断完善，互联网在农村的普及程度显著提升。（来源同上）</p>" +
    "<h4>3.&nbsp;城乡互联网普及率差异</h4>" +
    "<p>城乡互联网普及率差异仍然存在，但呈缩小趋势。截至2023年底，我国城乡互联网普及率差异为11个百分点（77.5%的城市普及率减去66.5%的农村普及率），较之前年份有所缩小。这一变化得益于政府加大对农村地区互联网基础设施的投入和政策的支持。（注：此处的差异计算基于最新数据，与参考文章中提到的16.8%有所出入，因为数据随时间更新而有所变化）</p>" +
    "<h3>二、未来发展趋势</h3>" +
    "<h4>1.&nbsp;农村地区互联网普及率将持续提升</h4>" +
    "<p>随着《2024年数字乡村发展工作要点》的推进，到2024年底，我国农村宽带接入用户数预计将超过2亿，农村地区互联网普及率将再提升2个百分点。这意味着农村地区的互联网基础设施将进一步完善，更多农村居民将能够享受到互联网带来的便利。（来源：中央网信办、农业农村部等四部门联合印发的文件）</p>" +
    "<h4>2.&nbsp;城乡互联网普及率差异将进一步缩小</h4>" +
    "<p>政府将继续加大对农村地区互联网基础设施建设的投入，推动农村和城市“同网同速”，缩小城乡数字鸿沟。同时，随着农村居民收入水平的提高和教育程度的提升，他们对互联网的需求也将不断增长，进一步推动农村地区互联网普及率的提升。</p>" +
    "<h4>3.&nbsp;互联网在农村经济社会发展中的作用将更加凸显</h4>" +
    "<p>随着农村地区互联网普及率的提升，互联网将在农村经济社会发展中发挥更加重要的作用。农产品电商、乡村旅游、远程教育、远程医疗等互联网应用将进一步普及，促进农村产业升级和农民增收。同时，互联网也将为农村社会治理提供新的手段和平台，推动农村治理体系和治理能力现代化。</p>" +
    "<h4>4.&nbsp;农民数字素养和技能将得到提升</h4>" +
    "<p>政府和社会各界将加大对农民数字素养和技能的培训力度，提高农民对数字化“新农具”的使用能力。这将有助于激活释放农业农村内生发展动力，促进城乡融合发展。同时，具有互联网思维的“新农人”将成为推动农村新产业新业态蓬勃发展的重要力量。</p>" +
    "<p>综上所述，城乡地区互联网普及率在未来将呈现持续提升和差异缩小的趋势。随着互联网在农村经济社会发展中的作用日益凸显和农民数字素养的提升，农村地区将迎来更加广阔的发展前景。</p>";
const Structure_text = " <h3>一、网民城乡结构现状</h3>" +
    "<h4>1. 城镇网民规模与占比</h4>" +
    "<p>截至2023年12月，我国城镇网民规模达7.66亿人，占网民整体的70.2%。这表明城镇地区仍然是互联网普及的主要区域，拥有庞大的网民基数。</p>" +
    "<h4>2. 农村网民规模与占比</h4>" +
    "<p>同期，农村网民规模达3.26亿人，占网民整体的29.8%。虽然农村网民占比较低，但近年来随着农村互联网基础设施的不断完善和政策的推动，农村网民规模持续增长，互联网在农村地区的普及率不断提升。</p>" +
    "<h4>3. 城乡互联网普及率差异</h4>" +
    "<p>城镇地区互联网普及率高于农村地区。截至2023年12月，城镇地区互联网普及率为83.3%，而农村地区为66.5%，两者之间存在一定差距。然而，这一差距正在逐年缩小，反映出农村互联网普及工作的积极成效。</p>" +
    "<h3>二、未来发展趋势</h3>" +
    "<h4>1. 农村网民规模持续增长</h4>" +
    "<p>随着《数字乡村发展战略纲要》《数字乡村发展行动计划(2022-2025年)》等政策文件的深入实施，农村网络基础设施建设将进一步推进，各类应用场景不断丰富。这将促进农村网民规模的持续增长，提高农村地区的互联网普及率。</p>" +
    "<h4>2. 城乡互联网普及率差异逐步缩小</h4>" +
    "<p>政府和社会各界将继续加大对农村地区的投入和支持，推动农村互联网基础设施建设和应用发展。随着城乡互联网基础设施差距的缩小和农村居民数字素养的提升，城乡互联网普及率差异将逐步缩小，实现城乡互联网发展的均衡化。</p>" +
    "<h4>3. 互联网在农村经济社会发展中的作用凸显</h4>" +
    "<p>未来，互联网将在农村经济社会发展中发挥更加重要的作用。农产品电商、乡村旅游、远程教育、远程医疗等互联网应用将进一步普及和深化，为农村产业升级和农民增收提供有力支撑。同时，互联网也将推动农村社会治理创新，提高农村治理现代化水平。</p>" +
    "<h4>4. 农民数字素养和技能提升</h4>" +
    "<p>随着农村网民规模的扩大和互联网应用的普及，农民对互联网的认知和使用能力将不断提升。政府和社会各界将加大对农民数字素养和技能的培训力度，提高他们利用互联网发展生产、改善生活的能力。这将有助于激活释放农业农村内生发展动力，推动乡村振兴战略的深入实施。</p>" +
    "<p>综上所述，未来我国网民城乡结构将呈现农村网民规模持续增长、城乡互联网普及率差异逐步缩小、互联网在农村经济社会发展中作用凸显以及农民数字素养和技能提升等趋势。这些趋势将为推动我国经济社会高质量发展提供有力支撑。</p>";
const Industry_text = "<h3>女性用户移动互联网行业分析</h3>" +
    "<p>综合电商以6970万的净增量和56513万的月活跃用户规模位居榜首，显示出该行业对女性用户的强大吸引力和广泛的用户基础。</p>" +
    "<h4>网上银行和支付结算</h4>" +
    "<p>网上银行和支付结算分别以6646万和5768万的净增量位列第二和第三，月活跃用户规模分别为29646万和44644万，反映出金融服务行业在女性用户中的普及度。</p>" +
    "<h4>地图导航和本地生活服务</h4>" +
    "<p>地图导航和本地生活服务分别以5739万和5243万的净增量位列第四和第五，月活跃用户规模分别为44035万和23195万，表明这些服务在日常生活中对女性用户的重要性。</p>" +
    "<h4>短视频行业</h4>" +
    "<p>短视频行业以5070万的净增量和50989万的月活跃用户规模位列第六，显示出短视频内容在女性用户中的流行度和高用户参与度。</p>" +
    "<h4>智能家居和综合资讯</h4>" +
    "<p>智能家居和综合资讯分别以3357万和2753万的净增量位列第七和第八，月活跃用户规模分别为7837万和34037万，这可能反映了女性用户对科技和信息的日益增长的兴趣。</p>" +
    "<h4>搜索下载和有声听书</h4>" +
    "<p>搜索下载和有声听书分别以2295万和2282万的净增量位列第九和第十，月活跃用户规模分别为31965万和2886万，显示出这些服务在特定女性用户群体中的受欢迎程度。</p>" +
    "<h4>整体分析</h4>" +
    "<p>整体来看，这些数据显示了女性用户在移动互联网行业中的增长趋势和偏好。综合电商和金融服务行业在吸引新用户方面表现突出，而短视频、智能家居和综合资讯等行业则显示出较高的用户活跃度。这些洞察对于理解女性用户的行为模式和制定相应的市场策略至关重要。</p>";

const Permeability_text = "<h3>女性用户APP使用情况分析</h3>" +
    "<p>抖音以60.4%的活跃渗透率和98.2分钟的人均单日使用时长位居榜首，显示出其在女性用户中的广泛普及和高用户粘性。</p>" +
    "<p>其活跃渗透率TGI（Target Group Index，目标群体指数）为104，意味着抖音在女性用户中的渗透率高于平均水平。</p>" +
    "<h4>视频平台分析</h4>" +
    "<p>爱奇艺和腾讯视频分别以47.6%和42.6%的活跃渗透率位列第二和第四，人均单日使用时长分别为71.5分钟和68.3分钟，表明这些视频平台对女性用户具有较高的吸引力。</p>" +
    "<h4>快手及其极速版</h4>" +
    "<p>快手及其极速版表现出色，分别以43.4%和25.2%的活跃渗透率位列第三和第六，人均单日使用时长分别为106.5分钟和116.8分钟，显示出快手在提升用户参与度方面的成功。</p>" +
    "<h4>芒果TV</h4>" +
    "<p>芒果TV虽然活跃渗透率只有28.3%，但人均单日使用时长达到63.3分钟，且活跃渗透率TGI高达158，表明其在目标女性用户群体中有着特别强的吸引力。</p>" +
    "<h4>优酷视频和酷狗音乐</h4>" +
    "<p>优酷视频和酷狗音乐的活跃渗透率分别为26.1%和22.6%，人均单日使用时长分别为52.3分钟和24.1分钟，显示出它们在女性用户中也有一定的市场份额。</p>" +
    "<h4>抖音极速版和开心消消乐</h4>" +
    "<p>抖音极速版和开心消消乐虽然活跃渗透率较低，分别为22.9%和18.1%，但人均单日使用时长较高，分别为102分钟和56分钟，且活跃渗透率TGI分别为123和151，显示出它们在特定女性用户群体中的高吸引力。</p>" +
    "<h4>整体分析</h4>" +
    "<p>整体来看，短视频和视频点播平台在女性用户中的渗透率较高，而人均单日使用时长则显示了不同APP对用户粘性的影响。活跃渗透率TGI的高值表明某些APP在女性用户中的受欢迎程度远超平均水平。这些数据为泛娱乐行业的市场策略提供了有价值的洞察，特别是在用户获取和用户留存方面。</p>";


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
  padding: 0;
  min-height: 80vh;
  min-width: 50vw;
  overflow: auto;
}


.menu-box {
  width: 100vw;
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
  min-width: 267px;
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

@media screen and (max-width: 430px) {
  .--el-main {
    padding: 0;
  }
}
</style>
