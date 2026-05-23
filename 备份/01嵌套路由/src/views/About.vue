<template>
    <div class="about">
        <h2>About组件</h2>
        <!-- 导航区域 -->
        <div class="nav">
            <router-link to="/about/tab1" active-class="active">Tab1</router-link>
            <router-link to="/about/tab2" active-class="active">Tab2</router-link>
        </div>
        <!-- 组件展示区域 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .about{
        width: 400px;
        height: 300px;
        background-color: pink;
        padding: 15px;
        border-radius: 10px;
    }
    .nav a{
        padding: 5px 10px;
        text-decoration: none;
        border-radius: 10px;
        margin-right: 10px;
        color:black
    }
    .nav a.active{
        background-color: #ddd;
        color:red;
    }
    .content{
        width: 350px;
        height: 200px;
        margin-top: 10px;
    }
</style>