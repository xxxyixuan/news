<template>

  <el-affix class="el-affix">
    <el-anchor
        class="el-anchor"
        :container="containerRef"
        direction="horizontal"
        type="default"
        :offset="30"
        @click="handleAnchorClick"
    >
      <el-anchor-link
          class="el-anchor-link el-anchor-link__title"
          v-for="(item, index) in AnchorList"
          :key="index"
          :href="`#anchor-${index}`"
          :title="item"
      />
    </el-anchor>
  </el-affix>
  <!-- 内容-->
  <div id="page_BG_img">
    <MainApp/>
  </div>
  <div class="page" id="anchor-0">
    <backgroundCheck/>
  </div>
  <div class="page" id="anchor-1">
    <ActivePhenomenon/>
  </div>
  <div class="page" id="anchor-2">
    <InfluenceAndDevelopment/>
  </div>
  <div class="page" id="anchor-3">
    <Development3A/>
  </div>
  <div class="page" id="anchor-4">
    <Summarize/>
  </div>

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
const AnchorList = ref(['背景', '现象', '影响和发展', '三农发展', '总结']);

const getAnchorId = (index) => {

  return AnchorList[index];
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  overflow: hidden;
  width: 100%;
}

h1 {
  margin-top: 0;
}


/* 锚点导航容器样式 */
.el-anchor {
  background-color: rgba(255, 255, 255, 0.9); /* 背景色，可调整透明度 */
  border: 1px solid #eaeaea; /* 边框颜色 */
  border-radius: 8px; /* 圆角大小 */
  padding: 10px; /* 内边距 */
  max-width: 1000px; /* 最大宽度，可根据需要调整 */
  min-width: auto;
  margin-right: 20px; /* 与屏幕边缘的距离 */
  height: 40px;
}

/* 锚点链接样式 */
.el-anchor-link {
  margin-bottom: 10px; /* 链接之间的外边距 */
  font-size: 16px; /* 字体大小 */
  color: #333; /* 字体颜色 */
  display: block; /* 使链接独占整行 */
  width: 100%; /* 设置为100%，使其填满其父容器 */
  padding: 8px 15px; /* 增加一些内边距，提供点击区域 */
  box-sizing: border-box; /* 边框计算在宽度内 */
}

/* 锚点链接悬停效果 */
.el-anchor-link:hover {
  color: #409eff; /* Element UI 主题色 */
  text-decoration: underline; /* 下划线 */
}

/* 锚点链接标题样式 */
.el-anchor-link__title {
  padding: 5px 0; /* 上下内边距 */
}

/* 锚点导航固定时的样式 */
.el-affix {
  width: 30%;
  position: fixed; /* 固定定位 */
  top: 10px; /* 距离顶部的距离，根据 :offset 属性调整 */
  right: 2%; /* 右侧距离，根据实际需要调整 */
}

/* 媒体查询：当屏幕宽度小于或等于768px时，调整样式 */
@media (max-width: 768px) {
  .el-anchor {
    max-width: 100px; /* 在小屏幕上减小锚点导航的宽度 */
  }

  .el-anchor-link {
    font-size: 14px; /* 在小屏幕上减小字体大小 */
  }
}
</style>
