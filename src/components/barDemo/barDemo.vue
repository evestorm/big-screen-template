<template>
  <div id="container1"></div>
</template>

<script>
import Charts from '@jiaminghi/charts';
const option1 = {
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: '第一周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'bar',
      stack: 'a'
    },
    {
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
export default {
  data() {
    return {
      barDemo: null
    };
  },
  mounted() {
    const container = document.getElementById('container1');
    this.barDemo = new Charts(container);
    this.barDemo.setOption(option1, true);
  }
};
</script>

<style lang="scss" scoped>
#container1 {
  // background-color: lightcoral;
}
</style>