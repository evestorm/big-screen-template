<template>
  <div class="container">
    <div id="echartsBar"></div>
  </div>
</template>

<script>
import { getBaseCrane } from '@/api/lineCar.js';
export default {
  name: 'echartsBar',
  data() {
    return {
      option: {}, // 配置项
      myChart: null // 图表实例
    };
  },
  mounted() {
    this.myEcharts();
    getBaseCrane().then((res) => {
      console.log(res);
    });
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('echartsBar'));
      const self = this;
      setTimeout(() => {
        const data = [220, 182, 191, 234, 290, 330, 310];
        const sideData = data.map((item) => item + 4.5);
        // 指定图表的配置项和数据
        this.option = {
          title: {
            text: 'Echarts柱状图',
            textStyle: {
              color: '#fff'
            }
          },
          backgroundColor: '#041730',
          tooltip: {
            trigger: 'axis',
            formatter: '{b} : {c}',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // 坐标轴
            axisLine: {
              lineStyle: {
                color: '#3eb2e8'
              }
            },
            // 坐标值标注
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            // 坐标轴
            axisLine: {
              show: false
            },
            // 坐标值标注
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            // 分格线
            splitLine: {
              lineStyle: {
                color: '#4784e8'
              }
            }
          },
          series: [
            {
              name: 'a',
              tooltip: {
                show: false
              },
              type: 'bar',
              barWidth: 24.5,
              itemStyle: {
                normal: {
                  color: new self.$echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0,
                    [
                      {
                        offset: 0,
                        color: '#0B4EC3' // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: '#138CEB' // 60% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#17AAFE' // 100% 处的颜色
                      }
                    ],
                    false
                  )
                }
              },
              data: data,
              barGap: 0
            },
            {
              type: 'bar',
              barWidth: 8,
              itemStyle: {
                normal: {
                  color: new self.$echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0,
                    [
                      {
                        offset: 0,
                        color: '#09337C' // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: '#0761C0' // 60% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#0575DE' // 100% 处的颜色
                      }
                    ],
                    false
                  )
                }
              },
              barGap: 0,
              data: sideData
            },
            {
              name: 'b',
              tooltip: {
                show: false
              },
              type: 'pictorialBar',
              itemStyle: {
                borderWidth: 1,
                borderColor: '#0571D5',
                color: '#1779E0'
              },
              symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
              symbolSize: ['30', '12'],
              symbolOffset: ['0', '-11'],
              // symbolRotate: -5,
              symbolPosition: 'end',
              data: data,
              z: 3
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.option);
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  left: 80px;
  top: 85px;
  width: 1030px;
  height: 420px;
}
#echartsBar {
  width: 100%;
  height: 100%;
}
</style>