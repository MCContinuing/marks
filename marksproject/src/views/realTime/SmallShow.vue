<template>
  <!--      主体部分-->
  <section class="mainbox">
    <div class="column2">
      <div class="panel bar panel-realvideo">
        <h2>实时监控录像</h2>
        <div class="chart">
          <div class="smallShow-img">
            <img  class="img-show" :src="realTimeUrl">
            <!--                <img  class="imgs_show" src="../assets/images/hush.jpg">-->
          </div>
        </div>
        <div class="panel-footer"></div>
      </div>
    </div>

    <div class="column2">

      <div class="panel panel-info">

        <h2>监控详情信息</h2>
        <div class="panel-info-p">
          <p>摄像头地点 : 海大北门（模拟）</p>
          <p>CPU : 利用率43.6%</p>
          <p>GPU : 利用率36.7%</p>
        </div>
        <div class="chart">图表</div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel small-char">
        <h2>人流量-戴口罩人数百分比</h2>


        <div class="chart"></div>
        <div class="panel-footer"></div>
      </div>

    </div>
  </section>
</template>

<script>
  import echarts from 'echarts';

    export default {
        name: "SmallShow",
      data() {
        return {
          videopersonNum:0,
          videoMaskNum:0,
          videoNoMaskNum:0,
          videoStart:true,
          realTimeUrl:"https://cdn.ai.qq.com/ai/page/product/face/img/banner-ico-7706573879.png?max_age=31536000",//单图使用图片

        }
      },

      mounted() {
        this.per1();
        this.per2();
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
            if(this.videopersonNum!==res.data.personNum||this.videoNoMaskNum!==res.data.noMaskNum){
              this.videopersonNum = res.data.personNum
              this.videoMaskNum = res.data.maskNum
              this.videoNoMaskNum =res.data.noMaskNum
              this.per2();
            }
            this.realTimeUrl = res.data.imageNewUrl

            // console.log("获取到视频url: "+res.data.imageNewUrl)
            // console.log("使用视频url" + this.realTimeUrl)
            console.log("播放了")
            // console.log(this.videoStart)
            console.log('总人数' + this.videopersonNum);
            console.log('未戴口罩数' + this.videoNoMaskNum);
            // this.playVideo2(this.realTimeUrl)

            if(this.videoStart){
              setTimeout(()=>{
                this.realTimePlays();
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
        //左下
        per1(){
          let myChart = this.$echarts.init(document.querySelector(".small-char .chart"));

          var xData = function() {
            var data = [];
            for (var i = 0; i < 24; i++) {
              data.push(i + "时");
            }
            return data;
          }();
          var option = {
            // backgroundColor:'#323a5e',
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {
              left: '2%',
              right: '4%',
              bottom: '14%',
              top:'16%',
              containLabel: true
            },
            legend: {
              data: ['监控1'],
              right: 10,
              top:12,
              textStyle: {
                color: "#fff"
              },
              itemWidth: 22,
              itemHeight: 10,
              // itemGap: 35
            },
            // 不显示x轴的相关信息
            // xAxis: {
            //   show: false
            // },
            xAxis: {
              type: 'category',

              data: xData,
              axisLine: {
                lineStyle: {
                  color: 'white'

                }
              },
              axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                  fontFamily: 'Microsoft YaHei'
                }
              },
            },

            yAxis: {
              type: 'value',
              show: false,
              axisLine: {
                show: false,
                lineStyle: {
                  color: 'white'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }
              },
              axisLabel: {}
            },
            "dataZoom": [{
              "show": true,
              "height": 12,
              "xAxisIndex": [
                0
              ],
              bottom:'8%',
              "start": 10,
              "end": 90,
              handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              handleSize: '110%',
              handleStyle:{
                color:"#d3dee5",

              },
              textStyle:{
                color:"#fff"},
              borderColor:"#90979c"
            }, {
              "type": "inside",
              "show": true,
              "height": 15,
              "start": 1,
              "end": 35
            }],
            series: [
              {
                name: '监控1',
                type: 'bar',
                barWidth: '70%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#82b0ec'
                    }, {
                      offset: 1,
                      color: '#82b0ec'
                    }]),
                    barBorderRadius: 11,
                  }

                },
                data: [1,0,1,0,0,1, 0,1,0,0,1,0,1,0,1,0,0,1, 0,1,0,0,1,0]
              },]
          };

          var app = {
            currentIndex: -1,
          };
          //   setInterval(function () {
          //     var dataLen = option.series[0].data.length;

          //     // 取消之前高亮的图形
          //     myChart.dispatchAction({
          //       type: 'downplay',
          //       seriesIndex: 0,
          //       dataIndex: app.currentIndex
          //     });
          //     app.currentIndex = (app.currentIndex + 1) % dataLen;
          //     //console.log(app.currentIndex);
          //     // 高亮当前图形
          //     myChart.dispatchAction({
          //       type: 'highlight',
          //       seriesIndex: 0,
          //       dataIndex: app.currentIndex,
          //     });
          //     // 显示 tooltip
          //     myChart.dispatchAction({
          //       type: 'showTip',
          //       seriesIndex: 0,
          //       dataIndex: app.currentIndex
          //     });


          //   }, 1000);


          myChart.setOption(option);

          //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
          window.addEventListener('resize',function() {myChart.resize()});
        },
        //左上
        per2(){
          let myChart = this.$echarts.init(document.querySelector(".panel-info .chart"));

          var option = {
            // backgroundColor: '222',
            grid: {
              top: '15%',
              left: '10%',
              right: '8%',
              bottom: '0',
              containLabel: true
            },
            yAxis: [{
              type: 'category',
              data: ['检测人数', '未戴口罩'],
              inverse: true,
              axisTick: {
                show: false
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  fontSize: 12,
                  color: '#fff'
                }
              },
              axisLine: {
                show: false
              }
            }],
            xAxis: [{
              type: 'value',
              axisLabel: {
                show: false
              },
              axisLine: {
                show: false
              },
              splitLine: {
                show: false
              }
            }],
            series: [{
              type: 'bar',
              barWidth: 10,
              data: [this.videopersonNum, this.videoNoMaskNum],
              label: {
                normal: {
                  show: true,
                  position: 'insideBottomRight',
                  formatter: '{c}人',
                  distance: 0,
                  offset: [14, -10],
                  color: '#fff',
                  fontSize: 11,
                  padding: [3, 8, 8, 8],
                  backgroundColor: {
                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg=='
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#57eabf' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#2563f9' // 100% 处的颜色
                  }], false),
                  barBorderRadius: 14
                }
              }
            }, {
              type: "bar",
              barWidth: 10,
              xAxisIndex: 0,
              barGap: "-100%",
              data: [this.videopersonNum, this.videopersonNum],
              itemStyle: {
                normal: {
                  color: "#444a58",
                  barBorderRadius: 14
                }
              },
              zlevel: -1
            }]
          };
          myChart.setOption(option);

          //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
          window.addEventListener('resize',function() {myChart.resize()});
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
