<template>
  <div class="container">
    <div id="bar3d"></div>
  </div>
</template>

<script>
import Charts from '@jiaminghi/charts';

export default {
  name: 'datavBar',
  data() {
    return {
      option: {}, // 配置项
      myChart: null // 图表实例
    };
  },
  mounted() {
    const el = document.getElementById('bar3d');
    this.myChart = new Charts(el);
    setTimeout(() => {
      this.option = {
        title: {
          text: '周销售额趋势(DataV)',
          style: {
            fill: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            textBaseline: 'bottom'
          }
        },
        legend: {
          data: ['进料', '出料'],
          orient: 'horizontal',
          right: '10%',
          // bottom: '10%',
          textStyle: {
            fontFamily: 'Arial',
            fontSize: 12,
            fill: '#fff'
          }
        },
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          nameTextStyle: {
            fill: '#fff',
            fontSize: 10
          },
          axisLine: {
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 10,
              rotate: 0
            }
          }
        },
        yAxis: {
          name: '销售额',
          data: 'value',
          nameTextStyle: {
            fill: '#fff',
            fontSize: 10
          },
          axisLine: {
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisLabel: {
            style: {
              fill: '#fff',
              fontSize: 10,
              rotate: 0
            }
          }
        },
        series: [
          {
            name: '进料',
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar',
            stack: 'a'
          },
          {
            name: '出料',
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar',
            stack: 'a'
          },
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar'
          }
        ]
      };
      this.myChart.setOption(this.option, true);
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.container {
  top: 540px;
  left: 88px;
  border: 1px #00fdff solid !important;
}
#bar3d {
  width: 1020px;
  height: 480px;
}
</style>