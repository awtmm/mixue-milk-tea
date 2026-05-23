<template>
    <div class="app">
        <h1>用户注册</h1>
        <div>
          用户名：<input type="text" v-model="username"><br><br>
          用户密码：<input type="password" v-model="password">
        </div>
        <!-- 导航链接 -->
        <div class="nav">
          <router-link :to="`/login?name=${username}&password=${password}`">登录</router-link>
        </div>
        <!-- 组件展示区域 -->
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const username = ref('')
    const password = ref('')
</script>

<style scoped>
    .app{
      text-align: center;
    }
    .nav a{
      display: inline-block;
      padding: 5px 30px;
      border-radius: 3px;
      background-color: #ddd;
      text-decoration: none;
      color: black;
      margin-top: 20px;
    }
    .content{
      margin: 30px auto;
      border-radius: 30px;
      width: 300px;
      height: 200px;
      border: 1px solid black;
    }
</style>