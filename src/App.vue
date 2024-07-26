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
  <div id="page-1">
      <MainApp/>
  </div>

  <div class="page" id="page0">
    <page0/>
  </div>
  <div class="page" id="page1"><page1></page1></div>
  <div class="page" id="page2"><page2/></div>
  <div class="page" id="page3"><h1>3</h1></div>
  <div class="page" id="page4"><h1>4</h1></div>
  <div class="page" id="page5"><h1>5</h1></div>

</template>

<script setup>
import {ref} from "vue";

import MainApp from "@/components/MainApp.vue";
import Page0 from "@/components/page0.vue";
import page1 from "@/components/page1.vue";
import Page2 from "@/components/page2.vue";

const containerRef = ref(null);
const handleAnchorClick = (e) => {
  e.preventDefault()
}
</script>

<style scoped>

#page-1{
  height: 804px; /* 根据需要调整高度 */
  overflow: hidden;
  width: 100%;
}

.page {
  height: 804px; /* 根据需要调整高度 */
  overflow: hidden;
  width: 100%;
  margin-left: 20px;
}

h1 {
  margin-top: 0;
}
</style>
