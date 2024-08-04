<template>
  <div class="grid-container">
    <div class="grid-box">
      <h1>数据来源</h1>
      <div class="team-members" style="  text-align: left; margin-left: 20px">
        <div>
          <p><strong>【1】. </strong>中国互联网络发展状况统计调查（https://www.cnnic.net.cn/n4/2024/0322/c88-10964.html）</p>
        </div>
        <div>
          <p><strong>【2】. </strong> QuestMobileGROWTH用户画像标签数据库2022年1月</p>
        </div>
        <div>
          <p><strong>【3】. </strong>https://new.qq.com/rain/a/20220311A055FR00</p>
        </div>

      </div>
    </div>
    <div class="grid-box">
      <h1 >制作团队</h1>
      <div class="team-members">
        <div>
          <p>数据搜集与清洗: <strong>熊利 郑博 易恩西 俞婕</strong></p>
        </div>
        <div>
          <p>撰文: <strong>俞婕 郑博</strong></p>
        </div>
        <div>
          <p>数据可视化: <strong>王宇行</strong></p>
        </div>
        <div>
          <p>视觉设计: <strong>易恩西</strong></p>
        </div>
        <div>
          <p>网页制作: <strong>王宇行</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 2fr));
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 750px;
}

.grid-box {
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-top: 0;
  color: #333;
  margin-bottom: 20px
}

.team-members > div {
  margin-bottom: 10px;
}

p {
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}
</style>