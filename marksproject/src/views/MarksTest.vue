<template>
  <div class="laguse">
    <div class="layout">
<!--      <van-tabs v-model="active" animated color="#fff" background="#5159ff"-->
<!--                title-active-color="#D8ECFF" title-inactive-color="#fff">-->
        <van-tabs v-model="active" animated color="#6699ff" background="#f2f2f5"
                  title-active-color="#6699ff" title-inactive-color="rgba(0,0,0,0.7)">
        <van-tab title="单图检测" @click="showNoResult" color="#000">
          <div class="markstest_doem">
            <div class="demo-box">
              <div class="demo-opt-left" >
                <div class="img_preview">
                  <label class="demo-rs-label">原始图片</label>
                  <!--                  <img src="../assets/images/renwu.png" style="width: auto; height: 100%; margin-top: 0px;">-->
                  <van-image   class="imgs_show" :src="imgurltest" @click="showImage(imgurltest)"/>
                  <!--                  <van-image class="img_show"  :src="imgurltest" @click="showImage(imgurltest)"/>-->
                </div>
                <div class="form-row">
                  <van-uploader ::after-read="afterRead" :max-count="1" multiple v-model="fileList0"
                                upload-text="单图检测" capture="camera" accepte="image/*">
<!--                    <van-button icon="photo" type="primary" color="#0052d9">本地上传</van-button>-->
                    <van-button icon="photo" type="primary" color="#6699ff">本地上传</van-button>
                  </van-uploader>
                  <div class="marks_btn">
                    <van-button type="info" icon="checked" block @click="fileUploader0" color="#6699ff">检测</van-button>
                  </div>
                </div>
              </div>
              <div class="demo-opt-right " >
                <div class="img_result">
                  <label class="demo-rs-label">检测结果</label>
                  <!--                  <van-image :src="imgurltest" @click="showImage(imgurltest)"/>-->
                  <van-image class="imgs_show" :src="imgNewUrltest" @click="showImage(imgNewUrltest)"/>
                </div>
                <div v-if="success" class="form-row">
                  <!--                <div v-if="true" class="form-row">-->
                  <div class="show_nums">
                    <p>共检测出{{persontest}}人，未带口罩{{nomaskperson}}人</p>
                  </div>
                  <div class="clear_btn0">
                    <van-button type="info" icon="close" block @click="clearList0" color="#0052d9">清除</van-button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="多图检测" @click="showNoResult">
          <div class="markstest_doem2">
            <div class="file_uploader ">
              <div class="imgs_po">
                <van-uploader :after-read="afterRead" :max-count="20" multiple v-model="fileList"
                              upload-text="多图检测" capture="camera" accepte="image/*" />
              </div>
              <div class="imgs_btn">
                <div class="imgs_btn1">
                  <van-button type="info"  block color="#6699ff" @click="fileUploader" >点击检测</van-button>
                </div>
                <div class="imgs_btn2">
                  <van-button type="info" icon="close" block  color="#6699ff" @click="clearList" >清除列表</van-button>
                </div>
              </div>
            </div>
            <div v-if="success2">
<!--            <div v-if="true">-->
              <table class="show_tables">
                <thead>
                <tr >
                  <td class="show_ths">图片展示</td>
                  <td class="show_ths">人数</td>
                  <td class="show_ths">戴口罩者</td>
                  <td class="show_ths">未戴口罩者</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in imgsList" >
                  <td class="show_td_img">
<!--                    <van-image class="img_show"  :src="item.urls[0]" @click="showImage(item.imageNewUrl)"/>-->
                    <van-image class="img_show"  :src="item.imageNewUrl" @click="showImage(item.imageNewUrl)"/>
                  </td>
                  <td class="show_tds">{{item.personNum}}人</td>
                  <td class="show_tds">{{item.maskNum}}人</td>
                  <td class="show_tds">{{item.noMaskNum}}人</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </van-tab>
        <van-tab title="视频检测">
          <div class="video_uploader">
            <!--上传视频-->
            <div class="realtime_video">
              <div class="show_video">
                <video  width="800" height="400" controls="controls" id="playVideos" preload="auto">
                  <source :src="videoUrl" type="video/mp4">
                  <source :src="videoUrl" type="video/webm">
                  <source :src="videoUrl" type="video/ogg">
                </video>
              </div>
            </div>
            <div class="realtime_but">
              <div class="realtime_btn1">
                <van-uploader ::after-read="afterRead" v-model="fileList2"
                              upload-text="视频检测" accepte="video/*">
                  <van-button  icon="video" type="primary" color="#6699ff" >请选择视频文件</van-button>
                </van-uploader>
              </div>
              <div class="realtime_btn2">
                <van-button type="info" icon="checked" color="#6699ff" block @click="fileUploader2" >检测</van-button>
              </div>
              <audio id="audio" src=""></audio>
            </div>
          </div>
        </van-tab>
        <van-tab title="实时监控">
          <div class="realtime">
            <div class="video_left">
              <div class="realtime-img">
                <img  class="imgs_show" :src="realTimeUrl">
<!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
              </div>
            </div>
            <div class="video_right">
              <div class="form-row-video">
                <div class="form-video-1">
                  <van-button type="info" icon="play" block @click="realTimePlays" color="#6699ff">开始播放</van-button>
                </div>
                <div class="form-video-2">
                  <!--                    <van-button type="info" icon="checked" block @click="fileUploader2" color="#0052d9">检测</van-button>-->
                  <!--                    <van-button type="info" icon="checked" block @click="fileUploader2" color="rgb(3 ,22, 69)">检测</van-button>-->
                  <van-button type="info" icon="stop" block @click="runtimeend" color="#6699ff">停止播放</van-button>
                </div>
                <div class="form-video-3">
                  <h2>视频检测结果</h2>
                  <div class="form-video-31">
                    <h3>视频内存在人数：</h3>
                    <p>{{videopersonNum}}人</p>
                    <h3>其中已戴口罩者：</h3>
                    <p>{{videoMaskNum}}人</p>
                    <h3>其中未戴口罩者：</h3>
                    <p>{{videoNoMaskNum}}人</p>
                    <h3>其中体温异常者：</h3>
                    <p>0人</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

      </van-tabs>
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
              <h3>团队：划水使我快乐</h3>
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
  import {ImagePreview} from "vant";

  export default {
    name: "MarksTest",

    data() {
      return {
        success: false,
        success2: false,
        success3: false,
        fileList2:[],
        fileList: [],//图片列表
        fileList0:[],//单图图片
        active: 0,
        realTimeUrl:"",

        videoUrl:"",
        videopersonNum:0,
        videoMaskNum:0,
        videoNoMaskNum:0,
        videoStart:true,
        imgsList:[],//循环获取总data
        imgurltest:"https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",//单图使用图片
        imgNewUrltest:"https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",//单图使用图片
        persontest:0,//单图检测出的人
        nomaskperson:0,//单图未戴口罩者

        sound: 0,//为1时启动报警
      }
    },
    // watch:{
    //   'errCount': function(){
    //     this.aplayAudio()
    //   }
    // },
    methods: {
      // //监听异常发生，并语音播报
      //
      // aplayAudio(){
      //   const audio = document.getElementById('audio')
      // },
      speckText(str) {
        let url= "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=6&text=" + encodeURI(str);
        let n = new Audio(url);
        n.src = url;
        if(this.sound){
          n.play(); // $("...").play(); // var sound = new Sound(request); // sound.play();
        }else {
          n.pause()
        }
      },

      // //检测状态清除filelist
      showNoResult(){
        // this.success = false
        console.log("变数了")
        this.success2=false
      },

      runtimeend(){
        this.videoStart = false
      },
      clearList0(){
        this.imgurltest="https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",//单图使用图片
          this.imgNewUrltest="https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",//单图使用图片
          this.persontest=0,//单图检测出的人
          this.nomaskperson=0//单图未戴口罩者
        this.success = false
      },
      clearList(){
        this.imgsList = []
        this.success2 = false
      },
      /**
       * 测试使用
       */
      getData() {
        //   request({
        //     url:'/....'
        //   }).then(res => {
        //     console.log(res.data);
        //   }).catch(err=>{
        //     console.log(err)
        //    })
        this.$axios.get('image_process/image').then((response) => {
          console.log(response.data)
        }).catch((response) => {
          console.log(response)
        })
      },

      /**
       * 图片选择后的回调方法
       */
      afterRead(files) {
        for (let i = 0; i < files.length; i++) {
          console.log(files[i].file)
          console.log(files[i].file.name)
        }
      },
      /**
       * 单图文件上传
       *
       */
      fileUploader0() {
        console.log('点击了')
        // 检测是否选择图片
        if (this.fileList0.length === 0) {
          this.$notify({type: 'warning', message: '请选择需要的图片'})
          return
        }

        // 设置文件上传状态
        // this.setFileUploaderStatus(0, '上传中')

        // 将图片进行FormData处理
        let fd = new FormData()
        let images = this.fileList0
        fd.append('images', images[0].file, images[0].file.name)

        // 设置请求头
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        // 发送post请求
        this.$axios.post("analysisImage", fd, config).then(res => {
          //TODO：具体自己逻辑部分
          console.log(res.data)
          this.fileList0 = []
          // this.imgurltest  = res.data.urls[0]
          this.imgurltest = res.data.imageUrl
          console.log("data中url: "+res.data.imageUrl);
          console.log("从data获取的url: " + this.imgurltest)
          // this.imgNewUrltest = res.data.urls[0]
          this.imgNewUrltest  = res.data.imageNewUrl
          console.log("data中newurl: "+res.data.imageNewUrl);
          console.log("从data获取的newurl: " + this.imgNewUrltest)
          // this.persontest = res.data.msg
          this.persontest = res.data.personNum
          // this.nomaskperson = res.data.msg
          this.nomaskperson = res.data.noMaskNum
          this.success = true
        }).catch(res => {
          // TODO 失败将图片上传状态设置为失败的状态，可以写个定时器，一段时间后将状态改为done
          // this.setFileUploaderStatus(1, '上传失败')
          console.log(res)
        })
      },

      /**
       * 多图文件上传
       */
      fileUploader() {
        console.log('点击了')
        console.log(this.fileList.length)
        // 检测是否选择图片
        if (this.fileList.length === 0) {
          this.$notify({type: 'warning', message: '请选择需要检测的文件'})
          return
        }
        this.imagelenth = this.fileList.length
        let images = this.fileList
        for(let i = 0; i < images.length; i++){
          console.log("循环"+i+"次了")
          // 设置文件上传状态
          // this.setFileUploaderStatus(0, '上传中')
          // 将图片进行FormData处理
          let fd = new FormData()
          console.log(images[i].file)
          fd.append('images', images[i].file, images[i].file.name)

          // 设置请求头
          let config = {
            headers: {
              //返回数据类型
              'Content-Type': 'multipart/form-data'
            }
          }

          this.$axios.post("analysisImage", fd, config).then(res => {
            // this.$axios.post("image_process/image", fd, config).then(res => {
            console.log(res.data)
            this.imgsList[i] = res.data
            // this.imgurltest = this.imgsList[0].urls[0]
            // this.nomaskperson = this.imgsList[0].msg
            // this.persontest = this.imgsList[0].msg
            // this.imgurltest = this.imgsList[0].imageUrl
            // this.imgNewUrltest = this.imgsList[0].imageNewUrl
            // this.persontest= this.imgsList[0].personNum
            // this.nomaskperson = this.imgsList[0].noMaskNum
            this.success2 = true
          }).catch(res => {
            this.setFileUploaderStatus(1, '上传失败')
            console.log(res)
          })
        }
        this.fileList = []
        this.success2 = true
        console.log(this.imgsList)
      },

      playVideo(url){
        let vdo = document.getElementById("playVideos")
        vdo.src = url;
        vdo.play();
      },
      // playVideo2(url){
      //   let vdo = document.getElementById("playVideos2")
      //   vdo.src = url;
      //   vdo.play();
      // },
      //   // 发送请求
      //   request({
      //     url:'/....'
      //   }).then(res => {
      //     //TODO：具体自己逻辑部分
      //     console.log(res.data.urls)
      //     this.fileList = []
      //     this.imageList = res.data.urls
      //   }).catch(err=>{
      //     // TODO 失败将图片上传状态设置为失败的状态，可以写个定时器，一段时间后将状态改为done
      //     this.setFileUploaderStatus(1, '上传失败')
      //     console.log(err)
      //   })
      // },
      /**
       * 视频文件上传//////////////////////////////////////////////////////////////////////////////////////////
       */
      fileUploader2() {
        console.log('点击了')
        console.log(this.fileList2.length)
        // 检测是否选择文件
        if (this.fileList2.length === 0) {
          this.$notify({type: 'warning', message: '请选择需要检测的文件'})
          return
        }

        // 设置文件上传状态
        this.setFileUploaderStatus2(0, '上传中')

        // 将图片进行FormData处理
        let fd = new FormData()
        let video = this.fileList2
        for (let i = 0; i < video.length; i++) {
          // console.log(images[i].file)
          fd.append('images',video[i].file, video[i].file.name)
        }
        // 设置请求头
        let config = {
          headers: {
            //返回数据类型
            'Content-Type': 'multipart/form-data'
          }
        }

        this.$axios.post("analysisVideo", fd, config).then(res => {
          console.log(res.data)
          this.fileList2 = []
          this.videoUrl = res.data.storePath
          console.log("获取到视频url: "+res.data.storePath)
          console.log("使用视频url" + this.videoUrl)
          this.playVideo(this.videoUrl)
          // this.videoUrl = res.data.urls[0]
        }).catch(res => {
          this.setFileUploaderStatus2(1, '上传失败')
          console.log(res)
        })
      },
      /**
       * 实时监控上传
      */
      realTimePlays(){
        let config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        this.$axios.get("analysisRunTimeCameral?videoStart="+ this.videoStart, config ).then(res => {
          this.realTimeUrl = res.data.imageNewUrl
          this.videopersonNum = res.data.personNum
          this.videoMaskNum = res.data.maskNum
          this.videoNoMaskNum =res.data.noMaskNum
          this.sound = res.data.noMaskNum
          console.log("获取到视频url: "+res.data.imageNewUrl)
          console.log("使用视频url" + this.realTimeUrl)
          console.log("播放了")
          console.log(this.videoStart)
          // this.playVideo2(this.realTimeUrl)
          if(this.sound !== 0){
            this.speckText("警报")
          }
          if(this.videoStart){
            setTimeout(()=>{
              this.realTimePlays()
            },50)
          }
          else {
            this.$axios.get("analysisRunTimeCameral?videoStart="+ this.videoStart, config ).then(res => {
            }).catch(err=>{
              console.log(err)
            })
            console.log("停止了")
            this.videoStart=true
            return
          }
        }).catch(err => {
          console.log(err)
        })
      },

      // realTimePlays(){
      //   this.$axios.post("analysisRunTimeCameral",this.videoStart).then(res => {
      //     this.realTimeUrl = res.data.storePath
      //     this.videopersonNum = res.data.personNum
      //     this.videoMaskNum = res.data.maskNum
      //     this.videoNoMaskNum =res.data.noMaskNum
      //     this.sound = res.data.noMaskNum
      //     console.log("获取到视频url: "+res.data.storePath)
      //     console.log("使用视频url" + this.realTimeUrl)
      //     console.log("播放了")
      //     console.log(this.videoStart)
      //     this.playVideo2(this.realTimeUrl)
      //     if(this.sound !== 0){
      //       this.speckText("警报")
      //     }
      //     if(this.videoStart){
      //       setTimeout(()=>{
      //         this.realTimePlays()
      //       },50)
      //
      //     }
      //     else {
      //       this.$axios.post("analysisRunTimeCameral",this.videoStart ).then(res => {
      //       }).catch(err=>{
      //         console.log(err)
      //       })
      //       console.log("停止了")
      //       this.videoStart=true
      //       return
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // },
      /**
       * 预览图片/////////////////////////////////////////////////////////////////////////////////////////////////
       */
      showImage(src) {
        console.log(src)
        ImagePreview([src])
        const instance = ImagePreview([src]);
        setTimeout(() => {
          instance.close();
        }, 2000);
      },
      /**
       * 设置文件上传状态
       *
       */

      setFileUploaderStatus(index, msg) {
        // uploading 上传中 failed 失败 done 完成
        let status = ['uploading', 'failed', 'done']
        for (let i = 0; i < this.fileList.length; i++) {
          this.fileList[i].status = status[index]
          this.fileList[i].message = msg
        }
      },
      setFileUploaderStatus2(index, msg) {
        // uploading 上传中 failed 失败 done 完成
        let status = ['uploading', 'failed', 'done']
        for (let i = 0; i < this.fileList2.length; i++) {
          this.fileList2[i].status = status[index]
          this.fileList2[i].message = msg
        }
      },

      /**
       * 调用js方法，并且接收参数
       */
      showInfoFromJava(msg) {
        this.webToJs = msg
        console.log(msg)
        // alert("来自客户端的信息：" + msg);
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////////////
      /**
       * 循环获取实时监控录像
       */

    }
  }
</script>

<style scoped>
  @import"../assets/css/markstest.css";
  @import "../assets/css/buttom.css";
</style>
