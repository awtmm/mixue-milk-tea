//导入路由相关函数
//createWebHashHistory（hash模式），createWebHistory(history模式)
import { createRouter, createWebHistory } from 'vue-router'
//导入需要通过路由实现切换的组件
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Details from '../views/Details.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
//定义路由匹配规则
const routes = [
    {
      path:'/',
      component:Home,
     
    },
    {
      path:'/list',
      name:'list',
      component:List,
      props(route){
        return route.query
      }
    },
    {
      path:'/details',
      component:Details,
     
    },
    {
      path:'/cart',
      component:Cart,
     
    },
    {
      path:'/order',
      component:Order,
     
    },
   
  ]
  //创建路由实例对象
  const router = createRouter({
    history: createWebHistory(),  // HTML5 History模式
    routes
  })
  //导出路由实例对象
  export default router