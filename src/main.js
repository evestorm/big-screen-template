import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入 DataV 大屏组件库
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);
// 引入 ECharts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// 引入 element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
