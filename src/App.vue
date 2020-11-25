<template>
  <div id="app">
    <DashBoard />
  </div>
</template>

<script>
import DashBoard from '@/views/DashBoard.vue';
import dashboardFlexible from '@/utils/setHtmlFontSize.js';
export default {
  components: {
    DashBoard
  },
  created() {
    dashboardFlexible(process.env.SCREEN_WIDTH / process.env.SCREEN_HEIGHT);
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000218;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
