<template>
  <div ref="chartDom" class="chart-container"></div>
</template>

<script setup>

import {ref, onMounted, onUnmounted, inject, nextTick} from "vue";

const chartDom = ref(null);
let chartInstance = null;
const Echarts = inject('$echarts');
onMounted(async () => {
  await nextTick();
  chartInstance = Echarts.init(chartDom.value);
  const option = {
    text: {
      color: '#212121'
    },
    animationEasing: 'elasticOut',
    animationDuration: 2000,
    title: {
      text: '2022年1月女性用户移动互联网行业增长TOP10',
      left: 'center',
      subtext: '来源：QuestMobileGROWTH用户画像标签数据库2022年1月',
      textStyle: {
        color: '#0044ff',
        overflow: 'breakAll'
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      position: handleTooltipPosition,
    },
    legend: {
      date: ['净增量', '月活越用户规模'],
      top: 'bottom',
    },
    xAxis: {
      data: ['综合电商', '网上银行', '支付结算', '地图导航', '本地生活', '短视频', '智能家居', '综合资讯', '搜索下载', '有声听书',],
      axisLine: {
        lineStyle: {
          color: '#212121'
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '单位：万',
        min: 0,
        max: 8000,
        interval: 2000,
        show: true,
        position: 'left',
        axisLine: {
          lineStyle: {
            color: '#212121',
            width: 2
          }
        }
      },
      {
        type: 'value',
        name: '单位：万',
        min: 0,
        max: 80000,
        interval: 20000,
        position: 'right',
        show: true,
        axisLine: {
          lineStyle: {
            color: '#212121',
            width: 2
          }
        }
      }
    ],

    series: [{
      name: '净增量',
      type: 'bar',
      barWidth: '20%',
      yAxisIndex: 0,
      data: [6970, 6646, 5768, 5739, 5243, 5070, 3357, 2753, 2295, 2282]
    },
      {
        name: '月活跃用户规模',
        type: 'bar',
        barWidth: '20%',
        yAxisIndex: 1,
        data: [56513, 29646, 44644, 44035, 23195, 50989, 7837, 34037, 31965, 2886]
      }
    ],
    position: {top: 50},
    grid: {
      top:'30%',
      bottom: '15%', // 下边界
      containLabel: true, // 确保Y轴标签不会超出图表边界
    }
  };
  chartInstance.setOption(option);
});


function handleTooltipPosition(point, params, dom, rect, size) {
  const [mouseX, mouseY] = point
  const [tooltipWidth, tooltipHeight] = size.contentSize


  let [posX, posY] = [0, 0]; // tooltip的显示位置

  // x位置判断
  if (mouseX < tooltipWidth) {
    // 如果左边放不下，tooltip的左侧位置=鼠标X
    posX = mouseX;
  } else {
    posX = mouseX - tooltipWidth;
  }

  if (mouseY < tooltipHeight) {
    // 如果上边放不下，tooltip的上侧位置=鼠标Y
    posY = mouseY;
  } else {
    posY = mouseY - tooltipHeight;
  }

  return [posX, posY];
}

onUnmounted(() => {
  if (chartInstance !== null && chartInstance.dispose) {
    chartInstance.dispose();
  }
});


</script>
<style scoped>

.chart-container {
  max-width: 50vw;
  min-width: 30vw;
  min-height: 400px;
  margin: 0 auto;
}
@media screen and (max-width: 430px) {
  .chart-container {
    min-width: 80vw;
    min-height: 267px;
    margin: auto;
  }
}
</style>