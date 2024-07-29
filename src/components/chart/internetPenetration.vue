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
      text: '城乡地区互联网普及率',
      left: 'center',
      textStyle: {
        color: '#0044ff',
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let relVal = params[0].name;
        for (let i = 0; i < params.length; i++) {
          relVal += '<br/>' + params[i].marker + params[i].seriesName + " : " + params[i].value + '%';
        }
        return relVal;
      }
    },
    legend: {
      data: ['城镇互联网普及率', '乡村互联网普及率'],
      top: 'bottom'
    },
    xAxis: {
      data: ['2020年3月', '2020年12月', '2021年12月', '2022年12月', '2023年12月'],
      axisLine:{
        lineStyle: {
          color : '#212121'
        }
      }
    },
    yAxis: [{
      type: 'value',
      name: '城镇互联网普及率',
      show: true,
      min: 30,
      max: 90,
      interval: 10,
      position: 'left',
      axisLabel: {
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: '#212121',
          width: 2
        }
      }
    }, {
      type: 'value',
      name: '乡村互联网普及率',
      min: 0,
      axisLine: {
        lineStyle: {
          color: '#212121',
          width: 2
        }
      }
    }
    ],
    series: [{
      data: [76.50, 79.80, 81.30, 83.10, 83.30],
      type: 'line',
      name: '城镇互联网普及率',
      label: {
        show: true,
        position: 'top',
        formatter: (param) => {
          return param.value.toFixed(2) + '%';
        },
      }
    }, {
      data: [46.20, 55.90, 57.60, 61.90, 66.50],
      type: 'line',
      name: '乡村互联网普及率',
      label: {
        show: true,
        position: 'top',
        formatter: (param) => {
          return param.value.toFixed(2) + '%';
        },
      }
    }]

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
  width: 100%;
  height: 400px;
  max-width: 600px;
  margin: auto;
}

@media (max-width: 768px) {
  .chart-container {
    height: 300px;
  }
}
</style>