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
  <div class="page" id="page-1">
      <MainApp/>
  </div>

  <div class="page" id="page0"><h1>0</h1></div>
  <div class="page" id="page1"><h1>1</h1></div>
  <div class="page" id="page2"><h1>2</h1></div>
  <div class="page" id="page3"><h1>3</h1></div>
  <div class="page" id="page4"><h1>4</h1></div>
  <div class="page" id="page5"><h1>5</h1></div>

</template>

<script setup>
import {ref} from "vue";

const containerRef = ref(null);
const handleAnchorClick = (e) => {
  e.preventDefault()
}
</script>

<style scoped>


.page {
  height: 804px; /* 根据需要调整高度 */
  overflow: hidden;
  width: 100%;
}

h1 {
  margin-top: 0;
}
</style>
