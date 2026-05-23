//导入路由相关函数
//createWebHashHistory（hash模式），createWebHistory(history模式)
import { createRouter, createWebHistory } from 'vue-router'
//导入需要通过路由实现切换的组件
import Login from '../views/Login.vue'
//定义路由匹配规则
const routes = [
    {
      path:'/login',
      name:'login',
      component:Login
    },
  ]
  //创建路由实例对象
  const router = createRouter({
    history: createWebHistory(),  // HTML5 History模式
    routes
  })
  //导出路由实例对象
  export default router