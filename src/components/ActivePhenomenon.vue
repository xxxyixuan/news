<template>
  <div class="flex-box">
    <div class="text-box">
      <h1>二、基层农村女性在互联网中的活跃现象</h1>
      <p>自媒体平台用户增长迅速，根据第53次中国互联网络发展状况统计报告发布的数据</p>
      <p>截至2023年12月，我国网民规模达10.92亿人。</p>
      <p>截至2023年12月，我国农村网民规模达3.62亿人，占整体网民的29.8%。</p>
      <p> 截止2023年12月，我国网络视频用户规模为10.67亿人，较2022年12月增长3613万人，占网民整体的97.7%。</p>
      <p> 其中，短视频用户规模为10.53亿人，较2022年12月增长4145万人，占网民整体的96.4%。</p>
    </div>
    <div class="text-box">
      <h2>1、农村女性自媒体影响力扩大</h2>
      <p>农村女性自媒体兴起，通过短视频、直播等展现生活与才艺，</p>
      <p>增加收入，实现自我表达，传承农村文化，促进城乡交流。</p>
      <p>农村女性自媒体主体通过自媒体平台的传播，逐渐获得了更广泛的影响力。</p>
      <p>根据数据分析，农村女性自媒体主体的粉丝数量平均增长了30%，其中一些自媒体账号的粉丝教量甚至超过了100万。</p>
      <p>这些自媒体主体通过自媒体平台与广大农村用户进行互动，传递正能量，引导农村社会的发展。</p>
    </div>
    <div class="People-case text-box">
      <div class="case-text">
        <h4>人物案例一：群姐</h4>
        <p>“互联网妈替”，明明出身农村却不卖惨不哭穷，靠一手狂野美食俘获人心，
          “反苦瓜大队”第一人——群姐。虽然家庭不富裕，但群姐从来不会像那些“苦瓜大队”一样只会卖惨博同情，
          总会用乐观的精神和精心制作的美食俘获无数网友。</p>
        <p> 而群姐的厉害之处就是从来不向生活低头，
          文化学历有限，她就直播请网友辅导孩子功课，
          孩子们也被她教育的一个个都孝顺能干。</p>
        <p> 很多“苦瓜大队”网红，利用身后贫瘠的大山和艰难的家境，
          靠着卖惨在网上吸引流量，以哭穷的方式来博取流量，获取收益，
          甚至不惜给孩子吃简单的食材、烧糊的食物。群姐与他们生活在同样的处境当中，
          却从来不会自怨自艾，巧妙运用自媒体实现自富，并用积极面对生活的态度感染了无数网友。</p>
      </div>
      <div class="case-image">
        <img rel="preload" src="../assets/picture/群姐.png" alt="群姐抖音账号截图"/>
      </div>
    </div>
    <div class="People-case text-box">
      <div class="case-text">
        <h4>人物案例二：小英</h4>
        <p>一个来自云南大山里，96年两个孩子，没有公婆，没有文化，在家种地养牛的女孩小英。
          借着一家人鲜明的人设，家庭冲突的张力，和小英让人难以理解的动手能力带来的搞笑反差，让小英在年轻人里爆火。
          小英是不幸的，她身上有一些农村女性的典型遭遇，恋爱脑上头，结婚后被迫扛起生活的重担艰难前行，
          无力摆脱。可她又是幸运的，她在这样的情况下依然乐观生活，靠分享生活却意外爆红，让更多人看到，
          有了支持自己的粉丝，自己生活的条件也在一点点改善。
        </p>
        <p> 为何说起“引导农村社会的发展呢”？互联网是伟大的，这让农村妇女小英的人生经历让更多人知道，
          有无数网友对她进行正确的引导——独立自身，教育孩子，学习经营，终于使农村女性小英迎来了人生的春天。
        </p>
      </div>
      <div class="case-image">
        <img rel="preload" src="../assets/picture/小英.png" style="width: 90%;" alt="小英抖音账号截图"/>
      </div>
    </div>
    <div class="text-box">
      <h2>2、现象分析</h2>
      <p style="text-indent: 2em">农村女性自媒体内容多样化，农村女性自媒体主体通过自媒体平台分享自己</p>
      <p>的农村生活、农业技术、农产品推广等内容，丰富了农村信息传播的渠道。</p>
      <p style="text-indent: 2em">根据调研数据显示，农村女性自媒体主体的内容主要包括农村生活经验分享、</p>
      <p>农产品推广、农业技术指导等，其中以农村生活经验分享最为受欢迎。</p>
    </div>
    <div>


      <div class="showExcel-button">
        <el-button class="-button-1" @click="showMenuExcel = 'douyin'">
          <div>
            基本情况（抖音）
          </div>
        </el-button>
        <el-button class="-button-2" @click="showMenuExcel = 'kuaishou'">
          <div>
            基本情况（快手）
          </div>
        </el-button>
      </div>
    </div>
    <div>
      <el-table
          class="showExcel excel-box"
          :data="douyinData"
          v-if="showMenuExcel === 'douyin'"
          stripe
          border
      >
        <el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="follower" label="粉丝数（万）"></el-table-column>
        <el-table-column prop="age" label="年龄" width="60px" align="center"></el-table-column>
        <el-table-column prop="address" label="地区"></el-table-column>
        <el-table-column prop="agencies" label="是否为机构运管" align="center"></el-table-column>
        <el-table-column prop="positioning" label="账号定位" align="center"></el-table-column>
        <el-table-column prop="content" label="视频主要内容"></el-table-column>
      </el-table>

      <el-table
          class="showExcel excel-box"
          :data="kuaishouData"
          v-if="showMenuExcel==='kuaishou'"
          stripe
          border
      >
        <el-table-column type="index" label="序号" width="60px" align="center"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="follower" label="粉丝数（万）"></el-table-column>
        <el-table-column prop="age" label="年龄" width="60px" align="center"></el-table-column>
        <el-table-column prop="address" label="地区"></el-table-column>
        <el-table-column prop="agencies" label="是否为机构运管" align="center"></el-table-column>
        <el-table-column prop="positioning" label="账号定位" align="center"></el-table-column>
        <el-table-column prop="content" label="视频主要内容"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

const douyinData = [
  {
    name: '李子柒',
    follower: 5483.4,
    age: '-',
    address: '四川绵阳',
    agencies: '是',
    positioning: '美食',
    content: '美食制作，家庭生活'
  },
  {
    name: '蜀中桃子姐',
    follower: 2201.4,
    age: '-',
    address: '四川自贡',
    agencies: '否',
    positioning: '美食',
    content: '美食制作，家庭生活'
  },
  {
    name: '潘姥姥',
    follower: 1950.4,
    age: '63',
    address: '安徽六安',
    agencies: '是',
    positioning: '美食',
    content: '美食制作，家庭生活'
  },
  {
    name: '罗姑婆',
    follower: 655.7,
    age: '70',
    address: '四川成都',
    agencies: '是',
    positioning: '搞笑',
    content: '情景表演，情感分享'
  },
  {
    name: '三支花',
    follower: 608.7,
    age: '-',
    address: '贵州遵义',
    agencies: '是',
    positioning: '搞笑',
    content: '情景表演，搞怪模仿'
  },
  {
    name: '乡村小乔',
    follower: 785.5,
    age: '29',
    address: '江苏连云港',
    agencies: '否',
    positioning: '生活',
    content: '家庭生活'
  },
  {
    name: '川乡小妹儿',
    follower: 561.2,
    age: '28',
    address: '四川雅安',
    agencies: '否',
    positioning: '美食',
    content: '家庭生活'
  },
  {
    name: '农村姑嫂百货',
    follower: 147.8,
    age: '32',
    address: '河南平顶山',
    agencies: '否',
    positioning: '刷情',
    content: '情景表演，搞怪模仿'
  }
]
const kuaishouData = [
  {
    name: '农村会姐',
    follower: 1458.5,
    age: '38',
    address: '河南濮阳',
    agencies: '否',
    positioning: '美食',
    content: '美食制作，家庭生活'
  },
  {
    name: '刘妈的日常生活',
    follower: 1451.5,
    age: '-',
    address: '内蒙古通辽',
    agencies: '是',
    positioning: '搞笑',
    content: '情景剧表演'
  },
  {
    name: '云南小花',
    follower: 981.5,
    age: '26',
    address: '云南大理',
    agencies: '否',
    positioning: '美食',
    content: '扶贫带货，创意表演'
  },
  {
    name: '乡野丽江娇子',
    follower: 607.9,
    age: '-',
    address: '云南丽江',
    agencies: '否',
    positioning: '美食',
    content: '美食制作，家庭生活、三农带货'
  }
]

let showMenuExcel = ref('douyin')
</script>

<style scoped>

.flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

.text-box {
  margin-top: 1em;
  margin-left: 2em;
  width: 100%;
  p {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 1em;
  }

  h1 {
    margin: 0 0 1em -1em
  }

  h2 {
    margin: 0 0 1em -.6em
  }
}

.People-case {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0 10px 10%;

  .case-text {
    width: 48%;
    margin: auto;
    padding-top: 40px;
    padding-right: 10px;
    padding-bottom: 30px;
    line-height: 22px;
    font-size: 18px;
    background-color: rgba(7, 7, 7, 0.2) !important;
    border-radius: 8px; /* 添加圆角 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */

    p {
      text-indent: 2em;
    }

    h4 {
      margin: 0 0 1em 2em
    }
  }

  .case-image {
    width: 50%;
    margin: auto 0;

    img {
      width: 80%;
      height: auto;
    }
  }
}

.showExcel-button {
  width: 100%;
  height: 10%;
  background-color: rgba(255, 255, 255, 0.3); /* 导航栏背景色 */
  color: #fff; /* 导航栏文字颜色 */
  display: flex;
  flex: content;
  flex-direction: row;

  .-button-1 {
    float: left;
    width: 50%;
  }

  .-button-2 {
    float: right;
    width: 50%;
  }

  div {
    width: 70%;
    word-break: auto-phrase;
  }
}


.excel-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  overflow: auto;

  .showExcel {
    margin-bottom: 30px;
  }

}

.excel-box::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
}

@media screen and (max-width: 430px) {
  .People-case {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .case-text {
      width: 90%;
      margin: 20px auto;
      padding: 5px 0 10px;

      p {
        margin: 0 0 0 5px;
        padding-right: 5px;
      }

      h4 {
        margin: 5px 0 10px 10px;
      }

    }

    .case-image {
      height: auto;
      width: 100%;
      margin: 0 5%;

      img {
        width: 90%;
        border-radius: 8px;
      }
    }
  }

  .text-box {
    margin: 0;
    padding: 0;

    h1 {
      margin-left: 1em;
    }

    h2 {
      margin-left: 1.4em;
    }
  }
}
</style>