<template>
  <div ref="chartDom" class="chart-container"></div>
</template>

<script setup>

import {ref, onMounted, onUnmounted, inject, nextTick} from "vue";

const colors = ['#5470C6', '#000', '#EE6666'];


const chartDom = ref(null);
let chartInstance = null;
const Echarts = inject('$echarts');
onMounted(async () => {
      await nextTick();
      chartInstance = Echarts.init(chartDom.value);
      const option = {
        // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
        // 标题
        text: {
          color: '#212121'
        },
        title: {
          text: '2022年1月女性用户在泛娱乐典型行业APP渗透率TOP10',
          left: 'center',
          subtext:'来源；QuestMobileGROWTH用户画像标签数据库2022年1月',
          textStyle: {
            color: '#0044ff',
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          position: handleTooltipPosition,
        },
        length: {
          data: ['活跃渗透率', '人均单日使用时长', '活跃渗透率TGI'],
          top: 'bottom'
        },
        xAxis: {
          data: ['抖音', '爱奇艺', '快手', '腾讯视频', '芒果TV', '优酷视频', '快手极速版', '抖音极速版', '酷狗音乐', '开心消消乐'],
          axisLine: {
            lineStyle: {
              color: '#212121'
            }
          },
          axisTick: {
            alignWithLabel: true
          },
        },
        yAxis: [
          {
            type: 'value',
            name: '活跃渗透率',

            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            }
          },
          {
            type: 'value',
            name: '人均单日使用时长',
            position: 'right',
            alignTicks: true,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            }
          },
          {
            type: 'value',
            name: '活跃渗透率TGI',
            position: 'left',
            min:0,
            interval: 20,
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2]
              }
            },
          }
        ],
        series: [
          {
            name: '活跃渗透率',
            type: 'bar',
            yAxisIndex: 0,
            data: [60.4, 47.6, 43.4, 42.6, 28.3, 26.1, 25.2, 22.9, 22.6, 18.1]
          },
          {
            name: '人均单日使用时长',
            type: 'bar',
            yAxisIndex: 1,
            data: [98.2, 71.5, 106.5, 68.3, 63.3, 52.3, 116.8, 102.0, 24.1, 56.0]
          },
          {
            name: '活跃渗透率TGI',
            type: 'line',
            yAxisIndex: 2,
            data: [104, 112, 109, 107, 158, 118, 133, 123, 104, 151]
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

    }
);

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
  min-width: 600px;
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