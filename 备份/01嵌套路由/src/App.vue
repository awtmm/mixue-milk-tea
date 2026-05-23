<template>
    <div class="app">
        <h1>使用路由切换组件</h1>
        <!-- 导航链接 -->
        <div class="nav">
            <router-link to="/home" active-class="active">首页</router-link>
            <router-link to="/about" active-class="active">关于</router-link>
        </div>
        <!-- 展示路由组件 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
   
</script>

<style scoped>
    .app{
        text-align: center;
        font-size: 20px;
    }
    .nav a{
        text-decoration: none;
        color:red;
        display: inline-block;
        padding: 10px 40px;
    }
    .nav a.active{
        background-color: #ddd;
        color:#000;
        border-radius: 10px;
    }
    .content{
        width: 400px;
        height: 300px;
        margin: 20px auto;
    }
</style>