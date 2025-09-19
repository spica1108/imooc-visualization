<script setup>
import { ref,onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
 data: {
  type: Object,
  required: true
 }
})
console.log(props.data);

//1.初始化echarts实例
let mChart = Null
const target = ref(null)
//在onMounted周期后获取dom
onMounted(() => {
 mChart = echarts.init(target.value)
 // 渲染 echarts
 renderChart()
})

//2.构建option配置对象
//构建方法绘制echarts
const renderChart = () => {
  const option = {
    //X轴展示数据
    xAxis:{},
    //Y轴展示数据
    yAxis:{},
    //图表绘制的数据，对应上下左右
    grid:{},
    //核心配置
    series:[]
  }


 //3.通过实例.setOptions(option)
  mChart.setOption(options)
}



</script>

<template>
  <div>【大区数据信息】</div>
  <div ref="target" class="w-full h-full"></div>
</template>

<style lang="scss" scoped></style>