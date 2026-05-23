//导入路由相关的函数
//hash模式：createWebHashHistory，history模式：createWebHistory
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
//导入需要通过路由实现切换的组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tab1 from '../views/Tab1.vue'
import Tab2 from '../views/Tab2.vue'
//定义路由匹配规则
const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About,
        children:[
            {
                path:'',
                redirect:'/about/tab1'
            },
            {
                path:'tab1',
                component:Tab1
            },
            {
                path:'tab2',
                component:Tab2
            }
        ]
    }
]
//创建路由实例对象
const router = createRouter({
    history:createWebHistory(),
    routes
})
//到处路由实例对象
export default router