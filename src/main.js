// 引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
const app = createApp(App)

//引入element plus组件库
import ElementPlus from "element-plus"
//引入element plus样式表
import "element-plus/dist/index.css"

// 引入全局样式
import './assets/css/main.css'

app.use(ElementPlus)

//导入路由模块
import router from './router/index.js'
//挂载路由模块
app.use(router)

app.mount('#app')
