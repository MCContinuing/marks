<template>
  <div class="banner">
    <div class="layout clearfix">
      <div class="banner-intro">
        <h1 class="banner-name">口罩检测</h1>
        <p class="banner-des">
          口罩识别技术基于深度学习算法和海量数据集，对图片和视频源中面部特征及口罩进行提取分析。
          可精准实现人脸口罩检测，为特定时期特定场所检测戴口罩人员出入等应用场景提供有力的技术支持。
        </p>
        <h2 class="banner-name2">实时监控警报</h2>
        <p class="banner-des">
          该平台可与监控设备连接获取实时录像，若发现未戴口罩出入者即引发警报器，提醒相关负责人员有未戴口罩者出入。
          为实时监控人员出入场所实现了人工智能监控警报服务。
        </p>
      </div>
      <img src="images/renwu.png" class="banner-gif">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style scoped>
  @import"../../../assets/css/index.css";
</style>
