import echarts from "./assets/echarts.ts";

import MainApp from "@/components/MainApp.vue";

import {createApp} from 'vue'
import App from './App.vue'


const app = createApp(App);

app.config.globalProperties.$echarts = echarts;
app.provide('$echarts', echarts);
app.mount('#app');
