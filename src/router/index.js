//导入路由相关函数
//createWebHashHistory（hash模式），createWebHistory(history模式)
import { createRouter, createWebHistory } from 'vue-router'
//导入需要通过路由实现切换的组件
import Home from '../views/Home.vue'
import ListMx from '../views/ListMx.vue'
import CartMx from '../views/CartMx.vue'
import OrderMx from '../views/OrderMx.vue'
import DetailsMx from '../views/DetailsMx.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
//定义路由匹配规则
const routes = [
    {
      path:'/',
      component:Home,
     
    },
   
   
    {
      path:'/listmx',
      name:'listmx',
      component:ListMx,
     
    },
    {
      path:'/cartmx',
      name:'cartmx',
      component:CartMx,
     
    },
    {
      path:'/login',
      name:'login',
      component:Login,
     
    },
    {
      path:'/register',
      name:'register',
      component:Register,
     

    },
    {
      path:'/ordermx',
      name:'ordermx',
      component:OrderMx,
     
    },
    {
      path:'/detailsmx/:id',
      name:'detailsmx',
      component:DetailsMx,
     
    },
   
  ]
  //创建路由实例对象
  const router = createRouter({
    history: createWebHistory(),  // HTML5 History模式
    routes
  })
  //导出路由实例对象
  export default router