<template>
  <div >
    <div class="box" >
      <div class="lay">
        <!-- 头部的盒子 -->
        <header>
          <div class="show-control">
            <span class="show-control-item " :class="{active: index===1}" @click="itemClick(1)">人脸识别</span>
            <span class="show-control-item"  :class="{active: index===2}" @click="itemClick(2)">统计分析</span>
          </div>
          <h1>人脸识别门禁系统</h1>
          <div class="showTime"></div>
        </header>

        <keep-alive>
          <router-view></router-view>
        </keep-alive>


      </div>


    </div>

  </div>
</template>

<script>

  import echarts from 'echarts';


  let t = null;
  t = setTimeout(time, 1000); //開始运行
  function time() {
    clearTimeout(t); //清除定时器
    let dt = new Date();
    let y = dt.getFullYear();
    let mt = dt.getMonth() + 1;
    let day = dt.getDate();
    let h = dt.getHours(); //获取时
    let m = dt.getMinutes(); //获取分
    let s = dt.getSeconds(); //获取秒
    document.querySelector(".showTime").innerHTML =
      "当前时间：" +
      y +
      "年" +
      mt +
      "月" +
      day +
      "-" +
      h +
      "时" +
      m +
      "分" +
      s +
      "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
  }
  export default {
    name: "Usage",

    data() {

      return {
        index:1,
        time:new Date(),

      }
    },

    mounted() {


    },
    methods: {
      itemClick(index){
        this.index = index;
        if(index===1){
          this.$router.replace('/faceBigShow')
        }
        if(index===2){
          this.$router.replace('/faceSmallShow')
        }
      },


    },
  }


</script>

<style scoped>
  @import "../../assets/css/usage.css";
  .amap-demo {
    position: absolute;
    width: 380px;
    height:380px;
    border-radius: 50%;
    /*background-color: #c2c8ff;*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cover{
    position: absolute;
    width: 90px;
    height: 28px;
    background-color: #031645;
    text-align: center;
    bottom: 40px;
    left: 50px;
    color: #c2c8ff;
    line-height: 28px;
  }



</style>
