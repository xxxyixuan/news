<template>

  <div class="common-layout">

    <MainApp/>
    <KeywordsScroll/>

    <el-container>
      <el-header height="auto" style="padding: 0;">
        <el-affix :offset="0">
          <div class="nav-bar-phone"
               v-if="thisWindowWidth <= 430"
          >
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                :width="menuWidth"
            >
              <!-- 使用v-for循环AnchorList数组 -->
              <el-menu-item
                  class="menu-item"
                  v-for="(item, index) in AnchorList"
                  :class="{active:index === activeIndex}"
                  :key="index"
                  :index="index.toString()"
                  @click="scrollTo(`#anchor-${index}`)">
                {{ item }}
              </el-menu-item>

              <el-sub-menu v-if="foldable">
                <template>
                  <el-menu-item
                      v-for="(item, index) in hiddenMenuItems"
                      :key="`folded-${index}`"
                      :index="(index+visibleMenuItems.length).toString()"
                      @click="scrollTo(`#anchor-${index + visibleMenuItems.length}`)"
                  >
                    {{ item }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </el-menu>
          </div>

          <div class="nav-bar"
               v-else-if="thisWindowWidth>430"
          >
            <!-- 导航链接 -->
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                width="100Vw"
            >
              <!-- 使用v-for循环AnchorList数组 -->
              <el-menu-item
                  class="menu-item"
                  v-for="(item, index) in AnchorList"
                  :class="{active:index === activeIndex}"
                  :key="index"
                  :index="index.toString()"
                  @click="scrollTo(`#anchor-${index}`)">
                {{ item }}
              </el-menu-item>
            </el-menu>
          </div>
        </el-affix>
      </el-header>

      <el-main class="container-main">

        <div class="page"
             v-for="i in componentNames"
             :key="i.id"
             :id="`anchor-${i.id}`"
        >
          <component :is="i.name"/>
          <div class="D_line" style="  filter: blur(1px);"/>
        </div>
        <End/>
      </el-main>
    </el-container>
    <el-backtop :bottom="100">
      <div style="
        height: 100%;
        width: 100%;
        background-color:rgba(255, 255, 255, 0.3);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        font-size: 14px;
        color:#000;"
      >
        回到顶部
      </div>
    </el-backtop>
  </div>
</template>

<script setup>
import {ref, markRaw, onMounted} from "vue";

import MainApp from "@/components/MainApp.vue";
import BackgroundCheck from "@/components/BackgroundCheck.vue";
import ActivePhenomenon from "@/components/ActivePhenomenon.vue";
import InfluenceAndDevelopment from "@/components/InfluenceAndDevelopment.vue";
import Development3A from "@/components/Development3A.vue";
import Summarize from "@/components/summarize.vue";
import KeywordsScroll from "@/components/KeywordsScroll.vue";
import End from "@/components/End.vue";

/*动态组件*/
const componentNames = [
  {id: 0, name: markRaw(BackgroundCheck)},
  {id: 1, name: markRaw(ActivePhenomenon)},
  {id: 2, name: markRaw(InfluenceAndDevelopment)},
  {id: 3, name: markRaw(Development3A)},
  {id: 4, name: markRaw(Summarize)},
];
// window当前宽度
let thisWindowWidth = ref(window.innerWidth)
// 初始菜单宽度
let menuWidth = '100vw';
// 是否可折叠
let foldable = false;
// 定义锚点列表
const AnchorList = ['背景', '现象', '影响和发展', '助力三农', '总结'];

// 默认选中的菜单项索引，基于AnchorList数组的第一个元素
const activeIndex = ref(AnchorList[0]);

const scrollTo = (anchorId) => {
  document.querySelector(anchorId).scrollIntoView({behavior: 'smooth'});
}

const visibleMenuItems = () => {
  if (window.innerWidth > 860) {
    return AnchorList;
  } else {
    return AnchorList.slice(0, 2);
  }
};
const hiddenMenuItems = () => {
  if (window.innerWidth > 860) {
    return [];
  } else {
    return AnchorList.slice(2); // 隐藏超出的部分
  }
};

window.addEventListener('resize', () => {
  const header = document.querySelector('.nav-bar');
  header.style.width = window.innerWidth + 'px';
});

const handleResize = () => {
  menuWidth = window.innerWidth > 860 ? '100Vw' : '100%';
  foldable = window.innerWidth <= 860;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
})

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.container-main {
  width: 60%;
  margin: 0 auto;
  padding: 0;
  border-radius: 8px; /* 添加圆角边框，半径为8px，可根据需要调整 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 添加阴影效果，可根据需要调整 */
  overflow: hidden; /* 保持内部内容不超出边框 */
}

h1 {
  margin-top: 0;
}

.nav-bar {
  width: 100%;
  justify-content: space-around;
  background-color: #304156; /* 导航栏背景色 */
  color: #fff; /* 导航栏文字颜色 */
}

.el-menu-demo {
  width: 100%;
  display: flex;
  overflow: visible;
  white-space: nowrap;
  background-color: rgba(168, 210, 134, 0.8);
  border: 2px solid rgba(168, 210, 134, 0.4);
}

.menu-item {
  flex: 1;
  flex-shrink: 0;
  font-size: 2em;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #0056b3;
}

.D_line {
  width: 100%;
  height: auto;
  margin: 30px 0;
  border: none;
  border-top: 2px solid #0056b3; /* 分割线颜色 */
  filter: blur(2px);
}

@media screen and (max-width: 430px) {
  .el-menu-demo {
    flex-direction: inherit; /* 垂直排列菜单项 */
    height: auto;
    overflow: auto;
  }
  .container-main{
    width: 80%;
  }
}
</style>
