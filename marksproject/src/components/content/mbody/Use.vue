<template>
  <div class="use">
    <div class="layout">
      <h1 class="use-tit">即刻使用</h1>
      <div class="use-cont">
        <div class="use-left">
          <div class="use-item0">
          </div>
          <div class="use-item1">
            <div class="btns">
              <button class="btn-start" @click="useClick">点击启用</button>
            </div>
          </div>

        </div>
        <div class="use-middle">
          <img src="images/csh.png" alt="" width="600">
          <div class="ck">
            <img src="images/mask.jpg" class="kozhao" >
          </div>
        </div>
        <div class="use-right">
          <div class="use-item item-4">
            <p class="use-item-name">连接</p>
            <div class="use-item-desc">
              <p>连接实时监控设备</p>
              <p>检测录像</p>
            </div>
          </div>
          <div class="use-item item-5">
            <p class="use-item-name">识别</p>
            <div class="use-item-desc">
              <p>精准识别人脸</p>
              <p>检测是否佩戴口罩</p>
            </div>
          </div>
          <div class="use-item item-6">
            <p class="use-item-name">警报</p>
            <div class="use-item-desc">
              <p>发现未带口罩人物</p>
              <p>立即警报</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Use",
    methods: {
      useClick(){
        //跳转
        this.$router.push('/use')
      }
    }
  }
</script>

<style scoped>
  @import"../../../assets/css/index.css";
</style>
