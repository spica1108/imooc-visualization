<script setup>

import { ref } from 'vue'
import HorizontalBar from './components/HorizontalBar.vue'
import RadarBar from './components/RadarBar.vue'
import Relation from './components/Relation.vue'
import TotalData from './components/TotalData.vue'
import MapChart from './components/MapChart.vue'
import VerticalBar from './components/VerticalBar.vue'
import RadiueBar from './components/RadiueBar.vue'
import WordCloud from './components/WordCloud.vue'
import { getVisualization } from '@/api/visualization.js'

// 获取数据
const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  console.log(data.value);
}
loadData()

// 每间隔三秒钟再去获取数据
setInterval(() => {
 loadData()
}, 3000)

</script>


<template>

<!-- 数据放到了data变量中，有数据时进行渲染 -->

 <div
  class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-5 flex overflow-hidden"
  v-if="data"
 >

 <!-- 左 -->
  <div class="flex-1 mr-5 bg-slate-800/50 p-3 flex flex-col">
   <!-- 横向柱状图 -->
    <!-- 父传子，传递指定数据 -->
   <HorizontalBar class="h-1/3 box-border pb-4" :data="data.regionData"/>
   <!-- 雷达图 -->
   <RadarBar class="h-1/3 box-border pb-4" />
   <!-- 数据传递关系图 -->
   <Relation class="h-1/3" />
  </div>

  <!-- 中 -->
  <div class="w-1/2 mr-5 flex flex-col">
   <!-- 数据展示图 -->
   <TotalData class="bg-slate-800/50 p-3" />
   <!-- 地图可视化 -->
   <MapChart class="bg-slate-800/50 p-3 mt-4 flex-1" />
  </div>

  <!-- 右 -->
  <div class="flex-1 bg-slate-800/50 p-3 flex flex-col">
   <!-- 竖向柱状图 -->
   <VerticalBar class="h-1/3 box-border pb-4" />
   <!-- 环形资源站比图 -->
   <RadiueBar class="h-1/3 box-border pb-4" />
   <!-- 文档云图 -->
   <WordCloud class="h-1/3 box-border" />
  </div>

 </div>
</template>

<style lang="scss" scoped></style>
