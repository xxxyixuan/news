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
        // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
        // 标题
        text: {
          color: '#212121'
        },
        title: {
          text: '2020.3-2023.12 网民规模和互联网普及率',

          subtext:'来源：中国互联网络发展状况统计调查',
          textStyle: {
            color: '#0044ff',

          },
        },
        // 提示
        tooltip: {
          trigger: 'axis',
          // 使用formatter函数自定义tooltip显示的内容
          formatter: function (params) {
            let res = params[0].name; // x轴的类别名称
            // 遍历每个系列的数据
            params.forEach(function (item, index) {
              if (index >= 0) {
                // 根据系列的名称添加不同的单位
                if (item.seriesName === '网民规模') {
                  res += '<br/>' + item.seriesName + ' : ' + item.value + '万人';
                } else if (item.seriesName === '互联网普及率') {
                  res += '<br/>' + item.seriesName + ' :  ' + item.value + '%';
                }
              }
            });
            return res;
          },
          position: handleTooltipPosition,
          // 可以设置tooltip的样式，例如：位置、背景色、边框色等
        },
        // 图例
        legend: {
          data: ['网民规模', '互联网普及率'],
          top: 'bottom'
        },
        // x轴
        xAxis: {
          data: ["2020年3月", "2020年12月", "2021年12月", "2022年12月", "2023年12月"],
          axisLine: {
            lineStyle: {
              color: '#212121'
            }
          }
        },
        // y轴
        yAxis: [{
          type: 'value',
          name: '网民规模',
          show: true,
          interval: 30000,
          position: 'left',
          axisLabel: {
            formatter: '{value}万人',
            fontSize: 12,
          },
          axisLine: {
            lineStyle: {
              color: '#212121',
              width: 2
            }
          }
        }, {
          type: 'value',
          name: '互联网普及率',
          min: 0,
          max: 80,
          interval: 20,
          position: 'right',
          axisLabel: {
            formatter: '{value}%'
          },
          axisLine: {
            lineStyle: {
              color: '#212121',
              width: 2
            }
          }
        }],
        // 数据系列
        series: [{
          name: '网民规模',
          type: 'bar',
          barWidth: "40%",
          yAxisIndex: 0,
          data: [90359, 98899, 103195, 106744, 109225]
        }, {
          name: '互联网普及率',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
          data: [65.5, 70.4, 73.0, 75.6, 77.5],
          itemStyle: {
              color: '#ADFFD9', //改变折线点的颜色
              lineStyle: {
                color: '#0056b3' //改变折线颜色
            }
          }
        }],
        position: {top: 50},
        grid: {

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

</style>