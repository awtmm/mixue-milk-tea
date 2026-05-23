<!-- 头部组件 -->
<template>
    <!-- 头部导航 -->
    <el-row class="bg-gray p-1 w-100 font-size-9" justify="center">
        <el-col :span="14" :offset="14">
            <router-link to="" class="px-1">你好请登录</router-link>
            <router-link to="" class="px-1">免费注册</router-link>
            <router-link to="" class="px-1">商家服务</router-link>
            <router-link to="/order">我的订单</router-link>
            <router-link to="" class="px-1">联系我们</router-link>
            <router-link to="" class="px-1">安全退出</router-link>
        </el-col>
    </el-row>
    <!-- 头部组件部分 -->
    <el-row>
        <!-- 左边主体国货之光 -->
        <el-col :span="4">
            <router-link to="/">
                <img src="../assets/images/logo7.png" class="w-80"/>
            </router-link>
        </el-col>
        <!-- 右边主体搜索和导航 -->
        <el-col :span="18" :offset="2">
            <!-- 右上搜索框 -->
            <el-row>
                <el-col :span="18" class="my-4">
                    <Search></Search>
                </el-col>
                <el-col :span="5" :offset="1" class="my-4">
                    <el-button class="red h-40" :icon="ShoppingCart" @click="toMyCart()">我的购物车</el-button>
                </el-col>
            </el-row>
            <!-- 右下导航 -->
            <el-row :gutter="40">
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'华为'}}">华为</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'美的'}}">美的</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'小米'}}">小米</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'创维'}}">创维</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'爱玛'}}">爱玛</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'杉杉'}}">杉杉</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'雅迪'}}">雅迪</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'海尔'}}">海尔</router-link></el-col>
                <el-divider direction="vertical"></el-divider>
                <el-col :span="2"><router-link :to="{name:'list',query:{searchword:'格力'}}">格力</router-link></el-col>
            </el-row>
        </el-col>
    </el-row>
    <router-view></router-view>
  
</template>

<script setup>
    import Search from '../components/Search.vue'
    import {ShoppingCart} from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router';
    const router=useRouter()
    function toMyCart(){
        router.push('/cart')
    }
</script>