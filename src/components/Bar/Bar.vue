<template>
  <div class="mybar">
    <div id="mybar"></div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data() {
    return {
      bar: null
    };
  },
  mounted() {
    this.myEcharts();
  },
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('mybar'));
      this.bar = myChart;

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.mybar {
  left: 230px;
  top: 20px;
  width: 600px;
  height: 400px;
  #mybar {
    width: 100%;
    height: 100%;
  }
}
</style>