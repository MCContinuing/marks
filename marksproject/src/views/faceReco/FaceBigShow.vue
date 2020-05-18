<template>
  <div>
    <!--      主体部分-->
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>摄像头总览</h2>
          <div class="chart">
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化 <a href="javacript:;">2020</a
          ><a href="javascript:;">2021</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <!-- no模块制作 -->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>100000</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>校园总人流量</li>
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
            <el-amap class="amap-demo" vid="amap" :center="center" :zooms="zooms"
                     mapStyle="amap://styles/ad8448e7f8ce54067517cf5926fff90e"  >
            </el-amap>
            <div class="cover">海大(海淀校区)</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>人流量-戴口罩人数百分比</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel panel2 line2">
          <h2>月度口罩检测统计</h2>
          <div class="chart2">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import echarts from 'echarts';


  export default {
    name: "FaceBigShow",

    data() {

      return {
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


      }
    },

    mounted() {
      this.per1();
      this.per2();
      this.per3();

    },
    methods: {
      per(){
        let myChart = this.$echarts.init(document.querySelector(".bar2 .chart"));

        myChart.setOption(option);

        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      },
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
              data: ["南门", "北门", "西门", "东门", "西南门"],
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
              data: [702, 350, 610, 793, 664],
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
              data: [70, 34, 60, 78, 69],
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
      per2(){
        var myChart = echarts.init(document.querySelector(".bar2 .chart"));
        var option = {
          tooltip: {
            trigger: "axis"
          },
          legend: {
            top: "0%",
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
          },

          grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              // x轴更换数据
              data: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "26",
                "28",
                "29",
                "30"
              ],
              // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },
              // x轴线的颜色为   rgba(255,255,255,.2)
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)"
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisTick: { show: false },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              },
              axisLabel: {
                textStyle: {
                  color: "rgba(255,255,255,.6)",
                  fontSize: 12
                }
              },
              // 修改分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)"
                }
              }
            }
          ],
          series: [
            {
              name: "邮件营销",
              type: "line",
              smooth: true,
              // 单独修改当前线条的样式
              lineStyle: {
                color: "#0184d5",
                width: "2"
              },
              // 填充颜色设置
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              },
              // 设置拐点
              symbol: "circle",
              // 拐点大小
              symbolSize: 8,
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              data: [
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                20,
                60,
                50,
                40
              ]
            },
            {
              name: "联盟广告",
              type: "line",
              smooth: true,
              lineStyle: {
                normal: {
                  color: "#00d887",
                  width: 2
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(0, 216, 135, 0.4)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(0, 216, 135, 0.1)"
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
                }
              },
              // 设置拐点 小圆点
              symbol: "circle",
              // 拐点大小
              symbolSize: 5,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              data: [
                130,
                10,
                20,
                40,
                30,
                40,
                80,
                60,
                20,
                40,
                90,
                40,
                20,
                140,
                30,
                40,
                130,
                20,
                20,
                40,
                80,
                70,
                30,
                40,
                30,
                120,
                20,
                99,
                50,
                20
              ]
            }
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
          for (var i = 1; i < 31; i++) {
            data.push(i + "日");
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
              509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117,2000,1455,1210,719,
              733,944,2285,2208,3372,3936,3693,2962,2810,3519,2455,2610,2719,2484,2078
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
