<template>
 <div>
   <!--      主体部分-->
   <section class="mainbox">
     <div class="column">
       <div class="panel bar">
         <h2>人流量-戴口罩人数百分比</h2>
         <div class="chart">
         </div>
         <div class="panel-footer"></div>
       </div>
       <div class="panel bar panel-small">
         <h2>实时监控总览</h2>
         <div class="chart">
           <div class="videos">

             <div class="video-around bigShow-img" @click="goSmallShow(0)">
               <img  class="img-show" :src="realTimeUrl">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>
             <div class="video-around bigShow-img">
               <img  class="img-show" :src="imgurls">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>
             <div class="video-around bigShow-img" >
               <img  class="img-show" :src="imgurls">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>
             <div class="video-around bigShow-img" >
               <img  class="img-show" :src="imgurls">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>
             <div class="video-around bigShow-img" >
               <img  class="img-show" :src="imgurls">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>
             <div class="video-around bigShow-img" >
               <img  class="img-show" :src="imgurls">
               <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
             </div>

           </div>
         </div>
         <div class="panel-footer"></div>
       </div>
     </div>
     <div class="column">
       <!-- no模块制作 -->
       <div class="no">
         <div class="no-hd">
           <ul>
             <li>12</li>
             <li>10</li>
           </ul>
         </div>
         <div class="no-bd">
           <ul>
             <li>检测到人数</li>
             <li>戴口罩人数</li>
           </ul>
         </div>
       </div>
       <!-- 地图模块 -->
       <div class="map">
         <div class="map1"></div>
         <div class="map2"></div>
         <div class="map3"></div>
         <div class="chart">
           <amap  vid="amap" :center="center" :zooms="zooms"
                    mapStyle="amap://styles/ad8448e7f8ce54067517cf5926fff90e"  >

             <amap-text
               :position="position1"
               :anchor="anchor"
               text="监控1"
               :dom-style="style"
               draggable
               @click="goSmallShow(0)"
             />
             <amap-marker
               :position="position1"
             />
             <amap-text
               :position="position2"
               :anchor="anchor"
               text="监控2"
               :dom-style="style"
               draggable
             />
             <amap-marker
               :position="position2"
             />
             <amap-text
               :position="position3"
               :anchor="anchor"
               text="监控3"
               :dom-style="style"
               draggable
             />
             <amap-marker
               :position="position3"
             />
             <amap-text
               :position="position4"
               :anchor="anchor"
               text="监控4"
               :dom-style="style"
               draggable
             />
             <amap-marker
               :position="position4"
             />
             <amap-text
               :position="position5"
               :anchor="anchor"
               text="监控5"
               :dom-style="style"
               draggable
             />
             <amap-marker
               :position="position5"
             />
           </amap>

           <div class="cover">海大(海甸校区)</div>
         </div>
       </div>
     </div>
     <div class="column">
       <div class="panel bar2">
         <h2>摄像头工作实时统计</h2>
         <div class="chart">图表</div>
         <div class="panel-footer"></div>
       </div>
       <div class="panel panel2 line2">
         <h2>当日警报情况统计</h2>
         <div class="chart2">图表</div>
         <div class="panel-footer"></div>
       </div>
     </div>
   </section>
 </div>
</template>

<script>

  import echarts from 'echarts';
  import {CHANGEINDEX} from "../../store/mutations-types";


  export default {
    name: "BigShow",

    data() {

      return {
        videoNoMaskNum:0,
        videoStart:true,
        imgurls:"https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",
        realTimeUrl:"https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",
        time:new Date(),

        center: [ 110.328801,20.056749],
        // loaded: false,
        zoom:13,
        zooms:[14,19],
        // mapStyle:"amap://styles/ad8448e7f8ce54067517cf5926fff90e",
        mapStyle:"amap://styles/darkbule",
        // plugin: [{
        //   enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //   timeout: 100,          //超过10秒后停止定位，默认：无穷大
        //   maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        //   convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        //   showButton: true,        //显示定位按钮，默认：true
        //   buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        //   showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        //   showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        //   panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        //   zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
        //   extensions:'all',
        //   pName: 'Geolocation',
        //
        // }],

        position1: [110.326371,20.061009],//北门
        position2:[110.32562,20.05233],//西南门
        position3:[110.330934,20.052113],//东南门
        position4:[110.320148,20.057168],//西门
        position5:[110.338594,20.059339],//东门

        anchor: 'center',
        style: {
          color: '#f1ff1d',
          'background-color': 'rgba(255, 255, 255, 0.1)',
          margin: 0
        },
      }
    },

    mounted() {
      this.per1();
      this.per2();
      this.per3();
      this.realTimePlays();
    },
    methods: {
      /**
       *实时监控视频
       * @param
       */
      realTimePlays(){
        let config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        this.$axios.get("analysisRunTimeCameral?videoStart="+ this.videoStart, config ).then(res => {
          this.realTimeUrl = res.data.imageNewUrl
          // this.videopersonNum = res.data.personNum
          // this.videoMaskNum = res.data.maskNum
          this.videoNoMaskNum =res.data.noMaskNum
          console.log("获取到视频url: "+res.data.imageNewUrl)
          console.log("使用视频url" + this.realTimeUrl)
          console.log("播放了")
          console.log(this.videoStart)
          // this.playVideo2(this.realTimeUrl)
          //存在未带口罩 地图标红
          if(this.videoNoMaskNum!==0){
            this.style.color='#F00'
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

      goSmallShow(index){
        if(index===0){
          this.$router.replace('/smallShow')
        }
      },

      per(){
        let myChart = this.$echarts.init(document.querySelector(".bar2 .chart"));

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },
      //左上
      per1(){
        let myChart = this.$echarts.init(document.querySelector(".bar .chart"));
        let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

        let option = {
          grid: {
            top: "10%",
            left: "16%",
            right:"10%",
            bottom: "10%"
            // containLabel: true
          },
          // 不显示x轴的相关信息
          xAxis: {
            show: false
          },
          yAxis: [
            {
              type: "category",
              inverse: true,
              data: ["监控1", "监控2", "监控3", "监控4", "监控5"],
              // 不显示y轴的线
              axisLine: {
                show: false
              },
              // 不显示刻度
              axisTick: {
                show: false
              },
              // 把刻度标签里面的文字颜色设置为白色
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.9)",
                  fontSize: 10
                }
              }
            },
            {
              data: [4, 5, 6, 4, 3],
              inverse: true,
              // 不显示y轴的线
              axisLine: {
                show: false
              },
              // 不显示刻度
              axisTick: {
                show: false
              },
              // 把刻度标签里面的文字颜色设置为白色
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.9)",
                  fontSize: 10
                }
              },
            }
          ],
          series: [
            {
              name: "条",
              type: "bar",
              data: [90, 88,97,76, 67],
              yAxisIndex: 0,
              // 修改第一组柱子的圆角
              itemStyle: {
                barBorderRadius: 20,
                // 此时的color 可以修改柱子的颜色
                color: function(params) {
                  // params 传进来的是柱子对象
                  // console.log(params);
                  // dataIndex 是当前柱子的索引号
                  return myColor[params.dataIndex];
                }
              },
              // 柱子之间的距离
              barCategoryGap: 55,
              //柱子的宽度
              barWidth: 8,
              // 显示柱子内的文字
              label: {
                show: true,
                fontSize:8,
                position: "inside",
                // {c} 会自动的解析为 数据  data里面的数据
                formatter: "{c}%"
              }
            },
            {
              name: "框",
              type: "bar",
              barCategoryGap: 55,
              barWidth: 12,
              yAxisIndex: 1,
              data: [100, 100, 100, 100, 100],
              itemStyle: {
                color: "none",
                borderColor: "#4c9bfd",
                borderWidth: 3,
                barBorderRadius: 15
              }
            }
          ]
        };

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },
      //右上
      per2(){
        let myChart = echarts.init(document.querySelector(".bar2 .chart"));
        let xData = ["总摄像头", "正常个数", "警报个数"];
        let yData = [5, 4, 1];
        let option = {
          // backgroundColor: '#061326',
          "grid": {
            "top": "25%",
            "left": "-5%",
            "bottom": "5%",
            "right": "5%",
            "containLabel": true
          },
          animation: false,
          "xAxis": [{
            "type": "category",
            "data": xData,
            "axisTick": {
              "alignWithLabel": true
            },
            "nameTextStyle": {
              "color": "#82b0ec"
            },
            "axisLine": {
              show: false,
              "lineStyle": {
                "color": "#82b0ec"
              }
            },
            "axisLabel": {
              "textStyle": {
                "color": "#fff"
              },
              margin: 30
            }
          }],
          "yAxis": [{
            show: false,
            "type": "value",
            "axisLabel": {
              "textStyle": {
                "color": "#fff"
              },
            },
            "splitLine": {
              "lineStyle": {
                "color": "#0c2c5a"
              }
            },
            "axisLine": {
              "show": false
            }
          }],
          "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            "label": {
              "normal": {
                "show": true,
                "position": "top",
                // "formatter": "{c}%"
                fontSize: 25,
                fontWeight: 'bold',
                color: '#34DCFF'
              }
            },
            color: "#2DB1EF",
            data: yData
          },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [40, 10],
              symbolOffset: [0, 7],
              // "barWidth": "20",
              z: 12,
              "color": "#2DB1EF",
              "data": yData
            },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [50, 15],
              symbolOffset: [0, 12],
              z: 10,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderColor: '#2EA9E5',
                  borderType: 'solid',
                  borderWidth: 1
                }
              },
              data: yData
            },
            {
              name: '',
              type: 'pictorialBar',
              symbolSize: [70, 20],
              symbolOffset: [0, 18],
              z: 10,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderColor: '#19465D',
                  borderType: 'solid',
                  borderWidth: 2
                }
              },
              data: yData
            },
            {
              type: 'bar',
              //silent: true,
              "barWidth": "40",
              barGap: '10%', // Make series be overlap
              barCateGoryGap: '10%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                    offset: 0,
                    color: "#38B2E6"
                  },
                    {
                      offset: 1,
                      color: "#0B3147"
                    }
                  ]),
                  opacity: .8
                },
              },
              data: yData
            }
          ]
        };

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },
      //右下
      per3(){
        let myChart = this.$echarts.init(document.querySelector(".line2 .chart2"));

        var xData = function() {
          var data = [];
          for (var i = 0; i < 24; i++) {
            data.push(i + "时");
          }
          return data;
        }();

        let option = {
          // backgroundColor: "#1A1835",

          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              textStyle: {
                color: "#fff"
              }

            },
          },
          // grid: {
          //   borderWidth: 0,
          //   top: 110,
          //   bottom: 95,
          //   textStyle: {
          //     color: "#fff"
          //   }
          // },
          grid: {
            top: "10%",
            left: "16%",
            right:"10%",
            bottom: "22%"
            // containLabel: true
          },
          legend: {
            x: '20%',
            top: '0%',
            textStyle: {
              color: '#90979c',
            },
            data: ['正常监控', '出现警报监控']
          },


          calculable: true,
          xAxis: [{
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: xData,
          }],

          yAxis: [{
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(204,187,225,0.5)",
              }
            },

          }],
          dataZoom: [{
            show: true,
            height: 20,
            xAxisIndex: [0],
            bottom: 20,

            "start": 10,
            "end": 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: "#5B3AAE",
            },
            textStyle:{
              color:"rgba(204,187,225,0.5)",
            },
            fillerColor:"rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",

          }, {
            type: "inside",
            show: true,
            height: 10,
            start: 1,
            end: 35
          }],
          series: [{
            name: "正常监控",
            type: "line",
            symbolSize: 6,
            symbol: 'circle',
            itemStyle: {
              color: "#6f7de3",
            },
            markPoint: {
              symbolSize :43,
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                    fontSize : 10
                  }
                }
              },
              data: [{
                type: 'max',
                name: '最大值',

              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            data: [
              3,4,5,3,4,3,
              4,5,5,5,4,5,
              3,4,2,3,4,4,
              3,5,5,4,5,4,
            ],
          }, {
            name: "出现警报监控",
            type: "line",
            symbolSize: 6,
            symbol: 'circle',
            itemStyle: {
              color: "#c257F6",
            },
            markPoint: {
              symbolSize :43,
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                    fontSize : 10
                  }
                }
              },
              data: [{
                type: 'max',
                name: '最大值',

              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            data: [
              1,2,3,2,1,2,
              3,2,1,0,0,0,
              1,2,0,1,0,1,
              2,3,0,1,0,1,
            ]
          }, ]
        }

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },
    },
  }


</script>

<style scoped>
  @import "../../assets/css/usage.css";

  .cover{
    position: absolute;
    width: 90px;
    height: 28px;
    background-color: #031645;
    text-align: center;
    bottom: -2px;
    left: -12px;
    color: #c2c8ff;
    line-height: 28px;
    z-index: 999;
  }

</style>
