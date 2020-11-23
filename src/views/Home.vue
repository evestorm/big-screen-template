<template>
  <div class="home">
    <img src="../assets/logo.png"
         alt="Vue logo" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
ç
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>
