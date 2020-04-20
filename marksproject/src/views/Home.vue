<template>
  <div>
  <div class="mod-header">
    <div class="layout">
      <div class="nomask">
        <div class="nomask_left">
          <h1>口罩识别平台</h1>
          <p>Mask Recognition platform</p>
        </div>
        <div class="nomask_right">
          <ul>
            <li><a src="#">技术文档</a></li>
            <li><a src="#">实时监控</a></li>
            <li><a src="#">视频检测</a></li>
            <li><a src="#">多图检测</a></li>
            <li><a src="#">单图检测</a></li>
            <li><a src="#">首页</a></li>
          </ul>
        </div>
      </div>
      <div class="mask">
        <div class="mask_left">
          <h1>口罩识别平台</h1>
          <p>Mask Recognition platform</p>
        </div>
        <div class="mask_right">
          <ul>
            <li><a src="#">技术文档</a></li>
            <li><a src="#">实时监控</a></li>
            <li><a src="#">视频检测</a></li>
            <li><a src="#">多图检测</a></li>
            <li><a src="#">单图检测</a></li>
            <li><a src="#">首页</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
      <img src="../assets/images/renwu.png" class="banner-gif">
    </div>
  </div>

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
          <img src="../assets/images/csh.png" alt="" width="600">
          <div class="ck">
            <img src="../assets/images/mask.jpg" class="kozhao" >
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
  <div class="advan">
    <div class="layout">
      <h1>产品优势</h1>
      <ul>
        <li class="advan-item">
          <i class="ico-1"></i>
          <h3>厂商成本低</h3>
          <p>基于软件平台的开发，上线即可使用，硬件合作伙伴只需要专注硬件即可获得完整解决方案</p>
        </li>
        <li class="advan-item">
          <i class="ico-2"></i>
          <h3>领先AI技术</h3>
          <p>数据模型培训，能精准地进行人脸检索、动态检测、口罩识别。正确率/差错率/通过率等各项指标领先</p>
        </li>
        <li class="advan-item">
          <i class="ico-3"></i>
          <h3>完整解决方案</h3>
          <p>可直接线上使用，亦可将口罩识别模型与各种硬件设备结合，实现无人看管的通行等方案。</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="scene">
    <div class="layout">
      <h1>适用场景</h1>
      <ul>
        <li class="scene-item">
          <i class="ico-1"></i>
          <div class="des">
            <h3>楼宇/园区门禁通行</h3>
            <p>应用于景区、学校、小区、CBD等楼宇或园区的通行</p>
          </div>
        </li>
        <li class="scene-item">
          <i class="ico-2"></i>
          <div class="des">
            <h3>员工/访客管理系统</h3>
            <p>应用于门禁通行，管理员工、访客的出入情况</p>
          </div>
        </li>
        <li class="scene-item">
          <i class="ico-3"></i>
          <div class="des">
            <h3>交通运输关卡通行设备</h3>
            <p>应用于车站、地铁站等通行场所、管理大量人员出入</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="demo">
    <div class="layout">
      <div class="znc">
        <img src="../assets/images/zcfb.png" height="150" >
      </div>
    </div>
  </div>
  <div class="mod-buttom">
    <div class="layout">
      <div class="buttom1">
        <div class="buttom1-left">
          <ul>
            <li><a src="#">首页</a></li>
            <li><a src="#">功能体验</a></li>
            <li><a src="#">关于我们</a></li>
            <li><a src="#">技术文档</a></li>
          </ul>
        </div>
        <div class="buttom1-right">
          <p>Mask Recognition platform</p>
        </div>
      </div>
      <div class="buttom2">
        <div class="buttom2-center">
          <div class="buttom2-left">
            <h3>XXXXXX团队</h3>
            <p>海南省海口市美兰区人民街道58号海南大学</p>
            <p>邮编：570000</p>
            <p>联系电话：15967678263 / 13879674583</p>
          </div>
          <div class="buttom2-right">
            <p>意见反馈</p>
            <p>2830524481@qq.com</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

 <script>
// @ is an alias to /src
export default {

  name: 'Home',
  methods: {
    useClick(){
      //跳转
      this.$router.push('/marksTest')
    }
  },
  components: {
  }
}
</script>
<style scoped>
  @import"../assets/css/header.css";
  @import"../assets/css/index.css";
  @import"../assets/css/buttom.css";
</style>
