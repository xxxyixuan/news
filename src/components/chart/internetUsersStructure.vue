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
    title: {
      text: '网民城乡结构',
      left: 'center',
      textStyle: {
        color: '#0044ff',
      },
    },
    tooltip: {},
    legend: {
      data: ['城镇网民', '乡村网民'],
      top: 'bottom'
    },
    xAxis: {
      data: ['2022年12月', '2023年12月'],
      axisLine: {
        lineStyle: {
          color: '#212121'
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '网民比例',
      min: 0,
      interval: 30,
      axisLabel: {
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: '#212121',
          width: 2
        }
      }
    },
    series: [
      {
        data: [71.10, 70.20],
        type: 'bar',
        name: '城镇网民',
        stack: '网民',
        label: {
          show: true, // 显示标签
          position: 'inside', // 标签位置，这里设置为在柱状图的顶部
          formatter: (param) => {
            return param.value.toFixed(2) + '%';
          }, // 格式化标签显示的内容，{c} 是数据点的值
          color: '#fff',
        },
      },
      {
        data: [70.20, 29.80],
        type: 'bar',
        name: '乡村网民',
        stack: '网民',
        label: {
          show: true,
          position: 'inside', // 标签位置，这里设置为在柱状图的底部
          formatter: (param) => {
            return param.value.toFixed(2) + '%';
          },
          color: '#000',
        },
        position: {top: 50},
        grid: {
          bottom: '15%', // 下边界
          containLabel: true, // 确保Y轴标签不会超出图表边界
        }
      }
    ]
  };
  chartInstance.setOption(option);
});

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