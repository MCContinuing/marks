<template>
  <!--      主体部分-->
  <section class="mainbox">
    <div class="column">
      <div class="panel bar panel-small">
        <h2>人流量-戴口罩人数百分比</h2>
        <div class="chart">
          <div class="videos">
            <div class="video-left"></div>
            <div class="video-right"></div>
          </div>
          <div class="videos">
            <div class="video-left"></div>
            <div class="video-right"></div>
          </div>
          <div class="videos">
            <div class="video-left"></div>
            <div class="video-right"></div>
          </div>
        </div>
        <div class="panel-footer"></div>
      </div>


    </div>
    <div class="column">
      <!-- no模块制作 -->
      <div class="no">
        <div class="no-hd">
          <div class="video-show"></div>
        </div>
        <div class="no-bd">
          <ul>
            <li>校园总人流量</li>
            <li>戴口罩人数</li>
          </ul>
        </div>
      </div>
      <!-- 中间图表 -->
      <div class="panel panel-middle">
        <h2>月度检测人次统计</h2>
        <div class="chart21">图表</div>
        <div class="panel-footer"></div>
      </div>

    </div>
    <div class="column">
      <div class="panel bar2">
        <h2>管卡累计人次统计</h2>
        <div class="chart">图表</div>
        <div class="panel-footer"></div>
      </div>
      <div class="panel panel2 line2">
        <h2>日检测统计</h2>
        <div class="chart2">图表</div>
        <div class="panel-footer"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import echarts from 'echarts';
  export default {
    name: "FaceSmallShow",


    mounted() {
      this.per1();
      this.per2();
      this.per3();
      this.per4();

    },

    methods: {
      per2(){
        let myChart = this.$echarts.init(document.querySelector(".panel-middle .chart21"));


        // Generate data
        var category = ['1日','2日','3日','4日','5日',
          '6日','7日','8日','9日','10日',
          '11日','12日','13日','14日','15日',
          '16日','17日','18日','19日','20日',
          '21日','22日','23日','24日','25日',
          '26日','27日','28日','29日','30日',];
        var dottedBase = [];
        var lineData = [1809,2072,2405,2834,3280
          ,3609,3986,4471,4844,5041
          ,5606,6267,5952,6756,1809,
          2072,2404,2834,3280,3609,
          3986,4475,4844,5045,3609,
          3986,4471,4844,5041,5001];
        var barData = [460,500,550,650,750,
          850,990,1250,1400,2500
          ,2320,2440,2550,1300,460,
          1500,500,650,750,850,
          990,2250,1400,2100,850,
          900,1250,1400,2150 ,2320,];
        var rateData = [];

        for (var i = 0; i < 30; i++) {
          // var date = i+2001;
          // category.push(date)
          var rate=barData[i]/lineData[i];
          rateData[i] = rate.toFixed(2);
        }


// option
        let option = {
          // title: {
          //   text: '增量设备贯通情况-单位',
          //   x: 'center',
          //   y: 0,
          //   textStyle:{
          //     color:'#B4B4B4',
          //     fontSize:16,
          //     fontWeight:'normal',
          //   },
          //
          // },
          // backgroundColor: '#191E40',
          tooltip: {
            trigger: 'axis',
            backgroundColor:'rgba(255,255,255,0.1)',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#7B7DDC'
              }
            }
          },
          legend: {
            data: ['戴口罩数', '总人数','佩戴率',],
            textStyle: {
              color: '#B4B4B4'
            },
            top:'0%',
          },
          grid: {
            top: "8%",
            left: "10%",
            right:"6%",
            bottom: "10%"
            // containLabel: true
          },
          // grid:{
          //
          //   x:'12%',
          //   width:'82%',
          //   y:'12%',
          // },
          xAxis: {
            data: category,
            axisLine: {
              lineStyle: {
                color: '#B4B4B4'
              }
            },
            axisTick:{
              show:false,
            },
          },
          yAxis: [{

            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#B4B4B4',
              }
            },

            axisLabel:{
              formatter:'{value} ',
            }
          },
            {

              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#B4B4B4',
                }
              },
              axisLabel:{
                formatter:'{value} ',
              }
            }],

          series: [{
            name: '佩戴率',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color:'#F02FC2'},
            },
            data: rateData
          },

            {
              name: '戴口罩数',
              type: 'bar',
              barWidth: 8,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#956FD4'},
                      {offset: 1, color: '#3EACE5'}
                    ]
                  )
                }
              },
              data: barData
            },

            {
              name: '总人数',
              type: 'bar',
              barGap: '-100%',
              barWidth: 8,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'rgba(156,107,211,0.5)'},
                      {offset: 0.2, color: 'rgba(156,107,211,0.3)'},
                      {offset: 1, color: 'rgba(156,107,211,0)'}
                    ]
                  )
                }
              },
              z: -12,

              data: lineData
            },
          ]
        };


        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },


      per1(){
        let myChart = this.$echarts.init(document.querySelector(".bar2 .chart"));

        let dataPie = [

          {
            value: 810,
            name: '佩戴口罩'
          },
          {
            value: 380,
            name: '未戴口罩'
          },

        ];

        let colorWrap = ['#3087d6','#4be1ff'];
        let baseDataWrap = [];
        for (var i = 0; i < dataPie.length; i++) {

          baseDataWrap.push({
            value: dataPie[i].value,
            name: dataPie[i].name,
            itemStyle: {
              normal: {
                color: colorWrap[i],
                borderWidth: 10,
                borderColor: colorWrap[i],
                shadowBlur: 50,
                shadowColor: 'rgba(48, 135, 214, 0.3)',
              }
            }
          }, {
            value: 10,
            name: '',
            itemStyle: {
              normal: {
                color: 'transparent',
                borderWidth: 10,
                borderColor: 'transparent',

              }
            }
          });
        }


        let option = {
          // backgroundColor: '#021228',
          title: {
            text: '总人数',
            subtext: '1290',
            textStyle: {
              color: '#00b5f3',
              fontSize: 10,

            },
            subtextStyle: {
              align: 'center',
              fontSize: 10,
              color: ['#85c7e3'],
              fontWeight:800
            },
            x: '34%',
            y: 'center',
          },

          legend: {
            data: ['佩戴口罩', '未戴口罩'],
            icon: 'vertical',
            right: '1%',
            top: 'center',
            orient: 'vertical',
            itemGap: 20,
            itemWidth: 15,
            itemHeight: 8,

            formatter: function(name) {
              let target;
              for (let i = 0; i < dataPie.length; i++) {
                if (dataPie[i].name === name) {
                  target = dataPie[i].value
                }
              }
              let arr = [name, target];
              return arr.join("\n")

            },
            textStyle: {
              lineHeight: 20,
              color: '#9ed2f5',

            },
          },
          grid: {
            left: '1%', // 与容器左侧的距离
            right: '1%', // 与容器右侧的距离
            top: '1%', // 与容器顶部的距离
            bottom: '1%', // 与容器底部的距离

          },
          series: [
            {
              name: '',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ['40%', '50%'],
              radius: ['60%', '61%'],
              tooltip: {
                show: false
              },
              label: {
                normal: {
                  show: false
                }
              },
              data: baseDataWrap
            },


          ]
        };
        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },

      per3(){
        let myChart = this.$echarts.init(document.querySelector(".line2 .chart2"));

        var xData = function() {
          var data = [];
          for (var i = 0; i <= 23; i++) {
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
            data: ['戴口罩', '总人数']
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
            name: "戴口罩",
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
              509, 917, 2455, 2610, 2719, 3033,
              3044, 3085, 2708, 2809, 2117,2000,
              1455,1210,719,733,944,2285,
              2208,3372,3936,3693,2962,2810,3519
            ],
          }, {
            name: "总人数",
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
              2136,3693,2962,3810,3519,3484,3915,3823,3455,4310,4019,3433,3544,3885,4208,3372,
              3484,3915,3748,3675,4009,4433,3544,3285,4208,3372,3484,3915,3823,4265,4298
            ]
          }, ]
        }

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },

      per4(){
        let myChart = this.$echarts.init(document.querySelector(".panel-info .chart"));

        var option = {
          // backgroundColor: '222',
          grid: {
            top: '0',
            left: '0',
            right: '4.75%',
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
                fontSize: 18,
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
            barWidth: 14,
            data: [120, 60],
            label: {
              normal: {
                show: true,
                position: 'insideBottomRight',
                formatter: '{c}人',
                distance: 0,
                offset: [30, -20],
                color: '#fff',
                fontSize: 16,
                padding: [5, 15, 10, 15],
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
            barWidth: 14,
            xAxisIndex: 0,
            barGap: "-100%",
            data: [120, 120],
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
