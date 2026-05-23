//导入路由相关函数
//createWebHashHistory（hash模式），createWebHistory(history模式)
import { createRouter, createWebHistory } from 'vue-router'
//导入需要通过路由实现切换的组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Detail1 from '../views/Detail1.vue'
//定义路由匹配规则
const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      component: Home
    },
    {
      path:'/news',
      name:'news',
      component:News,
      children:[
        {
            path:'detail1',
            name:'detail',
            component:Detail1,
            //第一种写法：将路由收到的所有params参数作为props传给路由组件
            // props:true

            //第二种写法：query和params参数都可以传递，通常用来传递query参数
            props(route){
              // console.log(route)
              return route.query
            }
        },
      ]
    },
    {
      path: '/about',
      name:'about',
      component: About,
    }
  ]
  //创建路由实例对象
  const router = createRouter({
    history: createWebHistory(),  // HTML5 History模式
    routes
  })
  //导出路由实例对象
  export default router