<template>

  <el-affix style="position: absolute; 	right: 2%; margin-right: 20px" :offset="10">
    <el-anchor
        :container="containerRef"
        direction="horizontal"
        type="default"
        :offset="30"
        @click="handleAnchorClick"
    >
      <el-anchor-link
          v-for="(item, index) in [-1, 0, 1, 2, 3, 4, 5]"
          :key="index"
          :href="`#page${item}`"
          :title="`Page ${item}`"
      />
    </el-anchor>
  </el-affix>
  <div id="page-1"><MainApp/></div>
  <div class="page" id="page0"><backgroundCheck/></div>
  <div class="page" id="page1"><ActivePhenomenon/></div>
  <div class="page" id="page2"><InfluenceAndDevelopment/></div>
  <div class="page" id="page3"><Development3A/></div>
  <div class="page" id="page4"><Summarize/></div>

</template>

<script setup>
import {ref} from "vue";

import MainApp from "@/components/MainApp.vue";
import backgroundCheck from "@/components/backgroundCheck.vue";
import ActivePhenomenon from "@/components/ActivePhenomenon.vue";
import InfluenceAndDevelopment from "@/components/InfluenceAndDevelopment.vue";
import Development3A from "@/components/Development3A.vue";
import Summarize from "@/components/summarize.vue";

const containerRef = ref(null);
const handleAnchorClick = (e) => {
  e.preventDefault()
}

</script>

<style scoped>
*{
  box-sizing: border-box;
}
.page {
  overflow: hidden;
  width: 100%;
}

h1 {
  margin-top: 0;
}
</style>
