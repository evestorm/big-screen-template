<template>
  <div class='dashboard'>
    <div class='title'>Dashboard</div>
    <Bar ref="bar" />
  </div>
</template>

<script>
import Bar from '@/components/Bar/Bar.vue';
export default {
  name: 'dash-board',
  components: {
    Bar
  },
  mounted() {
    window.onresize = () => {
      this.$refs.bar.bar.resize();
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  background: lightblue;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 1920px;
  height: 1080px;
  & > div {
    position: absolute;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }
}
.title {
  top: 50px;
  left: 30px;
  font-size: 40px;
  color: white;
}
.doughnut {
  top: 150px;
  left: 30px;
  width: 400px;
  height: 300px;
  border: solid 1px rgba(255, 255, 255, 0.2);
}
.point {
  top: 470px;
  left: 30px;
  width: 400px;
  height: 370px;
  border: solid 1px rgba(255, 255, 255, 0.2);
}
.line {
  left: 30px;
  bottom: 35px;
  width: 555px;
  height: 148px;
}
.map {
  left: 550px;
  top: 152px;
  width: 850px;
  height: 715px;
}
.bar {
  left: 680px;
  bottom: 35px;
  width: 555px;
  height: 148px;
}
.pie-char {
  right: 30px;
  top: 100px;
  width: 390px;
  height: 300px;
  border: solid 1px rgba(255, 255, 255, 0.2);
}
.gauge {
  top: 420px;
  right: 30px;
  width: 390px;
  height: 420px;
  border: solid 1px rgba(255, 255, 255, 0.2);
}
.double-line {
  right: 30px;
  bottom: 35px;
  width: 555px;
  height: 148px;
}
.fullscreen-button {
  top: 20px;
  width: 200px;
  height: 40px;
  font-size: 25px;
  color: white;
  right: 30px;
  border-radius: 8px;
  color: #e9d70c;
}
</style>