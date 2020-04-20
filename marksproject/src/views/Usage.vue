<template>
  <div>
      <van-tabs v-model="active" >
        <van-tab title="单图检测" @click="showNoResult">
          <div class="file_uploader">
            <van-uploader :after-read="afterRead" :max-count="1" multiple v-model="fileList"
                          upload-text="单图检测" capture="camera" accepte="image/*"/>
            <van-button type="info" block @click="fileUploader">单图上传检测</van-button>
          </div>
          <div v-if="success">
          <table class="show_table">
            <thead>
            <tr >
              <td class="show_th">图片展示</td>
              <td class="show_th">人数</td>
              <td class="show_th">戴口罩者</td>
              <td class="show_th">未戴口罩者</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in imgsList">
              <td class="show_td_img">
                <van-image class="img_show"  :src="item.urls[0]" @click="showImage(item.urls[0])"/>
              </td>
              <td class="show_td">{{item.msg}}</td>
              <td class="show_td">{{item.msg}}</td>
              <td class="show_td">{{item.msg}}</td>
            </tr>
            </tbody>
          </table>
          </div>
        </van-tab>

        <van-tab title="多图上传" @click="showNoResult">
        <div class="file_uploader">
          <van-uploader :after-read="afterRead" :max-count="9" multiple v-model="fileList"
                        upload-text="多图检测" capture="camera" accepte="image/*"/>
          <van-button type="info" block @click="fileUploader">多图上传检测</van-button>
          <!--测试图片上传效果-->
          <div v-if="success">
            <table class="show_table">
              <thead>
              <tr >
                <td class="show_th">图片展示</td>
                <td class="show_th">人数</td>
                <td class="show_th">戴口罩者</td>
                <td class="show_th">未戴口罩者</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in imgsList">
                <td class="show_td_img">
                  <van-image class="img_show"  :src="item.urls[0]" @click="showImage(item.urls[0])"/>
                </td>
                <td class="show_td">{{item.msg}}</td>
                <td class="show_td">{{item.msg}}</td>
                <td class="show_td">{{item.msg}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </van-tab>

        <van-tab title="视频上传">
          <div class="image_uploader">
            <van-uploader :after-read="afterRead" :max-count="9" multiple v-model="fileList2"
                          upload-text="视频检测" capture="camcorder" accepte="video/*"/>
            <van-button type="info" block @click="fileUploader2">视频检测</van-button>
            <!--测试视频上传效果-->
            <div v-if="success2" class="show_video">
              <video height="300" controls="controls" id="video" preload="auto">&ndash;&gt;-->
                  <source :src="videoUrl">
              </video>
            </div>
          </div>
        </van-tab>
        <van-tab title="实时监控">
          <div class="video_btn">
            <button @click="realTimePlays">点击播放实时录像</button>
          </div>
          <div v-if="success3" class="show_video">
            <video height="300"  preload="auto">
              <source :src="realTimeUrl">
            </video>
          </div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
  import {ImagePreview} from "vant";
  // import {request} from "../network/request";

  export default {
    name: "Usage",

    data() {
      return {
        success: false,
        success2: false,
        success3: false,
        fileList2:[],
        fileList: [],
        active: 0,
        realTimeUrl: 0,
        videoUrl:"",
        videoStop:true,
        imgsList:[]
      }
    },

    methods: {
      // //检测状态清除filelist
      showNoResult(){
        // this.success = false
      console.log("变数了")
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
       * 图片文件上传
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
          console.log("循环了")
          // 设置文件上传状态
          this.setFileUploaderStatus(0, '上传中')
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

          // this.$axios.post("analysisImage", fd, config).then(res => {
          this.$axios.post("image_process/image", fd, config).then(res => {
            console.log(res.data)
            this.imgsList[i] = res.data
            // this.personNums[i] = res.data.personNum
            // this.noMaskNums[i] = res.data.noMaskNum
            this.success = true
          }).catch(res => {
            this.setFileUploaderStatus(1, '上传失败')
            console.log(res)
          })
        }
        this.fileList = []
        this.success = true
      },

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
        // 检测是否选择图片
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

        this.$axios.post("image_process/image", fd, config).then(res => {
          console.log(res.data)
          this.fileList2 = []
          this.videoUrl = res.data.urls[0]
          this.success2 = true
        }).catch(res => {
          this.setFileUploaderStatus2(1, '上传失败')
          console.log(res)
        })
      },


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
      realTimePlays(){
        console.log('点击了')
        while(this.videoStop){
          setTimeout(() =>{
            this.$axios.post("RunTimeCameral").then(res => {
              console.log(res.data)
              this.realTimeUrl = res.data.urls
              this.videoStop=res.data.msg
              this.success3 = true
              this.videoStop = res.data.state
            }).catch(res => {
              this.setFileUploaderStatus(1, '上传失败')
              console.log(res)
            })
          },1000)
        }
      },
    }
  }


</script>

<style scoped>
  @import"../assets/css/usage.css";

</style>
