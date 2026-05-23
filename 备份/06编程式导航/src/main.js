// 引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
const app = createApp(App)

//导入路由模块
import router from './router/index.js'
//挂载路由模块
app.use(router)

app.mount('#app')
