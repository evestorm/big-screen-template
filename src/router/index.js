import Vue from 'vue';
import VueRouter from 'vue-router';

function loadView(component) {
	// [request]表示实际解析的文件名
	return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: loadView("DashBoard")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
