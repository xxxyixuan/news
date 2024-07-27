<!--// xxxxxx-->
<template>
  <div ref="chartDom"></div>
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
    title:{
      text: '2022年1月女性用户移动互联网行业增长TOP10',
      subtext: '数据来源：??',
      left: 'center'
    },
    tooltip:{

    },
    legend:{

    },
    xAxis:{
      data:['综合电商','网上银行','支付结算','地图导航','本地生活','短视频','智能家居','综合资讯',],
    }
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
div {
  width: 600px;
  height: 400px;
}
</style>